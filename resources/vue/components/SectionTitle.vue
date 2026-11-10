<template>
  <div class="mb-14" :class="center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'">
    <div 
      v-if="badge" 
      class="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full text-xs font-bold tracking-wider uppercase border border-[#E8EAF2] bg-[#FAF5EE] text-[#140B28] shadow-xs"
    >
      <span class="w-2 h-2 rounded-full bg-[#E11D74] animate-pulse"></span>
      {{ badge }}
    </div>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#140B28] leading-[1.15]">
      {{ title }}
      <span v-if="highlight" class="block text-salon-gradient mt-1">{{ highlight }}</span>
    </h2>
    <p v-if="subtitle" class="mt-4 text-base md:text-lg text-[#484357] font-normal leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  badge: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  highlight: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  center: {
    type: Boolean,
    default: true
  }
});
</script>
