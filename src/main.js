// Design System CSS imports (ORDER MATTERS - must be first!)
import '@chesscom/design-system/dist/variables.css'  // CSS custom properties (tokens)
import '@chesscom/design-system/dist/cc-utils.css'   // Utility classes
import '@chesscom/design-system/dist/style.css'      // Component styles

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
