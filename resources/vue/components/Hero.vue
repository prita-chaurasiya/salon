<template>
  <section class="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#FAFAFD]">
    
    <!-- 3D Radiant Ambient Background Glow Orbs -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none animate-orb-1"></div>
    <div class="absolute top-1/2 -right-20 w-[450px] h-[450px] bg-pink-400/20 rounded-full blur-3xl pointer-events-none animate-orb-2"></div>
    <div class="absolute -bottom-20 left-1/3 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Split 2-Column Hero: Left Copy, Right Interactive Stand Tablet -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        <!-- Left Content (6 cols) -->
        <div class="lg:col-span-6 space-y-6 text-left">
          
          <!-- Small pill badge with 3D live glow animation -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold badge-3d text-[#581C87]">
            <span class="w-2 h-2 rounded-full bg-[#EC4899] animate-ping"></span>
            <span>Trusted by 15,000+ luxury salons & spas worldwide</span>
          </div>

          <!-- Large Heading with 3D Shimmer Gradient Typography -->
          <h1 class="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0F172A] leading-[1.12]">
            Salon Software to <br class="hidden sm:inline" />
            <span class="text-salon-gradient">
              Grow Your Business
            </span>
          </h1>

          <!-- Professional Copy -->
          <p class="text-sm sm:text-base text-[#475569] font-normal leading-relaxed max-w-xl">
            Salonist is all-in-one salon management software built to run your whole business from one place. Take online bookings around the clock, check clients out at the POS, track stock, pay your staff and keep customers coming back — without juggling five different tools.
          </p>

          <!-- Buttons: Start Free 7-Day Trial & Book A 20-Min Demo -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <!-- 7-Day Trial CTA (3D Vibrant Button) -->
            <button 
              @click="$emit('start-trial')"
              class="px-8 py-3.5 rounded-full btn-3d-primary font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start Free 7-Day Trial</span>
              <span class="group-hover:translate-x-1.5 transition-transform">→</span>
            </button>

            <!-- 20-Min Demo CTA -->
            <button 
              @click="$emit('open-demo')"
              class="px-7 py-3.5 rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] font-extrabold text-xs sm:text-sm hover:border-[#7E22CE] hover:text-[#7E22CE] hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Calendar class="w-4 h-4 text-[#7E22CE]" />
              <span>Book A 20-Min Demo</span>
            </button>
          </div>

          <!-- Subtext under buttons -->
          <div class="pt-2 text-xs text-[#64748B] font-medium flex items-center gap-2">
            <span class="text-[#581C87] font-semibold">Free 7 days</span>
            <span>•</span>
            <span>Unlimited staff, one price</span>
            <span>•</span>
            <span class="text-[#EC4899] font-semibold">Instant data migration</span>
          </div>

        </div>

        <!-- Right Realistic Stand Tablet & Julian Chat Widget (6 cols) -->
        <div class="lg:col-span-6 relative pt-4">
          <DashboardMockup />
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Calendar } from 'lucide-vue-next';
import DashboardMockup from './DashboardMockup.vue';

defineEmits(['start-trial', 'open-demo']);
</script>
