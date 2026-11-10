import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../../vue/pages/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('../../vue/pages/PricingView.vue'),
    },
    {
        path: '/features',
        name: 'features',
        component: () => import('../../vue/pages/FeaturesView.vue'),
    },
    {
        path: '/features/appointment',
        name: 'features-appointment',
        component: () => import('../../vue/pages/AppointmentFeatureView.vue'),
    },
    {
        path: '/solutions',
        name: 'solutions',
        component: () => import('../../vue/pages/SolutionsView.vue'),
    },
    {
        path: '/solutions/barbershop',
        name: 'solutions-barbershop',
        component: () => import('../../vue/pages/BarbershopSolutionView.vue'),
    },
    {
        path: '/solutions/:slug',
        name: 'solution-detail',
        component: () => import('../../vue/pages/SolutionDetailView.vue'),
    },
    {
        path: '/why-choose-salonist',
        name: 'why-choose-salonist',
        component: () => import('../../vue/pages/WhyChooseSalonistView.vue'),
    },
    {
        path: '/compare-salonist',
        name: 'compare-salonist',
        component: () => import('../../vue/pages/CompareSalonistView.vue'),
    },
    {
        path: '/guides/salon-management',
        name: 'guide-salon-management',
        component: () => import('../../vue/pages/GuideView.vue'),
    },
    {
        path: '/guides/spa-management',
        name: 'guide-spa-management',
        component: () => import('../../vue/pages/GuideView.vue'),
    },
    {
        path: '/guides/salon-automation',
        name: 'guide-salon-automation',
        component: () => import('../../vue/pages/GuideView.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../../vue/pages/BlogView.vue'),
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../../vue/pages/DemoView.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../../vue/pages/ContactView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../../vue/pages/LoginView.vue'),
    },
    {
        path: '/app',
        name: 'app-workspace',
        component: () => import('../../vue/pages/AppWorkspaceView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    },
});

export default router;
