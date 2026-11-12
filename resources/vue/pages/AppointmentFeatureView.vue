<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION (Salonist Content + Premium Design) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-6">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-2 shadow-xs">
          <Calendar class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>ONLINE APPOINTMENT MANAGEMENT SOFTWARE</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.12] max-w-5xl mx-auto">
          Online Appointment Booking & <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] via-[#923470] to-[#E11D48]">
            Scheduling Software for Salons & Spas
          </span>
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-3xl mx-auto font-normal leading-relaxed">
          Say goodbye to missed calls, double-bookings, and empty chairs. Salonist’s centralized appointment calendar lets clients self-book 24/7 via Instagram, Facebook, and your website, while your front-desk manages multi-staff shifts and room resources with simple drag-and-drop.
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

      <!-- ================= 3. EDITORIAL + INSET "Give Salonist a try !!" BANNER CARD ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Editorial (7 cols) -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight leading-tight">
              Manage Your Entire Floor from a Single Interactive Screen
            </h2>

            <p class="text-base text-[#5C525E] leading-relaxed">
              Handling dozens of daily hair color appointments, haircut finishes, and spa treatments across multiple staff members requires surgical coordination. Without smart appointment management software, receptionists waste hours fielding phone calls, manually rearranging schedules, and resolving awkward double-bookings.
            </p>

            <p class="text-base text-[#5C525E] leading-relaxed">
              Salonist consolidates all bookings into one high-velocity master calendar. Whether an appointment is booked through your Instagram profile at midnight, reserved by a walk-in guest at the front desk, or scheduled as a repeat weekly appointment, your entire team stays synchronized in real time.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                <span class="text-[#AA4184] font-black">✔</span>
                <span><strong>24/7 Self-Service Web & App Booking:</strong> Clients book services and choose stylists without calling.</span>
              </div>
              <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                <span class="text-[#AA4184] font-black">✔</span>
                <span><strong>Smart Slot Blockers:</strong> Automatically block out staff breaks, shift ends, and equipment maintenance.</span>
              </div>
              <div class="flex items-start gap-3 text-sm text-[#1C151D]">
                <span class="text-[#AA4184] font-black">✔</span>
                <span><strong>Drag & Drop Rescheduling:</strong> Move appointments across chairs or times with automatic client SMS alerts.</span>
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
                  <span>✔ Unlimited Stylists</span>
                </div>

                <div class="pt-2">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" 
                    alt="Salon Calendar Dashboard" 
                    class="w-full h-44 object-cover rounded-2xl shadow-md border border-white/10"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 4. 7 CORE APPOINTMENT CAPABILITIES ACCORDIONS ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-left space-y-3 mb-10">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            Key Features of Salonist Appointment Software
          </h2>
          <p class="text-base text-[#5C525E] max-w-4xl">
            Explore the advanced tools that keep your calendar full, eliminate unbooked processing gaps, and protect your staff's working hours.
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(feat, fIdx) in appointmentFeatures" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] p-5 shadow-xs hover:border-[#AA4184] transition-all cursor-pointer"
            @click="activeFeature = activeFeature === fIdx ? null : fIdx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-[#1C151D] text-white flex items-center justify-center font-black text-xs">
                  {{ fIdx + 1 }}
                </div>
                <h3 class="font-bold text-base text-[#1C151D]">{{ feat.title }}</h3>
              </div>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-[#AA4184]': activeFeature === fIdx }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <p v-show="activeFeature === fIdx" class="mt-4 text-sm text-[#5C525E] leading-relaxed pl-12 border-t border-slate-100 pt-3">
              {{ feat.content }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 5. DINGG SOFT BLUSH BACKGROUND SECTION ================= -->
      <DinggCouponPromoSection 
        business-type="salon & spa"
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
          badge="Start Automating Today"
          title="Keep every chair fully booked with Salonist Appointment Software"
          subtitle="Everything from calendar buffer rules to automated WhatsApp deposit reminders, ready out of the box."
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
import { Calendar } from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const activeFeature = ref(0);

const brandLogos = [
  { name: 'Toni & Guy', icon: '✂️' },
  { name: 'Buqwal', icon: '💈' },
  { name: 'Memories', icon: '🌸' },
  { name: 'Meraki Spa', icon: '🌿' },
  { name: 'Stile Barbers', icon: '✂️' },
  { name: 'Looks Salon', icon: '💆‍♀️' }
];

const appointmentFeatures = [
  {
    title: '24/7 Multi-Channel Online Booking Integration',
    content: 'Allow clients to book appointments around the clock through your website, mobile app, or social media handles (Instagram, Facebook, and Google Reserve) without telephone tag or reception delays.'
  },
  {
    title: 'Slot Blockers & Unavailability Management',
    content: 'Automatically block off days off, break times, and maintenance windows so clients only book during active, available stylist hours.'
  },
  {
    title: 'Visual Drag & Drop Centralized Calendar',
    content: 'Quickly rearrange, reschedule, or reassign appointments across staff columns and treatment rooms from any tablet, phone, or desktop with instant client SMS notifications.'
  },
  {
    title: 'Popup Notes & Customer Consultation History',
    content: 'Attach hair color formulas, patch test alerts, allergy warnings, and past visit notes directly to each appointment card for personalized service.'
  },
  {
    title: 'Automated Recurring Appointments',
    content: 'Easily set up weekly blowouts, bi-weekly beard trims, or monthly manicures with automatic recurrence so regulars never lose their preferred slot.'
  },
  {
    title: 'Color-Coded Status & Stylist Highlighting',
    content: 'Differentiate between confirmed, arrived, in-service, and completed visits with clear color-coded indicators across daily and weekly station views.'
  },
  {
    title: 'Automated 2-Way Reminders & Deposit Collection',
    content: 'Drastically reduce costly no-shows by collecting pre-authorized deposits and sending automated WhatsApp/SMS reminders with one-tap confirmations.'
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
