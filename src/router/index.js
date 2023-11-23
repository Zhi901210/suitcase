import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: 'Form',
        component: () => import('../views/front/FormView.vue')
      },
      {
        path: 'OkOrder',
        component: () => import('../views/front/OkOrderView.vue')
      },
      {
        path: 'zr',
        component: () => import('../views/front/ZrView.vue')
      },
      {
        path: 'suitcase',
        component: () => import('../views/front/suitcaseView.vue')
      },
      {
        path: 'bag',
        component: () => import('../views/front/bagView.vue')
      }
      ,
      {
        path: 'other',
        component: () => import('../views/front/otherView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/AdminHome.vue')
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'Orders',
        component: () => import('../views/admin/AdminOrders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
