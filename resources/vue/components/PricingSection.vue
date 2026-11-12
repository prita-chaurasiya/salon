<template>
  <section class="py-24 bg-[#F8F8F8] border-b border-[#ECECEC]" id="pricing">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionTitle
        badge="Transparent Investment"
        title="Predictable Pricing for High-Growth"
        highlight="Salons, Spas & Franchises."
        subtitle="Zero hidden transaction penalties. All plans include automated software updates, data encryption, and unlimited client record storage."
        :center="true"
      />

      <!-- Monthly / Annual Toggle -->
      <div class="flex items-center justify-center gap-4 mb-14">
        <span 
          class="text-sm font-semibold cursor-pointer transition-colors"
          :class="!annualBilling ? 'text-[#111111]' : 'text-[#2B2B2B]/60'"
          @click="annualBilling = false"
        >
          Monthly Billing
        </span>

        <button 
          @click="annualBilling = !annualBilling"
          class="relative w-14 h-8 rounded-full bg-[#111111] p-1 transition-colors focus:outline-none"
        >
          <div 
            class="w-6 h-6 rounded-full bg-[#AA4184] transition-transform duration-300"
            :class="{ 'translate-x-6': annualBilling }"
          ></div>
        </button>

        <span 
          class="text-sm font-semibold cursor-pointer transition-colors flex items-center gap-2"
          :class="annualBilling ? 'text-[#111111]' : 'text-[#2B2B2B]/60'"
          @click="annualBilling = true"
        >
          <span>Annual Billing</span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#AA4184] text-[#111111]">
            Save 20%
          </span>
        </span>
      </div>

      <!-- Pricing Tier Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
        <PricingCard
          v-for="(tier, idx) in pricingTiers"
          :key="idx"
          :name="tier.name"
          :tagline="tier.tagline"
          :price-monthly="tier.priceMonthly"
          :price-annual="tier.priceAnnual"
          :annual-billing="annualBilling"
          :features="tier.features"
          :is-popular="tier.isPopular"
          :button-text="tier.buttonText"
        />
      </div>

      <!-- Enterprise Feature Matrix Comparison Table -->
      <div class="rounded-3xl bg-white border border-[#ECECEC] p-6 sm:p-10 shadow-sm overflow-hidden">
        <div class="text-center max-w-xl mx-auto mb-10">
          <h3 class="text-2xl font-bold text-[#111111]">Comprehensive Feature Matrix</h3>
          <p class="text-xs text-[#2B2B2B]/70 mt-1">Detailed comparison across all three platform tiers</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-[#ECECEC] text-[#111111] font-bold">
                <th class="py-4 px-4 w-2/5">Platform Feature</th>
                <th class="py-4 px-4 text-center">Starter</th>
                <th class="py-4 px-4 text-center text-[#AA4184]">Professional</th>
                <th class="py-4 px-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#ECECEC] text-[#2B2B2B]">
              <tr v-for="(row, r) in matrixRows" :key="r" class="hover:bg-[#F8F8F8]">
                <td class="py-3.5 px-4 font-medium text-[#111111]">
                  {{ row.feature }}
                  <span v-if="row.sub" class="block text-[10px] text-[#2B2B2B]/60 font-normal">{{ row.sub }}</span>
                </td>
                <td class="py-3.5 px-4 text-center">{{ row.starter }}</td>
                <td class="py-3.5 px-4 text-center font-semibold text-[#111111] bg-[#AA4184]/5">{{ row.pro }}</td>
                <td class="py-3.5 px-4 text-center font-bold text-[#111111]">{{ row.enterprise }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from './SectionTitle.vue';
import PricingCard from './PricingCard.vue';

const annualBilling = ref(true);

const pricingTiers = [
  {
    name: 'Starter Studio',
    tagline: 'Ideal for boutique independent salons & private beauty suites.',
    priceMonthly: 89,
    priceAnnual: 69,
    isPopular: false,
    buttonText: 'Start 14-Day Free Trial',
    features: [
      'Up to 3 active stylist chairs',
      'Unlimited client bookings & calendar',
      'Integrated card checkout terminal',
      'Client CRM & color formula history',
      'Automated SMS & email appointment confirmations',
      'Standard business hours live support'
    ]
  },
  {
    name: 'Professional',
    tagline: 'For established high-volume salons & luxury aesthetic clinics.',
    priceMonthly: 179,
    priceAnnual: 139,
    isPopular: true,
    buttonText: 'Start 14-Day Free Trial',
    features: [
      'Up to 12 active stylist chairs & suites',
      'Processing buffer gap scheduling automation',
      'Sliding commission & payroll calculator',
      'Retail barcode inventory & low stock reorders',
      'VIP memberships & auto-debit blow-dry clubs',
      'AI WhatsApp 24/7 receptionist bot',
      'Priority 60-second concierge support'
    ]
  },
  {
    name: 'Enterprise Flagship',
    tagline: 'Multi-location salon empires, franchise groups & medical spas.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    isPopular: false,
    buttonText: 'Speak With Enterprise Rep',
    features: [
      'Unlimited chairs, locations & team staff',
      'Centralized HQ master reporting & consolidated P&L',
      'Cross-branch client lookups & gift cards',
      'Custom GraphQL API & Zapier Webhook limits',
      'Dedicated Customer Success Manager',
      'Tailored SLA with 99.99% uptime guarantee',
      'White-glove data migration & staff training'
    ]
  }
];

const matrixRows = [
  { feature: 'Stylist Chairs / Staff Seats', sub: 'Active providers scheduled simultaneously', starter: 'Up to 3', pro: 'Up to 12', enterprise: 'Unlimited' },
  { feature: 'Online Client Self-Booking', sub: 'Instagram & Google Reserve integration', starter: 'Included', pro: 'Included', enterprise: 'Custom Domain White-label' },
  { feature: 'Processing Gap Scheduling', sub: 'Automatic buffer times for color foils', starter: '—', pro: 'Included', enterprise: 'Included' },
  { feature: 'Sliding Scale Commission Payroll', sub: 'Split retail & tiered service compensation', starter: 'Basic', pro: 'Advanced Multi-tier', enterprise: 'Custom Payroll API' },
  { feature: 'AI WhatsApp Concierge', sub: 'Autonomous conversational 24/7 booking', starter: '—', pro: 'Included (1,000 msg/mo)', enterprise: 'Unlimited Volumes' },
  { feature: 'Multi-Location HQ Rollup', sub: 'Consolidated reporting and staff shifting', starter: '—', pro: '—', enterprise: 'Full Multi-Store HQ' },
  { feature: 'Dedicated Account Manager', sub: 'Personal onboarding consultant & phone direct', starter: '—', pro: 'Priority Live Chat', enterprise: 'Dedicated Concierge' },
];
</script>

