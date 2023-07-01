<template>
  <app-page>
    <div class="h-100">
      <div class="d-flex flex-column h-100">
        <div class="images-container flex-grow-1 bg-white text-dark">
          <template v-for="imgId in 5" :key="imgId">
            <img v-show="imgId == sliderValue" class="image-item"
              :src="`assets/apps/app1/img${currentContainerId}/${imgId}.jpg`">
          </template>
        </div>
        <div class="flex-grow-0 py-3 container bg-warning">
          <div class="">
            <input v-model="sliderValue" type="range" class="form-range" :max="MAX_IMAGES" min="1" />
          </div>
          <RouterLink :to="{ name: 'app-1-3', query: { chosenImgId: sliderValue, containerId: currentContainerId } }"
            class="btn btn-success btn-lg">
            choose
          </RouterLink>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();

const MAX_IMAGES = 5;

const sliderValue = ref(1);

const currentContainerId = ref(route.query?.containerId ?? 1);

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