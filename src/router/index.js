import { createRouter, createWebHashHistory, RouterView  } from 'vue-router'
import Tr from "@/i18n/translation"

const routes = [
  {
    path: "/:locale?",
    component: RouterView,
    beforeEnter: Tr.routeMiddleware,
    children: [
      {
        path: '',
        name: 'RootSide',
        component: () => import ('@/views/RootSide.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import ('@/views/About.vue'),
      }, 
      {
        path: 'project',
        name: 'Project',
        component: () => import ('../views/Project.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import ('@/views/Contact.vue')
      },
      {
        path: 'offert',
        name: 'Offert',
        component: () => import ('@/views/Offert.vue')
      },
      {
        path: 'technology',
        name: 'Technology',
        component: () => import ('@/views/Technology.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
