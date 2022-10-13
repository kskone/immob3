import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Vente from '@/views/VenteProduits.vue'
import Location from '@/views/Location.vue'
import Contact from '@/views/Contact.vue'
 
 const router = createRouter({
  history: createWebHistory(),
   routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vente',
      name: 'vente',
      component: Vente
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
   
   ]
 })



export default router
