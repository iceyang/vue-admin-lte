import VueRouter from 'vue-router'

import Icons from './components/admin-lte/Icons.vue'
import General from './components/admin-lte/General.vue'
import Widgets from './components/admin-lte/Widgets.vue'
const routes = [
  { path: '/', component: Widgets },
  { path: '/icons', component: Icons },
  { path: '/general', component: General },
  { path: '/widgets', component: Widgets },
]
const router = new VueRouter({
  routes
})

export default router
