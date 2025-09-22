// composables/useAuth.js
import { computed } from 'vue'
import { useCookie } from '#app'

export const useAuth = () => {
  const token = useCookie('authToken', { maxAge: 3600 }) // 1 час

  const login = (newToken) => {
    token.value = newToken
  }

  const logout = () => {
    token.value = null
  }

  const isLoggedIn = computed(() => !!token.value)

  return { token, login, logout, isLoggedIn }
}
