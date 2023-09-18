import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const user = ref()
  const token = ref()
  const settingbool = ref({
    wifiPlay: false,
    wifiDownload:false,
    autoPlay:false
  })
return { user, token,settingbool }
}, {
  persist: true
})
