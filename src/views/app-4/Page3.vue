
<template>
  <app-page>
    <div class="container py-5 h-100">
      <div class="d-flex gap-3 flex-column h-100">
        <div class="flex-grow-0">
          <p class="h5 mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="flex-grow-1 border bg-white">
          <img class="image-preview" :src="manager.app4ImageData"
            :style="{ filter: `hue-rotate(${$route.query.degree ?? 0}deg)` }">
        </div>
      </div>
    </div>
  </app-page>
</template>
<script setup>
import { useManager } from '@/stores/manager';

const manager = useManager();
</script>
<style lang="scss" scoped>
.image-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>