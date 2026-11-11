<template>
  <div class="min-h-screen bg-white text-[#111111] flex flex-col justify-between">
    <!-- Navigation Bar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Content Area -->
    <main class="flex-grow">
      <!-- 1. Hero Section -->
      <Hero 
        @open-demo="demoOpen = true"
        @start-trial="trialOnboardingOpen = true"
      />

      <!-- 2. Trusted Growth Software for Beauty & Wellness (Brand Pills - Screenshot 1) -->
      <TrustedBrandsStrip />

      <!-- 3. One Platform to Run Your Salon (Screenshot 1 Big Feature Card & Studio Photo) -->
      <OnePlatformSection @start-trial="trialOnboardingOpen = true" />

      <!-- 4. Beauty Salon Software for Every Kind of Business (Screenshot 2: 11 Business Pills) -->
      <BusinessTypesGrid />

      <!-- 5. Everything Your Salon Needs in One Salon Software (Screenshot 3: 6 Feature Cards) -->
      <EverythingSalonNeeds />

      <!-- 6. All-in-One Salon Booking & Scheduling Software (Screenshot 4: Dark Sunset Pillars) -->
      <AllInOneSchedulingSection />

      <!-- 6B. Fast, No-Friction Salon Booking & Management (DINGG B2M2 Framework) -->
      <DinggPillarsSection @start-trial="trialOnboardingOpen = true" />

      <!-- 7. Key Live Counters -->
      <Counter />

      <!-- 8. Interactive Master Multi-Chair Schedule Matrix -->
      <section class="py-20 bg-white border-b border-[#E8E8EC]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Live Multi-Chair Calendar"
            title="Calm & Precision Multi-Chair"
            highlight="Schedule Orchestration."
            subtitle="Observe how chemical processing buffer slots allow stylists to serve blowouts and cuts while highlights develop, driving maximum chair yield."
            :center="true"
          />
          <LiveCalendarMatrix @open-booking="bookingFlowOpen = true" />
        </div>
      </section>

      <!-- 9. Product Showcase (Laptop/Tablet/Phone views) -->
      <ProductShowcase @open-booking-flow="bookingFlowOpen = true" />

      <!-- 10. Interactive Live Chairside POS Simulator -->
      <section class="py-20 bg-white border-b border-[#E8E8EC]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Interactive Demonstration"
            title="Try The Chairside POS"
            highlight="In Real Time."
            subtitle="Click services and retail products below to test instant split-checks, VIP discounts, tip selections, and automated stylist commission payouts."
            :center="true"
          />
          <PosSimulator />
        </div>
      </section>

      <!-- 11. Interactive ROI Profit Calculator -->
      <section class="py-20 bg-[#F8F9FE] border-b border-[#E8E8EC]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Dynamic Yield Calculator"
            title="Calculate Your Salon's"
            highlight="Recaptured Revenue."
            subtitle="Explore how eliminating no-shows and optimizing chemical processing gaps expands your annual top-line profit."
            :center="true"
          />
          <RoiCalculator @book-demo="demoOpen = true" />
        </div>
      </section>

      <!-- 12. How It Works (Timeline 1-4) -->
      <HowItWorks />

      <!-- 13. Why Choose Us (6 Pillars) -->
      <WhyChooseUs />

      <!-- 14. Integrations Strip -->
      <Integrations />

      <!-- 15. CUSTOMER STORIES: Loved by thousands of salons and spas (Video & Photos & Awards Strip) -->
      <CustomerStoriesSection />

      <!-- 16. Testimonials (Large metric-driven cards) -->
      <TestimonialSection />

      <!-- 17. Pricing Section (Monthly/Annual toggle & comparison matrix) -->
      <PricingSection />

      <!-- 18. FAQ Accordion (Screenshot Match) -->
      <FAQSection />

      <!-- 18. Blog & Articles -->
      <BlogSection />

      <!-- 19. Final Master Call to Action -->
      <div class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTA 
            @start-trial="trialOnboardingOpen = true"
            @book-demo="demoOpen = true"
          />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Persistent Floating Julian Concierge Live Chat Widget -->
    <FloatingChatWidget />

    <!-- Search Modal Dialog -->
    <div 
      v-if="searchOpen" 
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4"
      @click.self="searchOpen = false"
    >
      <div class="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#ECECEC] p-6 text-xs">
        <div class="flex items-center gap-3 pb-4 border-b border-[#ECECEC]">
          <Search class="w-5 h-5 text-[#C8A96A]" />
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search modules, features, industries, or workflows..." 
            class="w-full text-sm font-medium focus:outline-none placeholder-neutral-400"
            autofocus
          />
          <button @click="searchOpen = false" class="text-neutral-400 hover:text-neutral-900 font-bold">ESC</button>
        </div>

        <div class="py-4 space-y-2 max-h-80 overflow-y-auto">
          <div 
            v-for="(res, idx) in searchResults" 
            :key="idx" 
            class="p-3 rounded-xl hover:bg-[#F8F8F8] cursor-pointer flex items-center justify-between"
            @click="searchOpen = false"
          >
            <div>
              <p class="font-bold text-[#111111] text-xs">{{ res.title }}</p>
              <p class="text-[11px] text-[#2B2B2B]/70">{{ res.category }}</p>
            </div>
            <span class="text-[10px] text-[#C8A96A] font-bold">Go to module →</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Free 7-Day Trial Service Selection Modal (Screenshot Match) -->
    <TrialOnboardingModal 
      v-model="trialOnboardingOpen"
      @close="trialOnboardingOpen = false"
      @switch-to-login="trialOnboardingOpen = false; loginOpen = true"
    />

    <!-- Interactive User Login Modal -->
    <LoginModal 
      v-model="loginOpen"
      @close="loginOpen = false"
      @switch-to-trial="loginOpen = false; trialOnboardingOpen = true"
    />

    <!-- 20-Minute Demo Meeting Calendly-Style Modal (Screenshot Match) -->
    <DemoBookingModal 
      v-model="demoOpen"
      @close="demoOpen = false"
    />

    <!-- Concierge Demo Modal -->
    <BookingFlowModal 
      v-model="bookingFlowOpen" 
      @close="bookingFlowOpen = false"
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Search, X } from 'lucide-vue-next';

