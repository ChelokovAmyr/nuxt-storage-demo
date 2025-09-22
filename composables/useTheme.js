// composables/useTheme.js
import { ref, watch } from 'vue'

export const useTheme = () => {
  const theme = ref('light')

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    if (saved) theme.value = saved
  }

  watch(theme, (newVal) => {
    if (typeof window !== 'undefined') localStorage.setItem('theme', newVal)
  })

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return { theme, toggleTheme }
}
