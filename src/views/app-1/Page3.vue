
<template>
  <app-page bg="secondary">
    <div class="container py-5 h-100">
      <div class="d-flex gap-3 flex-column h-100">
        <div class="flex-grow-0">
          <p class="h5 mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="flex-grow-1 border bg-white">
          <img class="image-preview"
            :src="`assets/apps/app1/img ${$route.query?.containerId}/${$route.query?.chosenImgId}.png`">
        </div>

        <div class="flex-grow-0 text-end">
          <RouterLink
            :to="{ name: !$route.query?.containerId || +$route.query.containerId >= 6 ? 'app-1-1' : 'app-1-2', query: { containerId: +($route.query?.containerId ?? 0) + 1 } }"
            class="btn btn-success btn-lg">
            next
          </RouterLink>
        </div>
      </div>
    </div>
  </app-page>
</template>
<style lang="scss" scoped>
.image-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>