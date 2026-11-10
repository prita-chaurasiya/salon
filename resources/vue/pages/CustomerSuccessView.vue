<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= HERO ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center gap-2 text-xs font-semibold text-[#8E8291] mb-6">
          <router-link to="/" class="hover:text-[#AA4184] transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/why-choose-salonist" class="hover:text-[#AA4184] transition-colors">Why Salonist</router-link>
          <span>/</span>
          <span class="text-[#AA4184] font-bold">Customer Success Stories</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-6 shadow-xs">
          <Trophy class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Proven Business Transformations</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          How Leading Beauty Brands <br />
          <span class="text-[#AA4184]">Scale with Salonist</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          Read real case studies from single-chair studios, luxury spa sanctuaries, and 20+ unit salon franchises that automated bookings, elevated client retention, and maximized revenue.
        </p>
      </section>

      <!-- ================= KEY STATS STRIP ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(st, idx) in successMetrics" 
            :key="idx"
            class="rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xs text-center"
          >
            <div class="text-3xl sm:text-4xl font-black text-[#AA4184] mb-2 tracking-tight">
              {{ st.value }}
            </div>
            <div class="text-xs sm:text-sm font-bold text-[#1C151D]">
              {{ st.label }}
            </div>
          </div>
        </div>
      </section>

      <!-- ================= DETAILED CASE STUDIES ================= -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-12">
        <div 
          v-for="(cs, idx) in caseStudies" 
          :key="idx"
          class="rounded-3xl bg-white border border-[#F0E6EC] p-8 sm:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div class="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-[#F0E6EC]">
            <img :src="cs.image" :alt="cs.name" class="w-full h-full object-cover" />
          </div>

          <div class="lg:col-span-7 space-y-5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black uppercase tracking-wider text-[#AA4184] bg-[#FBF0F6] px-3 py-1 rounded-full">
                {{ cs.type }}
              </span>
              <span class="text-xs text-[#8E8291] font-bold">{{ cs.location }}</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-black text-[#1C151D] leading-tight">
              {{ cs.headline }}
            </h3>

            <p class="text-sm sm:text-base text-[#5C525E] leading-relaxed">
              {{ cs.story }}
            </p>

            <!-- Results Metrics Bar -->
            <div class="grid grid-cols-3 gap-3 pt-3 border-t border-[#F0E6EC]">
              <div v-for="(res, rIdx) in cs.results" :key="rIdx">
                <p class="text-lg sm:text-xl font-black text-[#AA4184]">{{ res.stat }}</p>
                <p class="text-[11px] text-[#8E8291] font-semibold">{{ res.metric }}</p>
              </div>
            </div>

            <!-- Founder Quote -->
            <div class="p-4 rounded-2xl bg-[#FAF7F9] border border-[#F0E6EC] text-xs font-serif italic text-[#1C151D]">
              "{{ cs.quote }}"
              <div class="mt-2 not-italic font-sans font-bold text-[#AA4184]">{{ cs.founder }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= BOTTOM CTA ================= -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOpen = true"
          @book-demo="trialOpen = true"
        />
      </div>

    </main>

    <!-- Footer -->
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
import { Trophy } from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';

const trialOpen = ref(false);
const loginOpen = ref(false);

const successMetrics = [
  { value: '+42%', label: 'Average Rebooking Growth' },
  { value: '78%', label: 'No-Show Reduction' },
  { value: '$2.8M+', label: 'Gift Cards & Memberships Sold' },
  { value: '4.9/5', label: 'Average Client Satisfaction' }
];

const caseStudies = [
  {
    type: 'Luxury Multi-Unit Hair Salon',
    location: 'New York & Miami (5 Branches)',
    headline: 'How Maison Blanc Scaled to 5 Units with Unified CRM & Central Inventory',
    story: 'Maison Blanc struggled with fragmented guest profiles and stock shortages between locations. Salonist provided universal client formulas and automated multi-branch warehouse replenishment.',
    results: [
      { stat: '+54%', metric: 'Multi-Location Booking' },
      { stat: '0%', metric: 'Formula Discrepancies' },
      { stat: '14 hrs', metric: 'Saved on Weekly Payroll' }
    ],
    quote: 'Our guests visit Soho on weekdays and Miami on holidays. Salonist makes their experience completely frictionless.',
    founder: 'Camille Leroux, Creative Director',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80'
  },
  {
    type: 'Medical Spa & Aesthetic Sanctuary',
    location: 'Beverly Hills, CA',
    headline: 'Aura MedSpa Replaced Paper Consents and Reduced No-Shows by 82%',
    story: 'Before Salonist, reception spent 20 minutes per client on clipboards and lost thousands each month from uncollected cancellation fees. Digital consent forms and card deposits revolutionized their bottom line.',
    results: [
      { stat: '82%', metric: 'Fewer Late Cancellations' },
      { stat: '100%', metric: 'Paperless Reception' },
      { stat: '+38%', metric: 'Treatment Package Sales' }
    ],
    quote: 'Our practitioners can pull up treatment records and laser settings on iPads in seconds. Our clinic has never been more organized.',
    founder: 'Dr. Marcus Vance, Medical Director',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80'
  }
];
</script>

