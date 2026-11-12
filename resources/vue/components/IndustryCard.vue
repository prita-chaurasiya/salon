<template>
  <div 
    class="group relative overflow-hidden rounded-2xl bg-white border border-[#ECECEC] p-6 transition-all duration-300 hover:border-[#AA4184] hover:shadow-lg hover:-translate-y-1"
  >
    <div class="flex items-start justify-between mb-5">
      <div class="w-12 h-12 rounded-xl bg-[#F8F8F8] border border-[#ECECEC] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#AA4184] transition-colors">
        <component :is="iconComponent" class="w-6 h-6 stroke-[1.8]" />
      </div>
      <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F8F8F8] text-[#2B2B2B] border border-[#ECECEC]">
        {{ stats }}
      </span>
    </div>

    <h3 class="text-lg font-bold text-[#111111] mb-2">{{ title }}</h3>
    <p class="text-xs md:text-sm text-[#2B2B2B]/75 leading-relaxed mb-4">{{ description }}</p>

    <div class="flex flex-wrap gap-1.5 pt-4 border-t border-[#ECECEC]">
      <span 
        v-for="(badge, i) in badges" 
        :key="i"
        class="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F8F8F8] text-[#2B2B2B]"
      >
        {{ badge }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import * as LucideIcons from 'lucide-vue-next';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'Scissors'
  },
  stats: {
    type: String,
    default: 'Specialized'
  },
  badges: {
    type: Array,
    default: () => []
  }
});

const iconComponent = computed(() => {
  return LucideIcons[props.icon] || LucideIcons.Building2;
});
</script>

