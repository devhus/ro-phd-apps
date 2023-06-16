<script setup lang="ts">
</script>

<template>
  <div class="p-5">
    <div class="row g-3">
      <div class="col">
        <RouterLink :to="{ name: 'app-1-1' }">
          App 1
        </RouterLink>
      </div>
      <div class="col">
        <RouterLink :to="{ name: 'app-2-1' }">
          App 2
        </RouterLink>
      </div>
      <div class="col">
        <RouterLink :to="{ name: 'app-3-1' }">
          App 3
        </RouterLink>
      </div>
      <div class="col">
        <RouterLink :to="{ name: 'app-4-1' }">
          App 4
        </RouterLink>
      </div>
      <div class="col">
        <RouterLink :to="{ name: 'app-5-1' }">
          App 5
        </RouterLink>
      </div>
      <div class="col">
        <RouterLink :to="{ name: 'app-6-1', params: { level: 1 } }">
          App 6
        </RouterLink>
      </div>
    </div>
  </div>
</template>
