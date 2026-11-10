<template>
  <div class="min-h-screen bg-white flex flex-col lg:flex-row text-[#0A0D17]">
    
    <!-- LEFT SIDE: Clean Login & Forgot Form matching user screenshot exactly -->
    <div class="w-full lg:w-[48%] xl:w-[45%] flex flex-col justify-between p-6 sm:p-12 lg:p-16 min-h-screen z-10 bg-white">
      
      <!-- Top Bar: Back to Home -->
      <div class="flex items-center justify-between">
        <router-link 
          to="/" 
          class="inline-flex items-center gap-2 text-xs font-bold text-[#64748B] hover:text-[#0A0D17] transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back to Home</span>
        </router-link>

        <router-link 
          to="/"
          class="px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-xs font-bold text-[#0F766E] hover:bg-[#CCFBF1] transition-colors"
        >
          Explore Platform
        </router-link>
      </div>

      <!-- Center Content: Logo & Form (Screenshot Match) -->
      <div class="max-w-md w-full mx-auto my-auto py-10">
        
        <!-- Logo with Multicolor Emblem matching Screenshot -->
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F766E] via-[#0284C7] to-[#D97706] p-0.5 shadow-md">
            <div class="w-full h-full bg-[#0A0D17] rounded-[10px] flex items-center justify-center text-white font-black text-sm">
              S
            </div>
          </div>
          <span class="text-3xl font-black text-[#0A0D17] font-serif tracking-tight">Salonist</span>
        </div>

        <!-- ================= VIEW 1: LOGIN (Exact Screenshot Match) ================= -->
        <div v-if="view === 'login'">
          <h1 class="text-2xl sm:text-3xl font-black text-[#0A0D17] tracking-tight mb-8">
            Log In for Salonist
          </h1>

          <form @submit.prevent="handleLogin" class="space-y-5">
            
            <!-- Email Input matching screenshot soft-rounded input box -->
            <div>
              <input 
                required 
                v-model="email" 
                type="email" 
                placeholder="Email" 
                class="w-full p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A0D17] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all shadow-inner" 
              />
            </div>

            <!-- Password Input -->
            <div class="relative">
              <input 
                required 
                v-model="password" 
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Password" 
                class="w-full p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A0D17] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all pr-12 shadow-inner" 
              />
              <button 
                type="button" 
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0A0D17]"
              >
                <Eye v-if="!showPassword" class="w-4 h-4" />
                <EyeOff v-else class="w-4 h-4" />
              </button>
            </div>

            <!-- Forgot Password link right-aligned matching screenshot -->
            <div class="flex justify-end pt-1">
              <button 
                type="button"
                @click="view = 'forgot'"
                class="text-xs font-bold text-[#0A0D17] hover:text-[#0F766E] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <!-- Deep Navy/Black Rounded Pill Button matching Screenshot -->
            <button 
              type="submit" 
              class="w-full py-4 rounded-2xl bg-[#0F0C20] text-white font-extrabold text-sm hover:bg-[#0F766E] transition-all duration-200 shadow-xl shadow-[#0F0C20]/15 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-4"
            >
              <span>{{ loggingIn ? 'Signing In...' : 'Log In' }}</span>
              <span v-if="loggingIn" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            </button>
          </form>

          <!-- "Not have an account? Sign Up" -> opens 7-Day Trial flow -->
          <div class="mt-8 text-center text-xs text-[#475569]">
            <span>Not have an account?</span>
            <button 
              @click="trialOnboardingOpen = true" 
              class="font-black text-[#EF4444] hover:underline ml-1.5"
            >
              Sign Up
            </button>
          </div>
        </div>

        <!-- ================= VIEW 2: FORGOT PASSWORD FLOW ================= -->
        <div v-else-if="view === 'forgot'">
          <div class="mb-6">
            <button 
              @click="view = 'login'" 
              class="text-xs font-bold text-[#0F766E] hover:underline flex items-center gap-1.5 mb-4"
            >
              <ArrowLeft class="w-3.5 h-3.5" />
              <span>Back to Log In</span>
            </button>
            <h1 class="text-2xl sm:text-3xl font-black text-[#0A0D17] tracking-tight">
              Reset Your Password
            </h1>
            <p class="text-xs text-[#64748B] mt-2 leading-relaxed">
              Enter your registered salon email address and we'll send a secure password reset link to your inbox.
            </p>
          </div>

          <form @submit.prevent="handleForgot" class="space-y-4">
            <div>
              <input 
                required 
                v-model="resetEmail" 
                type="email" 
                placeholder="Enter your email" 
                class="w-full p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A0D17] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all shadow-inner" 
              />
            </div>

            <div v-if="resetSent" class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold text-center">
              ✅ Reset link sent! Check your inbox for instructions.
            </div>

            <button 
              type="submit" 
              class="w-full py-4 rounded-2xl bg-[#0F0C20] text-white font-extrabold text-sm hover:bg-[#0F766E] transition-all shadow-xl shadow-[#0F0C20]/15 mt-2"
            >
              {{ resetting ? 'Sending Link...' : 'Send Password Reset Link' }}
            </button>
          </form>
        </div>

      </div>

      <!-- Bottom Security & Copyright Footer -->
      <div class="pt-6 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#94A3B8]">
        <span>Copyright © 2026 Salonist OS</span>
        <span class="flex items-center gap-1 text-[#0F766E] font-bold">
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>256-Bit SSL Protection</span>
        </span>
      </div>

    </div>

    <!-- RIGHT SIDE: Premium Modern Salon Interior & Workstation Preview -->
    <div class="hidden lg:block lg:w-[52%] xl:w-[55%] relative bg-[#0A0D17] overflow-hidden min-h-screen">
      
      <!-- Authentic High-Resolution Salon Interior & Modern Chairside Setup -->
      <img 
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=85" 
        alt="Luxury Salon Interior"
        class="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
      />

      <!-- Luxury Dark Vignette -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#0A0D17]/80 via-transparent to-[#0A0D17]/20"></div>

    </div>

    <!-- 7-Day Free Trial Modal triggered on "Sign Up" -->
    <TrialOnboardingModal 
      v-model="trialOnboardingOpen"
      @close="trialOnboardingOpen = false"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  ArrowLeft, Eye, EyeOff, ShieldCheck 
} from 'lucide-vue-next';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';

const router = useRouter();
const view = ref('login'); // 'login' or 'forgot'
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const loggingIn = ref(false);

const resetEmail = ref('');
const resetting = ref(false);
const resetSent = ref(false);

const trialOnboardingOpen = ref(false);

const handleLogin = () => {
  loggingIn.value = true;
  setTimeout(() => {
    loggingIn.value = false;
    router.push('/app');
  }, 600);
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
</script>

