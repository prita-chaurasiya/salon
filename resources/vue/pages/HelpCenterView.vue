<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      <!-- Breadcrumb -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav class="flex items-center gap-2 text-xs font-semibold text-[#8E8291]">
          <router-link to="/" class="hover:text-[#AA4184] transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/why-choose-salonist" class="hover:text-[#AA4184] transition-colors">Why Salonist</router-link>
          <span>/</span>
          <span class="text-[#AA4184] font-bold">Help Center & Knowledge Base</span>
        </nav>
      </section>

      <!-- Hero Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-6 shadow-xs">
          <HelpCircle class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Salonist Support & Documentation</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          How Can We Help Your <br />
          <span class="text-[#AA4184]">Salon Business Today?</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          Explore complete tutorials, operational playbooks, API references, and troubleshooting guides to master appointments, POS, staff commissions, and inventory.
        </p>

        <!-- Search Bar -->
        <div class="mt-8 max-w-xl mx-auto relative">
          <Search class="w-5 h-5 text-[#8E8291] absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search guides, tutorials (e.g. Stripe setup, split commissions, WhatsApp alerts)..." 
            class="w-full pl-12 pr-4 py-4 rounded-full border border-[#F0E6EC] bg-white text-sm text-[#1C151D] placeholder-[#8E8291] focus:outline-none focus:border-[#AA4184] focus:ring-2 focus:ring-[#AA4184]/20 shadow-md"
          />
        </div>
      </section>

      <!-- Knowledge Categories -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(cat, idx) in categories" 
            :key="idx"
            class="p-7 rounded-3xl bg-white border border-[#F0E6EC] shadow-xs hover:border-[#AA4184] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-2xl bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <component :is="cat.icon" class="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 class="text-xl font-black text-[#1C151D] mb-2 group-hover:text-[#AA4184] transition-colors">
                {{ cat.title }}
              </h3>
              <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed mb-4">
                {{ cat.desc }}
              </p>
            </div>
            
            <div class="pt-4 border-t border-[#F0E6EC] space-y-2 text-xs">
              <a v-for="(article, aIdx) in cat.articles" :key="aIdx" href="#" class="block text-[#1C151D] hover:text-[#AA4184] font-medium transition-colors truncate">
                • {{ article }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Video Tutorials -->
      <section class="bg-[#FAF7F9] border-y border-[#F0E6EC] py-20 mb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-black uppercase tracking-widest text-[#AA4184]">Video Library</span>
            <h2 class="text-3xl font-black text-[#1C151D] tracking-tight mt-1">
              Step-by-Step Video Walkthroughs
            </h2>
            <p class="text-xs sm:text-sm text-[#5C525E] mt-2">
              Watch 2-minute masterclasses on salon POS, chemical processing buffer times, and digital client intake forms.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(v, vIdx) in videoTutorials" :key="vIdx" class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-xs">
              <div class="aspect-video relative bg-neutral-900 overflow-hidden">
                <img :src="v.thumb" :alt="v.title" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-[#1C151D]/30 flex items-center justify-center">
                  <div class="w-12 h-12 rounded-full bg-white/90 text-[#AA4184] flex items-center justify-center shadow-lg">
                    ▶
                  </div>
                </div>
              </div>
              <div class="p-6">
                <span class="text-[10px] font-black text-[#AA4184] uppercase tracking-wider">{{ v.duration }}</span>
                <h4 class="font-bold text-base text-[#1C151D] mt-1">{{ v.title }}</h4>
                <p class="text-xs text-[#5C525E] mt-1">{{ v.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Support & CTA -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOpen = true"
          @book-demo="trialOpen = true"
        />
      </div>
    </main>

    <Footer />

    <TrialOnboardingModal 
      v-model="trialOpen"
      @close="trialOpen = false"
      @switch-to-login="trialOpen = false; loginOpen = true"
    />
    <LoginModal 
      v-model="loginOpen"
      @close="loginOpen = false"
      @switch-to-trial="loginOpen = false; trialOpen = true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  HelpCircle, Search, Calendar, Calculator, 
  Users, Gift, ShieldCheck, Settings 
} from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';

const trialOpen = ref(false);
const loginOpen = ref(false);

const categories = [
  {
    title: 'Appointment & Calendar Setup',
    desc: 'Configure stylists, service durations, processing gaps, and buffer times.',
    icon: Calendar,
    articles: [
      'How to setup chemical processing buffer times',
      'Configuring Google Reserve & Instagram 1-tap bookings',
      'Preventing double-booked treatment rooms & devices'
    ]
  },
  {
    title: 'POS, Cash Register & Card Terminals',
    desc: 'Connecting Stripe terminals, splitting tenders, and barcode scanner pairing.',
    icon: Calculator,
    articles: [
      'Pairing Bluetooth & LAN thermal receipt printers',
      'Setting up custom tip percentage prompts at terminal',
      'Running end-of-day Z-Report cash drawer reconciliation'
    ]
  },
  {
    title: 'Stylist Rota & Commission Payroll',
    desc: 'Managing sliding ladders, product retail incentives, and booth rental deductions.',
    icon: Users,
    articles: [
      'Creating tiered commission ladders based on monthly targets',
      'Deducting weekly booth chair rent automatically',
      'Exporting unified payroll to QuickBooks & Xero'
    ]
  },
  {
    title: 'Coupons, Memberships & Gift Vouchers',
    desc: 'Selling digital vouchers online, holiday discounts, and recurring billing.',
    icon: Gift,
    articles: [
      'Configuring automated monthly membership recurring billing',
      'Selling customized holiday e-gift cards on your website',
      'Restricting discount coupon codes by service category'
    ]
  },
  {
    title: 'Security, Data Export & Migration',
    desc: 'Compliant client data handling, 2FA staff security, and CSV imports.',
    icon: ShieldCheck,
    articles: [
      'Importing past clients, formulas, and inventory from Fresha or Vagaro',
      'Setting granular staff permission roles and contact number redaction',
      'Enabling two-factor authentication (2FA) for front-desk logins'
    ]
  },
  {
    title: 'Marketing Automation & WhatsApp',
    desc: 'Setting automated WhatsApp reminders, win-backs, and birthday vouchers.',
    icon: Settings,
    articles: [
      'Connecting official WhatsApp Business Cloud API',
      'Triggering 4-week haircut maintenance rebooking SMS loops',
      'Setting up automated post-service Google review collection'
    ]
  }
];

const videoTutorials = [
  {
    title: 'Setting Up Your Multi-Chair Master Schedule',
    duration: '2 MIN 40 SEC',
    desc: 'Learn how to configure staff working hours, chair assignments, and processing buffer windows in 3 simple steps.',
    thumb: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Running 15-Second Point of Sale Checkouts',
    duration: '1 MIN 50 SEC',
    desc: 'Ring up haircut services, retail conditioners, split cards, and dispatch digital WhatsApp receipts seamlessly.',
    thumb: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Creating Recurring VIP Salon Memberships',
    duration: '3 MIN 15 SEC',
    desc: 'Build predictable monthly recurring cash flow with automated card subscriptions and service credit rollovers.',
    thumb: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'
  }
];
</script>
