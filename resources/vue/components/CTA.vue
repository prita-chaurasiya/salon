<template>
  <div class="relative overflow-hidden rounded-[32px] bg-[#1F1521] text-white p-10 md:p-16 lg:p-20 border border-[#352037] shadow-[0_20px_50px_rgba(31,21,33,0.25)]">
    
    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-bold uppercase tracking-wider bg-[#352037] text-[#F5DDEB] border border-[#4A264D] shadow-xs">
        <Sparkles class="w-3.5 h-3.5 text-[#AA4184]" />
        {{ badge }}
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight !text-white leading-[1.15]">
        {{ title }}
      </h2>

      <p class="mt-6 text-base sm:text-lg !text-[#E8D3DF] font-normal leading-relaxed max-w-2xl mx-auto">
        {{ subtitle }}
      </p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <!-- Button: Start Free 7-Day Trial (Primary #AA4184 with hover #923470) -->
        <button 
          @click="$emit('start-trial')"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#AA4184] hover:bg-[#923470] text-white font-bold text-sm transition-all duration-200 shadow-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Start Free 7-Day Trial</span>
          <ArrowRight class="w-4 h-4 text-white" />
        </button>

        <!-- Button: Book A 20-Min Demo (Secondary Button #352037) -->
        <button 
          @click="$emit('book-demo')"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#352037] hover:bg-[#4A264D] border border-[#4A264D] text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          <span>Book A 20-Min Demo</span>
        </button>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs !text-[#B49EAF]">
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#AA4184]" />
          <span class="!text-[#E8D3DF]">No credit card required</span>
        </div>
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#AA4184]" />
          <span class="!text-[#E8D3DF]">Unlimited staff included</span>
        </div>
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#AA4184]" />
          <span class="!text-[#E8D3DF]">Free white-glove data migration</span>
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
