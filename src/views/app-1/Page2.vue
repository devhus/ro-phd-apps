<template>
  <app-page>
    <div class="h-100">
      <div class="d-flex flex-column h-100">
        <div class="app1-img-container flex-grow-1 bg-white text-dark">
          {{ sliderValue }}
        </div>

        <div class="flex-grow-0 py-3 container bg-warning">
          <div class="">
            <input v-model="sliderValue" type="range" class="form-range" />
          </div>
          <RouterLink :to="{ name: 'app-1-2' }" class="btn btn-success btn-lg">
            incepe
          </RouterLink>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sliderValue = ref(0);
</script>
