<template>
  <section class="py-24 bg-[#F8F8F8] border-b border-[#ECECEC]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        badge="Unified Connectivity"
        title="Syncs With Every Tool You"
        highlight="Already Depend On."
        subtitle="Unify payment gateways, SMS delivery pipelines, accounting platforms, and social media booking links in seamless harmony."
        :center="true"
      />

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <div 
          v-for="(item, i) in integrationsList" 
          :key="i"
          class="p-6 rounded-2xl bg-white border border-[#ECECEC] transition-all duration-300 hover:border-[#C8A96A] hover:shadow-md flex flex-col items-center text-center group"
        >
          <div class="w-14 h-14 rounded-2xl bg-[#F8F8F8] border border-[#ECECEC] flex items-center justify-center text-[#111111] font-bold text-xl mb-4 group-hover:bg-[#111111] group-hover:text-[#C8A96A] transition-colors">
            {{ item.short }}
          </div>
          <h4 class="text-sm font-bold text-[#111111] mb-1">{{ item.name }}</h4>
          <p class="text-[11px] text-[#2B2B2B]/70 leading-snug">{{ item.purpose }}</p>
          <span class="mt-3 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Native Sync
          </span>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-xs text-[#2B2B2B]/75">
          Need a bespoke enterprise integration? Explore our <a href="#api" class="font-bold text-[#111111] underline hover:text-[#C8A96A]">GraphQL Developer API</a> and Webhook suites.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';

const integrationsList = [
  { name: 'Google Reserve', short: 'G', purpose: 'Book directly inside Google Maps & Search' },
  { name: 'WhatsApp Business', short: 'WA', purpose: 'Automated 2-way reminders & concierge bot' },
  { name: 'Stripe Payments', short: 'S', purpose: 'Zero-latency card terminals & Apple Pay' },
  { name: 'Zoom Video', short: 'Z', purpose: 'Remote hair & skin aesthetic consultations' },
  { name: 'Razorpay', short: 'R', purpose: 'International multi-currency guest billing' },
  { name: 'Meta & Instagram', short: 'M', purpose: 'Instant "Book Now" buttons on profile bio' },
  { name: 'QuickBooks Online', short: 'QB', purpose: 'Daily financial settlement & ledger sync' },
  { name: 'Zapier Webhooks', short: 'Zp', purpose: 'Connect to 5,000+ custom business apps' },
  { name: 'Omnisend & Klaviyo', short: 'EM', purpose: 'Automated email newsletter journeys' },
  { name: 'Twilio SMS', short: 'SMS', purpose: '99.8% transactional notification deliverability' },
];
</script>

