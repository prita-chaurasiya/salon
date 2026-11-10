<template>
  <div class="min-h-screen bg-[#FCFCFB] text-[#4B5563] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION (Screenshot-Accurate Architecture) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column Content -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Category Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F3FF] text-[#581C87] font-black text-xs uppercase tracking-wider border border-[#E2E8F0]">
              <span class="w-2 h-2 rounded-full bg-[#EC4899] animate-ping"></span>
              <span>{{ solution.category }} • Dedicated Solution</span>
            </div>

            <!-- Page Title / Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E293B] tracking-tight leading-[1.1]">
              {{ solution.title.split(' ')[0] }} 
              <span class="text-[#581C87]">
                {{ solution.title.split(' ').slice(1).join(' ') }}
              </span>
            </h1>

            <!-- Descriptive Copy -->
            <p class="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              {{ solution.heroDescription }}
            </p>

            <!-- Buttons: Start Free 7-Day Trial & Book A 20-Min Demo -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                @click="trialOnboardingOpen = true"
                class="px-8 py-4 rounded-full bg-[#581C87] text-white font-extrabold text-sm hover:bg-[#7E22CE] transition-all duration-200 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Start Free 7-Day Trial</span>
                <span>→</span>
              </button>

              <button 
                @click="demoOpen = true"
                class="px-8 py-4 rounded-full border border-[#E2E8F0] bg-white text-[#1E293B] font-extrabold text-sm hover:border-[#581C87] hover:text-[#581C87] hover:bg-[#FAF5FF] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar class="w-4 h-4 text-[#581C87]" />
                <span>Book A 20-Min Demo</span>
              </button>
            </div>

            <!-- Trust Line -->
            <div class="pt-2 text-xs text-[#6B7280] font-medium flex items-center gap-2 flex-wrap">
              <span>Free 7 days</span>
              <span>•</span>
              <span>Unlimited staff, one price</span>
              <span>•</span>
              <span>We move your data in</span>
            </div>
          </div>

          <!-- Right Column Visual Mockup with Floating Interactive Cards -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md">
              
              <!-- Main Feature Image -->
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900">
                <img 
                  :src="solution.heroImage" 
                  :alt="solution.title"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Floating Card 1: Today's Active Stations (Top Right) -->
              <div class="absolute -top-6 -right-6 sm:-right-8 w-64 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-[#E2E8F0] text-xs space-y-2 z-20">
                <div class="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0]">
                  <span class="font-extrabold text-[#1E293B]">Live Schedule</span>
                  <span class="text-[10px] text-[#6B7280]">Real-time</span>
                </div>

                <div 
                  v-for="(chair, cIdx) in solution.floatingTodayChairs" 
                  :key="cIdx"
                  class="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF5FF]"
                >
                  <div class="flex items-center gap-2">
                    <span 
                      class="w-2 h-2 rounded-full"
                      :class="chair.color === 'amber' ? 'bg-[#EC4899]' : chair.color === 'purple' ? 'bg-[#9333EA]' : 'bg-[#581C87]'"
                    ></span>
                    <span class="font-bold text-[#1E293B] text-[11px] truncate max-w-[120px]">{{ chair.name }}</span>
                  </div>
                  <span 
                    class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#F5F3FF] text-[#581C87]"
                  >
                    {{ chair.status }}
                  </span>
                </div>
              </div>

              <!-- Floating Card 2: Quick Booking Card (Middle Left) -->
              <div class="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-[#E2E8F0] text-xs z-20 max-w-[180px]">
                <p class="font-extrabold text-[#1E293B] truncate">{{ solution.floatingBookingPrompt.title }}</p>
                <p class="text-[10px] text-[#6B7280] mb-2 truncate">{{ solution.floatingBookingPrompt.sub }}</p>
                <button 
                  @click="trialOnboardingOpen = true"
                  class="w-full py-1.5 px-3 rounded-lg bg-[#581C87] text-white text-[10px] font-bold shadow-xs hover:bg-[#7E22CE] transition-colors"
                >
                  Book now
                </button>
              </div>

              <!-- Floating Card 3: POS Receipt Slip (Bottom Right) -->
              <div class="absolute -bottom-5 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-[#E2E8F0] text-xs z-20 w-48">
                <div class="flex justify-between text-[11px] text-[#4B5563]">
                  <span class="truncate pr-1">{{ solution.floatingReceipt.item1.split('$')[0] }}</span>
                  <span class="font-bold text-[#1E293B]">${{ solution.floatingReceipt.item1.split('$')[1] }}</span>
                </div>
                <div class="flex justify-between text-[11px] text-[#4B5563] mt-1">
                  <span class="truncate pr-1">{{ solution.floatingReceipt.item2.split('$')[0] }}</span>
                  <span class="font-bold text-[#1E293B]">${{ solution.floatingReceipt.item2.split('$')[1] }}</span>
                </div>
                <div class="flex justify-between text-xs font-black text-[#1E293B] border-t border-[#E2E8F0] pt-1.5 mt-1.5">
                  <span>Total</span>
                  <span class="text-[#581C87] font-extrabold">{{ solution.floatingReceipt.total }}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 2. TRUSTED LOGOS STRIP ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <p class="text-center text-sm font-extrabold text-[#1E293B] uppercase tracking-wider mb-6">
          {{ solution.trustedTitle }}
        </p>
        <TrustedBrandsStrip />
      </section>

      <!-- ================= 3. WHAT STOPS THIS BUSINESS FROM GROWING? (6 Exact Bottleneck Cards) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] tracking-tight">
            {{ solution.problemTitle }}
          </h2>
        </div>

        <!-- 6 Bottleneck Cards from Salonist Architecture -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div 
            v-for="(prob, pIdx) in solution.problems" 
            :key="pIdx"
            class="rounded-3xl bg-white border border-[#E2E8F0] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#EC4899] transition-all duration-300 group"
          >
            <div class="w-14 h-14 rounded-full bg-[#F5F3FF] border border-[#E2E8F0] flex items-center justify-center text-[#581C87] mb-6 shadow-xs group-hover:scale-110 transition-transform">
              <component :is="problemIcons[pIdx % problemIcons.length]" class="w-6 h-6 stroke-[1.8] text-[#EC4899]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              {{ prob.title }}
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              {{ prob.desc }}
            </p>
          </div>

        </div>
      </section>

      <!-- ================= 4. FEATURES OF SALONIST (Alternating Visual Showcases) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] tracking-tight">
            Features Of Salonist
          </h2>
          <p class="text-base sm:text-lg text-[#4B5563] mt-3">
            Salonist delivers beyond the basics to provide everything you need in a single package.
          </p>
        </div>

        <!-- Alternating Feature 1: Online Booking App & Staff Matching -->
        <div class="rounded-3xl bg-[#FAF5FF] border border-[#E2E8F0] p-8 sm:p-12 lg:p-16 mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Mockup Preview with floating badges -->
            <div class="lg:col-span-5 relative">
              <div class="relative mx-auto max-w-sm">
                <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900">
                  <img 
                    :src="solution.feature1.image" 
                    :alt="solution.feature1.title"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Floating Specialty Card -->
                <div class="absolute -top-6 -right-6 w-60 rounded-2xl bg-white p-4 shadow-lg border border-[#E2E8F0] text-xs z-10">
                  <p class="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-2">24/7 ONLINE BOOKING</p>
                  <div class="flex items-center justify-between mb-3">
                    <div class="text-center">
                      <div class="w-8 h-8 rounded-full bg-[#F5F3FF] text-[#581C87] font-bold flex items-center justify-center mx-auto text-xs">A</div>
                      <span class="text-[9px] font-bold mt-1 block text-[#1E293B]">Staff 1</span>
                    </div>
                    <div class="text-center">
                      <div class="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#9333EA] font-bold flex items-center justify-center mx-auto text-xs">B</div>
                      <span class="text-[9px] font-bold mt-1 block text-[#6B7280]">Staff 2</span>
                    </div>
                    <div class="text-center">
                      <div class="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#9333EA] font-bold flex items-center justify-center mx-auto text-xs">C</div>
                      <span class="text-[9px] font-bold mt-1 block text-[#6B7280]">Staff 3</span>
                    </div>
                  </div>

                  <div class="p-2 rounded-xl bg-[#FAF5FF] border border-[#E2E8F0] mb-2 flex justify-between items-center text-[10px]">
                    <span class="font-bold text-[#1E293B]">Instant Confirmation</span>
                    <span class="text-[#581C87] font-bold">✓ Active</span>
                  </div>

                  <div class="grid grid-cols-3 gap-1 text-[9px] font-mono text-center">
                    <span class="p-1 rounded bg-white border border-[#E2E8F0]">11:00</span>
                    <span class="p-1 rounded bg-[#581C87] text-white font-bold">12:30</span>
                    <span class="p-1 rounded bg-white border border-[#E2E8F0]">2:00</span>
                  </div>
                </div>

                <!-- Floating Channels Card (Bottom Left) -->
                <div class="absolute -bottom-4 -left-6 rounded-2xl bg-white p-3 shadow-lg border border-[#E2E8F0] text-xs z-10">
                  <p class="text-[9px] font-bold uppercase text-[#6B7280] mb-1">CHANNELS</p>
                  <div class="space-y-1 text-[11px] font-semibold text-[#1E293B]">
                    <div class="flex items-center gap-1.5"><span>🌐</span> Website</div>
                    <div class="flex items-center gap-1.5"><span>📷</span> Instagram</div>
                    <div class="flex items-center gap-1.5"><span>📱</span> Client App</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Content -->
            <div class="lg:col-span-7 space-y-5">
              <span class="inline-block px-3 py-1 rounded-full bg-[#F5F3FF] text-[#581C87] font-black text-[10px] uppercase tracking-wider border border-[#E2E8F0]">
                {{ solution.feature1.tag }}
              </span>

              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                {{ solution.feature1.title }}
              </h3>

              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {{ solution.feature1.desc }}
              </p>

              <!-- Bullets -->
              <div class="space-y-2.5 pt-2">
                <div 
                  v-for="(bullet, bIdx) in solution.feature1.bullets" 
                  :key="bIdx"
                  class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]"
                >
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>{{ bullet }}</span>
                </div>
              </div>

              <div class="pt-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-3.5 rounded-full bg-[#581C87] text-white font-bold text-xs hover:bg-[#7E22CE] transition-all duration-200 shadow-md"
                >
                  Explore Capabilities →
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Alternating Feature 2: High-Speed POS & Digital Invoicing -->
        <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-12 lg:p-16 mb-12 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <span class="inline-block px-3 py-1 rounded-full bg-[#F5F3FF] text-[#581C87] font-black text-[10px] uppercase tracking-wider border border-[#E2E8F0]">
                {{ solution.feature2.tag }}
              </span>

              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                {{ solution.feature2.title }}
              </h3>

              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {{ solution.feature2.desc }}
              </p>

              <div class="space-y-2.5 pt-2">
                <div 
                  v-for="(bullet, bIdx) in solution.feature2.bullets" 
                  :key="bIdx"
                  class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]"
                >
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>{{ bullet }}</span>
                </div>
              </div>

              <div class="pt-4">
                <button 
                  @click="demoOpen = true"
                  class="px-8 py-3.5 rounded-full border border-[#E2E8F0] bg-white text-[#1E293B] font-bold text-xs hover:border-[#581C87] hover:text-[#581C87] hover:bg-[#FAF5FF] transition-all duration-200 shadow-xs"
                >
                  Schedule A Demo Walkthrough
                </button>
              </div>
            </div>

            <!-- Right Visual Mockup -->
            <div class="lg:col-span-5 relative order-1 lg:order-2">
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900 mx-auto max-w-sm">
                <img 
                  :src="solution.feature2.image" 
                  :alt="solution.feature2.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        <!-- Alternating Feature 3: Staff Management, Payroll & Retention -->
        <div class="rounded-3xl bg-[#FAF5FF] border border-[#E2E8F0] p-8 sm:p-12 lg:p-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-5 relative">
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900 mx-auto max-w-sm">
                <img 
                  :src="solution.feature3.image" 
                  :alt="solution.feature3.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <div class="lg:col-span-7 space-y-5">
              <span class="inline-block px-3 py-1 rounded-full bg-[#F5F3FF] text-[#581C87] font-black text-[10px] uppercase tracking-wider border border-[#E2E8F0]">
                {{ solution.feature3.tag }}
              </span>

              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                {{ solution.feature3.title }}
              </h3>

              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {{ solution.feature3.desc }}
              </p>

              <div class="space-y-2.5 pt-2">
                <div 
                  v-for="(bullet, bIdx) in solution.feature3.bullets" 
                  :key="bIdx"
                  class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]"
                >
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>{{ bullet }}</span>
                </div>
              </div>

              <div class="pt-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-3.5 rounded-full bg-[#581C87] text-white font-bold text-xs hover:bg-[#7E22CE] transition-all duration-200 shadow-md"
                >
                  Start 7-Day Free Trial →
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

      <!-- ================= 5. SOLUTION-SPECIFIC ACCORDION FAQS ================= -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-sm text-[#6B7280] mt-2">
            Everything you need to know about Salonist for {{ solution.title }}
          </p>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIdx) in solution.faqs" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-xs"
          >
            <h4 class="font-extrabold text-base text-[#1E293B] mb-2 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-[#F5F3FF] text-[#581C87] flex items-center justify-center text-xs font-black shrink-0">Q</span>
              <span>{{ faq.q }}</span>
            </h4>
            <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed pl-9">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 6. FINAL BOTTOM CTA ================= -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOnboardingOpen = true"
          @book-demo="demoOpen = true"
        />
      </div>

    </main>

    <!-- Footer -->
    <Footer />

    <!-- Modals -->
    <TrialOnboardingModal 
      v-model="trialOnboardingOpen"
      @close="trialOnboardingOpen = false"
      @switch-to-login="trialOnboardingOpen = false; loginOpen = true"
    />

    <LoginModal 
      v-model="loginOpen"
      @close="loginOpen = false"
      @switch-to-trial="loginOpen = false; trialOnboardingOpen = true"
    />

    <DemoBookingModal 
      v-model="demoOpen"
      @close="demoOpen = false"
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { 
  Calendar, CheckCircle2, RefreshCw, Users, 
  Megaphone, UserMinus, CreditCard 
} from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrustedBrandsStrip from '../components/homepage/TrustedBrandsStrip.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import { solutionsDirectory } from '../data/solutionsData.js';

const route = useRoute();

const solutionSlug = computed(() => {
  const p = route.params.slug;
  if (!p) return 'barbershop';
  return p;
});

const solution = computed(() => {
  return solutionsDirectory[solutionSlug.value] || solutionsDirectory['barbershop'];
});

const problemIcons = [Calendar, RefreshCw, Users, Megaphone, UserMinus, CreditCard];

const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const demoOpen = ref(false);
</script>
