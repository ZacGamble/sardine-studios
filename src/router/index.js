import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory('sardine-studios'),
  routes: [
 
        {
          path: '/schedule',
          name: 'schedule',
          component: () => import('../views/ScheduleView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
     
        {
          path: '/services',
          name: 'services',
          component: () => import('../views/ServicesView.vue')
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: () => import('../views/PortfolioView.vue')
        }
      ]
    }
)

export default router
