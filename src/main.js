import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('theme-switch')
  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme')
      document.documentElement.setAttribute(
        'data-bs-theme',
        currentTheme === 'dark' ? 'light' : 'dark',
      )
    })
  }
})
