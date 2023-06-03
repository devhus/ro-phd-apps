import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useManager = defineStore('manager-store', () => {
  const app4ImageData = ref<string>()

  return { app4ImageData }
})
