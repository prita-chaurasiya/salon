<template>
  <section class="py-16 md:py-24 bg-[#F7F5FA]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Big Rounded 28px White Card with Border & Shadow -->
      <div class="rounded-[28px] bg-white border border-[#ECE8F2] p-8 sm:p-12 lg:p-14 card-3d">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <!-- Left Text Content (6.5 cols) -->
          <div class="lg:col-span-7 space-y-6 text-left">
            
            <!-- Pill Badge: • WHY SALONIST -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F3ECFF] text-[#6D28D9] border border-[#E9E5F0]">
              <span class="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
              <span>WHY SALONIST</span>
            </div>

            <!-- Heading -->
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B2E] tracking-tight leading-[1.15]">
              One Platform to Run <span class="text-[#2B2237]">Your Salon</span>
            </h2>

            <!-- Exact Copy from Screenshot 1 -->
            <p class="text-base sm:text-[17px] text-[#5B5568] font-normal leading-relaxed">
              Running a salon means wearing every hat at once — receptionist, accountant, marketer and manager. Salonist brings all of it together. As a complete salon management system, it handles appointment scheduling, payments, inventory, staff payroll and client marketing in a single dashboard. Whether you run one chair or a chain of locations, you always know what's booked, what's selling and what's due — so you can spend less time on admin and more time with clients.
            </p>

            <!-- Action CTA Button -->
            <div class="pt-2">
              <button 
                @click="$emit('start-trial')"
                class="px-8 py-4 rounded-full bg-[#2B2237] hover:bg-[#3B2E4F] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
              >
                <span>Start Free Trial</span>
              </button>
            </div>

          </div>

          <!-- Right Hardware POS Register & Velvet Curtain Studio Image (5.5 cols) -->
          <div class="lg:col-span-5">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-[#ECE8F2] group">
              <!-- Salon Station Photography Backdrop -->
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80" 
                alt="Salon Workstation" 
                class="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <!-- Inset Live White POS Cash Drawer & Stand Terminal Simulation -->
              <div class="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#ECE8F2] shadow-lg flex items-center justify-between">
                <div>
                  <p class="text-xs font-bold text-[#1E1B2E]">Salonist Integrated Countertop POS</p>
                  <p class="text-[11px] text-[#5B5568]">Smart Touch Display &bull; Cash Drawer &bull; Contactless Reader</p>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F3ECFF] text-[#6D28D9]">
                  Ready
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineEmits(['start-trial']);
</script>
