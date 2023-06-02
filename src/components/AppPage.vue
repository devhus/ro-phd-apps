<template>
  <div class="app-page" :class="{
    [`abg-${bg}`]: true,
  }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  bg?: 'primary' | 'secondary'
}>(), { bg: 'primary' })
</script>

<style scoped lang="scss">
.app-page {
  width: 100%;
  height: 100%;
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;

  &.abg-primary {
    background-color: var(--bs-primary);
    background-image: url("assets/img/bg-primary.png");
  }

  &.abg-secondary {
    background-color: var(--bs-warning);
    background-image: url("assets/img/bg-secondary.png");
  }
}
</style>