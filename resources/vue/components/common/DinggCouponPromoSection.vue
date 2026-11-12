<template>
  <section class="py-16 md:py-24 bg-[#FAF0F5] border-y border-[#F5DDEB] relative overflow-hidden">
    <!-- Ambient subtle background accent -->
    <div class="absolute -top-16 -left-16 w-80 h-80 bg-white/60 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Small Pill / Reduced No-shows Header -->
      <div class="flex items-center justify-end mb-4">
        <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C151D] bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full border border-[#F5DDEB] shadow-xs">
          <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>Reduced no-shows</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        <!-- Left Column: Copy & Details -->
        <div class="lg:col-span-6 space-y-6 text-left">
          
          <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1C151D] tracking-tight leading-tight">
            Easy and Flexible <br class="hidden sm:inline" />
            <span class="text-[#AA4184]">Coupons and Gift Cards</span>
          </h2>

          <p class="text-base sm:text-[17px] text-[#5C525E] font-normal leading-relaxed">
            Promotions and gift cards play a big role in {{ businessType }} growth, especially for new client acquisition. Salonist’s <strong>{{ businessType }} business software</strong> makes it easy to create, manage, and track coupons and gift cards.
          </p>

          <p class="text-base sm:text-[17px] text-[#5C525E] font-normal leading-relaxed">
            Everything is linked to client profiles, so there’s no confusion during redemption. It’s simple, clean, and works well even during busy days.
          </p>

          <!-- Checkpoints / Quick Benefits -->
          <div class="space-y-2.5 pt-2">
            <div class="flex items-center gap-3 text-sm font-semibold text-[#1C151D]">
              <div class="w-5 h-5 rounded-full bg-[#AA4184] text-white flex items-center justify-center text-xs font-bold">✓</div>
              <span>Digital and printable gift vouchers with custom values</span>
            </div>
            <div class="flex items-center gap-3 text-sm font-semibold text-[#1C151D]">
              <div class="w-5 h-5 rounded-full bg-[#AA4184] text-white flex items-center justify-center text-xs font-bold">✓</div>
              <span>Automated expiry alerts and redemption balance tracking</span>
            </div>
            <div class="flex items-center gap-3 text-sm font-semibold text-[#1C151D]">
              <div class="w-5 h-5 rounded-full bg-[#AA4184] text-white flex items-center justify-center text-xs font-bold">✓</div>
              <span>Zero redemption fraud with unique barcode & QR scanning</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-4">
            <button 
              @click="$emit('start-trial')"
              class="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Start Free Trial &rarr;
            </button>
          </div>

        </div>

        <!-- Right Column: Visual with Curved Sage Backdrop & Floating Badges (Pixel-Accurate Screenshot Match) -->
        <div class="lg:col-span-6 flex justify-center">
          <div class="relative w-full max-w-md">
            
            <!-- Curved Sage Teal Backdrop Shape (Exact from Screenshot) -->
            <div class="w-72 h-80 sm:w-80 sm:h-96 rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl bg-[#73BBA3] mx-auto overflow-hidden relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85" 
                alt="Client Booking and Gift Cards" 
                class="w-full h-full object-cover object-top"
              />
            </div>

            <!-- Floating Badge 1: Top Right Orange-Red "Launch Seasonal Promotions" -->
            <div class="absolute top-12 -right-2 sm:-right-6 z-20 px-4 py-2 rounded-xl bg-[#E04F47] text-white text-xs font-bold shadow-lg shadow-red-500/20 transform hover:scale-105 transition-transform duration-200">
              Launch Seasonal Promotions
            </div>

            <!-- Floating Badge 2: Middle Right Magenta-Pink "Use Targeted Discounts On Packages" -->
            <div class="absolute top-1/2 -right-4 sm:-right-8 z-20 px-4 py-2 rounded-xl bg-[#C7387A] text-white text-xs font-bold shadow-lg shadow-pink-500/20 transform hover:scale-105 transition-transform duration-200">
              Use Targeted Discounts On Packages
            </div>

            <!-- Floating Badge 3: Bottom Left Lime-Green "Easily Track Redemption And Sales" -->
            <div class="absolute -bottom-3 -left-2 sm:-left-6 z-20 px-4 py-2 rounded-xl bg-[#CDDC39] text-[#1C151D] text-xs font-black shadow-lg shadow-lime-500/20 transform hover:scale-105 transition-transform duration-200">
              Easily Track Redemption And Sales
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  businessType: {
    type: String,
    default: 'salon & spa'
  }
});

defineEmits(['start-trial']);
</script>

