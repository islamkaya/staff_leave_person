import { createApp } from 'vue'
import App from './App.vue'
import '@/ui/assets/css/bootstrap.css'
import '@/ui/assets/css/extra.css'
import '@/config/apiURL.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faHatWizard);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
