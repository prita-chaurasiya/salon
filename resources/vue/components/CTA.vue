<template>
  <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#1E1B4B] text-white p-10 md:p-16 lg:p-20 border border-purple-500/30 shadow-[0_25px_60px_rgba(88,28,135,0.25)] card-3d">
    
    <!-- 3D Glow Orbs behind content -->
    <div class="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl pointer-events-none animate-orb-1"></div>
    <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none animate-orb-2"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-pink-300 border border-pink-400/30 backdrop-blur-md shadow-xs">
        <Sparkles class="w-3.5 h-3.5 text-[#EC4899]" />
        {{ badge }}
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight !text-white leading-[1.15]">
        {{ title }}
      </h2>

      <p class="mt-6 text-base sm:text-lg !text-purple-100 font-normal leading-relaxed max-w-2xl mx-auto">
        {{ subtitle }}
      </p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          @click="$emit('start-trial')"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#581C87] font-extrabold text-sm hover:bg-purple-50 transition-all duration-200 shadow-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Start Free 7-Day Trial</span>
          <ArrowRight class="w-4 h-4 text-[#7E22CE]" />
        </button>

        <button 
          @click="$emit('book-demo')"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-extrabold text-sm hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          <span>Book A 20-Min Demo</span>
        </button>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs !text-purple-200">
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#EC4899]" />
          <span class="!text-purple-200">No credit card required</span>
        </div>
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#EC4899]" />
          <span class="!text-purple-200">Unlimited staff included</span>
        </div>
        <div class="flex items-center gap-2">
          <Check class="w-4 h-4 text-[#EC4899]" />
          <span class="!text-purple-200">Free white-glove data migration</span>
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
