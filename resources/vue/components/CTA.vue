<template>
  <div class="relative overflow-hidden rounded-[32px] bg-[#0F3D3E] text-white p-10 md:p-16 lg:p-20 border border-[#134A4C] shadow-[0_20px_50px_rgba(15,61,62,0.15)]">
    
    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-bold uppercase tracking-wider bg-[#134A4C] text-[#5FA8A9] border border-[#365A5B] shadow-xs">
        <Sparkles class="w-3.5 h-3.5 text-[#5FA8A9]" />
        {{ badge }}
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight !text-white leading-[1.15]">
        {{ title }}
      </h2>

      <p class="mt-6 text-base sm:text-lg !text-[#D7E4E3] font-normal leading-relaxed max-w-2xl mx-auto">
        {{ subtitle }}
      </p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          @click="$emit('start-trial')"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0F3D3E] font-extrabold text-sm hover:bg-[#F5F7F6] transition-all duration-200 shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
        >
          <span>Start Free 7-Day Trial</span>
          <ArrowRight class="w-4 h-4 text-[#0F3D3E]" />
        </button>

        <button 
          @click="$emit('book-demo')"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#134A4C] border border-[#365A5B] text-white font-extrabold text-sm hover:bg-[#1E5758] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
        >
          <span>Book A 20-Min Demo</span>
        </button>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs !text-[#D7E4E3]">
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#5FA8A9]" />
          <span class="!text-[#D7E4E3]">No credit card required</span>
        </div>
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#5FA8A9]" />
          <span class="!text-[#D7E4E3]">Unlimited staff included</span>
        </div>
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#5FA8A9]" />
          <span class="!text-[#D7E4E3]">Free white-glove data migration</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sparkles, ArrowRight, Check } from 'lucide-vue-next';

defineProps({
  badge: {
    type: String,
    default: 'Upgrade To Modern Excellence'
  },
  title: {
    type: String,
    default: 'Ready to run your salon from one effortless operating system?'
  },
  subtitle: {
    type: String,
    default: 'Join 15,000+ premier salons, day spas, and aesthetic clinics using Salonist to eliminate no-shows and increase average guest retail order value.'
  }
});

defineEmits(['start-trial', 'book-demo']);
</script>
