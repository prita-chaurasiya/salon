<template>
  <div class="mb-14" :class="center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'">
    <div 
      v-if="badge" 
      class="inline-flex items-center gap-2 px-3 py-1 mb-3.5 rounded-full text-[11px] font-bold tracking-wider uppercase border border-[#E5E7E6] bg-[#E8F4F3] text-[#0F3D3E] shadow-xs"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-[#5FA8A9] animate-pulse"></span>
      {{ badge }}
    </div>
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E293B] leading-[1.2]">
      {{ title }}
      <span v-if="highlight" class="block text-[#0F3D3E] mt-1">{{ highlight }}</span>
    </h2>
    <p v-if="subtitle" class="mt-3.5 text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed max-w-2xl mx-auto">
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
