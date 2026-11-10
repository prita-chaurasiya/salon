<template>
  <section class="py-24 bg-[#F8F8F8] border-b border-[#ECECEC]" id="features">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        badge="Enterprise Capabilities"
        title="Everything Required to Scale"
        highlight="Your Salon Empire."
        subtitle="Meticulously engineered tools designed to eliminate operational friction across appointments, staff retention, checkout terminals, and client lifetime value."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="(feat, index) in featureList"
          :key="index"
          :title="feat.title"
          :description="feat.description"
          :icon="feat.icon"
          :tag="feat.tag"
          :bullets="feat.bullets"
          :action-text="feat.actionText"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import FeatureCard from './FeatureCard.vue';

const featureList = [
  {
    title: 'Appointment Booking',
    description: 'Ultra-fast multi-chair appointment scheduler with automatic buffer timing, resource assignments, and conflict avoidance.',
    icon: 'Calendar',
    tag: 'Core OS',
    bullets: ['Color-coded stylist chairs', 'Smart processing buffer times', 'VIP guest priority routing'],
    actionText: 'View booking matrix'
  },
  {
    title: 'Integrated POS & Register',
    description: 'Omnichannel cloud checkout supporting split-bills, custom tips, product scanning, and wireless contactless terminal card readers.',
    icon: 'CreditCard',
    tag: 'Instant Cashier',
    bullets: ['Contactless Apple & Google Pay', 'Split tender by guest or card', 'Automated tax & surcharge rules'],
    actionText: 'Explore POS features'
  },
  {
    title: 'VIP Client CRM',
    description: 'Deep guest dossiers featuring bespoke hair color formulation histories, photo galleries, allergy warnings, and spending tiers.',
    icon: 'Users',
    tag: 'Retention',
    bullets: ['Precise color mixing records', 'Before & after photo portfolios', 'Lifetime retail & service value'],
    actionText: 'See guest CRM'
  },
  {
    title: 'Barcoded Inventory',
    description: 'Track backbar usage vs. boutique retail shelf sales automatically. Receive proactive low-stock alerts and generate supplier purchase orders.',
    icon: 'Package',
    tag: 'Backbar & Retail',
    bullets: ['Automated reorder triggers', 'Backbar consumption cost audits', 'Batch & expiration tracking'],
    actionText: 'Inspect stock system'
  },
  {
    title: 'Hyper-Targeted Marketing',
    description: 'Trigger autonomous SMS and email win-back journeys when regular guests haven’t booked within their custom re-visit window.',
    icon: 'Megaphone',
    tag: 'Automated Growth',
    bullets: ['98% open-rate SMS campaigns', 'Custom birthday luxury perks', 'Google review invitation flow'],
    actionText: 'Launch campaigns'
  },
  {
    title: 'Financial & Audit Reports',
    description: 'Over 120+ pre-built executive audit reports. Inspect hourly chair utilization, therapist product sales index, and real-time P&L.',
    icon: 'BarChart3',
    tag: 'Analytics HQ',
    bullets: ['Daily cash reconciliation balance', 'Chair yield & hourly revenue', 'Exportable to QuickBooks & Xero'],
    actionText: 'Preview financial suite'
  },
  {
    title: 'Commissions & Payroll',
    description: 'Effortlessly automate complex sliding-scale service commissions, product sales incentives, booth rent deductions, and hourly shifts.',
    icon: 'DollarSign',
    tag: 'Accurate Payouts',
    bullets: ['Tiered commission ladders', 'Booth renter booth fee deduction', 'Direct export for payroll systems'],
    actionText: 'Configure compensation'
  },
  {
    title: 'VIP Memberships',
    description: 'Establish recurring predictable revenue with monthly blow-dry clubs, priority treatment credits, and automated member card billing.',
    icon: 'Award',
    tag: 'Recurring ARR',
    bullets: ['Automated monthly credit card charge', 'Unused credit rollover rules', 'VIP discount privilege checks'],
    actionText: 'Build membership clubs'
  },
  {
    title: 'Advanced Salon Analytics',
    description: 'Machine-learning powered forecasts identifying no-show probabilities, peak staffing demands, and guest frequency trends.',
    icon: 'LineChart',
    tag: 'Predictive AI',
    bullets: ['No-show probability scoring', 'Peak booking heatmaps', 'Staff utilization benchmarks'],
    actionText: 'Explore data models'
  },
  {
    title: 'Omnichannel Gift Cards',
    description: 'Sell beautifully designed digital vouchers online 24/7 or provide embossed metallic gift cards in-store with instant QR scanning.',
    icon: 'Gift',
    tag: 'Instant Cashflow',
    bullets: ['Instant email delivery with Apple Wallet', 'Cross-location redemption support', 'Zero expiration balance tracking'],
    actionText: 'Manage vouchers'
  },
  {
    title: 'Curated Service Packages',
    description: 'Package bridal party sessions, full makeover series, or 6-session scalp treatments into bundled pre-paid itineraries.',
    icon: 'Layers',
    tag: 'Higher Order Value',
    bullets: ['Multi-session redemption credits', 'Bridal party group bookings', 'Special package price overrides'],
    actionText: 'Bundle treatments'
  },
  {
    title: 'Intelligent Automations',
    description: 'Run your salon on autopilot with instant SMS reminders, deposit protection policies, and automated waitlist back-filling.',
    icon: 'Repeat',
    tag: 'Hands-off Care',
    bullets: ['No-show card pre-authorization', 'Automatic waitlist SMS claiming', 'Self-service rescheduling portal'],
    actionText: 'Automate operations'
  }
];
</script>

