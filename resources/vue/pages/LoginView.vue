<template>
  <div class="min-h-screen bg-[#FCFBFD] flex flex-col lg:flex-row text-[#1C151D]">
    
    <!-- LEFT SIDE: Clean Login & Forgot Form matching user screenshot with Luxury Gradients -->
    <div class="w-full lg:w-[48%] xl:w-[45%] flex flex-col justify-between p-6 sm:p-12 lg:p-16 min-h-screen z-10 bg-white border-r border-[#F0E6EC]">
      
      <!-- Top Bar: Back to Home -->
      <div class="flex items-center justify-between">
        <router-link 
          to="/" 
          class="inline-flex items-center gap-2 text-xs font-bold text-[#8E8291] hover:text-[#AA4184] transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back to Home</span>
        </router-link>

        <router-link 
          to="/why-choose-salonist"
          class="px-3.5 py-1.5 rounded-full bg-[#FBF0F6] text-xs font-bold text-[#AA4184] hover:bg-[#F5DDEB] transition-colors border border-[#F5DDEB]"
        >
          Why Salonist?
        </router-link>
      </div>

      <!-- Center Content: Logo & Form -->
      <div class="max-w-md w-full mx-auto my-auto py-10">
        
        <!-- Logo with Rose-Berry Gradient Emblem -->
        <div class="flex items-center gap-3 mb-8">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1C151D] via-[#AA4184] to-[#C05A9A] p-0.5 shadow-md">
            <div class="w-full h-full bg-[#1C151D] rounded-[10px] flex items-center justify-center text-white font-black text-sm">
              S
            </div>
          </div>
          <span class="text-3xl font-black text-[#1C151D] font-serif tracking-tight">Salonist</span>
        </div>

        <!-- ================= VIEW 1: LOGIN ================= -->
        <div v-if="view === 'login'">
          <h1 class="text-2xl sm:text-3xl font-black text-[#1C151D] tracking-tight mb-2">
            Log In to Your Salon Workspace
          </h1>
          <p class="text-xs sm:text-sm text-[#5C525E] mb-8">
            Access your multi-chair appointment calendar, POS checkout registers, and client records.
          </p>

          <form @submit.prevent="handleLogin" class="space-y-5">
            
            <!-- Email Input -->
            <div>
              <label class="block text-xs font-bold text-[#1C151D] mb-1.5">Salon Account Email</label>
              <input 
                required 
                v-model="email" 
                type="email" 
                placeholder="salonowner@atelier.com" 
                class="w-full p-4 rounded-xl border border-[#E9E5F0] bg-[#FAF7F9] text-sm text-[#1C151D] placeholder-[#8E8291] focus:bg-white focus:outline-none focus:border-[#AA4184] focus:ring-2 focus:ring-[#AA4184]/20 transition-all shadow-inner" 
              />
            </div>

            <!-- Password Input -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="text-xs font-bold text-[#1C151D]">Master Password</label>
                <button 
                  type="button"
                  @click="view = 'forgot'"
                  class="text-xs font-bold text-[#AA4184] hover:text-[#923470] hover:underline cursor-pointer"
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
                  class="w-full p-4 rounded-xl border border-[#E9E5F0] bg-[#FAF7F9] text-sm text-[#1C151D] placeholder-[#8E8291] focus:bg-white focus:outline-none focus:border-[#AA4184] focus:ring-2 focus:ring-[#AA4184]/20 transition-all pr-12 shadow-inner" 
                />
                <button 
                  type="button" 
                  @click="showPassword = !showPassword"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-[#8E8291] hover:text-[#1C151D] cursor-pointer"
                >
                  <Eye v-if="!showPassword" class="w-4 h-4" />
                  <EyeOff v-else class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Luxury Gradient Pill Button -->
            <button 
              type="submit" 
              class="w-full py-4 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:from-[#2B2237] hover:to-[#7C3AED] text-white font-extrabold text-sm shadow-xl shadow-[#AA4184]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer"
            >
              <span>{{ loggingIn ? 'Accessing Workspace...' : 'Sign In to Salonist' }}</span>
              <span v-if="loggingIn" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            </button>
          </form>

          <!-- "Not have an account? Sign Up" -> opens 7-Day Trial flow -->
          <div class="mt-8 text-center text-xs text-[#5C525E]">
            <span>Don't have a salon account yet?</span>
            <button 
              @click="trialOnboardingOpen = true" 
              class="font-black text-[#AA4184] hover:text-[#923470] hover:underline ml-1.5 cursor-pointer"
            >
              Start Free 7-Day Trial
            </button>
          </div>
        </div>

        <!-- ================= VIEW 2: FORGOT PASSWORD FLOW ================= -->
        <div v-else-if="view === 'forgot'">
          <div class="mb-6">
            <button 
              @click="view = 'login'" 
              class="text-xs font-bold text-[#AA4184] hover:underline flex items-center gap-1.5 mb-4 cursor-pointer"
            >
              <ArrowLeft class="w-3.5 h-3.5" />
              <span>Back to Log In</span>
            </button>
            <h1 class="text-2xl sm:text-3xl font-black text-[#1C151D] tracking-tight">
              Reset Your Password
            </h1>
            <p class="text-xs text-[#5C525E] mt-2 leading-relaxed">
              Enter your registered salon email address and we'll send a secure password reset link to your inbox.
            </p>
          </div>

          <form @submit.prevent="handleForgot" class="space-y-4">
            <div>
              <input 
                required 
                v-model="resetEmail" 
                type="email" 
                placeholder="Enter your registered salon email" 
                class="w-full p-4 rounded-xl border border-[#E9E5F0] bg-[#FAF7F9] text-sm text-[#1C151D] placeholder-[#8E8291] focus:bg-white focus:outline-none focus:border-[#AA4184] focus:ring-2 focus:ring-[#AA4184]/20 transition-all shadow-inner" 
              />
            </div>

            <div v-if="resetSent" class="p-4 rounded-xl bg-[#FBF0F6] border border-[#F5DDEB] text-[#AA4184] text-xs font-bold text-center">
              ✅ Reset link sent! Check your inbox for instructions.
            </div>

            <button 
              type="submit" 
              class="w-full py-4 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] text-white font-extrabold text-sm shadow-xl shadow-[#AA4184]/20 hover:scale-[1.01] active:scale-[0.99] transition-all mt-4 cursor-pointer"
            >
              {{ resetting ? 'Sending Link...' : 'Send Password Reset Link' }}
            </button>
          </form>
        </div>

      </div>

      <!-- Bottom Security & Copyright Footer -->
      <div class="pt-6 border-t border-[#F0E6EC] flex items-center justify-between text-[11px] text-[#8E8291]">
        <span>Copyright © 2026 Salonist Cloud</span>
        <span class="flex items-center gap-1 text-[#AA4184] font-bold">
          <ShieldCheck class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>256-Bit SSL Cloud Protection</span>
        </span>
      </div>

    </div>

    <!-- RIGHT SIDE: Premium Modern Salon Interior & Workstation Preview -->
    <div class="hidden lg:block lg:w-[52%] xl:w-[55%] relative bg-[#1C151D] overflow-hidden min-h-screen">
      
      <!-- Authentic High-Resolution Salon Interior & Modern Chairside Setup -->
      <img 
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=85" 
        alt="Luxury Salon Interior"
        class="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
      />

      <!-- Luxury Vignette with DINGG Soft Rose Overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#1C151D]/90 via-[#1C151D]/40 to-transparent"></div>

      <!-- Floating Live Salon Metric Card -->
      <div class="absolute bottom-12 left-12 right-12 p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-2xl">
        <div class="flex items-center justify-between pb-3 border-b border-[#F0E6EC] mb-3">
          <div>
            <h4 class="text-sm font-black text-[#1C151D]">Aura Atelier & Day Spa</h4>
            <p class="text-[11px] text-[#5C525E]">Flagship Studio • 8 Active Styling Chairs</p>
          </div>
          <span class="px-3 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] border border-[#F5DDEB] font-bold text-xs">
            Live POS & Booking Matrix
          </span>
        </div>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="p-2.5 rounded-xl bg-[#FAF7F9] border border-[#F0E6EC]">
            <p class="text-[10px] text-[#8E8291] font-bold uppercase">Today's Appointments</p>
            <p class="text-base font-black text-[#AA4184]">42 Booked</p>
          </div>
          <div class="p-2.5 rounded-xl bg-[#FAF7F9] border border-[#F0E6EC]">
            <p class="text-[10px] text-[#8E8291] font-bold uppercase">Chair Occupancy</p>
            <p class="text-base font-black text-[#1C151D]">96.4%</p>
          </div>
          <div class="p-2.5 rounded-xl bg-[#FAF7F9] border border-[#F0E6EC]">
            <p class="text-[10px] text-[#8E8291] font-bold uppercase">Online Rebookings</p>
            <p class="text-base font-black text-[#AA4184]">3.4x Faster</p>
          </div>
        </div>
      </div>

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
const view = ref('login');
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
