<template>
  <app-page>
    <div class="h-100">
      <div class="d-flex flex-column h-100">
        <div class="images-container flex-grow-1 bg-white text-dark">
          <img class="image-item" :src="`assets/apps/app5/${imageId}.png`">
        </div>
        <div class="flex-grow-0 py-3 container bg-warning">
          <div v-if="correctAnswerClicked">
            <h4 class="text-center text-success">Correct Answer!</h4>
            <RouterLink v-if="imageId < 4" class="btn btn-success w-100"
              :to="{ name: 'app-5-2', query: { imageId: imageId + 1 } }">
              Next
            </RouterLink>
          </div>
          <div v-else class="row g-2">
            <div v-for="(ans, key) in ANSWERS" class="col-6" :key="key">
              <button type="button" class="btn btn-danger  w-100" :disabled="disabledAnswers.includes(key)"
                @click="answer(key)">
                {{ ans }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();

const IMAGE_ANSWERS = [
  'alternanta',
  'repetitie',
  'ritm_artistic',
  'ritm_artistic',
  'simetrie',
];
const ANSWERS = {
  simetrie: 'Simetrie',
  repetitie: 'Repetitie',
  ritm_artistic: 'Ritm Artistic',
  alternanta: 'Alternanta',
}

const disabledAnswers = ref<string[]>([]);
const imageId = ref<number>(+(route.query?.imageId ?? 0));
const correctAnswerClicked = ref(false);
const correctAnswer = computed(() => IMAGE_ANSWERS[imageId.value])

const answer = (val: string) => {
  if (val === correctAnswer.value) {
    correctAnswerClicked.value = true;
    return;
  }
  disabledAnswers.value.push(val);
}

const reset = () => {
  disabledAnswers.value = [];
  correctAnswerClicked.value = false;
}

watch(() => route.query?.imageId, (imgId) => {
  imageId.value = +(imgId ?? 0);
  reset();
})

</script>

<style scoped lang="scss">
.images-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;

  .image-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
}
</style>