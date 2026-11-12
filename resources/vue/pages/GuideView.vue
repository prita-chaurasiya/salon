<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION (Screenshot 1 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-6">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-2 shadow-xs">
          <BookOpen class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>{{ currentGuideKey.toUpperCase() }} BLUEPRINT</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-5xl mx-auto">
          Running a Successful {{ guideSubject }}: <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] via-[#923470] to-[#E11D48]">
            A Comprehensive Management Guide
          </span>
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto font-normal leading-relaxed">
          Tips, Strategies, and Best Practices to Maximize Revenue and Customer Satisfaction
        </p>

        <!-- CTA Button (Screenshot 1 Match) -->
        <div class="flex items-center justify-center pt-2">
          <button 
            @click="trialOpen = true"
            class="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:scale-105 active:scale-95 text-white font-bold text-sm shadow-lg shadow-[#AA4184]/25 transition-all duration-300 cursor-pointer"
          >
            Get Free Trial
          </button>
        </div>

      </section>

      <!-- ================= 2. TRUSTED LOGO STRIP (Screenshot 2 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h3 class="text-sm font-bold uppercase tracking-wider text-[#1C151D] mb-6">
          Trusted Growth Software for Beauty & Wellness
        </h3>
        
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div 
            v-for="(brand, bIdx) in brandLogos" 
            :key="bIdx"
            class="px-6 py-3 rounded-full bg-white border border-[#F0E6EC] shadow-xs flex items-center gap-2 hover:border-[#AA4184] transition-colors"
          >
            <span class="text-sm">{{ brand.icon }}</span>
            <span class="text-xs font-bold text-[#1C151D]">{{ brand.name }}</span>
          </div>
        </div>
      </section>

      <!-- ================= 3. "Everything You Need To Know..." WITH INSET SALONIST CARD (Screenshot 2 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Text Editorial (7 cols) -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight leading-tight">
              Everything You Need To Know About {{ guideSubject }} Management
            </h2>

            <p class="text-base text-[#5C525E] leading-relaxed">
              Running a successful {{ guideSubject.toLowerCase() }} business requires a combination of creativity, technical skill, and effective management. It is a highly competitive industry and to secure your future, you need to nail these managerial combinations. Whether you are an experienced owner or just starting out, there are many factors to consider when it comes to managing your business.
            </p>

            <p class="text-base text-[#5C525E] leading-relaxed">
              From hiring and training staff to marketing and financial management, there are many important elements that go into making your business thrive. In this ultimate guide, we will explore the key strategies and best practices that can help you run a successful and profitable enterprise.
            </p>
          </div>

          <!-- Right Floating "Give Salonist a try !!" Banner Card (Screenshot 2 Exact Match) -->
          <div class="lg:col-span-5">
            <div class="rounded-3xl bg-gradient-to-br from-[#1C151D] via-[#2A1D2C] to-[#451B38] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-[#AA4184]/30">
              
              <!-- Ambient rose glow -->
              <div class="absolute -top-12 -right-12 w-48 h-48 bg-[#AA4184]/40 rounded-full blur-2xl pointer-events-none"></div>

              <div class="relative z-10 space-y-5">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 via-rose-500 to-[#AA4184] flex items-center justify-center font-black text-xs text-white">
                    ▲
                  </div>
                  <span class="text-2xl font-black tracking-tight text-white">Salonist</span>
                </div>

                <h3 class="text-xl font-black text-white leading-snug">
                  Give Salonist a try !!
                </h3>

                <p class="text-sm text-slate-200 leading-relaxed">
                  We have everything that you need to run your {{ guideSubject }} business. Use Salonist free for 7 days and experience the difference!!
                </p>

                <div class="pt-2">
                  <button 
                    @click="trialOpen = true"
                    class="w-full py-3.5 rounded-full bg-gradient-to-r from-[#AA4184] to-[#C05A9A] hover:from-[#923470] hover:to-[#AA4184] text-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Start Your Free Trial &rarr;
                  </button>
                </div>

                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>✔ No Credit Card Required</span>
                  <span>✔ Unlimited Staff</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 4. "What is Salon Management?" WITH CHECKLIST (Screenshot 3 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-[32px] bg-white border border-[#F0E6EC] p-8 sm:p-12 shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- Left Editorial & Bullet List (8 cols) -->
            <div class="lg:col-span-8 space-y-6 text-left">
              <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
                What is {{ guideSubject }} Management?
              </h2>

              <p class="text-base text-[#5C525E] leading-relaxed">
                {{ guideSubject }} management is the process of organising and coordinating the various aspects of the business, including operations, staffing, marketing, and finances. Effective management is essential to the success of any beauty and wellness brand. It helps to ensure that the business is operating efficiently and effectively, providing high-quality services to clients, and generating profits.
              </p>

              <p class="text-sm font-bold text-[#1C151D]">
                {{ guideSubject }} management can involve a wide range of tasks and responsibilities, including:
              </p>

              <!-- Checkpoints from Screenshot 3 -->
              <div class="space-y-3 pt-1">
                <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                  <span class="text-[#AA4184] font-black">✔</span>
                  <span>Hiring, training, and managing staff</span>
                </div>
                <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                  <span class="text-[#AA4184] font-black">✔</span>
                  <span>Developing and implementing marketing strategies to attract new clients and retain existing ones</span>
                </div>
                <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                  <span class="text-[#AA4184] font-black">✔</span>
                  <span>Managing inventory and supplies</span>
                </div>
                <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                  <span class="text-[#AA4184] font-black">✔</span>
                  <span>Maintaining equipment and facilities</span>
                </div>
                <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                  <span class="text-[#AA4184] font-black">✔</span>
                  <span>Monitoring and tracking financial performance, including revenue and expenses</span>
                </div>
                <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                  <span class="text-[#AA4184] font-black">✔</span>
                  <span>Ensuring compliance with local regulations and industry standards</span>
                </div>
              </div>

              <p class="text-sm text-[#5C525E] leading-relaxed pt-2">
                Ultimately, the objective is to establish a well-run business that offers great services to customers and promotes a positive work environment for employees.
              </p>
            </div>

            <!-- Right Visual Graphic (4 cols) -->
            <div class="lg:col-span-4">
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] relative">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                  alt="Management in Action" 
                  class="w-full h-80 object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p class="text-xs font-bold text-white">Streamline every shift with intelligent digital operations.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================= 5. DAILY ROLES & RESPONSIBILITIES ACCORDION (Screenshot 4 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-left space-y-3 mb-10">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            {{ guideSubject }} management daily roles and responsibilities
          </h2>
          <p class="text-base text-[#5C525E] max-w-4xl">
            After the brief introduction, let's dive deep into the daily roles and responsibilities of {{ guideSubject.toLowerCase() }} management. Effective management involves a variety of daily tasks and responsibilities that are essential to keeping the business running smoothly.
          </p>
        </div>

        <!-- 5 Numbered Accordion Items (Screenshot 4 Match) -->
        <div class="space-y-4">
          <div 
            v-for="(role, rIdx) in dailyRoles" 
            :key="rIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] p-5 shadow-xs hover:border-[#AA4184] transition-all cursor-pointer"
            @click="activeRole = activeRole === rIdx ? null : rIdx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-[#1C151D] text-white flex items-center justify-center font-black text-xs">
                  {{ rIdx + 1 }}
                </div>
                <h3 class="font-bold text-base text-[#1C151D]">{{ role.title }}</h3>
              </div>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-[#AA4184]': activeRole === rIdx }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <p v-show="activeRole === rIdx" class="mt-4 text-sm text-[#5C525E] leading-relaxed pl-12 border-t border-slate-100 pt-3">
              {{ role.content }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 6. WAYS TO IMPROVE YOUR MANAGEMENT (Screenshot 5 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-left space-y-3 mb-10">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            Ways to improve your {{ guideSubject.toLowerCase() }} management
          </h2>
          <p class="text-base text-[#5C525E] max-w-4xl">
            In this segment, we'll go through all the aspects of management and discuss the things you can do to flourish in them.
          </p>
        </div>

        <!-- 7 Numbered Accordion Items (Screenshot 5 Match) -->
        <div class="space-y-4">
          <div 
            v-for="(way, wIdx) in waysToImprove" 
            :key="wIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] p-5 shadow-xs hover:border-[#AA4184] transition-all cursor-pointer"
            @click="activeWay = activeWay === wIdx ? null : wIdx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-[#1C151D] text-white flex items-center justify-center font-black text-xs">
                  {{ wIdx + 1 }}
                </div>
                <h3 class="font-bold text-base text-[#1C151D]">{{ way.title }}</h3>
              </div>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-[#AA4184]': activeWay === wIdx }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <p v-show="activeWay === wIdx" class="mt-4 text-sm text-[#5C525E] leading-relaxed pl-12 border-t border-slate-100 pt-3">
              {{ way.content }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 7. CTA BANNER ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Execute With Precision"
          title="Put these best practices on autopilot with Salonist"
          subtitle="Everything from calendar rules to automated retail upsells, ready out of the box."
          @start-trial="trialOpen = true"
          @book-demo="demoOpen = true"
        />
      </section>

    </main>

    <Footer />

    <!-- Modals -->
    <TrialOnboardingModal 
      v-model="trialOpen" 
      @close="trialOpen = false" 
      @switch-to-login="trialOpen = false; loginOpen = true"
    />
    <LoginModal 
      v-model="loginOpen" 
      @close="loginOpen = false" 
      @switch-to-trial="loginOpen = false; trialOpen = true"
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
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import { BookOpen } from 'lucide-vue-next';

const route = useRoute();
const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const activeRole = ref(0);
const activeWay = ref(0);

const currentGuideKey = computed(() => {
  if (route.path.includes('spa-management')) return 'spa-management';
  if (route.path.includes('salon-automation')) return 'salon-automation';
  return 'salon-management';
});

const guideSubject = computed(() => {
  if (currentGuideKey.value === 'spa-management') return 'Spa';
  if (currentGuideKey.value === 'salon-automation') return 'Salon Automation';
  return 'Salon';
});

const brandLogos = [
  { name: 'Toni & Guy', icon: '✂️' },
  { name: 'Buqwal', icon: '💈' },
  { name: 'Memories', icon: '🌸' },
  { name: 'Meraki Spa', icon: '🌿' },
  { name: 'Stile Barbers', icon: '✂️' },
  { name: 'Looks Salon', icon: '💆‍♀️' }
];

/* Screenshot 4 Accordions */
const dailyRoles = [
  {
    title: 'Staff Management',
    content: 'Coordinating shifts, monitoring chair utilization, tracking employee time-clocks, resolving schedule overlaps, and managing stylist commission splits with total transparency.'
  },
  {
    title: 'Financial Management',
    content: 'Reconciling daily till counts, generating day-end Z-reports, tracking deferred revenue from vouchers, and keeping tax-compliant accounts.'
  },
  {
    title: 'Client Services',
    content: 'Ensuring seamless arrivals, monitoring service timing to avoid delays, managing VIP preferences, and handling instant re-bookings during checkout.'
  },
  {
    title: 'Inventory management',
    content: 'Overseeing professional back-bar product usage, setting automated low-stock reorder thresholds, and tracking retail stock turnover.'
  },
  {
    title: 'Marketing and promotion',
    content: 'Launching automated WhatsApp reminders, holiday flash campaigns, client birthday reward treats, and monitoring digital review scores.'
  }
];

/* Screenshot 5 Accordions */
const waysToImprove = [
  {
    title: 'Efficient staff management',
    content: 'Equip stylists with individual mobile portals to track upcoming bookings, personal commission earnings, and client history in real time.'
  },
  {
    title: 'Inventory management',
    content: 'Implement barcode scanning at checkout to update stock ledgers instantly and eliminate manual inventory counts.'
  },
  {
    title: 'Marketing for your salon business',
    content: 'Target lapsed clients who haven’t visited in 60+ days with personalized SMS/WhatsApp re-engagement discounts.'
  },
  {
    title: 'Client retention',
    content: 'Introduce tiered membership packages and points-based loyalty programs that make clients choose you over competitors every time.'
  },
  {
    title: 'Managing operations and revenue',
    content: 'Utilize predictive booking analytics and heatmaps to pinpoint slow hours and optimize pricing accordingly.'
  },
  {
    title: 'Reviews and feedback',
    content: 'Trigger automated post-appointment review requests 90 minutes after checkout to dominate local Google Maps search rankings.'
  },
  {
    title: 'Employee encouragement',
    content: 'Celebrate top performers with automated leaderboard badges, performance bonuses, and transparent commission reports.'
  }
];
</script>
