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
        path: '/features/online-booking',
        name: 'features-online-booking',
        component: () => import('../../vue/pages/OnlineBookingFeatureView.vue'),
    },
    {
        path: '/online-booking',
        name: 'online-booking',
        component: () => import('../../vue/pages/OnlineBookingFeatureView.vue'),
    },
    {
        path: '/features/:slug',
        name: 'feature-detail',
        component: () => import('../../vue/pages/FeatureDetailView.vue'),
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
        path: '/why-choose-us',
        name: 'why-choose-us',
        component: () => import('../../vue/pages/WhyChooseSalonistView.vue'),
    },
    {
        path: '/compare-salonist',
        name: 'compare-salonist',
        component: () => import('../../vue/pages/CompareSalonistView.vue'),
    },
    {
        path: '/compare-platform',
        name: 'compare-platform',
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
        component: () => import('../../vue/pages/SpaManagementView.vue'),
    },
    {
        path: '/spa-management-guide',
        name: 'spa-management-guide',
        component: () => import('../../vue/pages/SpaManagementView.vue'),
    },
    {
        path: '/guides/salon-automation',
        name: 'guide-salon-automation',
        component: () => import('../../vue/pages/SalonAutomationView.vue'),
    },
    {
        path: '/salon-automation',
        name: 'salon-automation',
        component: () => import('../../vue/pages/SalonAutomationView.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../../vue/pages/BlogView.vue'),
    },
    {
        path: '/ebooks',
        name: 'ebooks',
        component: () => import('../../vue/pages/EBooksView.vue'),
    },
    {
        path: '/customer-success',
        name: 'customer-success',
        component: () => import('../../vue/pages/CustomerSuccessView.vue'),
    },
    {
        path: '/help-center',
        name: 'help-center',
        component: () => import('../../vue/pages/HelpCenterView.vue'),
    },
    {
        path: '/support',
        name: 'support',
        component: () => import('../../vue/pages/SupportView.vue'),
    },
    {
        path: '/security',
        name: 'security',
        component: () => import('../../vue/pages/SecurityView.vue'),
    },
    {
        path: '/client-testimonials',
        name: 'client-testimonials',
        component: () => import('../../vue/pages/ClientTestimonialsView.vue'),
    },
    {
        path: '/clients',
        name: 'clients',
        component: () => import('../../vue/pages/ClientTestimonialsView.vue'),
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
