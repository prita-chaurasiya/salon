<template>
  <div 
    v-show="modelValue"
    class="fixed inset-0 z-50 overflow-y-auto"
    role="dialog"
    aria-modal="true"
  >
    <!-- Dark Backdrop with blur -->
    <div 
      class="fixed inset-0 bg-[#0A0D17]/80 backdrop-blur-md transition-opacity"
      @click="close"
    ></div>

    <div class="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
      <div 
        class="relative transform rounded-[32px] bg-white text-left shadow-[0_25px_70px_rgba(10,13,23,0.35)] transition-all my-4 w-full max-w-4xl border border-[#E2E8F0] overflow-hidden"
      >
        <!-- Calendly Powered Ribbon on Top Right matching Screenshot 3 -->
        <div class="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none z-20">
          <div class="absolute transform rotate-45 bg-[#475569] text-white font-mono text-[9px] font-bold py-1 right-[-35px] top-[24px] w-[140px] text-center shadow-sm">
            POWERED BY <br class="hidden" /> CALENDLY
          </div>
        </div>

        <!-- Close Button -->
        <button 
          @click="close"
          class="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#0A0D17] hover:bg-[#E2E8F0] transition-colors"
        >
          <X class="w-4 h-4" />
        </button>

        <!-- Main 2-Column Calendly-style Layout matching Screenshot 3 -->
        <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          
          <!-- Left Column (4.5 cols): Meeting Details -->
          <div class="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#E2E8F0] bg-[#FAF8FA] flex flex-col justify-between">
            <div>
              <!-- Logo -->
              <div class="flex items-center gap-2.5 mb-6">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0F766E] via-[#0284C7] to-[#D97706] p-0.5">
                  <div class="w-full h-full bg-[#0A0D17] rounded-[6px] flex items-center justify-center text-white font-black text-xs">
                    S
                  </div>
                </div>
                <span class="text-xl font-black text-[#0A0D17] tracking-tight">Salonist</span>
              </div>

              <p class="text-xs font-bold text-[#64748B] uppercase tracking-wider">Salonist Concierge</p>
              <h2 class="text-2xl sm:text-3xl font-black text-[#0A0D17] mt-1 mb-4">
                20 Minute Meeting
              </h2>

              <div class="space-y-3 text-xs text-[#334155] font-medium mb-6">
                <div class="flex items-center gap-2.5">
                  <Clock class="w-4 h-4 text-[#0F766E]" />
                  <span>15-20 min</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <Video class="w-4 h-4 text-[#0F766E]" />
                  <span>Web conferencing details provided upon confirmation.</span>
                </div>
              </div>

              <p class="text-xs text-[#64748B] leading-relaxed">
                Salonist is an AI-powered salon and spa scheduling platform that makes it easy to manage appointments, staff, customers, payments, and marketing—all in one place. Automate your daily operations, reduce no-shows, increase bookings, and deliver a smarter customer experience.
              </p>
            </div>

            <!-- Bottom Cookie / Privacy Links -->
            <div class="pt-6 border-t border-[#E2E8F0] flex items-center gap-4 text-[11px] text-[#0F766E] font-semibold">
              <a href="#faq" class="hover:underline">Cookie settings</a>
              <a href="#faq" class="hover:underline">Privacy Policy</a>
            </div>
          </div>

          <!-- Right Column (7.5 cols): Date & Time Picker -->
          <div class="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              <h3 class="text-lg font-black text-[#0A0D17] mb-6">
                Select a Date & Time
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                
                <!-- Calendar Month Selector -->
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <button class="p-1 rounded hover:bg-neutral-100 text-neutral-600">‹</button>
                    <span class="text-xs font-bold text-[#0A0D17]">November 2026</span>
                    <button class="p-1 rounded hover:bg-neutral-100 text-neutral-600">›</button>
                  </div>

                  <!-- Days Header -->
                  <div class="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-[#94A3B8] mb-2">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>

                  <!-- Days Matrix -->
                  <div class="grid grid-cols-7 gap-1 text-center text-xs">
                    <span class="text-neutral-300 py-2"></span>
                    <span class="text-neutral-300 py-2"></span>
                    <span class="text-neutral-300 py-2"></span>
                    <span class="text-neutral-300 py-2"></span>
                    <span class="text-neutral-300 py-2"></span>
                    <span class="text-neutral-300 py-2"></span>
                    <span class="py-2 text-neutral-600">1</span>

                    <span class="py-2 text-neutral-600">2</span>
                    <span class="py-2 text-neutral-600">3</span>
                    <span class="py-2 text-neutral-600">4</span>
                    <span class="py-2 text-neutral-600">5</span>
                    <span class="py-2 text-neutral-600">6</span>
                    <span class="py-2 text-neutral-600">7</span>
                    <span class="py-2 text-neutral-600">8</span>

                    <span class="py-2 text-neutral-600">9</span>
                    <span class="py-2 text-neutral-600">10</span>
                    <span class="py-2 text-neutral-600">11</span>
                    <!-- Selected Active Day -->
                    <span class="py-2 rounded-full bg-[#0284C7] text-white font-extrabold shadow-sm cursor-pointer">12</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">13</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">14</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">15</span>

                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">16</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">17</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">18</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">19</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">20</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">21</span>
                    <span class="py-2 text-neutral-700 font-semibold hover:bg-neutral-100 rounded-full cursor-pointer">22</span>
                  </div>

                  <!-- Timezone -->
                  <div class="mt-6 pt-4 border-t border-[#E2E8F0] text-[11px] text-[#64748B]">
                    <span class="block font-bold text-[#0A0D17] mb-1">Time zone</span>
                    <div class="flex items-center gap-1.5 text-[#0F766E] font-medium cursor-pointer">
                      <Globe class="w-3.5 h-3.5" />
                      <span>India Standard Time (7:24 pm) ▾</span>
                    </div>
                  </div>
                </div>

                <!-- Available Time Slots Column matching Screenshot 3 -->
                <div class="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  <p class="text-xs font-bold text-[#0A0D17] mb-2">Thursday, November 12</p>

                  <button 
                    v-for="(time, tIdx) in timeSlots" 
                    :key="tIdx"
                    @click="selectedTime = time"
                    class="w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition-all duration-200 text-center block"
                    :class="selectedTime === time 
                      ? 'border-[#0284C7] bg-[#0284C7] text-white shadow-sm' 
                      : 'border-[#BAE6FD] text-[#0284C7] bg-white hover:border-[#0284C7] hover:bg-[#F0F9FF]'"
                  >
                    {{ time }}
                  </button>
                </div>

              </div>
            </div>

            <!-- Booking Confirmation Action -->
            <div class="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span class="text-xs text-[#64748B]">
                Selected: <strong class="text-[#0A0D17]">Nov 12 at {{ selectedTime }}</strong>
              </span>

              <button 
                @click="confirmBooking"
                class="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#0284C7] text-white font-extrabold text-xs hover:opacity-95 shadow-md transition-all active:scale-95"
              >
                {{ confirmed ? 'Demo Confirmed! Check Email' : 'Confirm 20-Min Demo' }}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { X, Clock, Video, Globe } from 'lucide-vue-next';

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'close']);

const selectedTime = ref('12:00 am');
const confirmed = ref(false);

const timeSlots = [
  '12:00 am',
  '12:30 am',
  '1:00 am',
  '1:30 am',
  '2:00 am',
  '2:30 am',
  '3:00 am',
  '10:30 am',
  '02:00 pm',
  '04:30 pm'
];

const confirmBooking = () => {
  confirmed.value = true;
  setTimeout(() => {
    confirmed.value = false;
    emit('update:modelValue', false);
    emit('close');
  }, 2000);
};

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};
</script>

