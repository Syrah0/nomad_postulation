import { RouteRecordRaw } from 'vue-router';
import requireCartMiddleware from 'src/middleware/carts';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue'),
        name: 'home',
      },
      { 
        path: 'checkout',
        component: () => import('pages/CheckoutPage.vue'),
        name: 'checkout',
        meta: {
          middlewares: [
            requireCartMiddleware
          ]
        }
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
