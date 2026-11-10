<template>
  <div 
    v-show="modelValue"
    class="fixed inset-0 z-50 overflow-y-auto"
    role="dialog"
    aria-modal="true"
  >
    <!-- Rich Velvet Dark Backdrop with blur -->
    <div 
      class="fixed inset-0 bg-[#0A0D17]/85 backdrop-blur-md transition-opacity"
      @click="close"
    ></div>

    <div class="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
      <div 
        class="relative transform rounded-[32px] bg-white text-left shadow-[0_25px_70px_rgba(10,13,23,0.35)] transition-all my-4 w-full max-w-4xl border border-[#E2E8F0] flex flex-col max-h-[92vh] overflow-hidden"
      >
        <!-- Modal Sticky Top Header -->
        <div class="px-6 sm:px-8 py-5 border-b border-[#F1F5F9] flex items-center justify-between shrink-0 bg-white">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0F766E] via-[#0284C7] to-[#D97706] p-0.5 shadow-sm">
              <div class="w-full h-full bg-[#0A0D17] rounded-[10px] flex items-center justify-center text-white font-black text-sm">
                S
              </div>
            </div>
            <div>
              <span class="text-xl font-black text-[#0A0D17] tracking-tight">Salonist</span>
              <span class="hidden sm:inline-block ml-2 px-2 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] text-[10px] font-bold">
                Enterprise Cloud
              </span>
            </div>
          </div>

          <!-- Step Progression Indicator -->
          <div class="hidden md:flex items-center gap-2">
            <div 
              v-for="s in 3" 
              :key="s"
              class="w-8 h-1.5 rounded-full transition-all duration-300"
              :class="step >= s ? 'bg-gradient-to-r from-[#0F766E] to-[#0284C7]' : 'bg-[#E2E8F0]'"
            ></div>
            <span class="text-[11px] font-bold text-[#64748B] ml-2">Step {{ step }} of 3</span>
          </div>

          <div class="flex items-center gap-4">
            <span class="text-xs text-[#64748B] hidden sm:inline">Have an account?</span>
            <button 
              @click="$emit('switch-to-login')"
              class="text-xs font-bold text-[#0F766E] hover:text-[#0D9488] uppercase tracking-wider"
            >
              LOG IN
            </button>
            <button 
              @click="close"
              class="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#0A0D17] hover:bg-[#E2E8F0] transition-colors ml-1"
            >
              <X class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Scrollable Middle Body -->
        <div class="px-6 sm:px-10 py-7 overflow-y-auto flex-1 space-y-6">
          
          <!-- Headline -->
          <div class="text-center max-w-xl mx-auto">
            <h2 class="text-2xl sm:text-4xl font-extrabold text-[#0A0D17] tracking-tight leading-tight">
              Enjoy your free <span class="bg-gradient-to-r from-[#0F766E] via-[#0284C7] to-[#D97706] bg-clip-text text-transparent">7-day trial</span>
            </h2>
            <p class="text-xs sm:text-sm text-[#475569] mt-2 font-medium">
              Unlimited staff, one price &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; No obligations or contracts
            </p>
          </div>

          <!-- ================= STEP 1: WHAT SERVICES DO YOU OFFER? ================= -->
          <div v-if="step === 1" class="space-y-4">
            <div class="text-center">
              <p class="text-[11px] font-bold uppercase tracking-widest text-[#0F766E]">
                WHAT SERVICES DO YOU OFFER?
              </p>
              <p class="text-xs text-[#64748B]">Select all categories that apply to your salon or spa</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div 
                v-for="(service, idx) in serviceCategories" 
                :key="idx"
                @click="toggleService(service.title)"
                class="group p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 select-none"
                :class="selectedServices.includes(service.title) 
                  ? 'border-[#0F766E] bg-[#F0FDFA] shadow-sm ring-2 ring-[#0F766E]/40' 
                  : 'border-[#E2E8F0] bg-white hover:border-[#0F766E]/40 hover:bg-[#F8FAFC]'"
              >
                <!-- Service Icon Container -->
                <div 
                  class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  :class="selectedServices.includes(service.title) 
                    ? 'bg-gradient-to-tr from-[#0F766E] to-[#0284C7] text-white shadow-xs' 
                    : 'bg-[#F1F5F9] text-[#0A0D17] group-hover:bg-[#0A0D17] group-hover:text-white'"
                >
                  <component :is="service.icon" class="w-5 h-5 stroke-[1.8]" />
                </div>

                <!-- Title -->
                <div class="flex-1 min-w-0">
                  <span class="text-xs sm:text-[13px] font-bold text-[#0A0D17] group-hover:text-[#0F766E] transition-colors block truncate">
                    {{ service.title }}
                  </span>
                </div>

                <!-- Check badge -->
                <div 
                  v-if="selectedServices.includes(service.title)" 
                  class="w-5 h-5 rounded-full bg-[#0F766E] text-white flex items-center justify-center text-[10px] font-bold shrink-0"
                >
                  ✓
                </div>
              </div>
            </div>
          </div>

          <!-- ================= STEP 2: HOW MANY BOOKABLE STAFF? (User Screenshot 1) ================= -->
          <div v-else-if="step === 2" class="space-y-6 max-w-2xl mx-auto py-2">
            <div class="text-center">
              <p class="text-[12px] font-bold uppercase tracking-widest text-[#0F766E]">
                AND, HOW MANY BOOKABLE STAFF?
              </p>
              <p class="text-xs text-[#64748B] mt-1">
                BOOKABLE STAFF ARE ANYONE IN YOUR BUSINESS THAT HAS APPOINTMENTS WITH CLIENTS
              </p>
            </div>

            <!-- 4 Staff Cards Grid matching Screenshot 1 -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                v-for="(tier, sIdx) in staffTiers" 
                :key="sIdx"
                @click="selectedStaff = tier.label"
                class="p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 select-none"
                :class="selectedStaff === tier.label 
                  ? 'border-[#0F766E] bg-[#F0FDFA] shadow-md ring-2 ring-[#0F766E]' 
                  : 'border-[#E2E8F0] bg-white hover:border-[#0F766E]/50 hover:bg-[#F8FAFC]'"
              >
                <div 
                  class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  :class="selectedStaff === tier.label ? 'bg-[#0F766E] text-white' : 'bg-[#F1F5F9] text-[#0A0D17]'"
                >
                  <component :is="tier.icon" class="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 class="text-sm font-extrabold text-[#0A0D17]">{{ tier.label }}</h4>
                  <p class="text-[11px] text-[#64748B]">{{ tier.hint }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ================= STEP 3: TELL US ABOUT YOUR BUSINESS (User Screenshot 2) ================= -->
          <div v-else-if="step === 3" class="space-y-5 max-w-xl mx-auto py-2">
            <div class="text-center">
              <p class="text-[12px] font-bold uppercase tracking-widest text-[#0F766E]">
                TELL US ABOUT YOUR BUSINESS
              </p>
              <p class="text-xs text-[#64748B] mt-1">
                We'll configure your salon workspace and booking link in seconds
              </p>
            </div>

            <!-- Form with validation error badges matching Screenshot 2 -->
            <div class="space-y-4 text-xs">
              
              <!-- Full Name Field -->
              <div class="relative">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-bold text-[#0A0D17]">Full Name</label>
                  <span v-if="attemptedSubmit && !form.fullName" class="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] animate-bounce">
                    This field is required.
                  </span>
                </div>
                <input 
                  v-model="form.fullName" 
                  type="text" 
                  placeholder="e.g. Laurent Vance" 
                  class="w-full p-3.5 rounded-xl border bg-[#F8FAFC] focus:bg-white focus:outline-none transition-colors text-xs"
                  :class="attemptedSubmit && !form.fullName ? 'border-red-500 ring-1 ring-red-400' : 'border-[#CBD5E1] focus:border-[#0F766E]'"
                />
              </div>

              <!-- Address Field -->
              <div class="relative">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-bold text-[#0A0D17]">Salon / Business Address</label>
                  <span v-if="attemptedSubmit && !form.address" class="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] animate-bounce">
                    This field is required.
                  </span>
                </div>
                <input 
                  v-model="form.address" 
                  type="text" 
                  placeholder="e.g. 142 Bond Street, London or Manhattan, NY" 
                  class="w-full p-3.5 rounded-xl border bg-[#F8FAFC] focus:bg-white focus:outline-none transition-colors text-xs"
                  :class="attemptedSubmit && !form.address ? 'border-red-500 ring-1 ring-red-400' : 'border-[#CBD5E1] focus:border-[#0F766E]'"
                />
              </div>

              <!-- No. of branches Field -->
              <div class="relative">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-bold text-[#0A0D17]">No. of branches</label>
                  <span v-if="attemptedSubmit && !form.branches" class="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] animate-bounce">
                    This field is required.
                  </span>
                </div>
                <input 
                  v-model="form.branches" 
                  type="text" 
                  placeholder="e.g. 1 location, 3 branches, etc." 
                  class="w-full p-3.5 rounded-xl border bg-[#F8FAFC] focus:bg-white focus:outline-none transition-colors text-xs"
                  :class="attemptedSubmit && !form.branches ? 'border-red-500 ring-1 ring-red-400' : 'border-[#CBD5E1] focus:border-[#0F766E]'"
                />
              </div>

              <!-- Work Email & Password -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label class="font-bold text-[#0A0D17] block mb-1">Work Email</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    placeholder="laurent@atelier.com" 
                    class="w-full p-3.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0F766E] text-xs"
                  />
                </div>
                <div>
                  <label class="font-bold text-[#0A0D17] block mb-1">Create Password</label>
                  <input 
                    v-model="form.password" 
                    type="password" 
                    placeholder="••••••••••••" 
                    class="w-full p-3.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0F766E] text-xs"
                  />
                </div>
              </div>

            </div>

            <!-- Success Alert -->
            <div v-if="activated" class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 font-bold text-center text-xs shadow-xs">
              🎉 Workspace Activated! Launching your custom Salonist environment...
            </div>
          </div>

        </div>

        <!-- FIXED FOOTER BAR WITH "BACK" & "CONTINUE" BUTTONS (Matching Screenshot) -->
        <div class="px-6 sm:px-10 py-4 border-t border-[#F1F5F9] bg-[#F8FAFC] flex items-center justify-between gap-4 shrink-0">
          
          <div>
            <button 
              v-if="step > 1"
              @click="step--"
              class="px-5 py-2.5 rounded-full text-xs font-bold text-[#475569] hover:text-[#0A0D17] transition-colors"
            >
              Back
            </button>
          </div>

          <div class="flex items-center gap-3">
            <button 
              @click="handleNext"
              class="px-8 py-3 rounded-full bg-gradient-to-r from-[#0A0D17] via-[#0F766E] to-[#0284C7] text-white font-extrabold text-sm hover:opacity-95 transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>{{ step === 3 ? 'Launch My Free Workspace' : 'Continue' }}</span>
              <span class="text-xs">→</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  X, Scissors, Activity, HeartHandshake, 
  Eye, Sparkles, Dumbbell, Zap, Waves, Home, 
  Stethoscope, Brush, Flower2, Building2, Gem, Dog, ShieldAlert,
  User, Users, Building
} from 'lucide-vue-next';

const router = useRouter();

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'close', 'switch-to-login']);

const step = ref(1);
const selectedServices = ref(['Hair & Styling', 'Barbershop']);
const selectedStaff = ref('Just me');
const attemptedSubmit = ref(false);
const activated = ref(false);

const form = ref({
  fullName: '',
  address: '',
  branches: '',
  email: '',
  password: ''
});

/* Exact 16 Categories */
const serviceCategories = [
  { title: 'Barbershop', icon: Scissors },
  { title: 'Body Treatments', icon: Activity },
  { title: 'Counselling & Holistic', icon: HeartHandshake },
  { title: 'Eyebrows & Eyelashes', icon: Eye },
  { title: 'Facial & Skincare', icon: Sparkles },
  { title: 'Fitness Center', icon: Dumbbell },
  { title: 'Hair Removal', icon: Zap },
  { title: 'Hair & Styling', icon: Waves },
  { title: 'Home Salon Services', icon: Home },
  { title: 'Injectable & Fillers', icon: Stethoscope },
  { title: 'Makeup Artist', icon: Brush },
  { title: 'Massage', icon: Flower2 },
  { title: 'Medical & Dental', icon: Building2 },
  { title: 'Nails Salon', icon: Gem },
  { title: 'Pet Grooming', icon: Dog },
  { title: 'Tattoo & Piercing', icon: ShieldAlert },
];

/* 4 Staff Options matching user's Screenshot 1 */
const staffTiers = [
  { label: 'Just me', hint: 'Solo stylist or booth renter', icon: User },
  { label: '2 - 7 staff', hint: 'Boutique studio team', icon: Users },
  { label: '8 - 20 staff', hint: 'High-throughput salon', icon: Users },
  { label: 'Over 20 staff', hint: 'Multi-location franchise', icon: Building },
];

const toggleService = (title) => {
  if (selectedServices.value.includes(title)) {
    selectedServices.value = selectedServices.value.filter(t => t !== title);
  } else {
    selectedServices.value.push(title);
  }
};

const handleNext = () => {
  if (step.value === 1) {
    if (selectedServices.value.length === 0) return;
    step.value = 2;
  } else if (step.value === 2) {
    step.value = 3;
  } else if (step.value === 3) {
    attemptedSubmit.value = true;
    if (!form.value.fullName || !form.value.address || !form.value.branches) {
      return;
    }
    activated.value = true;
    setTimeout(() => {
      activated.value = false;
      step.value = 1;
      attemptedSubmit.value = false;
      close();
      router.push('/app');
    }, 1200);
  }
};

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};
</script>
