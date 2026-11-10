<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Pricing View -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- 1. HERO HEADER: Simple, Transparent, Unlimited Staff -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <!-- Ambient luxury glow matching DINGG #AA4184 -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#AA4184]/12 via-[#923470]/10 to-[#AA4184]/8 blur-3xl pointer-events-none rounded-full"></div>

        <!-- Category Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#F5DDEB] shadow-xs">
          <Sparkles class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Unlimited Staff & Free Data Migration On All Plans</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.12]">
          Simple, Transparent Plans. <br />
          <span class="text-[#AA4184]">
            No Per-Staff Fees.
          </span>
        </h1>

        <p class="mt-4 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          Hire as many stylists, therapists, and front-desk coordinators as you want. Enjoy unlimited calendar seats, free data migration, and zero contract lock-in.
        </p>

        <!-- Monthly vs Annual Billing Toggle (Save ~17%) -->
        <div class="mt-10 flex items-center justify-center gap-4">
          <button 
            @click="isAnnual = false"
            class="text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            :class="!isAnnual ? 'text-[#1C151D]' : 'text-[#8E8291] hover:text-[#1C151D]'"
          >
            Monthly Billing
          </button>

          <!-- Toggle switch -->
          <div 
            @click="isAnnual = !isAnnual"
            class="w-14 h-8 rounded-full bg-[#1C151D] p-1 cursor-pointer transition-colors relative flex items-center shadow-inner"
          >
            <div 
              class="w-6 h-6 rounded-full bg-[#AA4184] shadow-md transform transition-transform duration-300"
              :class="isAnnual ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </div>

          <button 
            @click="isAnnual = true"
            class="text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 cursor-pointer"
            :class="isAnnual ? 'text-[#1C151D]' : 'text-[#8E8291] hover:text-[#1C151D]'"
          >
            <span>Annual Billing</span>
            <span class="px-2.5 py-0.5 rounded-full bg-[#AA4184] text-white text-[10px] font-extrabold uppercase shadow-xs">
              Save ~17% (2 Months Free)
            </span>
          </button>
        </div>
      </section>

      <!-- 2. FOUR CORE TIERS GRID: Free -> Essential ($59) -> Advance ($109) -> Expert ($179) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          <!-- TIER 1: Free Starter -->
          <div class="rounded-[28px] bg-white border border-[#F0E6EC] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#AA4184]/40 transition-all duration-300 group">
            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#8E8291] uppercase tracking-wider">Free Starter</span>
                <h3 class="text-xl font-black text-[#1C151D] mt-1">Marketplace Listing</h3>
                <p class="text-xs text-[#5C525E] mt-1">Basic exposure and appointment listing for solopreneurs.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-[#1C151D]">$0</span>
                  <span class="text-xs text-[#8E8291] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#AA4184] font-bold mt-1">Free forever • No credit card</p>
              </div>

              <div class="pt-5 border-t border-[#F0E6EC] space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#8E8291]">Key Capabilities:</p>
                <div v-for="(feat, f) in freeFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#AA4184] shrink-0 mt-0.5" />
                  <span class="text-[#5C525E] leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#F0E6EC]">
              <button 
                @click="trialOnboardingOpen = true"
                class="w-full py-3.5 rounded-full border border-[#D8D3E2] bg-white text-[#1C151D] font-bold text-xs hover:bg-[#FAF7F9] hover:border-[#AA4184] hover:text-[#AA4184] transition-all shadow-xs cursor-pointer"
              >
                Get Started Free
              </button>
            </div>
          </div>

          <!-- TIER 2: Essential ($59/mo) -->
          <div class="rounded-[28px] bg-white border border-[#F0E6EC] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#AA4184]/40 transition-all duration-300 group">
            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#AA4184] uppercase tracking-wider">Independent Salons</span>
                <h3 class="text-xl font-black text-[#1C151D] mt-1">Essential Plan</h3>
                <p class="text-xs text-[#5C525E] mt-1">Complete salon POS, online scheduling, and product inventory.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-[#1C151D]">${{ isAnnual ? '49' : '59' }}</span>
                  <span class="text-xs text-[#8E8291] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#AA4184] font-bold mt-1">
                  {{ isAnnual ? 'Billed annually ($588/yr)' : 'Billed monthly' }}
                </p>
              </div>

              <div class="pt-5 border-t border-[#F0E6EC] space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#8E8291]">Includes Free Tier, plus:</p>
                <div v-for="(feat, f) in essentialFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#AA4184] shrink-0 mt-0.5" />
                  <span class="text-[#5C525E] leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#F0E6EC]">
              <button 
                @click="trialOnboardingOpen = true"
                class="w-full py-3.5 rounded-full bg-[#1C151D] text-white font-bold text-xs hover:bg-[#AA4184] transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                Start 7-Day Free Trial
              </button>
            </div>
          </div>

          <!-- TIER 3: Advance ($109/mo) - MOST POPULAR with DINGG #AA4184 Styling -->
          <div class="rounded-[28px] bg-white border-2 border-[#AA4184] p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(170,65,132,0.15)] relative lg:-translate-y-3">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#AA4184] text-white text-[10px] font-black uppercase tracking-wider shadow-md">
              Most Popular Choice
            </div>

            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#AA4184] uppercase tracking-wider">High-Growth Studios</span>
                <h3 class="text-xl font-black text-[#1C151D] mt-1">Advance Plan</h3>
                <p class="text-xs text-[#5C525E] mt-1">Marketing automation, customer surveys, packages, and loyalty.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-[#AA4184]">${{ isAnnual ? '89' : '109' }}</span>
                  <span class="text-xs text-[#8E8291] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#AA4184] font-bold mt-1">
                  {{ isAnnual ? 'Billed annually ($1,068/yr)' : 'Billed monthly' }}
                </p>
              </div>

              <div class="pt-5 border-t border-[#F0E6EC] space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#8E8291]">Includes Essential, plus:</p>
                <div v-for="(feat, f) in advanceFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#AA4184] shrink-0 mt-0.5" />
                  <span class="text-[#1C151D] font-medium leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#F0E6EC]">
              <button 
                @click="trialOnboardingOpen = true"
                class="w-full py-4 rounded-full bg-[#AA4184] hover:bg-[#923470] text-white font-extrabold text-xs transition-all shadow-lg shadow-[#AA4184]/25 hover:scale-[1.02] cursor-pointer"
              >
                Start 7-Day Free Trial
              </button>
            </div>
          </div>

          <!-- TIER 4: Expert ($179/mo) -->
          <div class="rounded-[28px] bg-white border border-[#F0E6EC] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#AA4184]/40 transition-all duration-300 group">
            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#5C525E] uppercase tracking-wider">Multi-Branch Clinics</span>
                <h3 class="text-xl font-black text-[#1C151D] mt-1">Expert Plan</h3>
                <p class="text-xs text-[#5C525E] mt-1">Enterprise multi-location HQ, custom forms, and dedicated account manager.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-[#1C151D]">${{ isAnnual ? '149' : '179' }}</span>
                  <span class="text-xs text-[#8E8291] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#5C525E] font-bold mt-1">
                  {{ isAnnual ? 'Billed annually ($1,788/yr)' : 'Billed monthly' }}
                </p>
              </div>

              <div class="pt-5 border-t border-[#F0E6EC] space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#8E8291]">Includes Advance, plus:</p>
                <div v-for="(feat, f) in expertFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#AA4184] shrink-0 mt-0.5" />
                  <span class="text-[#5C525E] leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#F0E6EC]">
              <button 
                @click="demoOpen = true"
                class="w-full py-3.5 rounded-full border border-[#D8D3E2] bg-white text-[#1C151D] font-bold text-xs hover:border-[#AA4184] hover:text-[#AA4184] hover:bg-[#FAF7F9] transition-all shadow-xs cursor-pointer"
              >
                Book Enterprise Demo
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- 3. UNLIMITED STAFF VALUE BANNER (DINGG Soft Rose Tint Background) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-3xl bg-[#FAF0F5] border border-[#F5DDEB] text-[#1C151D] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-8 space-y-3">
              <span class="px-3.5 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] border border-[#F5DDEB] font-mono text-[10px] font-bold uppercase">
                The Salonist Advantage
              </span>
              <h2 class="text-2xl sm:text-4xl font-black text-[#1C151D] tracking-tight leading-snug">
                Why pay per seat when your staff changes every month?
              </h2>
              <p class="text-xs sm:text-sm text-[#5C525E] max-w-2xl leading-relaxed">
                Competitors like Vagaro, Fresha, or Boulevard bill you $15-$40 for every single chair or calendar user you add. At Salonist, every paid plan includes unlimited staff profiles at no extra cost. Grow your team without fear of billing shock.
              </p>
            </div>

            <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button 
                @click="trialOnboardingOpen = true"
                class="px-8 py-4 rounded-full bg-[#AA4184] hover:bg-[#923470] text-white font-extrabold text-sm transition-all shadow-md text-center cursor-pointer"
              >
                Start Free 7-Day Trial →
              </button>
              <button 
                @click="demoOpen = true"
                class="px-8 py-3.5 rounded-full border border-[#F0E6EC] bg-white text-[#1C151D] hover:text-[#AA4184] hover:border-[#AA4184] font-bold text-xs transition-colors text-center cursor-pointer shadow-xs"
              >
                Schedule 20-Min Demo
              </button>
            </div>

          </div>
        </div>
      </section>

      <!-- 4. DETAILED FEATURE COMPARISON TABLE (Neat & Clean DINGG Aesthetic) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-2xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            Compare All Features Side-by-Side
          </h2>
          <p class="text-xs sm:text-sm text-[#8E8291] mt-2">
            Everything your business needs to schedule, checkout, and retain clients.
          </p>
        </div>

        <div class="rounded-3xl bg-white border border-[#F0E6EC] shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="bg-[#FAF7F9] border-b border-[#F0E6EC] text-[#1C151D]">
                  <th class="py-5 px-6 font-black text-sm w-2/5">Capability</th>
                  <th class="py-5 px-4 text-center font-bold text-[#5C525E]">Free</th>
                  <th class="py-5 px-4 text-center font-bold text-[#5C525E]">Essential ($59)</th>
                  <th class="py-5 px-4 text-center font-black text-[#AA4184] bg-[#FBF0F6]">Advance ($109)</th>
                  <th class="py-5 px-4 text-center font-bold text-[#5C525E]">Expert ($179)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F0E6EC] text-[#5C525E]">
                <tr v-for="(row, r) in comparisonRows" :key="r" class="hover:bg-[#FAF7F9] transition-colors">
                  <td class="py-4 px-6 font-semibold text-[#1C151D]">
                    {{ row.title }}
                    <span v-if="row.sub" class="block text-[10px] text-[#8E8291] font-normal mt-0.5">{{ row.sub }}</span>
                  </td>
                  <td class="py-4 px-4 text-center font-medium">{{ row.free }}</td>
                  <td class="py-4 px-4 text-center font-medium">{{ row.essential }}</td>
                  <td class="py-4 px-4 text-center font-bold text-[#AA4184] bg-[#FBF0F6]">{{ row.advance }}</td>
                  <td class="py-4 px-4 text-center font-medium">{{ row.expert }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 5. PRICING FAQ ACCORDION -->
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div class="text-center mb-12">
          <span class="inline-block px-3.5 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] border border-[#F5DDEB] font-extrabold text-[11px] uppercase tracking-wider mb-2">
            Pricing Clarification
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#1C151D] tracking-tight">
            Frequently Asked Pricing Questions
          </h2>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIdx) in pricingFaqs" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] hover:border-[#AA4184]/50 transition-all overflow-hidden shadow-xs"
            :class="{ 'border-[#AA4184] ring-1 ring-[#AA4184]/20': openFaq === fIdx }"
          >
            <button 
              @click="openFaq = openFaq === fIdx ? null : fIdx"
              class="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#1C151D] cursor-pointer"
            >
              <span>{{ faq.q }}</span>
              <span class="w-7 h-7 rounded-full bg-[#FAF7F9] flex items-center justify-center text-[#1C151D] text-lg font-light shrink-0" :class="{ 'rotate-45 text-[#AA4184]': openFaq === fIdx }">
                +
              </span>
            </button>
            <div v-show="openFaq === fIdx" class="px-5 pb-5 text-xs text-[#5C525E] leading-relaxed border-t border-[#F0E6EC] pt-3">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </section>

      <!-- 6. FINAL BOTTOM CTA -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOnboardingOpen = true"
          @book-demo="demoOpen = true"
        />
      </div>

    </main>

    <!-- Global Footer -->
    <Footer />

    <!-- Modals -->
    <TrialOnboardingModal 
      v-model="trialOnboardingOpen"
      @close="trialOnboardingOpen = false"
      @switch-to-login="trialOnboardingOpen = false; loginOpen = true"
    />

    <LoginModal 
      v-model="loginOpen"
      @close="loginOpen = false"
      @switch-to-trial="loginOpen = false; trialOnboardingOpen = true"
    />

    <DemoBookingModal 
      v-model="demoOpen"
      @close="demoOpen = false"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Check, Sparkles } from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';

const isAnnual = ref(true);
const openFaq = ref(0);

const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const demoOpen = ref(false);

const freeFeatures = [
  'Up to 50 appointments/mo',
  '24/7 Online Booking Widget',
  'Visual Calendar & Scheduling',
  'Staff Shift & Rota Management',
  'Marketplace Client Listing',
  'Standard Sales Reports'
];

const essentialFeatures = [
  'Unlimited Appointments & Staff',
  'Point of Sale (POS) & Tap-to-Pay',
  'Product Stock & Inventory Audit',
  'Staff Commissions & Tip Tracking',
  'Automated Service SMS Reminders',
  'Free Historical Data Import'
];

const advanceFeatures = [
  'Everything in Essential Plan',
  'Automated Marketing Campaigns',
  'Customer Rewards & Loyalty Points',
  'Customer Survey Feedback System',
  'Multi-Service Package Management',
  'Priority In-App & Phone Support'
];

const expertFeatures = [
  'Everything in Advance Plan',
  'Multi-Location Corporate HQ',
  'Centralized Cross-Branch Inventory',
  'Custom Clinical Consent Forms',
  'Enterprise API & Webhooks',
  'Dedicated Onboarding Account Exec'
];

const comparisonRows = [
  { title: 'Bookable Staff Members', sub: 'No seat licenses or limits', free: 'Unlimited', essential: 'Unlimited', advance: 'Unlimited', expert: 'Unlimited' },
  { title: 'Monthly Appointments', sub: 'Online self-booking & walk-ins', free: '50 / month', essential: 'Unlimited', advance: 'Unlimited', expert: 'Unlimited' },
  { title: 'Point of Sale (POS)', sub: 'Contactless, Stripe, card terminals', free: '—', essential: '✓ Included', advance: '✓ Included', expert: '✓ Included' },
  { title: 'Product & Inventory Stock', sub: 'Barcode scanning & low-stock alerts', free: '—', essential: '✓ Included', advance: '✓ Included', expert: '✓ Included' },
  { title: 'Staff Commissions & Tips', sub: 'Sliding ladders and split tips', free: 'Basic', essential: '✓ Full Suite', advance: '✓ Full Suite', expert: '✓ Multi-location' },
  { title: 'Automated SMS Reminders', sub: '2-way confirmations & waitlist', free: 'Email only', essential: '✓ SMS + Email', advance: '✓ SMS + Email', expert: '✓ WhatsApp + SMS' },
  { title: 'Customer Loyalty & Points', sub: 'Reward regular clients automatically', free: '—', essential: '—', advance: '✓ Included', expert: '✓ Included' },
  { title: 'Customer Feedback Surveys', sub: 'Google & internal review collection', free: '—', essential: '—', advance: '✓ Included', expert: '✓ Included' },
  { title: 'Multi-Location HQ Roster', sub: 'Consolidated reporting across branches', free: '—', essential: '—', advance: '—', expert: '✓ Included' },
  { title: 'Free Client Data Migration', sub: 'Transfer from Vagaro, Fresha, Phorest', free: 'Self-serve', essential: '✓ White-glove', advance: '✓ White-glove', expert: '✓ VIP Expedited' },
];

const pricingFaqs = [
  {
    q: "Do I have to pay extra for adding more staff or stylists?",
    a: "No. Unlike other platforms that charge $15-$40 per calendar seat, every Salonist paid plan includes unlimited staff profiles. Your price stays flat regardless of how many stylists or therapists work in your salon."
  },
  {
    q: "Can I try Salonist before purchasing?",
    a: "Yes! We offer a full-featured 7-day free trial on all plans. No credit card is required to sign up, and you can test online bookings, calendar orchestration, and POS registers immediately."
  },
  {
    q: "How does the annual discount work?",
    a: "When you select annual billing, you receive roughly two months free (~17% discount). For example, the Essential Plan drops from $59/mo to $49/mo, and the Advance Plan drops from $109/mo to $89/mo."
  },
  {
    q: "Can you help me migrate my data from my existing software?",
    a: "Yes. Our engineering team provides complimentary white-glove migration. We securely import all past client books, service lists, formula cards, gift cards, and inventory from platforms like Vagaro, Fresha, Mindbody, and Phorest."
  },
  {
    q: "Are there any long-term contract lock-ins?",
    a: "None at all. You can cancel, downgrade, or upgrade your plan anytime with zero penalty fees. You own 100% of your salon data, exportable at any time."
  }
];
</script>
