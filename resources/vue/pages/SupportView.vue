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
          <span class="text-[#AA4184] font-bold">Priority Support & SLAs</span>
        </nav>
      </section>

      <!-- Hero Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-6 shadow-xs">
          <Headphones class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>24/7 Dedicated Concierge Support</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          We’re In Your Corner, <br />
          <span class="text-[#AA4184]">Every Single Day</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          Running a busy salon or spa means you can’t afford downtime on a busy Saturday. Our dedicated support engineers and salon onboarding specialists are ready via live chat, phone, WhatsApp, and Zoom.
        </p>
      </section>

      <!-- 3 Support Channels Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="p-8 rounded-3xl bg-white border border-[#F0E6EC] shadow-xs flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center mb-6">
                <MessageSquare class="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 class="text-xl font-black text-[#1C151D] mb-2">Live In-App Chat</h3>
              <p class="text-sm text-[#5C525E] leading-relaxed mb-6">
                Get real-time answers directly from your Salonist dashboard or mobile app. Average first response time: under 3 minutes.
              </p>
            </div>
            <div class="pt-6 border-t border-[#F0E6EC]">
              <span class="text-xs font-bold text-[#AA4184] flex items-center gap-1.5">
                <span>Available 24/7/365</span>
                <span>•</span>
                <span class="text-emerald-600 font-extrabold">Live Now</span>
              </span>
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-white border-2 border-[#AA4184] p-8 shadow-xl shadow-[#AA4184]/10 relative flex flex-col justify-between">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#AA4184] text-white text-[10px] font-black uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <div class="w-12 h-12 rounded-2xl bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center mb-6">
                <PhoneCall class="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 class="text-xl font-black text-[#1C151D] mb-2">Dedicated Phone Concierge</h3>
              <p class="text-sm text-[#5C525E] leading-relaxed mb-6">
                Direct phone routing to senior product engineers for mission-critical hardware, billing, or multi-location troubleshooting.
              </p>
            </div>
            <div class="pt-6 border-t border-[#F0E6EC]">
              <span class="text-xs font-bold text-[#1C151D]">
                Toll Free: <strong class="text-[#AA4184]">+1 (800) 518-2044</strong>
              </span>
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#F0E6EC] shadow-xs flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center mb-6">
                <Video class="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 class="text-xl font-black text-[#1C151D] mb-2">1-on-1 Zoom Training</h3>
              <p class="text-sm text-[#5C525E] leading-relaxed mb-6">
                Schedule personal onboarding sessions for your front-desk coordinators and salon managers to master the entire system.
              </p>
            </div>
            <div class="pt-6 border-t border-[#F0E6EC]">
              <button @click="trialOpen = true" class="text-xs font-bold text-[#AA4184] hover:underline cursor-pointer">
                Book Training Session →
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- White-Glove Data Migration Banner -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-3xl bg-[#FAF0F5] border border-[#F5DDEB] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-4">
            <span class="px-3 py-1 rounded-full bg-white text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F0E6EC]">
              Complimentary White-Glove Data Migration
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-[#1C151D] leading-tight">
              Switching from Fresha, Mindbody, Vagaro, or Phorest?
            </h2>
            <p class="text-sm text-[#5C525E] leading-relaxed max-w-2xl">
              Don’t worry about re-entering thousands of client files. Our engineering team securely transfers all your client contacts, future bookings, past service receipts, chemical color formulas, and retail inventory free of charge with zero salon downtime.
            </p>
          </div>
          <div class="lg:col-span-4 flex justify-center lg:justify-end">
            <button 
              @click="trialOpen = true"
              class="px-8 py-4 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] text-white font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Request Free Data Migration
            </button>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
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
  Headphones, MessageSquare, PhoneCall, Video 
} from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';

const trialOpen = ref(false);
const loginOpen = ref(false);
</script>
