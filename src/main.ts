import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ErrorStackParser from 'error-stack-parser'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.config.errorHandler = function (err, vm) {
//     // handle error
//     // console.error('Global Error Handler:', err, vm)
//     const stackFrames = ErrorStackParser.parse(err as Error)
//     console.log('Parsed Stack Frames:', stackFrames)
// }
app.mount('#app')
