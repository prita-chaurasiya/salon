<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AA4184]/50 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
    :class="[
      sizeClasses,
      variantClasses,
      { 'w-full': block }
    ]"
    @click="handleClick"
  >
    <!-- Background hover sheen effect -->
    <span 
      v-if="variant === 'primary' || variant === 'accent'" 
      class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
    ></span>

    <!-- Spinner when loading -->
    <svg 
      v-if="loading" 
      class="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <component :is="iconLeft" v-if="iconLeft && !loading" class="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5" />
    <slot />
    <component :is="iconRight" v-if="iconRight && !loading" class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary', 'accent', 'outline', 'ghost'].includes(val)
  },
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg', 'xl'].includes(val)
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  iconLeft: {
    type: Object,
    default: null
  },
  iconRight: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['click']);

const handleClick = (e) => {
  if (!props.disabled && !props.loading) {
    emit('click', e);
  }
};

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3.5 py-1.5 text-xs';
    case 'lg':
      return 'px-6 py-3.5 text-sm';
    case 'xl':
      return 'px-8 py-4 text-base';
    case 'md':
    default:
      return 'px-5 py-2.5 text-xs';
  }
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'accent':
      return 'bg-[#AA4184] text-[#111111] hover:bg-white hover:text-[#111111] shadow-md border border-[#AA4184]';
    case 'secondary':
      return 'bg-[#2B2B2B] text-white hover:bg-[#111111] border border-neutral-700';
    case 'outline':
      return 'bg-white text-[#111111] border border-[#ECECEC] hover:border-[#AA4184] hover:bg-[#F8F8F8] shadow-sm';
    case 'ghost':
      return 'bg-transparent text-[#2B2B2B] hover:text-[#111111] hover:bg-[#F8F8F8]';
    case 'primary':
    default:
      return 'bg-[#111111] text-white hover:bg-[#AA4184] hover:text-[#111111] shadow-sm';
  }
});
</script>

