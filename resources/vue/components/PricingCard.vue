<template>
  <div 
    class="relative rounded-[28px] p-8 transition-all duration-300 flex flex-col justify-between"
    :class="[
      isPopular 
        ? 'bg-[#140B28] text-white ring-2 ring-[#E11D74] shadow-2xl lg:-translate-y-2' 
        : 'bg-white text-[#140B28] border border-[#E8EAF2] hover:border-[#681FA8]/60 hover:shadow-xl'
    ]"
  >
    <div v-if="isPopular" class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#E11D74] text-white text-xs font-bold uppercase tracking-wider shadow">
      Most Popular Choice
    </div>

    <div>
      <div class="flex items-center justify-between mb-4">
        <div>
          <h3 class="text-2xl font-bold tracking-tight">{{ name }}</h3>
          <p class="text-xs mt-1" :class="isPopular ? 'text-gray-300' : 'text-[#484357]'">
            {{ tagline }}
          </p>
        </div>
      </div>

      <div class="my-6">
        <div class="flex items-baseline gap-2">
          <span class="text-5xl font-extrabold tracking-tight">
            {{ price === 'Custom' ? 'Custom' : `${currency}${displayPrice}` }}
          </span>
          <span v-if="price !== 'Custom'" class="text-xs font-medium" :class="isPopular ? 'text-gray-300' : 'text-[#484357]'">
            /location /month
          </span>
        </div>
        <p v-if="annualBilling && price !== 'Custom'" class="text-xs font-bold mt-1 text-[#E11D74]">
          Billed annually (Save 20%)
        </p>
      </div>

      <div class="space-y-4 pt-6 border-t" :class="isPopular ? 'border-[#2C184E]' : 'border-[#E8EAF2]'">
        <p class="text-xs font-semibold uppercase tracking-wider" :class="isPopular ? 'text-gray-300' : 'text-[#140B28]'">
          What is included:
        </p>
        <ul class="space-y-3">
          <li 
            v-for="(feature, idx) in features" 
            :key="idx"
            class="flex items-start gap-3 text-xs leading-relaxed"
          >
            <Check 
              class="w-4 h-4 shrink-0 mt-0.5" 
              :class="isPopular ? 'text-[#E11D74]' : 'text-[#681FA8]'" 
            />
            <span :class="isPopular ? 'text-gray-200' : 'text-[#484357]'">
              {{ feature }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-8 pt-6 border-t" :class="isPopular ? 'border-[#2C184E]' : 'border-[#E8EAF2]'">
      <button
        class="w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
        :class="[
          isPopular
            ? 'bg-[#E11D74] text-white hover:bg-white hover:text-[#140B28] shadow-md'
            : 'bg-[#140B28] text-white hover:bg-[#681FA8] hover:text-white'
        ]"
      >
        <span>{{ buttonText }}</span>
        <ArrowRight class="w-4 h-4" />
      </button>
      <p class="text-[11px] text-center mt-2.5" :class="isPopular ? 'text-gray-400' : 'text-[#6B7280]'">
        {{ guarantee }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Check, ArrowRight } from 'lucide-vue-next';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  priceMonthly: {
    type: [Number, String],
    required: true
  },
  priceAnnual: {
    type: [Number, String],
    required: true
  },
  annualBilling: {
    type: Boolean,
    default: true
  },
  currency: {
    type: String,
    default: '$'
  },
  features: {
    type: Array,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: 'Start Free 7-Day Trial'
  },
  guarantee: {
    type: String,
    default: 'Free 7-day trial. Unlimited staff. No credit card needed.'
  }
});

const price = computed(() => {
  return props.annualBilling ? props.priceAnnual : props.priceMonthly;
});

const displayPrice = computed(() => {
  return price.value;
});
</script>
