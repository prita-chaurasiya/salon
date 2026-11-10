<template>
  <div 
    v-show="modelValue"
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title" 
    role="dialog" 
    aria-modal="true"
  >
    <!-- Backdrop with blur -->
    <div 
      class="fixed inset-0 bg-[#111111]/70 backdrop-blur-sm transition-opacity"
      @click="closeOnBackdrop && close()"
    ></div>

    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
      <div 
        class="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 w-full border border-[#ECECEC]"
        :class="maxWidthClass"
      >
        <!-- Modal Top Bar -->
        <div class="px-6 pt-6 pb-4 border-b border-[#ECECEC] flex items-center justify-between">
          <div>
            <span v-if="badge" class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#C8A96A]/20 text-[#111111] mb-1">
              {{ badge }}
            </span>
            <h3 class="text-xl font-bold text-[#111111]" id="modal-title">
              {{ title }}
            </h3>
            <p v-if="subtitle" class="text-xs text-[#2B2B2B]/70 mt-0.5">{{ subtitle }}</p>
          </div>

          <button 
            type="button" 
            class="rounded-xl p-2 text-neutral-400 hover:text-neutral-900 hover:bg-[#F8F8F8] transition-colors focus:outline-none"
            @click="close"
          >
            <span class="sr-only">Close modal</span>
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Body -->
        <div class="px-6 py-6">
          <slot />
        </div>

        <!-- Footer if slot present -->
        <div v-if="$slots.footer" class="px-6 py-4 bg-[#F8F8F8] border-t border-[#ECECEC] flex items-center justify-end gap-3">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { X } from 'lucide-vue-next';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  maxWidth: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(val)
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:modelValue', 'close']);

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

const maxWidthClass = computed(() => {
  switch (props.maxWidth) {
    case 'sm':
      return 'sm:max-w-sm';
    case 'lg':
      return 'sm:max-w-lg';
    case 'xl':
      return 'sm:max-w-xl';
    case '2xl':
      return 'sm:max-w-2xl';
    case '3xl':
      return 'sm:max-w-3xl';
    case 'md':
    default:
      return 'sm:max-w-md';
  }
});
</script>

