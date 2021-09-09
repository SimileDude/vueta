import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cosmetics from '../pages/Cosmetics.vue'
import Health from '../pages/Health.vue'
import Service from '../pages/Service.vue'
import Contact from '../pages/Contact.vue'
import Ethanol from '../pages/Ethanol.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ethanol',
    name: 'Ethanol',
    component: Ethanol
  },
  {
  path: '/health',
  name: 'Health',
  component: Health
  },
  {
  path: '/cosmetics',
  name: 'Cosmetics',
  component: Cosmetics
  },
  {
  path: '/service',
  name: 'Service',
  component: Service
  },
  {
  path: '/contact',
  name: 'Contact',
  component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }

    }
    return {top: 0}
  },
})

export default router
