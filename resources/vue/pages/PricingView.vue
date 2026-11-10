<template>
  <div class="min-h-screen bg-white text-[#0A0D17] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Pricing View -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- 1. HERO HEADER: Simple, Transparent, Unlimited Staff -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <!-- Ambient luxury glow -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#0F766E]/12 via-[#0284C7]/15 to-[#D97706]/10 blur-3xl pointer-events-none rounded-full"></div>

        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFBF1] text-[#0F766E] font-extrabold text-xs uppercase tracking-wider mb-5 shadow-xs">
          <Sparkles class="w-3.5 h-3.5" />
          <span>New Simplified Pricing: Unlimited Staff On All Plans</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0D17] tracking-tight leading-[1.12]">
          Simple, Transparent Plans. <br />
          <span class="bg-gradient-to-r from-[#0F766E] via-[#0284C7] to-[#D97706] bg-clip-text text-transparent">
            No Per-Staff Fees.
          </span>
        </h1>

        <p class="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          Hire as many stylists, therapists, and front-desk coordinators as you want. Enjoy unlimited calendar seats, free data migration, and zero contract lock-in.
        </p>

        <!-- Monthly vs Annual Billing Toggle (Save 17%) -->
        <div class="mt-10 flex items-center justify-center gap-4">
          <button 
            @click="isAnnual = false"
            class="text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            :class="!isAnnual ? 'text-[#0A0D17]' : 'text-[#64748B] hover:text-[#0A0D17]'"
          >
            Monthly Billing
          </button>

          <!-- Toggle switch -->
          <div 
            @click="isAnnual = !isAnnual"
            class="w-14 h-8 rounded-full bg-[#0A0D17] p-1 cursor-pointer transition-colors relative flex items-center shadow-inner"
          >
            <div 
              class="w-6 h-6 rounded-full bg-gradient-to-r from-[#0F766E] to-[#0284C7] shadow-md transform transition-transform duration-300"
              :class="isAnnual ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </div>

          <button 
            @click="isAnnual = true"
            class="text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 cursor-pointer"
            :class="isAnnual ? 'text-[#0A0D17]' : 'text-[#64748B] hover:text-[#0A0D17]'"
          >
            <span>Annual Billing</span>
            <span class="px-2 py-0.5 rounded-full bg-[#0F766E] text-white text-[10px] font-extrabold uppercase shadow-xs">
              Save ~17% (2 Months Free)
            </span>
          </button>
        </div>
      </section>

      <!-- 2. FOUR CORE TIERS GRID: Free -> Essential ($59) -> Advance ($109) -> Expert ($179) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          <!-- TIER 1: Free Marketplace Listing -->
          <div class="rounded-[28px] bg-white border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#0F766E]/40 transition-all duration-300 group">
            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#64748B] uppercase tracking-wider">Free Starter</span>
                <h3 class="text-xl font-black text-[#0A0D17] mt-1">Marketplace Listing</h3>
                <p class="text-xs text-[#64748B] mt-1">Basic exposure and appointment listing for solopreneurs.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-[#0A0D17]">$0</span>
                  <span class="text-xs text-[#64748B] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#0F766E] font-bold mt-1">Free forever • No credit card</p>
              </div>

              <div class="pt-5 border-t border-[#F1F5F9] space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Key Capabilities:</p>
                <div v-for="(feat, f) in freeFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span class="text-[#334155] leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#F1F5F9]">
              <button 
                @click="trialOnboardingOpen = true"
                class="w-full py-3.5 rounded-full border-2 border-[#0A0D17] text-[#0A0D17] font-bold text-xs hover:bg-[#0A0D17] hover:text-white transition-all shadow-xs"
              >
                Get Started Free
              </button>
            </div>
          </div>

          <!-- TIER 2: Essential ($59/mo) -->
          <div class="rounded-[28px] bg-white border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#0F766E]/40 transition-all duration-300 group">
            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#0F766E] uppercase tracking-wider">Independent Salons</span>
                <h3 class="text-xl font-black text-[#0A0D17] mt-1">Essential Plan</h3>
                <p class="text-xs text-[#64748B] mt-1">Complete salon POS, online scheduling, and product inventory.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-[#0A0D17]">${{ isAnnual ? '49' : '59' }}</span>
                  <span class="text-xs text-[#64748B] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#0F766E] font-bold mt-1">
                  {{ isAnnual ? 'Billed annually ($588/yr)' : 'Billed monthly' }}
                </p>
              </div>

              <div class="pt-5 border-t border-[#F1F5F9] space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Includes Free Tier, plus:</p>
                <div v-for="(feat, f) in essentialFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span class="text-[#334155] leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#F1F5F9]">
              <button 
                @click="trialOnboardingOpen = true"
                class="w-full py-3.5 rounded-full bg-[#0A0D17] text-white font-bold text-xs hover:bg-[#0F766E] transition-all shadow-md hover:scale-[1.02]"
              >
                Start 7-Day Free Trial
              </button>
            </div>
          </div>

          <!-- TIER 3: Advance ($109/mo) - MOST POPULAR -->
          <div class="rounded-[28px] bg-[#0A0D17] text-white border-2 border-[#0F766E] p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative lg:-translate-y-3">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0F766E] via-[#0284C7] to-[#D97706] text-white text-[10px] font-black uppercase tracking-wider shadow-md">
              Most Popular Choice
            </div>

            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#2DD4BF] uppercase tracking-wider">High-Growth Studios</span>
                <h3 class="text-xl font-black text-white mt-1">Advance Plan</h3>
                <p class="text-xs text-[#94A3B8] mt-1">Marketing automation, customer surveys, packages, and loyalty.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-white">${{ isAnnual ? '89' : '109' }}</span>
                  <span class="text-xs text-[#94A3B8] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#2DD4BF] font-bold mt-1">
                  {{ isAnnual ? 'Billed annually ($1,068/yr)' : 'Billed monthly' }}
                </p>
              </div>

              <div class="pt-5 border-t border-white/10 space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Includes Essential, plus:</p>
                <div v-for="(feat, f) in advanceFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <span class="text-[#E2E8F0] leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-white/10">
              <button 
                @click="trialOnboardingOpen = true"
                class="w-full py-4 rounded-full bg-gradient-to-r from-[#0F766E] via-[#0284C7] to-[#D97706] text-white font-extrabold text-xs hover:opacity-95 transition-all shadow-xl hover:scale-[1.02]"
              >
                Start 7-Day Free Trial
              </button>
            </div>
          </div>

          <!-- TIER 4: Expert ($179/mo or Custom Enterprise) -->
          <div class="rounded-[28px] bg-white border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#0F766E]/40 transition-all duration-300 group">
            <div>
              <div class="mb-4">
                <span class="text-[11px] font-extrabold text-[#0284C7] uppercase tracking-wider">Multi-Branch Clinics</span>
                <h3 class="text-xl font-black text-[#0A0D17] mt-1">Expert Plan</h3>
                <p class="text-xs text-[#64748B] mt-1">Enterprise multi-location HQ, custom forms, and dedicated account manager.</p>
              </div>

              <div class="my-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-[#0A0D17]">${{ isAnnual ? '149' : '179' }}</span>
                  <span class="text-xs text-[#64748B] font-semibold">/month</span>
                </div>
                <p class="text-[11px] text-[#0284C7] font-bold mt-1">
                  {{ isAnnual ? 'Billed annually ($1,788/yr)' : 'Billed monthly' }}
                </p>
              </div>

              <div class="pt-5 border-t border-[#F1F5F9] space-y-3 text-xs">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Includes Advance, plus:</p>
                <div v-for="(feat, f) in expertFeatures" :key="f" class="flex items-start gap-2.5">
                  <Check class="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span class="text-[#334155] leading-tight">{{ feat }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#F1F5F9]">
              <button 
                @click="demoOpen = true"
                class="w-full py-3.5 rounded-full bg-[#0A0D17] text-white font-bold text-xs hover:bg-[#0284C7] transition-all shadow-md hover:scale-[1.02]"
              >
                Book Enterprise Demo
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- 3. UNLIMITED STAFF VALUE BANNER (Signature Salonist Feature) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-3xl bg-gradient-to-r from-[#0A0D17] via-[#0F766E] to-[#0284C7] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-8 space-y-3">
              <span class="px-3.5 py-1 rounded-full bg-white/20 text-white font-mono text-[10px] font-bold uppercase">
                The Salonist Advantage
              </span>
              <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                Why pay per seat when your staff changes every month?
              </h2>
              <p class="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
                Competitors like Vagaro, Fresha, or Boulevard bill you $15-$40 for every single chair or calendar user you add. At Salonist, every paid plan includes unlimited staff profiles at no extra cost. Grow your team without fear of billing shock.
              </p>
            </div>

            <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button 
                @click="trialOnboardingOpen = true"
                class="px-8 py-4 rounded-full bg-white text-[#0A0D17] font-extrabold text-sm hover:bg-[#CCFBF1] transition-all shadow-lg text-center"
              >
                Start Free 7-Day Trial →
              </button>
              <button 
                @click="demoOpen = true"
                class="px-8 py-3.5 rounded-full border border-white/40 text-white font-bold text-xs hover:bg-white/10 transition-colors text-center"
              >
                Schedule 20-Min Demo
              </button>
            </div>

          </div>
        </div>
      </section>

      <!-- 4. DETAILED FEATURE COMPARISON TABLE (Like Salonist.io) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-2xl sm:text-4xl font-black text-[#0A0D17] tracking-tight">
            Compare All Features Side-by-Side
          </h2>
          <p class="text-xs sm:text-sm text-[#64748B] mt-2">
            Everything your business needs to schedule, checkout, and retain clients.
          </p>
        </div>

        <div class="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0A0D17]">
                  <th class="py-5 px-6 font-black text-sm w-2/5">Capability</th>
                  <th class="py-5 px-4 text-center font-bold">Free</th>
                  <th class="py-5 px-4 text-center font-bold">Essential ($59)</th>
                  <th class="py-5 px-4 text-center font-black text-[#0F766E] bg-[#F0FDFA]">Advance ($109)</th>
                  <th class="py-5 px-4 text-center font-bold">Expert ($179)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E8F0] text-[#334155]">
                <tr v-for="(row, r) in comparisonRows" :key="r" class="hover:bg-[#F8FAFC]">
                  <td class="py-4 px-6 font-semibold text-[#0A0D17]">
                    {{ row.title }}
                    <span v-if="row.sub" class="block text-[10px] text-[#64748B] font-normal mt-0.5">{{ row.sub }}</span>
                  </td>
                  <td class="py-4 px-4 text-center font-medium">{{ row.free }}</td>
                  <td class="py-4 px-4 text-center font-medium">{{ row.essential }}</td>
                  <td class="py-4 px-4 text-center font-bold text-[#0F766E] bg-[#F0FDFA]">{{ row.advance }}</td>
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
          <span class="inline-block px-3.5 py-1 rounded-full bg-[#CCFBF1] text-[#0F766E] font-extrabold text-[11px] uppercase tracking-wider mb-2">
            Pricing Clarification
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#0A0D17] tracking-tight">
            Frequently Asked Pricing Questions
          </h2>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIdx) in pricingFaqs" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/50 transition-all overflow-hidden shadow-xs"
            :class="{ 'border-[#0F766E] ring-1 ring-[#0F766E]/30': openFaq === fIdx }"
          >
            <button 
              @click="openFaq = openFaq === fIdx ? null : fIdx"
              class="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0A0D17]"
            >
              <span>{{ faq.q }}</span>
              <span class="w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0A0D17] text-lg font-light shrink-0" :class="{ 'rotate-45 text-[#0F766E]': openFaq === fIdx }">
                +
              </span>
            </button>
            <div v-show="openFaq === fIdx" class="px-5 pb-5 text-xs text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pt-3">
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
