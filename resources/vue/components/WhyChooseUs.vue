<template>
  <section class="py-24 bg-white border-b border-[#ECECEC]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        badge="Enterprise Architecture"
        title="Why the World's Best Salons"
        highlight="Choose Salonist Operating System."
        subtitle="Engineered from the ground up for high-throughput studios, multi-location chains, and discerning owners who refuse to compromise."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(card, i) in pillars" 
          :key="i"
          class="p-8 rounded-2xl bg-[#F8F8F8] border border-[#ECECEC] transition-all duration-300 hover:border-[#AA4184] hover:bg-white hover:shadow-lg"
        >
          <div class="w-12 h-12 rounded-xl bg-white border border-[#ECECEC] flex items-center justify-center text-[#111111] mb-6 shadow-sm">
            <component :is="card.icon" class="w-6 h-6 stroke-[1.8] text-[#AA4184]" />
          </div>

          <h3 class="text-xl font-bold text-[#111111] mb-2">{{ card.title }}</h3>
          <p class="text-xs md:text-sm text-[#2B2B2B]/75 leading-relaxed mb-6">{{ card.description }}</p>

          <div class="pt-4 border-t border-[#ECECEC] text-xs font-semibold text-[#111111]">
            {{ card.stat }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Cloud, Zap, ShieldCheck, Smile, Scaling, Headphones } from 'lucide-vue-next';
import SectionTitle from './SectionTitle.vue';

const pillars = [
  {
    icon: Cloud,
    title: 'Pure Cloud Based',
    description: 'No local servers or clunky desktop software to patch. Access your schedule, customer files, and financial audits from any browser or phone.',
    stat: 'Available across all browsers & OS'
  },
  {
    icon: Zap,
    title: 'Ultra-Fast Performance',
    description: 'Under 100ms response times. Bookings, appointments, and POS barcode updates happen at instantaneous speed even during Saturday rush hour.',
    stat: '<100ms global latency'
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    description: 'Full PCI-DSS Level 1 compliance, end-to-end tokenized payment credentials, and SOC2 certified cloud infrastructure safeguards all client data.',
    stat: 'SOC2 Type II & HIPAA certified'
  },
  {
    icon: Smile,
    title: 'Joyfully Intuitive',
    description: 'New apprentices and front-desk coordinators learn the interface in less than 20 minutes with zero confusing sub-menus or tedious training manuals.',
    stat: '98% staff satisfaction score'
  },
  {
    icon: Scaling,
    title: 'Infinitely Scalable',
    description: 'Whether you operate 1 boutique chair in Soho or 85 franchise locations across the globe, Salonist seamlessly scales without missing a single beat.',
    stat: 'Multi-franchise HQ synchronization'
  },
  {
    icon: Headphones,
    title: '24/7 Concierge Support',
    description: 'Real salon operational veterans answering your live chat in under 60 seconds. Emergency weekend phone lines protect your business operations.',
    stat: '<60s live chat response time'
  }
];
</script>

