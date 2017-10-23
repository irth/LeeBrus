import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Login from '@/components/Login';

import Auth from '@/services/auth';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { requiresAuth: true },
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth) && !Auth.DZIENNIKSID) {
    next('/login');
  } else {
    next();
  }
});

export default router;
