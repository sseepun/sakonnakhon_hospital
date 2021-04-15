import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import Button from './components/Button'
import FormGroup from './components/FormGroup'
import PopupOptions from './components/PopupOptions'
app.component('Button', Button)
app.component('FormGroup', FormGroup)
app.component('PopupOptions', PopupOptions)

app.use(router).mount('#app')
