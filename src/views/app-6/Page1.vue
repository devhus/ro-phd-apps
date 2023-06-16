<template>
  <app-page>
    <div class="h-100">
      <div class="d-flex flex-column h-100 align-items-center justify-content-center">
        <div class="flex-grow-0">
          <span v-if="loading">LOADING...</span>
          <div v-show="!loading" class="game-frame">
            <div class="bg">
              <img class="bg-img" :src="`/assets/apps/app6/${currentFrameBg}.png`">
            </div>
            <div class="game-container" :class="`level-${level}`">
              <div class="preview">
                <div v-for="character in levelCharacters[level]" class="character" :class="`character-${character}`">
                  <div class="base">
                    <img class="base-img" :src="`/assets/apps/app6/${character}-base.png`">
                  </div>
                  <div class="equipments-container">
                    <div class="equipments">
                      <template v-for="(equipment, groupKey) in equipments[`level${level}`]?.[character]">
                        <div class="equipment" :class="`${groupKey}-equipment`"
                          :style="equipment[selectedEquipments[character][groupKey]].style"
                          @click="equipmentClicked(character, groupKey)">
                          <img class="base-img" :src="`/assets/apps/app6/${selectedEquipments[character][groupKey]}.png`">
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
              <div class="controls">
                <button v-if="!completed" type="button" class="btn btn-success btn-lg" @click="completed = true">
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();

const loading = ref(true);
const completed = ref(false);
const level = computed<number>(() => +(route.params.level ?? 1));
const selectedEquipments = ref<Record<string, Record<string, string>>>({
  boy: {
    hair: 'boy-hair-1',
    body: 'boy-body-1',
  },
  girl: {
    hair: 'girl-hair-1',
    body: 'girl-body-1',
  },
  archer: {
    hair: 'archer-hair-1',
    body: 'archer-body-1',
    bow: 'archer-bow-1',
  },
})

const currentFrameBg = computed(() => completed.value ? `finish_lv${level.value}_bg` : 'selection_bg');

const levelCharacters: Record<number, string[]> = {
  1: ['boy', 'girl'],
  2: ['archer']
}

const equipments: Record<string, Record<string, Record<string, any>>> = {
  level1: {
    boy: {
      hair: {
        'boy-hair-1': {
          style: {
            width: `132px`,
            top: `-14px`,
            left: `13px`,
          }
        },
        'boy-hair-2': {
          style: {
            width: `143px`,
            top: `-15px`,
            left: `9px`,
          }
        },
        'boy-hair-3': {
          style: {
            width: `128px`,
            top: `-14px`,
            left: `8px`,
          }
        }
      },
      body: {
        'boy-body-1': {
          style: {
            width: `143px`,
            top: `111px`,
            left: `6px`,
          }
        },
        'boy-body-2': {
          style: {
            width: `134px`,
            top: `118px`,
            left: `14px`,
          }
        },
        'boy-body-3': {
          style: {
            width: `146px`,
            top: `111px`,
            left: `2px`,
          }
        }
      },
    },
    girl: {
      hair: {
        'girl-hair-1': {
          style: {
            width: `130px`,
            top: `-8px`,
            left: `13px`,
          }
        },
        'girl-hair-2': {
          style: {
            width: `162px`,
            top: `-2px`,
            left: `11px`,
          }
        },
        'girl-hair-3': {
          style: {
            width: `140px`,
            top: `-1px`,
            left: `18px`,
          }
        }
      },
      body: {
        'girl-body-1': {
          style: {
            width: `160px`,
            top: `118px`,
            left: `-2px`,
          }
        },
        'girl-body-2': {
          style: {
            width: `146px`,
            top: `111px`,
            left: `-1px`,
          }
        },
        'girl-body-3': {
          style: {
            width: `146px`,
            top: `114px`,
            left: `-1px`,
          }
        }
      },
    },
  },
  level2: {
    archer: {
      hair: {
        'archer-hair-1': {
          style: {
            width: `114px`,
            top: `-4px`,
            left: `67px`,
          }
        },
        'archer-hair-2': {
          style: {
            width: `103px`,
            top: `-8px`,
            left: `69px`,
          }
        },
        'archer-hair-3': {
          style: {
            width: `112px`,
            top: `-5px`,
            left: `69px`,
          }
        }
      },
      body: {
        'archer-body-1': {
          style: {
            width: `159px`,
            top: `100px`,
            left: `63px`,
          }
        },
        'archer-body-2': {
          style: {
            width: `159px`,
            top: `100px`,
            left: `63px`,
          }
        },
        'archer-body-3': {
          style: {
            width: `159px`,
            top: `100px`,
            left: `63px`,
          }
        }
      },
      bow: {
        'archer-bow-1': {
          style: {
            width: `265px`,
            top: `136px`,
            left: `-8px`,
          }
        },
        'archer-bow-2': {
          style: {
            width: `269px`,
            top: `139px`,
            left: `-8px`,
          }
        },
        'archer-bow-3': {
          style: {
            width: `261px`,
            top: `145px`,
            left: `-3px`,
          }
        }
      },
    },
  }
}


const equipmentClicked = (character: string, groupKey: string) => {
  if (completed.value) return;
  const currentKey = selectedEquipments.value[character][groupKey];
  const currentKeyValue = ((+currentKey[currentKey.length - 1])) % 3;
  const nextKey = `${currentKey.slice(0, currentKey.length - 2)}-${currentKeyValue + 1}`;
  selectedEquipments.value[character][groupKey] = nextKey;
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
})
</script>

<style scoped lang="scss">
.game-frame {
  position: relative;
  max-width: 400px;
  min-width: 400px;

  .bg {
    display: block;
    position: relative;
    width: 100%;

    .bg-img {
      width: 100%;
    }
  }

  .game-container {
    display: block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .preview {
      height: 400px;
      position: absolute;
      left: 0;
      bottom: 103px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .character {
        position: relative;
        display: inline-block;

        .base {
          position: relative;
          display: inline-block;


          .base-img {
            max-height: 400px;
          }
        }

        .equipments-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          .equipments {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;


            .equipment {
              position: absolute;

              img {
                max-width: 100%;
              }
            }
          }
        }
      }
    }

    .controls {
      position: absolute;
      z-index: 1;
      bottom: 2px;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }
}
</style>