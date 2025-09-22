// composables/useSessionTab.js
import { ref, watch } from 'vue'

export const useSessionTab = () => {
  const lastTab = ref('home')

  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem('lastTab')
    if (saved) lastTab.value = saved
  }

  watch(lastTab, (val) => {
    if (typeof window !== 'undefined') sessionStorage.setItem('lastTab', val)
  })

  return { lastTab }
}
