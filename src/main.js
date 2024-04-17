import { createApp } from 'vue'
import { Quasar } from 'quasar'
import QuasarLang  from 'quasar/lang/ru'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import components from "@/components/UI"


const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})
app.use(Quasar, {
    plugins: {},
    lang: QuasarLang,
})

app.mount('#app')