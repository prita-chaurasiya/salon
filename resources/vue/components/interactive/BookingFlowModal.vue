<template>
  <div 
    v-show="modelValue"
    class="fixed inset-0 z-50 overflow-y-auto"
    role="dialog"
    aria-modal="true"
  >
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-[#111111]/70 backdrop-blur-sm transition-opacity"
      @click="close"
    ></div>

    <div class="flex min-h-full items-center justify-center p-4">
      <div 
        class="relative transform overflow-hidden rounded-[24px] bg-white text-left shadow-2xl transition-all w-full max-w-xl border border-[#ECECEC] p-6 sm:p-8"
      >
        <!-- Modal Top -->
        <div class="flex items-center justify-between pb-4 border-b border-[#ECECEC]">
          <div>
            <span class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#AA4184] text-[#111111] mb-1">
              Live Interactive Demo
            </span>
            <h3 class="text-xl font-bold text-[#111111]">Experience Online Guest Booking</h3>
            <p class="text-xs text-[#444444]">See how salon clients book their appointments in under 45 seconds.</p>
          </div>

          <button 
            @click="close"
            class="w-8 h-8 rounded-full bg-[#F8F8F8] border border-[#ECECEC] flex items-center justify-center text-neutral-400 hover:text-[#111111] hover:bg-[#ECECEC] transition-colors"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <!-- Progress Steps -->
        <div class="flex items-center justify-between py-4 border-b border-[#ECECEC] text-[11px] font-semibold text-neutral-400">
          <div class="flex items-center gap-1.5" :class="{ 'text-[#111111]': step >= 1 }">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px]" :class="step >= 1 ? 'bg-[#111111] text-white' : 'bg-[#F8F8F8]'">1</span>
            <span>Service</span>
          </div>
          <span class="text-neutral-300">───</span>
          <div class="flex items-center gap-1.5" :class="{ 'text-[#111111]': step >= 2 }">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px]" :class="step >= 2 ? 'bg-[#111111] text-white' : 'bg-[#F8F8F8]'">2</span>
            <span>Specialist</span>
          </div>
          <span class="text-neutral-300">───</span>
          <div class="flex items-center gap-1.5" :class="{ 'text-[#111111]': step >= 3 }">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px]" :class="step >= 3 ? 'bg-[#111111] text-white' : 'bg-[#F8F8F8]'">3</span>
            <span>Confirm</span>
          </div>
        </div>

        <!-- Step 1: Select Service -->
        <div v-if="step === 1" class="py-5 space-y-3">
          <p class="text-xs font-bold text-[#111111] uppercase tracking-wider">Select Treatment Ritual</p>
          <div class="space-y-2">
            <div 
              v-for="service in services" 
              :key="service.id"
              @click="selectedService = service"
              class="p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between"
              :class="selectedService?.id === service.id ? 'border-[#AA4184] bg-[#AA4184]/10 shadow-sm' : 'border-[#ECECEC] bg-white hover:border-neutral-300'"
            >
              <div>
                <p class="text-xs font-bold text-[#111111]">{{ service.name }}</p>
                <p class="text-[11px] text-[#444444] mt-0.5">{{ service.duration }} min • Includes consultation & organic mask</p>
              </div>
              <span class="text-xs font-black text-[#111111]">${{ service.price }}</span>
            </div>
          </div>
        </div>

        <!-- Step 2: Select Specialist & Time Slot -->
        <div v-else-if="step === 2" class="py-5 space-y-4">
          <div>
            <p class="text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">Select Stylist</p>
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="stylist in stylists" 
                :key="stylist.id"
                @click="selectedStylist = stylist"
                class="p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-all"
                :class="selectedStylist?.id === stylist.id ? 'border-[#AA4184] bg-[#AA4184]/10' : 'border-[#ECECEC] bg-white hover:border-neutral-300'"
              >
                <img :src="stylist.avatar" class="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p class="text-xs font-bold text-[#111111]">{{ stylist.name }}</p>
                  <p class="text-[10px] text-[#AA4184] font-semibold">{{ stylist.role }}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">Select Preferred Time Slot (Today)</p>
            <div class="grid grid-cols-4 gap-2 text-xs">
              <button 
                v-for="slot in timeSlots" 
                :key="slot"
                @click="selectedTime = slot"
                class="py-2 rounded-lg border font-semibold transition-colors"
                :class="selectedTime === slot ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#F8F8F8] text-[#111111] border-[#ECECEC] hover:bg-neutral-200'"
              >
                {{ slot }}
              </button>
            </div>
          </div>
        </div>

        <!-- Step 3: Reservation Details & Instant Deposit -->
        <div v-else-if="step === 3" class="py-5 space-y-4 text-xs">
          <div class="p-4 rounded-xl bg-[#F8F8F8] border border-[#ECECEC] space-y-2">
            <div class="flex justify-between">
              <span class="text-[#444444]">Selected Service:</span>
              <span class="font-bold text-[#111111]">{{ selectedService?.name }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[#444444]">Specialist:</span>
              <span class="font-bold text-[#111111]">{{ selectedStylist?.name }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[#444444]">Date & Time:</span>
              <span class="font-bold text-[#111111]">Today at {{ selectedTime }}</span>
            </div>
            <div class="pt-2 border-t border-[#ECECEC] flex justify-between font-bold text-sm text-[#111111]">
              <span>Deposit Due (Secured via Stripe):</span>
              <span class="text-[#AA4184]">${{ (selectedService?.price * 0.2).toFixed(2) }}</span>
            </div>
          </div>

          <div class="space-y-2">
            <label class="block font-bold text-[#111111] text-[11px]">Guest Mobile Phone (Passwordless OTP)</label>
            <input 
              v-model="guestPhone" 
              type="tel" 
              placeholder="+1 (555) 019-2834" 
              class="w-full p-3 rounded-xl border border-[#ECECEC] bg-white text-xs outline-none focus:border-[#AA4184]"
            />
          </div>
        </div>

        <!-- Step 4: Success Message -->
        <div v-else-if="step === 4" class="py-8 text-center space-y-3">
          <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
            <Check class="w-7 h-7 stroke-[2.5]" />
          </div>
          <h4 class="text-xl font-bold text-[#111111]">Appointment Confirmed!</h4>
          <p class="text-xs text-[#444444] max-w-sm mx-auto leading-relaxed">
            WhatsApp confirmation dispatched to <strong>{{ guestPhone || '+1 (555) 019-2834' }}</strong> with calendar invite and salon directions.
          </p>
          <div class="pt-4">
            <button 
              @click="reset" 
              class="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#AA4184] hover:text-[#111111]"
            >
              Test Another Booking Flow
            </button>
          </div>
        </div>

        <!-- Footer Buttons -->
        <div v-if="step < 4" class="pt-4 border-t border-[#ECECEC] flex items-center justify-between">
          <button 
            v-if="step > 1" 
            @click="step--" 
            class="px-4 py-2 text-xs font-semibold text-[#444444] hover:text-[#111111]"
          >
            ← Back
          </button>
          <div v-else></div>

          <button 
            @click="nextStep"
            class="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#AA4184] hover:text-[#111111] transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>{{ step === 3 ? 'Confirm & Secure Deposit' : 'Next Step' }}</span>
            <ArrowRight v-if="step < 3" class="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { X, Check, ArrowRight } from 'lucide-vue-next';

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'close']);

const step = ref(1);
const guestPhone = ref('');

const services = [
  { id: 1, name: 'Bespoke Balayage, Cut & Botanical Glaze', duration: 120, price: 295 },
  { id: 2, name: 'Precision Scissor Cut, Scalp Scrub & Blowout', duration: 60, price: 135 },
  { id: 3, name: 'Signature HydraFacial Deluxe & LED Therapy', duration: 75, price: 220 },
  { id: 4, name: 'Full Head Highlight & Olaplex Reconstruction', duration: 150, price: 340 }
];

const stylists = [
  { id: 'st1', name: 'Jean-Luc Dupont', role: 'Master Colorist', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
  { id: 'st2', name: 'Aurelia Vance', role: 'Artistic Director', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
  { id: 'st3', name: 'Marcus Sterling', role: 'Precision Stylist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
  { id: 'st4', name: 'Camilla Dubois', role: 'Scalp Specialist', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80' }
];

const timeSlots = ['11:00 AM', '01:30 PM', '03:15 PM', '05:00 PM'];

const selectedService = ref(services[0]);
const selectedStylist = ref(stylists[0]);
const selectedTime = ref('01:30 PM');

const nextStep = () => {
  if (step.value < 4) {
    step.value++;
  }
};

const reset = () => {
  step.value = 1;
};

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};
</script>

