<script setup lang="ts">
</script>

<template>
  <app-page>
    <div class="container py-5 h-100">
      <div class="d-flex flex-column h-100">
        <div class="flex-grow-1">
          <h1 class="fw-bolder text-warning mb-3">Contrastele</h1>
          <p class="h5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus similique soluta
            quod.
            Nulla delectus consectetur, ipsa est rerum facere nisi incidunt laudantium, provident magnam id. Repellat at
            consequuntur delectus?</p>
        </div>

        <div class="flex-grow-0">
          <RouterLink :to="{ name: 'app-2-2' }" class="btn btn-danger btn-lg">
            incepe
          </RouterLink>
        </div>
      </div>
    </div>
  </app-page>
</template>
