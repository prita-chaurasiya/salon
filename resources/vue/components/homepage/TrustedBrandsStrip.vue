<template>
  <div class="py-12 border-b border-[#E8EAF2] bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
      <h3 class="text-xl sm:text-2xl font-bold text-[#140B28]">
        Trusted Growth Software for Beauty & Wellness
      </h3>
    </div>
    
    <!-- Exact pill badges for brands from screenshot 1 -->
    <div class="max-w-6xl mx-auto px-4 overflow-x-auto py-2">
      <div class="flex items-center justify-center gap-4 min-w-max">
        <div 
          v-for="(brand, i) in brandPills" 
          :key="i"
          class="px-6 py-3 rounded-full border border-[#E8EAF2] bg-white shadow-xs hover:border-[#681FA8] hover:shadow-sm transition-all flex items-center justify-center"
        >
          <span :class="brand.style" class="text-sm font-semibold tracking-wide">
            {{ brand.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const brandPills = [
  { name: 'Buqval®', style: 'font-serif italic text-base text-[#140B28]' },
  { name: 'Aroma De Beauté', style: 'font-serif text-xs uppercase tracking-widest text-amber-800' },
  { name: 'Meraki Salon', style: 'font-sans font-bold text-emerald-700 tracking-wider' },
  { name: 'Stile Hair Lab', style: 'font-serif italic text-lg text-neutral-800' },
  { name: 'LOOKS SALON • BODY | FACE | SKIN', style: 'font-sans font-black text-xs text-[#140B28]' },
  { name: 'Doreen Glow', style: 'font-serif italic text-sm text-neutral-700' },
];
</script>

