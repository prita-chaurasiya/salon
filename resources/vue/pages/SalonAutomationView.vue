<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-6">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-2 shadow-xs">
          <Zap class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>INTELLIGENT SALON AUTOMATION</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-5xl mx-auto">
          Automate Your Salon Operations: <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] via-[#923470] to-[#E11D48]">
            Work Less, Earn More With Salonist AI
          </span>
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-3xl mx-auto font-normal leading-relaxed">
          Put routine front-desk tasks on autopilot. Salonist automates 24/7 online bookings, multi-chair schedule optimization, SMS & WhatsApp reminders, staff commission payroll, and client retention marketing in one seamless cloud system.
        </p>

        <!-- CTA Buttons with Luxury Gradient -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button 
            @click="trialOpen = true"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:scale-105 active:scale-95 text-white font-bold text-sm shadow-lg shadow-[#AA4184]/25 transition-all duration-300 cursor-pointer"
          >
            Start Free 7-Day Trial
          </button>
          
          <router-link 
            to="/client-testimonials"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D8D3E2] bg-white hover:bg-[#FAF7F9] hover:border-[#AA4184] text-[#1C151D] hover:text-[#AA4184] font-bold text-sm shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            Client Testimonials
          </router-link>
        </div>

      </section>

      <!-- ================= 2. TRUSTED BRAND PILLS ================= -->
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

      <!-- ================= 3. EDITORIAL + INSET "Give Salonist a try !!" CARD ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Editorial (7 cols) -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight leading-tight">
              Why Modern Salons Must Automate Daily Workflows
            </h2>

            <p class="text-base text-[#5C525E] leading-relaxed">
              Running a high-velocity salon without automation means spending up to 35% of your day answering phone calls, juggling paper diaries, calculating stylist commissions on scratchpads, and dealing with costly last-minute no-shows. In a competitive beauty landscape, manual operations eat away at profit margins and burn out talented staff.
            </p>

            <p class="text-base text-[#5C525E] leading-relaxed">
              Salonist’s intelligent salon automation engine replaces friction with seamless automation. From the moment a customer spots your Instagram story to the post-service Google review collection, our system synchronizes every chair, stylist, washbasin, and payment terminal automatically.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                <span class="text-[#AA4184] font-black">✔</span>
                <span><strong>Instant 24/7 Self-Booking:</strong> Clients book directly via Instagram, Google, and Web without calling reception.</span>
              </div>
              <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                <span class="text-[#AA4184] font-black">✔</span>
                <span><strong>Zero Overlap Calendar Algorithm:</strong> Automatically blocks station equipment, wash sinks, and stylist buffer downtimes.</span>
              </div>
              <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                <span class="text-[#AA4184] font-black">✔</span>
                <span><strong>Hands-Free Marketing:</strong> Automated WhatsApp win-backs for clients who haven’t rebooked in 45+ days.</span>
              </div>
            </div>
          </div>

          <!-- Right Floating "Give Salonist a try !!" Banner Card -->
          <div class="lg:col-span-5">
            <div class="rounded-3xl bg-gradient-to-br from-[#1C151D] via-[#2A1D2C] to-[#451B38] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-[#AA4184]/30">
              
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
                  We have everything that you need to run your Salon business. Use Salonist free for 7 days and experience the difference!!
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

                <div class="pt-2">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" 
                    alt="Automated Salon Terminal" 
                    class="w-full h-44 object-cover rounded-2xl shadow-md border border-white/10"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 4. 7 CORE SALON AUTOMATION PILLARS ACCORDIONS ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-left space-y-3 mb-10">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            Key Pillars of Salon Automation
          </h2>
          <p class="text-base text-[#5C525E] max-w-4xl">
            Explore how Salonist automates every critical operational layer across your salon or clinic floor.
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(pillar, pIdx) in automationPillars" 
            :key="pIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] p-5 shadow-xs hover:border-[#AA4184] transition-all cursor-pointer"
            @click="activePillar = activePillar === pIdx ? null : pIdx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-[#1C151D] text-white flex items-center justify-center font-black text-xs">
                  {{ pIdx + 1 }}
                </div>
                <h3 class="font-bold text-base text-[#1C151D]">{{ pillar.title }}</h3>
              </div>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-[#AA4184]': activePillar === pIdx }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <p v-show="activePillar === pIdx" class="mt-4 text-sm text-[#5C525E] leading-relaxed pl-12 border-t border-slate-100 pt-3">
              {{ pillar.content }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 5. DINGG SOFT BLUSH BACKGROUND SECTION ================= -->
      <DinggCouponPromoSection 
        business-type="salon"
        @start-trial="trialOpen = true"
        class="mb-24"
      />

      <!-- ================= 6. CUSTOMER STORIES: "Loved by thousands of salons and spas" ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center space-y-3 mb-12">
          <span class="text-xs uppercase font-extrabold tracking-widest text-[#AA4184]">CUSTOMER STORIES</span>
          <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight">
            Loved by thousands of salons and spas
          </h2>
          <p class="text-base text-[#5C525E] max-w-2xl mx-auto">
            Watch real video case studies from salon directors who scaled multi-chair revenue and eliminated calendar double-bookings.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(video, vIdx) in videoStories" 
            :key="vIdx" 
            class="group relative rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] bg-slate-900 cursor-pointer aspect-[3/4]"
          >
            <img 
              :src="video.image" 
              :alt="video.name" 
              class="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-[#AA4184] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <div class="absolute inset-x-4 bottom-6 text-center space-y-1">
              <p class="text-lg font-black text-white leading-tight drop-shadow-md">
                "{{ video.highlight }}"
              </p>
              <h4 class="font-bold text-xs text-rose-200 uppercase tracking-widest pt-2">
                {{ video.name }}
              </h4>
              <p class="text-[11px] text-slate-300">{{ video.salonType }}</p>
            </div>
          </div>
        </div>

        <div class="text-center pt-10">
          <router-link 
            to="/client-testimonials"
            class="px-8 py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>View All Verified Client Testimonials</span>
            <span>&rarr;</span>
          </router-link>
        </div>
      </section>

      <!-- ================= 7. CTA ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Automate Your Salon"
          title="Eliminate admin chaos and maximize chair yield with Salonist"
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
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import DinggCouponPromoSection from '../components/common/DinggCouponPromoSection.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import { Zap } from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const activePillar = ref(0);

const brandLogos = [
  { name: 'Toni & Guy', icon: '✂️' },
  { name: 'Buqwal', icon: '💈' },
  { name: 'Memories', icon: '🌸' },
  { name: 'Meraki Spa', icon: '🌿' },
  { name: 'Stile Barbers', icon: '✂️' },
  { name: 'Looks Salon', icon: '💆‍♀️' }
];

const automationPillars = [
  {
    title: '24/7 Automated Online Booking & Instagram Integration',
    content: 'Eliminate missed calls and back-and-forth messaging. Clients book self-service directly from Instagram, Google Reserve, and your website into your live master calendar without front-desk delays.'
  },
  {
    title: 'Automated Slot Blocking & Equipment Sync',
    content: 'Synchronize stations, laser devices, washbasins, and treatment rooms with services so machines and master colorists are never double-booked.'
  },
  {
    title: 'Automated SMS, WhatsApp & Email Reminders',
    content: 'Send personalized 2-way booking confirmations, calendar links, and 24-hour reminders. Clients can confirm with one tap, slashing no-shows by over 80%.'
  },
  {
    title: 'Saloni AI: Intelligent Operational Assistance',
    content: 'Saloni AI forecasts chair demand, identifies unbooked downtime gaps, suggests personalized retail add-ons during checkout, and tracks client retention automatically.'
  },
  {
    title: 'Automated Multi-Tier Staff Payroll & Commissions',
    content: 'Automatically calculate service commissions, retail sales bonuses, tip disbursements, and booth rental deductions dynamically upon ticket completion.'
  },
  {
    title: 'Automated Inventory & Back-Bar Stock Tracking',
    content: 'Every hair bleach scoop, dye tube, or aesthetic ampoule used is deducted in real time. Automated reorder alerts prevent stockouts before peak weekends.'
  },
  {
    title: 'Hands-Free Client Retention & Win-Back Campaigns',
    content: 'Trigger automated messages to clients who haven’t visited in 45 or 60 days, send birthday treats, and request Google 5-star reviews 90 minutes post-checkout.'
  }
];

const videoStories = [
  {
    name: 'Slenco Grooming',
    salonType: 'Flagship Barbershop Chain',
    highlight: 'managing staff and appointments seamlessly',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'BB Salon & Spa',
    salonType: 'Boutique Hair & Color Bar',
    highlight: 'valuable asset for our everyday growth',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'G Salon Flagship',
    salonType: 'Multi-Station Beauty Studio',
    highlight: 'zero chair double-bookings ever again',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Glow Box Clinic',
    salonType: 'Aesthetic Skin & Laser Clinic',
    highlight: 'our most successful software investment',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80'
  }
];
</script>
