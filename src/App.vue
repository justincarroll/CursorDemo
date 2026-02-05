<template>
  <div class="app">
    <FriendsProfile />
  </div>
</template>

<script setup>
import { provide } from 'vue'
import FriendsProfile from './views/FriendsProfile.vue'

// Provide design system context (required for some components)
provide('design-system-key', {
  routes: {
    webMemberView: (username) => `/member/${username}`,
    webAbout: '/about',
    webMembership: () => '/membership',
    webMemberTitledPlayers: '/titled-players',
  },
  trans: (key) => key,
})
</script>

<style>
/* CRITICAL: Font-size reset for Design System (1rem = 10px) */
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  background-color: var(--color-bg-primary, #312e2b);
  color: var(--color-text-default, #e7e6e5);
  font-family: var(--font-family-system, system-ui, sans-serif);
  margin: 0;
}

#app {
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
p { margin: 0; padding: 0; }
a { color: inherit; text-decoration: none; }
button, a { cursor: pointer; }
</style>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
