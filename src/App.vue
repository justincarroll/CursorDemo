<template>
  <div class="app">
    <h1 class="cc-heading-large-bold">Chess.com Design System</h1>
    <p class="cc-text-large subtitle">Vue + Vite + Design System</p>

    <div class="card">
      <CcButton variant="primary" @click="count++">
        Count is {{ count }}
      </CcButton>
      <p class="cc-text-small hint">
        Edit <code>src/App.vue</code> and save to test HMR
      </p>
    </div>

    <p class="cc-paragraph-medium info">
      Try importing and using Design System components like CcButton, CcIcon, CcCard, etc.
    </p>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { CcButton } from '@chesscom/design-system'

const count = ref(0)

// Provide design system context (required for some components)
provide('design-system-key', {
  routes: {
    webMemberView: (username) => `/member/${username}`,
    webAbout: '/about',
    webMembership: (params) => `/membership`,
    webMemberTitledPlayers: '/titled-players',
  },
  trans: (key) => key, // Simple pass-through for translations
})
</script>

<style>
/* CRITICAL: Font-size reset for Design System (1rem = 10px) */
html {
  box-sizing: border-box;
  font-size: 62.5%; /* 10px/16px = 62.5% → 1rem = 10px */
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* Base body styles */
body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-default);
  font-family: var(--font-family-system);
  margin: 0;
}

#app {
  min-height: 100vh;
}

/* Reset common elements */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button, a {
  cursor: pointer;
}
</style>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-40) var(--space-20);
}

.subtitle {
  color: var(--color-text-subtle);
  margin-bottom: var(--space-32);
}

.card {
  padding: var(--space-32);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-medium);
  margin: var(--space-32) 0;
  border: 1px solid var(--color-border-default);
}

.hint {
  margin-top: var(--space-24);
  color: var(--color-text-subtle);
}

code {
  background: var(--color-bg-tertiary);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-small);
  font-family: monospace;
  color: var(--color-text-primary);
}

.info {
  margin-top: var(--space-32);
  color: var(--color-text-subtle);
}
</style>
