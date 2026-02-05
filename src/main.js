// Design System CSS imports (ORDER MATTERS - must be first!)
import '@chesscom/design-system/dist/variables.css'  // CSS custom properties (tokens)
import '@chesscom/design-system/dist/cc-utils.css'   // Utility classes
import '@chesscom/design-system/dist/style.css'      // Component styles

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Global error handler so a single component error doesn't blank the whole app
app.config.errorHandler = (err, instance, info) => {
  console.error('[Vue Error]', err, info)
}

app.mount('#app')
