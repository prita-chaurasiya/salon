<template>
  <div 
    v-show="modelValue"
    class="fixed inset-0 z-50 overflow-y-auto"
    role="dialog"
    aria-modal="true"
  >
    <!-- Dark Backdrop with luxury blur -->
    <div 
      class="fixed inset-0 bg-[#0A0D17]/85 backdrop-blur-md transition-opacity"
      @click="close"
    ></div>

    <div class="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
      <div 
        class="relative transform rounded-[32px] bg-white text-left shadow-[0_25px_70px_rgba(10,13,23,0.35)] transition-all my-4 w-full max-w-4xl border border-[#E2E8F0] overflow-hidden flex flex-col lg:flex-row"
      >
        <!-- Close Button -->
        <button 
          @click="close" 
          class="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-white/90 lg:bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#0A0D17] hover:bg-[#E2E8F0] transition-colors"
        >
          <X class="w-4 h-4" />
        </button>

        <!-- Left Column: Login / Forgot Password Form matching user's uploaded screenshot -->
        <div class="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between bg-white z-10">
          <div>
            
            <!-- Logo with Multicolor Emblem matching Screenshot -->
            <div class="flex items-center gap-2.5 mb-6">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0F766E] via-[#0284C7] to-[#D97706] p-0.5 shadow-sm">
                <div class="w-full h-full bg-[#0A0D17] rounded-[6px] flex items-center justify-center text-white font-black text-xs font-sans">
                  S
                </div>
              </div>
              <span class="text-2xl font-black text-[#0A0D17] font-serif tracking-tight">Salonist</span>
            </div>

            <!-- VIEW 1: NORMAL LOGIN (Screenshot Match) -->
            <div v-if="view === 'login'">
              <h2 class="text-2xl sm:text-3xl font-black text-[#0A0D17] tracking-tight mb-6">
                Log In for Salonist
              </h2>

              <form @submit.prevent="handleLogin" class="space-y-4">
                
                <!-- Email Input -->
                <div>
                  <label class="block font-bold text-xs text-[#0A0D17] mb-1.5">Email</label>
                  <input 
                    required 
                    v-model="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    class="w-full p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs sm:text-sm text-[#0A0D17] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#0F766E] transition-colors" 
                  />
                </div>

                <!-- Password Input -->
                <div>
                  <div class="flex justify-between items-center mb-1.5">
                    <label class="font-bold text-xs text-[#0A0D17]">Password</label>
                    <button 
                      type="button"
                      @click="view = 'forgot'"
                      class="text-xs font-bold text-[#0F766E] hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div class="relative">
                    <input 
                      required 
                      v-model="password" 
                      :type="showPassword ? 'text' : 'password'" 
                      placeholder="••••••••••••" 
                      class="w-full p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs sm:text-sm text-[#0A0D17] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#0F766E] transition-colors pr-10" 
                    />
                    <button 
                      type="button" 
                      @click="showPassword = !showPassword"
                      class="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0A0D17]"
                    >
                      <Eye v-if="!showPassword" class="w-4 h-4" />
                      <EyeOff v-else class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <!-- Deep Navy/Plum Log In Button matching Screenshot -->
                <button 
                  type="submit" 
                  class="w-full py-4 rounded-xl bg-[#0A0D17] text-white font-extrabold text-sm hover:bg-[#0F766E] transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.99] mt-2"
                >
                  {{ loggingIn ? 'Signing In...' : 'Log In' }}
                </button>
              </form>

              <!-- Not have an account? Sign Up -> goes to 7-day trial modal -->
              <div class="mt-8 text-center text-xs text-[#475569]">
                Not have an account? 
                <button 
                  @click="goToTrial" 
                  class="font-black text-[#EF4444] hover:underline ml-1"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <!-- VIEW 2: FORGOT PASSWORD (Clean & Premium Recovery Flow) -->
            <div v-else-if="view === 'forgot'">
              <div class="mb-6">
                <button 
                  @click="view = 'login'" 
                  class="text-xs font-bold text-[#0F766E] hover:underline flex items-center gap-1 mb-3"
                >
                  ← Back to Log In
                </button>
                <h2 class="text-2xl sm:text-3xl font-black text-[#0A0D17] tracking-tight">
                  Reset Password
                </h2>
                <p class="text-xs text-[#64748B] mt-1.5">
                  Enter your registered salon email address and we'll send you an instant reset link.
                </p>
              </div>

              <form @submit.prevent="handleForgot" class="space-y-4">
                <div>
                  <label class="block font-bold text-xs text-[#0A0D17] mb-1.5">Email Address</label>
                  <input 
                    required 
                    v-model="resetEmail" 
                    type="email" 
                    placeholder="Enter your email" 
                    class="w-full p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs sm:text-sm text-[#0A0D17] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#0F766E] transition-colors" 
                  />
                </div>

                <div v-if="resetSent" class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold text-center">
                  ✅ Reset link sent! Please check your inbox.
                </div>

                <button 
                  type="submit" 
                  class="w-full py-4 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0284C7] text-white font-extrabold text-sm hover:opacity-95 transition-all shadow-md mt-2"
                >
                  {{ resetting ? 'Sending Link...' : 'Send Password Reset Link' }}
                </button>
              </form>
            </div>

          </div>

          <!-- Bottom Micro-assurance -->
          <div class="pt-6 border-t border-[#F1F5F9] text-[11px] text-[#94A3B8] flex items-center justify-between">
            <span>256-bit SSL Encrypted</span>
            <span class="text-[#0F766E] font-bold">Salon Cloud v4.2</span>
          </div>

        </div>

        <!-- Right Column: Premium Modern Salon Interior & Workstation Preview -->
        <div class="hidden lg:block w-1/2 relative bg-[#0A0D17] overflow-hidden">
          
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85" 
            alt="Luxury Salon Interior"
            class="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A0D17]/80 via-transparent to-[#0A0D17]/30"></div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { X, Eye, EyeOff } from 'lucide-vue-next';

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'close', 'switch-to-trial']);

const view = ref('login'); // 'login' or 'forgot'
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const loggingIn = ref(false);

const resetEmail = ref('');
const resetting = ref(false);
const resetSent = ref(false);

const handleLogin = () => {
  loggingIn.value = true;
  setTimeout(() => {
    loggingIn.value = false;
    close();
  }, 1200);
};

const handleForgot = () => {
  resetting.value = true;
  setTimeout(() => {
    resetting.value = false;
    resetSent.value = true;
    setTimeout(() => {
      resetSent.value = false;
      view.value = 'login';
    }, 2500);
  }, 1200);
};

const goToTrial = () => {
  close();
  emit('switch-to-trial');
};

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};
</script>
