<template>
  <section class="py-24 bg-white border-b border-[#ECECEC]" id="testimonials">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        badge="Proven Business Impact"
        title="Loved By Visionary Founders"
        highlight="Across the Beauty Industry."
        subtitle="Discover how premier salons and multi-location medical spas generate higher client frequency, higher retail basket sizes, and eliminate scheduling chaos."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial
          v-for="(test, i) in testimonials"
          :key="i"
          :quote="test.quote"
          :author="test.author"
          :role="test.role"
          :company="test.company"
          :locations="test.locations"
          :avatar="test.avatar"
          :revenue-growth="test.revenueGrowth"
          :appointment-growth="test.appointmentGrowth"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import Testimonial from './Testimonial.vue';

const testimonials = [
  {
    quote: "Switching to Salonist eliminated 15 hours of weekly front-desk chaos across our three Manhattan salons. Our stylists rebook 88% of clients right from their chairs before guests step out.",
    author: "Elena Rostova",
    role: "Founder & Creative Director",
    company: "Atelier Rostova",
    locations: "3 Locations • New York City",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    revenueGrowth: "+44% Annual Revenue",
    appointmentGrowth: "+62% Online Self-Bookings"
  },
  {
    quote: "The automated processing buffer timing alone paid for the entire platform in our first month. We fit 14 more clients per week into our master colorist chairs without anyone feeling rushed.",
    author: "Jean-Luc Moreau",
    role: "Master Colorist & Co-Owner",
    company: "Maison Moreau Coiffure",
    locations: "Flagship Mayfair • London",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    revenueGrowth: "+$195K Retail Upsells",
    appointmentGrowth: "Zero Double-Bookings"
  },
  {
    quote: "Our medical spa clients expect five-star luxury. Salonist’s clean aesthetic, silent checkout terminal, and encrypted clinical charting match the caliber of our aesthetic injectors perfectly.",
    author: "Dr. Camilla Sterling, MD",
    role: "Medical Director",
    company: "Lumière Aesthetic Wellness",
    locations: "2 Clinics • Beverly Hills & Miami",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    revenueGrowth: "+38% YoY Membership ARR",
    appointmentGrowth: "99.2% Client Satisfaction"
  }
];
</script>

