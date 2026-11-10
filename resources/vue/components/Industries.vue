<template>
  <section class="py-24 bg-[#F8F8F8] border-b border-[#ECECEC]" id="industries">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        badge="Tailored For Every Specialty"
        title="Engineered Specifically For"
        highlight="Your Aesthetic Domain."
        subtitle="Aurum does not force a generic booking template onto your craft. Each vertical includes customized workflows, charting rules, and operational blueprints."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <IndustryCard
          v-for="(ind, idx) in industries"
          :key="idx"
          :title="ind.title"
          :description="ind.description"
          :icon="ind.icon"
          :stats="ind.stats"
          :badges="ind.badges"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import IndustryCard from './IndustryCard.vue';

const industries = [
  {
    title: 'Hair Salons',
    description: 'Master color formulas, chair rental splits, processing gap management, and high-frequency shampoo bar retail.',
    icon: 'Scissors',
    stats: '6,400+ Salons',
    badges: ['Color Bar Formulator', 'Processing Buffers', 'Chair Rental Tiers']
  },
  {
    title: 'Luxury Spas',
    description: 'Multi-service treatment packages, room allocation, sauna turns, quiet-zone guest alerts, and therapist rotation.',
    icon: 'Sparkles',
    stats: '2,900+ Spas',
    badges: ['Room Orchestration', 'Quiet Check-in', 'Package Series']
  },
  {
    title: 'Beauty Clinics',
    description: 'Clinical consultation notes, facial analysis records, aesthetic photo timelines, and post-procedure follow-ups.',
    icon: 'Stethoscope',
    stats: '1,800+ Clinics',
    badges: ['Treatment Records', 'Photo Galleries', 'Medical Consents']
  },
  {
    title: 'Modern Barbershops',
    description: 'Rapid walk-in queues, self-service kiosk check-ins, beard oil inventory, and tiered barber commission structures.',
    icon: 'Flame',
    stats: '2,100+ Shops',
    badges: ['Live Queue Board', 'Express Kiosk', 'Split Gratuities']
  },
  {
    title: 'Tattoo Studios',
    description: 'Custom legal liability waivers, photo references, deposit collections, hourly pricing, and artist booth accounts.',
    icon: 'Shield',
    stats: '850+ Studios',
    badges: ['Digital Waivers', 'Booths & Deposits', 'Hourly Worksheets']
  },
  {
    title: 'Massage Centers',
    description: 'Therapist preference matching, pressure preferences, specialized treatment rooms, and prepaid massage memberships.',
    icon: 'HeartHandshake',
    stats: '1,100+ Centers',
    badges: ['Therapist Matching', 'Room Turnaround', 'Monthly Club']
  },
  {
    title: 'Medical Spas',
    description: 'Botox unit counters, medical director oversight logs, automated pre/post care instructions, and HIPAA safeguards.',
    icon: 'Activity',
    stats: '1,450+ Medispas',
    badges: ['Botox Unit Log', 'HIPAA Secure', 'Practitioner Oversight']
  },
  {
    title: 'Nail Salons & Lounges',
    description: 'Fast station turnover, add-on nail art pricing, walk-in management, and technician polish shade logs.',
    icon: 'Gem',
    stats: '3,200+ Lounges',
    badges: ['Station Rotation', 'Express Walk-ins', 'Shade Archives']
  }
];
</script>

