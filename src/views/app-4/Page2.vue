<template>
  <app-page>
    <input ref="fileInput" class="d-none" type="file" accept="image/*" @change="onFileSelect" max="1" />
    <div class="h-100">
      <div class="d-flex flex-column h-100">
        <div class="images-container flex-grow-1 bg-white text-black">
          <img v-if="manager.app4ImageData" class="image-item" :src="manager.app4ImageData"
            :style="{ filter: `hue-rotate(${sliderValue ?? 0}deg)` }">
          <div v-else class="d-flex align-items-center justify-content-center h-100">
            <span v-if="!loadingImage">Please input an image</span>
            <span v-else>Loading...</span>
          </div>
        </div>
        <div class="flex-grow-0 py-3 container bg-warning">
          <div class="">
            <input v-model="sliderValue" type="range" class="form-range" max="350" min="0" />
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <RouterLink :to="{ name: 'app-4-3', query: { degree: sliderValue } }" class="btn btn-success btn-lg">
              choose
            </RouterLink>
            <button type="button" class="btn btn-danger btn-lg" @click="($refs.fileInput as any)?.click()">
              picture
            </button>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { useManager } from '@/stores/manager';
import { ref } from 'vue';

const manager = useManager();

const sliderValue = ref(1);
const loadingImage = ref(false);

const onFileSelect = (e: any) => {
  if (loadingImage.value) return;
  loadingImage.value = true;
  const selectedFile: File = e.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(selectedFile);
  reader.onload = function () {
    manager.app4ImageData = reader.result?.toString();
    loadingImage.value = false;
  };
  console.log(9999999, selectedFile);
}

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