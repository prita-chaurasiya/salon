<template>
  <div class="py-14 border-y border-[#E8EAF2] bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
      <p class="text-[12px] uppercase tracking-widest font-bold text-[#8A8F9E]">
        {{ label }}
      </p>
    </div>
    
    <!-- Seamless Infinite Logo Scroller with Soft Edge Gradients -->
    <div class="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div class="flex items-center gap-16 py-3 animate-marquee whitespace-nowrap">
        <div 
          v-for="(brand, i) in repeatedBrands" 
          :key="i"
          class="flex items-center gap-3 text-lg font-bold tracking-wider text-[#140B28]/75 hover:text-[#681FA8] transition-colors cursor-pointer"
        >
          <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#681FA8] to-[#E11D74]"></div>
          <span class="font-serif tracking-widest uppercase font-black">{{ brand.name }}</span>
          <span class="text-[10px] font-sans text-neutral-400 uppercase tracking-normal">({{ brand.city }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  label: {
    type: String,
    default: 'Trusted by over 15,000+ premier luxury salons, spas & beauty clinics worldwide'
  }
});

const brands = [
  { name: 'Maison De Beauté', city: 'Paris' },
  { name: 'Atelier Aurelia', city: 'London' },
  { name: 'Verve Hair Lab', city: 'New York' },
  { name: 'Lumière Aesthetics', city: 'Zurich' },
  { name: 'Sartorial Grooming', city: 'Milan' },
  { name: 'Botanica Wellness Spa', city: 'Los Angeles' },
  { name: 'Elysian Nail Lounge', city: 'Dubai' },
  { name: 'Noveau Medispa', city: 'Tokyo' },
  { name: 'The Barber Club', city: 'Sydney' },
];

const repeatedBrands = computed(() => {
  return [...brands, ...brands, ...brands];
});
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
