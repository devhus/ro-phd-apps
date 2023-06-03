<script setup lang="ts">
</script>

<template>
  <div class="p-5">
    <div class="row g-3">
      <div class="col">
        <RouterLink :to="{ name: 'app-1-1' }">
          App 2
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
    </div>
  </div>
</template>
