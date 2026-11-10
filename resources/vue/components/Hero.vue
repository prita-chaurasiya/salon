<template>
  <section class="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#FCFCFB]">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Split 2-Column Hero: Left Copy, Right Interactive Stand Tablet -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        <!-- Left Content (6 cols) -->
        <div class="lg:col-span-6 space-y-6 text-left">
          
          <!-- Small pill badge with live animation -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[12px] font-bold border border-[#E5E7E6] bg-[#E8F4F3] text-[#0F3D3E] shadow-xs">
            <span class="w-2.5 h-2.5 rounded-full bg-[#5FA8A9] animate-ping"></span>
            <span>Trusted by 15,000+ salons worldwide</span>
          </div>

          <!-- Large Heading with Clean Luxury Typography - No Gradients -->
          <h1 class="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-[#1E293B] leading-[1.08]">
            Salon Software to <br class="hidden sm:inline" />
            <span class="text-[#0F3D3E]">
              Grow Your Business
            </span>
          </h1>

          <!-- Professional Copy -->
          <p class="text-base sm:text-[17px] text-[#4B5563] font-normal leading-relaxed max-w-xl">
            Salonist is all-in-one salon management software built to run your whole business from one place. Take online bookings around the clock, check clients out at the POS, track stock, pay your staff and keep customers coming back — without juggling five different tools.
          </p>

          <!-- Buttons: Start Free 7-Day Trial & Book A 20-Min Demo -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <!-- 7-Day Trial CTA -->
            <button 
              @click="$emit('start-trial')"
              class="px-8 py-4 rounded-full bg-[#0F3D3E] text-white font-extrabold text-sm hover:bg-[#134A4C] hover:scale-105 active:scale-95 shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Start Free 7-Day Trial</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <!-- 20-Min Demo CTA -->
            <button 
              @click="$emit('open-demo')"
              class="px-8 py-4 rounded-full border border-[#D9E2E1] bg-white text-[#1E293B] font-extrabold text-sm hover:bg-[#F5F7F6] hover:border-[#0F3D3E] hover:text-[#0F3D3E] transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar class="w-4 h-4 text-[#0F3D3E]" />
              <span>Book A 20-Min Demo</span>
            </button>
          </div>

          <!-- Subtext under buttons -->
          <div class="pt-2 text-xs text-[#6B7280] font-medium flex items-center gap-2">
            <span>Free 7 days</span>
            <span>•</span>
            <span>Unlimited staff, one price</span>
            <span>•</span>
            <span>We move your data in</span>
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
