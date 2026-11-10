import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';

// Lenis smooth scroll
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Smooth Scroll
export const initLenis = () => {
    if (typeof window !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
        return lenis;
    }
    return null;
};

// Root Vue Application Component
import App from '../../vue/App.vue';

// All component registration for modular usage
import Navbar from '../../vue/components/Navbar.vue';
import MegaMenu from '../../vue/components/MegaMenu.vue';
import Hero from '../../vue/components/Hero.vue';
import LogoSlider from '../../vue/components/LogoSlider.vue';
import FeatureCard from '../../vue/components/FeatureCard.vue';
import SectionTitle from '../../vue/components/SectionTitle.vue';
import IndustryCard from '../../vue/components/IndustryCard.vue';
import PricingCard from '../../vue/components/PricingCard.vue';
import FAQAccordion from '../../vue/components/FAQAccordion.vue';
import Testimonial from '../../vue/components/Testimonial.vue';
import Counter from '../../vue/components/Counter.vue';
import CTA from '../../vue/components/CTA.vue';
import Footer from '../../vue/components/Footer.vue';
import BlogCard from '../../vue/components/BlogCard.vue';
import DashboardMockup from '../../vue/components/DashboardMockup.vue';
import ProductShowcase from '../../vue/components/ProductShowcase.vue';
import DetailedFeatures from '../../vue/components/DetailedFeatures.vue';
import HowItWorks from '../../vue/components/HowItWorks.vue';
import WhyChooseUs from '../../vue/components/WhyChooseUs.vue';
import Integrations from '../../vue/components/Integrations.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueApexCharts);

// Global components
app.component('Navbar', Navbar);
app.component('MegaMenu', MegaMenu);
app.component('Hero', Hero);
app.component('LogoSlider', LogoSlider);
app.component('FeatureCard', FeatureCard);
app.component('SectionTitle', SectionTitle);
app.component('IndustryCard', IndustryCard);
app.component('PricingCard', PricingCard);
app.component('FAQAccordion', FAQAccordion);
app.component('Testimonial', Testimonial);
app.component('Counter', Counter);
app.component('CTA', CTA);
app.component('Footer', Footer);
app.component('BlogCard', BlogCard);
app.component('DashboardMockup', DashboardMockup);
app.component('ProductShowcase', ProductShowcase);
app.component('DetailedFeatures', DetailedFeatures);
app.component('HowItWorks', HowItWorks);
app.component('WhyChooseUs', WhyChooseUs);
app.component('Integrations', Integrations);

// Mount
if (document.getElementById('app')) {
    app.mount('#app');
    initLenis();
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
    });
}
