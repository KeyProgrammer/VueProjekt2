import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About.vue';
import Carrer from '../views/Career.vue';
import Contact from '../views/Contact.vue';
import Offert from '../views/Offert.vue';
import Technology from '../views/Technology.vue';
import RootSide from '../views/RootSide.vue';

const routes = [
  {
    path: '/',
    name: 'RootSide',
    component: RootSide,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/career',
    name: 'Carrer',
    component: Carrer,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/offert',
    name: 'Offert',
    component: Offert,
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology,
  },
]

const router = createRouter({
  history: createWebHashHistory('/VueProjekt/'),
  routes,
});

export default router;
