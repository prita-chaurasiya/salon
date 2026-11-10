<template>
  <section class="py-24 bg-[#F8F9FE] border-b border-[#E8EAF2]" id="how-it-works">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Badge pill matching Screenshot 3 -->
      <div class="text-center mb-4">
        <span class="inline-block px-4 py-1.5 rounded-full bg-[#EFE9FA] text-[#681FA8] font-bold text-xs uppercase tracking-wider">
          How it works
        </span>
      </div>

      <!-- Main Title matching Screenshot 3 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#140B28] tracking-tight">
          Get Started with Salonist in 3 <br class="hidden sm:inline" />
          <span class="bg-gradient-to-r from-[#681FA8] to-[#E11D74] bg-clip-text text-transparent">Simple Steps</span>
        </h2>
      </div>

      <!-- 3-Step Horizontal Connected Timeline matching Screenshot 3 -->
      <div class="relative max-w-4xl mx-auto mb-16">
        
        <!-- Connecting dotted dashed line between steps -->
        <div class="hidden md:block absolute top-7 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-[#D2C5EA] z-0"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center">
          
          <!-- Step 1 -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full bg-[#140B28] text-white font-extrabold text-xl flex items-center justify-center shadow-md mb-6 ring-8 ring-[#F8F9FE]">
              1
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-[#140B28] mb-2.5">
              Sign up free
            </h3>
            <p class="text-xs sm:text-[13px] text-[#554C68] max-w-xs leading-relaxed">
              Create your account in minutes. No credit card needed.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full bg-[#140B28] text-white font-extrabold text-xl flex items-center justify-center shadow-md mb-6 ring-8 ring-[#F8F9FE]">
              2
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-[#140B28] mb-2.5">
              Set up your salon
            </h3>
            <p class="text-xs sm:text-[13px] text-[#554C68] max-w-xs leading-relaxed">
              Add services, staff and prices, or let our team import your existing client data for you.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full bg-[#140B28] text-white font-extrabold text-xl flex items-center justify-center shadow-md mb-6 ring-8 ring-[#F8F9FE]">
              3
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-[#140B28] mb-2.5">
              Start taking bookings
            </h3>
            <p class="text-xs sm:text-[13px] text-[#554C68] max-w-xs leading-relaxed">
              Share your booking link and watch your calendar fill.
            </p>
          </div>

        </div>
      </div>

      <!-- Free Concierge Migration Banner -->
      <div class="max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-white border border-[#E8EAF2] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-[#F8F9FE] border border-[#E8EAF2] flex items-center justify-center text-[#681FA8] shrink-0">
            <Sparkles class="w-6 h-6" />
          </div>
          <div>
            <h4 class="text-sm sm:text-base font-bold text-[#140B28]">Switching from Vagaro, Phorest, Fresha or Mindbody?</h4>
            <p class="text-xs text-[#554C68] mt-0.5">
              Our white-glove engineering team imports all past appointments, client formulas, gift cards, and inventory rosters at zero additional cost.
            </p>
          </div>
        </div>
        <a 
          href="#pricing"
          class="px-6 py-3 rounded-xl bg-[#140B28] text-white font-bold text-xs hover:bg-[#681FA8] transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Request Free Migration Audit
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next';
</script>

