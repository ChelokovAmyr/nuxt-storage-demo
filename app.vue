<template>
  <div :class="theme">
    <h1>Nuxt 3 Storage Demo</h1>

    <!-- LocalStorage -->
    <section>
      <h2>Theme (localStorage)</h2>
      <button @click="toggleTheme">Toggle Theme</button>
      <p>Current theme: {{ theme }}</p>
    </section>

    <!-- SessionStorage -->
    <section>
      <h2>Last Tab (sessionStorage)</h2>
      <button @click="lastTab = 'home'">Home</button>
      <button @click="lastTab = 'profile'">Profile</button>
      <p>Last tab: {{ lastTab }}</p>
    </section>

    <!-- Cookie -->
    <section>
      <h2>Auth (cookie)</h2>
      <button v-if="!isLoggedIn" @click="login('123456')">Login</button>
      <button v-else @click="logout">Logout</button>
      <p>Token: {{ token }}</p>
    </section>
  </div>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'
import { useSessionTab } from '~/composables/useSessionTab'
import { useAuth } from '~/composables/useAuth'

const { theme, toggleTheme } = useTheme()
const { lastTab } = useSessionTab()
const { token, login, logout, isLoggedIn } = useAuth()
</script>

<style>
body { font-family: sans-serif; }
.light { background: #fff; color: #000; padding: 20px; }
.dark { background: #111; color: #fff; padding: 20px; }
section { margin-bottom: 20px; }
button { margin-right: 10px; }
</style>
