<template>
  <div class="rounded-3xl bg-white border border-[#E8E8EC] p-8 md:p-10 transition-all duration-300 hover:border-[#9E7844]/60 hover:shadow-xl flex flex-col justify-between">
    <div>
      <!-- Rating stars -->
      <div class="flex items-center gap-1 mb-6 text-[#9E7844]">
        <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-[#C5A46D] text-[#C5A46D]" />
        <span class="text-xs font-bold text-[#121214] ml-2">5.0 Verified Salon</span>
      </div>

      <!-- Growth metrics badge -->
      <div class="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#F9F5EE] border border-[#E6DFC5]">
        <div>
          <p class="text-[11px] font-bold text-[#7E5F33] uppercase tracking-wider">Revenue Growth</p>
          <p class="text-lg font-extrabold text-[#121214] mt-0.5">{{ revenueGrowth }}</p>
        </div>
        <div>
          <p class="text-[11px] font-bold text-[#7E5F33] uppercase tracking-wider">Appointment Lift</p>
          <p class="text-lg font-extrabold text-[#121214] mt-0.5">{{ appointmentGrowth }}</p>
        </div>
      </div>

      <!-- Quote -->
      <blockquote class="text-sm md:text-base text-[#121214] font-medium leading-relaxed italic mb-8">
        “{{ quote }}”
      </blockquote>
    </div>

    <!-- Author -->
    <div class="flex items-center gap-4 pt-6 border-t border-[#E8E8EC]">
      <img 
        :src="avatar" 
        :alt="author" 
        class="w-12 h-12 rounded-full object-cover border border-[#E8E8EC]"
      />
      <div>
        <p class="text-sm font-bold text-[#121214]">{{ author }}</p>
        <p class="text-xs text-[#4A4A52] font-normal">{{ role }} • {{ company }}</p>
        <p class="text-[11px] text-[#9E7844] font-bold mt-0.5">{{ locations }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Star } from 'lucide-vue-next';

defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  locations: {
    type: String,
    default: 'Multi-location Enterprise'
  },
  avatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  revenueGrowth: {
    type: String,
    default: '+38% YoY'
  },
  appointmentGrowth: {
    type: String,
    default: '+52% Online'
  }
});
</script>