// Components
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import TrustedBrandsStrip from '../components/homepage/TrustedBrandsStrip.vue';
import OnePlatformSection from '../components/homepage/OnePlatformSection.vue';
import BusinessTypesGrid from '../components/homepage/BusinessTypesGrid.vue';
import EverythingSalonNeeds from '../components/homepage/EverythingSalonNeeds.vue';
import AllInOneSchedulingSection from '../components/homepage/AllInOneSchedulingSection.vue';
import DinggPillarsSection from '../components/homepage/DinggPillarsSection.vue';
import LogoSlider from '../components/LogoSlider.vue';
import Counter from '../components/Counter.vue';
import FeatureGrid from '../components/FeatureGrid.vue';
import DetailedFeatures from '../components/DetailedFeatures.vue';
import Industries from '../components/Industries.vue';
import ProductShowcase from '../components/ProductShowcase.vue';
import HowItWorks from '../components/HowItWorks.vue';
import WhyChooseUs from '../components/WhyChooseUs.vue';
import Integrations from '../components/Integrations.vue';
import CustomerStoriesSection from '../components/homepage/CustomerStoriesSection.vue';
import TestimonialSection from '../components/TestimonialSection.vue';
import PricingSection from '../components/PricingSection.vue';
import FAQSection from '../components/FAQSection.vue';
import BlogSection from '../components/BlogSection.vue';
import CTA from '../components/CTA.vue';
import Footer from '../components/Footer.vue';
import PosSimulator from '../components/interactive/PosSimulator.vue';
import RoiCalculator from '../components/interactive/RoiCalculator.vue';
import BookingFlowModal from '../components/interactive/BookingFlowModal.vue';
import LiveCalendarMatrix from '../components/interactive/LiveCalendarMatrix.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import FloatingChatWidget from '../components/interactive/FloatingChatWidget.vue';

const searchOpen = ref(false);
const demoOpen = ref(false);
const trialOpen = ref(false);
const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const bookingFlowOpen = ref(false);

const searchQuery = ref('');
const demoSuccess = ref(false);
const trialSuccess = ref(false);

const demoForm = ref({
  name: '',
  salon: '',
  email: '',
  chairs: '4 - 10 Chairs'
});

const allSearchItems = [
  { title: 'Multi-Chair Calendar & Schedule Matrix', category: 'Core Booking OS' },
  { title: 'Processing Buffer Gap Automation', category: 'Colorist Efficiency' },
  { title: 'Omnichannel POS & Split Terminal Checkout', category: 'Financial Hardware' },
  { title: 'VIP Client Hair Color Formulation Vault', category: 'Guest CRM' },
  { title: 'Sliding Commission & Staff Payroll Calculator', category: 'Team Operations' },
  { title: 'Automated 2-way WhatsApp AI Concierge', category: 'AI Automation' },
  { title: 'Barcoded Retail & Backbar Inventory Audit', category: 'Inventory' },
  { title: 'Cross-Location HQ Consolidated Reporting', category: 'Enterprise Multi-Store' },
];

const searchResults = computed(() => {
  if (!searchQuery.value) return allSearchItems.slice(0, 5);
  return allSearchItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const submitDemo = () => {
  demoSuccess.value = true;
  setTimeout(() => {
    demoOpen.value = false;
    demoSuccess.value = false;
  }, 2000);
};

const submitTrial = () => {
  trialSuccess.value = true;
  setTimeout(() => {
    trialOpen.value = false;
    trialSuccess.value = false;
  }, 2000);
};
</script>

