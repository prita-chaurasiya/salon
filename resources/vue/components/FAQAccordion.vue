<template>
  <div class="max-w-4xl mx-auto space-y-3">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="border rounded-2xl bg-white overflow-hidden transition-all duration-200"
      :class="openIndex === index ? 'border-[#9E7844] shadow-md ring-1 ring-[#9E7844]/20' : 'border-[#E8E8EC] hover:border-neutral-300'"
    >
      <button 
        @click="toggle(index)"
        class="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#121214]"
      >
        <span class="flex items-center gap-3">
          <span class="text-xs font-bold text-[#9E7844] w-6 shrink-0">{{ String(index + 1).padStart(2, '0') }}.</span>
          <span>{{ item.question }}</span>
        </span>
        <div 
          class="w-8 h-8 rounded-full border border-[#E8E8EC] flex items-center justify-center shrink-0 transition-transform duration-200 bg-[#FAFAFB]"
          :class="{ 'rotate-180 bg-[#121214] text-[#D8BA84] border-[#121214]': openIndex === index }"
        >
          <ChevronDown class="w-4 h-4" />
        </div>
      </button>

      <div 
        v-show="openIndex === index" 
        class="px-5 pb-6 md:px-6 pt-0 text-sm md:text-base leading-relaxed text-[#4A4A52] font-normal border-t border-[#FAFAFB]"
      >
        <div class="pt-4 pl-9">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

defineProps({
  items: {
    type: Array,
    required: true
  }
});

const openIndex = ref(0);

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx;
};
</script>
