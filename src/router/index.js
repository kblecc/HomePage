import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/WorksView.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
      children: [
        {
          path: 'easybrew',
          component: () => import('../components/works/EASYBREW.vue'),
        },

        {
          path: 'unipot',
          component: () => import('../components/works/Unipot.vue'),
        },
        {
          path: 'hiaaui',
          component: () => import('../components/works/HearIamAppUI.vue'),
        },
        {
          path: 'hiaweb',
          component: () => import('../components/works/HearIamWebsite.vue'),
        },
        {
          path: 'mappingipa',
          component: () =>
            import('../components/works/MappingForInternetPrivacyAndAdvertising.vue'),
        },
        {
          path: 'grantnexus',
          component: () => import('../components/works/GrantNexus.vue'),
        },

        {
          path: ':pathMatch(.*)*',
          component: () => import('../components/works/NotExist.vue'),
        },
      ],
    },
    {
      path: '/collections',
      name: 'collections',
      component: () => import('../views/CollectionsView.vue'),
    },
    {
      path: '/mobile',
      name: 'mobiles',
      component: () => import('../views/MobileDeviceListView.vue'),

    },
    {
      path: '/mobile/:codename',
      name: 'mobile',
      component: () => import('../views/MobileDeviceView.vue'),

    },
  ],
})

export default router
