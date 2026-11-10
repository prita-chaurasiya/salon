<template>
  <div 
    class="group relative p-7 rounded-[24px] bg-white border border-[#E8EAF2] transition-all duration-300 hover:border-[#681FA8]/60 hover:shadow-[0_15px_35px_rgba(20,11,40,0.08)] hover:-translate-y-1 flex flex-col justify-between"
  >
    <div>
      <div class="w-12 h-12 rounded-2xl bg-[#F4EEFB] border border-[#E8EAF2] flex items-center justify-center text-[#681FA8] group-hover:bg-[#140B28] group-hover:text-[#E11D74] transition-colors duration-300 mb-6">
        <component :is="iconComponent" class="w-6 h-6 stroke-[1.8]" />
      </div>

      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-bold text-[#140B28] tracking-tight group-hover:text-[#681FA8] transition-colors">
          {{ title }}
        </h3>
        <span v-if="tag" class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF5EE] text-[#140B28] border border-[#E8EAF2]">
          {{ tag }}
        </span>
      </div>

      <p class="text-sm leading-relaxed text-[#484357] font-normal mb-6">
        {{ description }}
      </p>

      <ul v-if="bullets && bullets.length" class="space-y-2 mb-6">
        <li 
          v-for="(item, idx) in bullets" 
          :key="idx" 
          class="flex items-center gap-2 text-xs text-[#140B28] font-medium"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-[#E11D74]"></div>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="pt-4 border-t border-[#E8EAF2] flex items-center justify-between text-xs font-bold text-[#140B28] group-hover:text-[#681FA8] transition-colors">
      <span>{{ actionText }}</span>
      <span class="transform transition-transform duration-300 group-hover:translate-x-1 text-[#681FA8]">→</span>
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
    default: 'Calendar'
  },
  tag: {
    type: String,
    default: ''
  },
  bullets: {
    type: Array,
    default: () => []
  },
  actionText: {
    type: String,
    default: 'Explore module'
  }
});

const iconComponent = computed(() => {
  return LucideIcons[props.icon] || LucideIcons.Sparkles;
});
</script>
