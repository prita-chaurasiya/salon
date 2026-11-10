<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION (Screenshot 1: Your One-Stop Solution for All Business Needs) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <!-- Top Pill -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-6 shadow-xs">
          <Sparkles class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Why Choose Salonist</span>
        </div>

        <!-- Big Dual-Tone Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Your One-Stop Solution <br />
          <span class="text-[#AA4184]">for All Business Needs</span>
        </h1>

        <!-- Subtitle -->
        <p class="mt-6 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto font-normal leading-relaxed">
          Salonist is an all-in-one salon management software designed to promote growth in the beauty and wellness industry.
        </p>

        <!-- CTA Buttons matching Screenshot 1 -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            @click="trialOpen = true"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Get A Free Trial
          </button>
          
          <a 
            href="#testimonials"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#AA4184] hover:bg-[#923470] text-white font-bold text-sm shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Client Testimonials
          </a>
        </div>

        <!-- Review Badges: Capterra, G2, SoftwareSuggest (Exact from Screenshot 1) -->
        <div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
          <!-- Capterra (4.4) -->
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg bg-[#EBF5FB] flex items-center justify-center text-[#2888D1] font-bold text-xs">
              ▲
            </div>
            <div class="text-left leading-tight">
              <span class="font-bold text-[#1C151D]">Capterra</span>
              <div class="flex items-center gap-1 text-[#F59E0B] text-xs">
                <span>★★★★★</span>
                <span class="text-[#5C525E] text-[11px] font-semibold">(4.4)</span>
              </div>
            </div>
          </div>

          <!-- G2 (5.0) -->
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-full bg-[#FFF0EB] flex items-center justify-center text-[#FF492C] font-black text-xs">
              G²
            </div>
            <div class="text-left leading-tight">
              <span class="font-bold text-[#1C151D]">G2 Crowd</span>
              <div class="flex items-center gap-1 text-[#F59E0B] text-xs">
                <span>★★★★★</span>
                <span class="text-[#5C525E] text-[11px] font-semibold">(5.0)</span>
              </div>
            </div>
          </div>

          <!-- SoftwareSuggest (4.9) -->
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-full bg-[#1F2937] flex items-center justify-center text-white font-black text-xs">
              S
            </div>
            <div class="text-left leading-tight">
              <span class="font-bold text-[#1C151D]">SoftwareSuggest</span>
              <div class="flex items-center gap-1 text-[#F59E0B] text-xs">
                <span>★★★★★</span>
                <span class="text-[#5C525E] text-[11px] font-semibold">(4.9)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 2. TRUSTED BRAND PILLS (Screenshot 2 Top) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h3 class="text-center text-sm font-black uppercase tracking-wider text-[#1C151D] mb-6">
          Trusted Growth Software for Beauty & Wellness
        </h3>
        
        <div class="flex flex-wrap items-center justify-center gap-3">
          <div 
            v-for="(brand, b) in brands" 
            :key="b"
            class="px-6 py-2.5 rounded-full bg-white border border-[#F0E6EC] shadow-xs text-xs font-serif italic text-[#1C151D] hover:border-[#AA4184] hover:text-[#AA4184] transition-colors"
          >
            {{ brand }}
          </div>
        </div>
      </section>

      <!-- ================= 3. FEATURE SHOWCASE 1: SAVE TIME FOR IMPORTANT THINGS (Screenshot 2) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Visual: Interactive Schedule Card with 'Increase Productivity By 60%' Stamp -->
          <div class="lg:col-span-6 relative">
            <div class="rounded-3xl bg-white border border-[#F0E6EC] p-8 shadow-xl relative overflow-hidden">
              <div class="space-y-4">
                <!-- Sample Appointment Card 1 -->
                <div class="p-4 rounded-2xl bg-[#FCFBFD] border-l-4 border-l-[#AA4184] border border-[#F0E6EC] flex items-center justify-between">
                  <div>
                    <h5 class="font-bold text-sm text-[#1C151D]">Pamela</h5>
                    <p class="text-xs text-[#8E8291]">Day Makeup • Stylist Sarah</p>
                  </div>
                  <span class="text-xs font-mono font-bold text-[#AA4184] bg-[#FBF0F6] px-2.5 py-1 rounded-full">09:00 am</span>
                </div>

                <!-- Sample Appointment Card 2 -->
                <div class="p-4 rounded-2xl bg-[#FCFBFD] border-l-4 border-l-[#4A1E3B] border border-[#F0E6EC] flex items-center justify-between">
                  <div>
                    <h5 class="font-bold text-sm text-[#1C151D]">Alexander</h5>
                    <p class="text-xs text-[#8E8291]">Brow Wax & Beard Trim</p>
                  </div>
                  <span class="text-xs font-mono font-bold text-[#4A1E3B] bg-[#FBF0F6] px-2.5 py-1 rounded-full">10:30 am</span>
                </div>

                <!-- Sample Appointment Card 3 -->
                <div class="p-4 rounded-2xl bg-[#FCFBFD] border-l-4 border-l-emerald-500 border border-[#F0E6EC] flex items-center justify-between">
                  <div>
                    <h5 class="font-bold text-sm text-[#1C151D]">Catherine M.</h5>
                    <p class="text-xs text-[#8E8291]">HydraFacial Glow Treatment</p>
                  </div>
                  <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">11:15 am</span>
                </div>
              </div>

              <!-- Increase Productivity By 60% Floating Circle Badge (Screenshot 2) -->
              <div class="absolute -bottom-4 right-6 w-32 h-32 rounded-full bg-[#1F1521] text-white flex flex-col items-center justify-center p-3 text-center shadow-2xl border-4 border-white transform hover:scale-105 transition-transform">
                <span class="text-[10px] uppercase font-bold tracking-tight text-[#E8D3DF]">Increase</span>
                <span class="text-[11px] uppercase font-extrabold text-[#E8D3DF]">Productivity By</span>
                <span class="text-2xl font-serif italic font-black text-[#F5DDEB]">60%</span>
              </div>
            </div>
          </div>

          <!-- Right Content & Accordions (Screenshot 2) -->
          <div class="lg:col-span-6 space-y-6 text-left">
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight leading-[1.2]">
              Save time for Important Things
            </h2>

            <p class="text-base text-[#5C525E] leading-relaxed">
              It is an automated solution that saves time by managing your staff & customer schedules automatically with just one click. This allows you to put your time and effort into more important parts of your business.
            </p>

            <!-- Interactive Collapsible Accordions (Screenshot 2) -->
            <div class="space-y-3 pt-2">
              <div 
                v-for="(acc, a) in timeAccordions" 
                :key="a"
                class="rounded-2xl border border-[#F0E6EC] bg-white transition-all overflow-hidden"
              >
                <button 
                  @click="activeAccordion1 = activeAccordion1 === a ? null : a"
                  class="w-full p-4 px-5 flex items-center justify-between text-left font-bold text-sm text-[#1C151D] hover:text-[#AA4184] transition-colors"
                >
                  <div class="flex items-center gap-3">
                    <component :is="acc.icon" class="w-5 h-5 text-[#AA4184]" />
                    <span>{{ acc.title }}</span>
                  </div>
                  <ChevronDown class="w-4 h-4 text-[#8E8291] transition-transform duration-200" :class="{ 'rotate-180 text-[#AA4184]': activeAccordion1 === a }" />
                </button>
                <div v-show="activeAccordion1 === a" class="px-5 pb-4 text-xs text-[#5C525E] leading-relaxed pt-1">
                  {{ acc.desc }}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ================= 4. FEATURE SHOWCASE 2: PROVIDE AN EXCEPTIONAL EXPERIENCE (Screenshot 3) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Content & Interactive Accordions (Screenshot 3) -->
          <div class="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight leading-[1.2]">
              Provide an exceptional experience
            </h2>

            <p class="text-base text-[#5C525E] leading-relaxed">
              Salonist delivers the top-notch experience that customers desire for their services, whether it's convenient appointment booking or high-quality service.
            </p>

            <!-- Accordions from Screenshot 3 -->
            <div class="space-y-3 pt-2">
              <div 
                v-for="(acc, a) in experienceAccordions" 
                :key="a"
                class="rounded-2xl border border-[#F0E6EC] bg-white transition-all overflow-hidden"
              >
                <button 
                  @click="activeAccordion2 = activeAccordion2 === a ? null : a"
                  class="w-full p-4 px-5 flex items-center justify-between text-left font-bold text-sm text-[#1C151D] hover:text-[#AA4184] transition-colors"
                >
                  <div class="flex items-center gap-3">
                    <component :is="acc.icon" class="w-5 h-5 text-[#AA4184]" />
                    <span>{{ acc.title }}</span>
                  </div>
                  <ChevronDown class="w-4 h-4 text-[#8E8291] transition-transform duration-200" :class="{ 'rotate-180 text-[#AA4184]': activeAccordion2 === a }" />
                </button>
                <div v-show="activeAccordion2 === a" class="px-5 pb-4 text-xs text-[#5C525E] leading-relaxed pt-1">
                  {{ acc.desc }}
                </div>
              </div>
            </div>

          </div>

          <!-- Right Visual: Service Selection & Rewards Card (Screenshot 3) -->
          <div class="lg:col-span-6 order-1 lg:order-2">
            <div class="rounded-3xl bg-white border border-[#F0E6EC] p-8 shadow-xl space-y-6">
              
              <!-- Select Your Salon Services Card -->
              <div class="p-5 rounded-2xl bg-[#FCFBFD] border border-[#F0E6EC]">
                <h6 class="font-serif italic font-bold text-sm text-[#1C151D] mb-3 text-center">
                  Select Your Salon Services?
                </h6>
                <div class="space-y-2">
                  <div class="p-2.5 rounded-xl bg-[#FBF0F6] text-[#AA4184] font-bold text-xs flex items-center justify-between border border-[#F5DDEB]">
                    <span>Haircuts and Styling</span>
                    <span>✓</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white border border-[#F0E6EC] text-[#5C525E] text-xs flex items-center justify-between">
                    <span>Hair Coloring & Balayage</span>
                    <span>+</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white border border-[#F0E6EC] text-[#5C525E] text-xs flex items-center justify-between">
                    <span>Skin Glow Facial</span>
                    <span>+</span>
                  </div>
                </div>
              </div>

              <!-- Rewards & Pay Summary -->
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 rounded-2xl bg-[#FBF0F6] border border-[#F5DDEB] text-center">
                  <Award class="w-5 h-5 text-[#AA4184] mx-auto mb-1" />
                  <p class="text-[11px] text-[#5C525E]">Rewards Points</p>
                  <p class="text-base font-black text-[#AA4184]">8.90 pts</p>
                </div>
                <button 
                  @click="trialOpen = true"
                  class="p-4 rounded-2xl bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm flex items-center justify-center transition-colors shadow-md"
                >
                  Pay Now →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 5. CTA SECTION ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Upgrade To Salonist"
          title="Ready to transform your salon operations today?"
          subtitle="Join thousands of salon owners who increased appointments, saved hours on staff scheduling and boosted retail sales."
          @start-trial="trialOpen = true"
          @book-demo="demoOpen = true"
        />
      </section>

    </main>

    <!-- Modals -->
    <TrialOnboardingModal 
      v-if="trialOpen" 
      :is-open="trialOpen" 
      @close="trialOpen = false" 
    />

    <DemoBookingModal 
      v-if="demoOpen" 
      :is-open="demoOpen" 
      @close="demoOpen = false" 
    />

    <LoginModal 
      v-if="loginOpen" 
      :is-open="loginOpen" 
      @close="loginOpen = false" 
    />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';

import { 
  Sparkles, Calendar, Clock, Award, 
  ChevronDown, CheckCircle, HeartHandshake, ShieldCheck
} from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const activeAccordion1 = ref(0);
const activeAccordion2 = ref(0);

const brands = [
  'Buqwal Luxury Hair', 'Memories Wellness', 'Meraki Aesthetic', 'Stile Barbers', 'Looks Salon & Spa', 'Onyx Studio'
];

/* Screenshot 2 Accordions */
const timeAccordions = [
  {
    title: 'Pre-Appointment Booking',
    desc: 'Empower clients to book their preferred services and time slots 24/7 online, cutting front-desk phone calls by over 70%.',
    icon: Calendar
  },
  {
    title: 'Client Convenience',
    desc: 'Automated SMS and WhatsApp confirmations keep guests informed, dramatically reducing late arrivals and no-shows.',
    icon: CheckCircle
  },
  {
    title: 'Automated Staff Shift Scheduling',
    desc: 'Generate balanced weekly rosters and monitor chair allocation in real-time with automatic break padding.',
    icon: Clock
  }
];

/* Screenshot 3 Accordions */
const experienceAccordions = [
  {
    title: '24/7 Online Booking',
    desc: 'Smooth self-service booking from your website, Google Reserve, and social media channels at any hour.',
    icon: Clock
  },
  {
    title: 'Client Rewards & Loyalty System',
    desc: 'Reward repeat guests with points on every service and product purchase, driving consistent client retention.',
    icon: Award
  },
  {
    title: 'Build Meaningful Relationships',
    desc: 'Maintain rich client profiles with service history, formula notes, allergy alerts, and customized preferences.',
    icon: HeartHandshake
  }
];
</script>
