<template>
  <div 
    v-show="modelValue"
    class="fixed inset-0 z-50 overflow-y-auto"
    role="dialog"
    aria-modal="true"
  >
    <!-- Rich Velvet Dark Backdrop with blur -->
    <div 
      class="fixed inset-0 bg-[#16141F]/80 backdrop-blur-md transition-opacity"
      @click="close"
    ></div>

    <div class="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
      <div 
        class="relative transform rounded-[32px] bg-white text-left shadow-[0_25px_70px_rgba(22,20,31,0.35)] transition-all my-4 w-full max-w-4xl border border-[#F0E6EC] flex flex-col max-h-[92vh] overflow-hidden"
      >
        <!-- Modal Sticky Top Header -->
        <div class="px-6 sm:px-8 py-5 border-b border-[#F0E6EC] flex items-center justify-between shrink-0 bg-white">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1C151D] via-[#AA4184] to-[#C05A9A] p-0.5 shadow-sm">
              <div class="w-full h-full bg-[#1C151D] rounded-[10px] flex items-center justify-center text-white font-black text-sm">
                S
              </div>
            </div>
            <div>
              <span class="text-xl font-black text-[#1C151D] tracking-tight">Salonist</span>
              <span class="hidden sm:inline-block ml-2 px-2.5 py-0.5 rounded-full bg-[#FBF0F6] text-[#AA4184] border border-[#F5DDEB] text-[10px] font-bold">
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
              :class="step >= s ? 'bg-gradient-to-r from-[#AA4184] to-[#923470]' : 'bg-[#E9E5F0]'"
            ></div>
            <span class="text-[11px] font-bold text-[#8E8291] ml-2">Step {{ step }} of 3</span>
          </div>

          <div class="flex items-center gap-4">
            <span class="text-xs text-[#8E8291] hidden sm:inline">Have an account?</span>
            <button 
              @click="$emit('switch-to-login')"
              class="text-xs font-bold text-[#AA4184] hover:text-[#923470] uppercase tracking-wider cursor-pointer"
            >
              LOG IN
            </button>
            <button 
              @click="close"
              class="w-8 h-8 rounded-full bg-[#FAF7F9] border border-[#F0E6EC] flex items-center justify-center text-[#8E8291] hover:text-[#1C151D] hover:bg-[#FBF0F6] transition-colors ml-1 cursor-pointer"
            >
              <X class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Scrollable Middle Body -->
        <div class="px-6 sm:px-10 py-7 overflow-y-auto flex-1 space-y-6">
          
          <!-- Headline matching Screenshot 4d0dd3b9 with Dual-Tone Gradient -->
          <div class="text-center max-w-xl mx-auto">
            <h2 class="text-2xl sm:text-4xl font-extrabold text-[#1C151D] tracking-tight leading-tight">
              Enjoy your free <span class="bg-gradient-to-r from-[#AA4184] via-[#C05A9A] to-[#D97706] bg-clip-text text-transparent">7-day trial</span>
            </h2>
            <p class="text-xs sm:text-sm text-[#5C525E] mt-2 font-medium">
              Unlimited staff, one price &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; No obligations or contracts
            </p>
          </div>

          <!-- ================= STEP 1: WHAT SERVICES DO YOU OFFER? ================= -->
          <div v-if="step === 1" class="space-y-4">
            <div class="text-center">
              <p class="text-[11px] font-bold uppercase tracking-widest text-[#AA4184]">
                WHAT SERVICES DO YOU OFFER?
              </p>
              <p class="text-xs text-[#8E8291]">Select all categories that apply to your salon or spa</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div 
                v-for="(service, idx) in serviceCategories" 
                :key="idx"
                @click="toggleService(service.title)"
                class="group p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 select-none"
                :class="selectedServices.includes(service.title) 
                  ? 'border-[#AA4184] bg-[#FBF0F6] shadow-sm ring-2 ring-[#AA4184]/30' 
                  : 'border-[#F0E6EC] bg-white hover:border-[#AA4184]/40 hover:bg-[#FAF7F9]'"
              >
                <!-- Service Icon Container -->
                <div 
                  class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  :class="selectedServices.includes(service.title) 
                    ? 'bg-gradient-to-tr from-[#AA4184] to-[#923470] text-white shadow-xs' 
                    : 'bg-[#FAF7F9] text-[#1C151D] group-hover:bg-[#1C151D] group-hover:text-white'"
                >
                  <component :is="service.icon" class="w-5 h-5 stroke-[1.8]" />
                </div>

                <!-- Title -->
                <div class="flex-1 min-w-0">
                  <span class="text-xs sm:text-[13px] font-bold text-[#1C151D] group-hover:text-[#AA4184] transition-colors block truncate">
                    {{ service.title }}
                  </span>
                </div>

                <!-- Check badge matching screenshot -->
                <div 
                  v-if="selectedServices.includes(service.title)" 
                  class="w-5 h-5 rounded-full bg-[#AA4184] text-white flex items-center justify-center text-[10px] font-bold shrink-0"
                >
                  ✓
                </div>
              </div>
            </div>
          </div>

          <!-- ================= STEP 2: HOW MANY BOOKABLE STAFF? ================= -->
          <div v-else-if="step === 2" class="space-y-6 max-w-2xl mx-auto py-2">
            <div class="text-center">
              <p class="text-[12px] font-bold uppercase tracking-widest text-[#AA4184]">
                AND, HOW MANY BOOKABLE STAFF?
              </p>
              <p class="text-xs text-[#8E8291] mt-1">
                BOOKABLE STAFF ARE ANYONE IN YOUR BUSINESS THAT HAS APPOINTMENTS WITH CLIENTS
              </p>
            </div>

            <!-- 4 Staff Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                v-for="(tier, sIdx) in staffTiers" 
                :key="sIdx"
                @click="selectedStaff = tier.label"
                class="p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 select-none"
                :class="selectedStaff === tier.label 
                  ? 'border-[#AA4184] bg-[#FBF0F6] shadow-md ring-2 ring-[#AA4184]/40' 
                  : 'border-[#F0E6EC] bg-white hover:border-[#AA4184]/50 hover:bg-[#FAF7F9]'"
              >
                <div 
                  class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  :class="selectedStaff === tier.label ? 'bg-[#AA4184] text-white' : 'bg-[#FAF7F9] text-[#1C151D]'"
                >
                  <component :is="tier.icon" class="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 class="text-sm font-extrabold text-[#1C151D]">{{ tier.label }}</h4>
                  <p class="text-[11px] text-[#5C525E]">{{ tier.hint }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ================= STEP 3: TELL US ABOUT YOUR BUSINESS ================= -->
          <div v-else-if="step === 3" class="space-y-5 max-w-xl mx-auto py-2">
            <div class="text-center">
              <p class="text-[12px] font-bold uppercase tracking-widest text-[#AA4184]">
                TELL US ABOUT YOUR BUSINESS
              </p>
              <p class="text-xs text-[#8E8291] mt-1">
                We'll configure your salon workspace and booking link in seconds
              </p>
            </div>

            <div class="space-y-4 text-xs">
              
              <!-- Full Name Field -->
              <div class="relative">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-bold text-[#1C151D]">Full Name</label>
                  <span v-if="attemptedSubmit && !form.fullName" class="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] animate-bounce">
                    This field is required.
                  </span>
                </div>
                <input 
                  v-model="form.fullName" 
                  type="text" 
                  placeholder="e.g. Laurent Vance" 
                  class="w-full p-3.5 rounded-xl border bg-[#FAF7F9] focus:bg-white focus:outline-none transition-colors text-xs text-[#1C151D]"
                  :class="attemptedSubmit && !form.fullName ? 'border-rose-500 ring-1 ring-rose-400' : 'border-[#E9E5F0] focus:border-[#AA4184]'"
                />
              </div>

              <!-- Address Field -->
              <div class="relative">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-bold text-[#1C151D]">Salon / Business Address</label>
                  <span v-if="attemptedSubmit && !form.address" class="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] animate-bounce">
                    This field is required.
                  </span>
                </div>
                <input 
                  v-model="form.address" 
                  type="text" 
                  placeholder="e.g. 142 Bond Street, London or Manhattan, NY" 
                  class="w-full p-3.5 rounded-xl border bg-[#FAF7F9] focus:bg-white focus:outline-none transition-colors text-xs text-[#1C151D]"
                  :class="attemptedSubmit && !form.address ? 'border-rose-500 ring-1 ring-rose-400' : 'border-[#E9E5F0] focus:border-[#AA4184]'"
                />
              </div>

              <!-- No. of branches Field -->
              <div class="relative">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-bold text-[#1C151D]">No. of branches</label>
                  <span v-if="attemptedSubmit && !form.branches" class="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] animate-bounce">
                    This field is required.
                  </span>
                </div>
                <input 
                  v-model="form.branches" 
                  type="text" 
                  placeholder="e.g. 1 location, 3 branches, etc." 
                  class="w-full p-3.5 rounded-xl border bg-[#FAF7F9] focus:bg-white focus:outline-none transition-colors text-xs text-[#1C151D]"
                  :class="attemptedSubmit && !form.branches ? 'border-rose-500 ring-1 ring-rose-400' : 'border-[#E9E5F0] focus:border-[#AA4184]'"
                />
              </div>

              <!-- Work Email & Password -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label class="font-bold text-[#1C151D] block mb-1">Work Email</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    placeholder="laurent@atelier.com" 
                    class="w-full p-3.5 rounded-xl border border-[#E9E5F0] bg-[#FAF7F9] focus:bg-white focus:outline-none focus:border-[#AA4184] text-xs text-[#1C151D]"
                  />
                </div>
                <div>
                  <label class="font-bold text-[#1C151D] block mb-1">Create Password</label>
                  <input 
                    v-model="form.password" 
                    type="password" 
                    placeholder="••••••••••••" 
                    class="w-full p-3.5 rounded-xl border border-[#E9E5F0] bg-[#FAF7F9] focus:bg-white focus:outline-none focus:border-[#AA4184] text-xs text-[#1C151D]"
                  />
                </div>
              </div>

            </div>

            <!-- Success Alert -->
            <div v-if="activated" class="p-4 rounded-xl bg-[#FBF0F6] border border-[#F5DDEB] text-[#AA4184] font-bold text-center text-xs shadow-xs">
              🎉 Workspace Activated! Launching your custom Salonist environment...
            </div>
          </div>

        </div>

        <!-- FIXED FOOTER BAR WITH "BACK" & LUXURY GRADIENT "CONTINUE" BUTTON -->
        <div class="px-6 sm:px-10 py-4 border-t border-[#F0E6EC] bg-[#FAF7F9] flex items-center justify-between gap-4 shrink-0">
          
          <div>
            <button 
              v-if="step > 1"
              @click="step--"
              class="px-5 py-2.5 rounded-full text-xs font-bold text-[#5C525E] hover:text-[#1C151D] transition-colors cursor-pointer"
            >
              Back
            </button>
          </div>

          <div class="flex items-center gap-3">
            <button 
              @click="handleNext"
              class="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:from-[#2B2237] hover:to-[#7C3AED] text-white font-extrabold text-sm shadow-lg shadow-[#AA4184]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
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

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

const step = ref(1);
const selectedServices = ref(['Barbershop', 'Hair & Styling']);
const selectedStaff = ref('2 to 5');
const attemptedSubmit = ref(false);
const activated = ref(false);

const form = ref({
  fullName: '',
  address: '',
  branches: '',
  email: '',
  password: ''
});

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
  { title: 'Medical Clinic', icon: Stethoscope },
  { title: 'Makeup Artist', icon: Brush },
  { title: 'Massage Therapy', icon: Flower2 },
  { title: 'Nail Salon', icon: Gem },
  { title: 'Tanning Salon', icon: Sparkles },
  { title: 'Tattoo & Piercing', icon: ShieldAlert },
  { title: 'Pet Grooming', icon: Dog },
  { title: 'Multi-Location Enterprise', icon: Building2 }
];

const staffTiers = [
  { label: 'Just Me', hint: 'Solo stylist or booth renter', icon: User },
  { label: '2 to 5', hint: 'Boutique salon or studio', icon: Users },
  { label: '6 to 15', hint: 'High-volume salon or spa', icon: Users },
  { label: '16 or more', hint: 'Multi-location franchise or clinic chain', icon: Building }
];

const toggleService = (title) => {
  if (selectedServices.value.includes(title)) {
    selectedServices.value = selectedServices.value.filter(s => s !== title);
  } else {
    selectedServices.value.push(title);
  }
};

const handleNext = () => {
  if (step.value === 1) {
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
      close();
      router.push('/app');
    }, 1200);
  }
};
</script>
