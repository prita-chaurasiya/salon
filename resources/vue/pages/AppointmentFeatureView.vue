<template>
  <div class="min-h-screen bg-white text-[#140B28] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Page Content -->
    <main class="flex-grow pt-24">
      
      <!-- 1. Hero Section -->
      <section class="relative py-20 lg:py-28 bg-gradient-to-b from-[#FAF8FE] via-white to-white overflow-hidden border-b border-[#E8EAF2]">
        
        <!-- Luxury Ambient Gradient Orbs -->
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-r from-[#681FA8]/12 via-[#E11D74]/15 to-[#F97316]/10 blur-3xl pointer-events-none rounded-full"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Copy Column -->
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9FA] border border-[#D9C8F5] mb-6 shadow-xs">
                <span class="w-2 h-2 rounded-full bg-[#E11D74] animate-pulse"></span>
                <span class="text-xs font-extrabold uppercase tracking-wider text-[#681FA8]">Salon Appointment Software</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#140B28] tracking-tight leading-[1.12]">
                Effortless 24/7 Booking. <br />
                <span class="bg-gradient-to-r from-[#681FA8] via-[#E11D74] to-[#F97316] bg-clip-text text-transparent">
                  Zero No-Shows.
                </span>
                <br />
                Full Salon Chairs.
              </h1>

              <p class="mt-6 text-base sm:text-lg text-[#554C68] max-w-xl leading-relaxed">
                Empower your clients to book haircuts, hair color, manicures, and massages right from your website, Instagram, and Google profile. Automate deposit collection, buffer times, and WhatsApp reminders with ease.
              </p>

              <!-- CTA Actions -->
              <div class="mt-8 flex flex-wrap items-center gap-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-4 rounded-full bg-gradient-to-r from-[#681FA8] via-[#E11D74] to-[#F97316] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#E11D74]/25 hover:shadow-2xl hover:shadow-[#E11D74]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Start Free 7-Day Trial
                </button>

                <button 
                  @click="demoOpen = true"
                  class="px-7 py-4 rounded-full bg-white border border-[#E8EAF2] text-[#140B28] font-bold text-sm hover:border-[#681FA8] hover:bg-[#FAF8FE] transition-all duration-200 shadow-xs flex items-center gap-2"
                >
                  <Calendar class="w-4 h-4 text-[#681FA8]" />
                  <span>Schedule Live Demo</span>
                </button>
              </div>

              <!-- Trust Micro-metrics -->
              <div class="mt-10 pt-6 border-t border-[#E8EAF2] flex flex-wrap items-center gap-6 text-xs text-[#554C68]">
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="w-4 h-4 text-[#E11D74]" />
                  <span>No credit card required</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="w-4 h-4 text-[#E11D74]" />
                  <span>Unlimited staff included</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="w-4 h-4 text-[#E11D74]" />
                  <span>Free client data migration</span>
                </div>
              </div>
            </div>

            <!-- Right Interactive Tablet Preview -->
            <div class="lg:col-span-5 relative">
              <div class="rounded-3xl bg-white border border-[#E8EAF2] p-5 shadow-2xl relative">
                
                <!-- Live Calendar Header -->
                <div class="flex items-center justify-between pb-4 border-b border-[#F0EDF6]">
                  <div>
                    <h3 class="text-sm font-black text-[#140B28]">Live Calendar Matrix</h3>
                    <p class="text-[11px] text-[#554C68]">Today, Saturday • 4 Active Chairs</p>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    96% Occupancy
                  </span>
                </div>

                <!-- Chair Timeline Simulation -->
                <div class="mt-4 space-y-3">
                  <!-- Chair 1 -->
                  <div class="p-3 rounded-2xl bg-[#FAF5EE] border border-[#EFE8DA]">
                    <div class="flex items-center justify-between mb-1.5">
                      <div class="flex items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" class="w-6 h-6 rounded-full object-cover" />
                        <span class="text-xs font-bold text-[#140B28]">Aurelia S. (Master Stylist)</span>
                      </div>
                      <span class="text-[10px] font-mono text-[#E11D74] font-bold">10:00 - 12:30 PM</span>
                    </div>
                    <div class="p-2 rounded-xl bg-white border border-[#E8E4DB] flex items-center justify-between">
                      <div>
                        <p class="text-xs font-bold text-[#140B28]">Balayage & Glaze • Emily Watson</p>
                        <p class="text-[10px] text-[#554C68]">Includes 40m processing buffer gap</p>
                      </div>
                      <span class="text-xs font-black text-emerald-600">$260</span>
                    </div>
                  </div>

                  <!-- Chair 2 -->
                  <div class="p-3 rounded-2xl bg-[#FAF8FE] border border-[#EFE9FA]">
                    <div class="flex items-center justify-between mb-1.5">
                      <div class="flex items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" class="w-6 h-6 rounded-full object-cover" />
                        <span class="text-xs font-bold text-[#140B28]">Marcus Vance (Senior Barber)</span>
                      </div>
                      <span class="text-[10px] font-mono text-[#681FA8] font-bold">11:15 - 12:00 PM</span>
                    </div>
                    <div class="p-2 rounded-xl bg-white border border-[#E8E4DB] flex items-center justify-between">
                      <div>
                        <p class="text-xs font-bold text-[#140B28]">Precision Fade & Hot Towel • David K.</p>
                        <p class="text-[10px] text-[#554C68]">Booked via Instagram direct link</p>
                      </div>
                      <span class="text-xs font-black text-emerald-600">$85</span>
                    </div>
                  </div>

                  <!-- Chair 3: Automated Buffer Slot -->
                  <div class="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <Sparkles class="w-4 h-4 text-emerald-600" />
                        <span class="text-xs font-bold text-emerald-900">AI Buffer Auto-Fill</span>
                      </div>
                      <span class="text-[10px] font-bold text-emerald-700">Waitlist Alert Sent</span>
                    </div>
                    <p class="text-[11px] text-emerald-800 mt-1">
                      Elena Miller auto-confirmed 30m Express Blowout in vacant slot!
                    </p>
                  </div>
                </div>

                <!-- Floating Badge -->
                <div class="mt-4 pt-3 border-t border-[#F0EDF6] flex items-center justify-between text-[11px] text-[#554C68]">
                  <span>Instant 2-way sync with Google Calendar</span>
                  <span class="font-bold text-[#681FA8]">Zero Latency</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. Pillar Modules Deep Dive (Appointment Specifics) -->
      <section class="py-24 bg-white border-b border-[#E8EAF2]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="inline-block px-4 py-1.5 rounded-full bg-[#EFE9FA] text-[#681FA8] font-bold text-xs uppercase tracking-wider mb-3">
              Complete Scheduling Suite
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#140B28] tracking-tight">
              Every Feature Designed to <br />
              <span class="bg-gradient-to-r from-[#681FA8] to-[#E11D74] bg-clip-text text-transparent">
                Fill Your Salon Calendar
              </span>
            </h2>
            <p class="mt-4 text-sm sm:text-base text-[#554C68] max-w-2xl mx-auto leading-relaxed">
              From online booking widgets to smart slot blockers, here is how Salonist keeps every chair profitable without double bookings.
            </p>
          </div>

          <!-- 6 Grid Feature Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="(feat, fIdx) in appointmentFeatures" 
              :key="fIdx"
              class="p-8 rounded-[28px] bg-[#FAF8FE] border border-[#E8EAF2] hover:border-[#681FA8]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div class="w-14 h-14 rounded-2xl bg-white border border-[#E8EAF2] flex items-center justify-center text-[#681FA8] shadow-xs mb-6 group-hover:bg-[#E11D74] group-hover:text-white transition-all duration-300">
                  <component :is="feat.icon" class="w-6 h-6" />
                </div>
                <h3 class="text-xl font-bold text-[#140B28] mb-3">{{ feat.title }}</h3>
                <p class="text-xs sm:text-[13px] text-[#554C68] leading-relaxed mb-6">{{ feat.description }}</p>
              </div>

              <div class="pt-4 border-t border-[#E8EAF2] flex items-center justify-between text-xs">
                <span class="font-bold text-[#681FA8]">{{ feat.highlight }}</span>
                <span class="text-neutral-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 3. Omnichannel Booking Embeds (Website + Instagram + WhatsApp) -->
      <section class="py-24 bg-[#FAF5EE] border-b border-[#EBE3D5]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-6">
              <span class="text-xs font-bold uppercase tracking-widest text-[#E11D74]">
                Omnichannel Booking
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-[#140B28] mt-2 mb-6 leading-tight">
                Clients Book Wherever They Find You. <br />
                <span class="bg-gradient-to-r from-[#681FA8] to-[#E11D74] bg-clip-text text-transparent">
                  In Seconds.
                </span>
              </h2>
              <p class="text-sm sm:text-base text-[#554C68] leading-relaxed mb-8">
                Never lose a booking because a client messaged after hours or couldn’t get through on the phone. Embed our high-converting widget anywhere or generate dedicated booking links.
              </p>

              <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8E4DB] shadow-xs">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E11D74] to-[#F97316] text-white flex items-center justify-center shrink-0">
                    <Instagram class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-[#140B28]">Instagram & Facebook "Book Now" Buttons</h4>
                    <p class="text-xs text-[#554C68] mt-0.5">Direct integration turns profile visitors and story viewers into confirmed appointments instantly.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8E4DB] shadow-xs">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-[#140B28]">2-Way WhatsApp Booking Concierge</h4>
                    <p class="text-xs text-[#554C68] mt-0.5">Automated conversational bot shares available slots, collects deposit payments, and confirms bookings 24/7.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8E4DB] shadow-xs">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0">
                    <Globe class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-[#140B28]">Branded Website Booking Widget</h4>
                    <p class="text-xs text-[#554C68] mt-0.5">Seamless embed for WordPress, Wix, Squarespace, Shopify, or custom websites with custom colors.</p>
                  </div>
                </div>
              </div>

            </div>

            <!-- Booking Mockup Card -->
            <div class="lg:col-span-6">
              <div class="rounded-3xl bg-white border border-[#E8E4DB] p-6 sm:p-8 shadow-xl">
                <div class="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#140B28] text-white flex items-center justify-center font-bold">
                      S
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#140B28]">Atelier Aurelia • Online Booking</h4>
                      <p class="text-[11px] text-[#554C68]">Step 2 of 3: Select Date & Time</p>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-[#E11D74]">Deposit Protected</span>
                </div>

                <!-- Calendar Time Picker -->
                <div class="space-y-4">
                  <div class="flex items-center justify-between text-xs font-bold text-[#140B28] px-1">
                    <span>Selected: Balayage & Cut with Aurelia</span>
                    <span class="text-[#681FA8]">$260 (2h 30m)</span>
                  </div>

                  <div class="grid grid-cols-4 gap-2 text-center text-xs">
                    <div class="p-2.5 rounded-xl border border-[#E8EAF2] text-[#554C68] hover:border-[#681FA8] cursor-pointer">10:00 AM</div>
                    <div class="p-2.5 rounded-xl bg-[#681FA8] text-white font-bold cursor-pointer shadow-sm">11:30 AM</div>
                    <div class="p-2.5 rounded-xl border border-[#E8EAF2] text-[#554C68] hover:border-[#681FA8] cursor-pointer">02:00 PM</div>
                    <div class="p-2.5 rounded-xl border border-[#E8EAF2] text-[#554C68] hover:border-[#681FA8] cursor-pointer">04:15 PM</div>
                  </div>

                  <!-- Client Card Info -->
                  <div class="p-4 rounded-xl bg-[#FAF8FE] border border-[#E8EAF2] mt-4">
                    <div class="flex items-center justify-between text-xs mb-2">
                      <span class="text-[#554C68]">Card Deposit (Stripe)</span>
                      <span class="font-bold text-[#140B28]">$50.00</span>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-[#554C68]">Cancellation Policy</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">Free cancellation up to 24h</span>
                    </div>
                  </div>

                  <button 
                    @click="trialOnboardingOpen = true"
                    class="w-full py-3.5 rounded-xl bg-[#140B28] text-white font-bold text-xs hover:bg-[#681FA8] transition-colors shadow-sm"
                  >
                    Confirm Appointment with Apple Pay / Card →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- 4. Interactive Master Multi-Chair Matrix -->
      <section class="py-24 bg-white border-b border-[#E8EAF2]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="inline-block px-4 py-1.5 rounded-full bg-[#EFE9FA] text-[#681FA8] font-bold text-xs uppercase tracking-wider mb-3">
              Interactive Matrix
            </span>
            <h2 class="text-3xl sm:text-4xl font-black text-[#140B28] tracking-tight">
              Test Our Multi-Chair Schedule
            </h2>
            <p class="mt-4 text-sm sm:text-base text-[#554C68]">
              Click on slots to experience how stylists, processing buffers, and walk-in checkouts coordinate in real-time.
            </p>
          </div>

          <LiveCalendarMatrix />
        </div>
      </section>

      <!-- 5. FAQ Section -->
      <FAQSection />

      <!-- 6. Bottom Banner CTA -->
      <div class="py-20 bg-[#FAF8FE]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTA 
            @start-trial="trialOnboardingOpen = true"
            @book-demo="demoOpen = true"
          />
        </div>
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

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  Calendar, CheckCircle2, Sparkles, Clock, 
  Instagram, MessageSquare, Globe, Shield, 
  Repeat, Users, Bell, Layers 
} from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import FAQSection from '../components/FAQSection.vue';
import CTA from '../components/CTA.vue';
import LiveCalendarMatrix from '../components/interactive/LiveCalendarMatrix.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';

const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const demoOpen = ref(false);

const appointmentFeatures = [
  {
    icon: Calendar,
    title: '24/7 Online Self-Booking',
    description: 'Clients can browse your service menu, select their favorite stylist, view real-time availability, and reserve appointments around the clock without calling.',
    highlight: 'Zero Phone Tag'
  },
  {
    icon: Clock,
    title: 'Smart Slot Blockers & Breaks',
    description: 'Easily block out lunch breaks, staff holidays, deep cleans, or personal time. Salonist automatically adjusts your booking calendar so no client books an off slot.',
    highlight: 'Zero Overlaps'
  },
  {
    icon: Bell,
    title: 'Automated 2-Way Reminders',
    description: 'Cut salon no-shows by up to 80% with automated SMS and WhatsApp confirmations 48h and 2h ahead. Clients reply to confirm or reschedule automatically.',
    highlight: 'Cut No-Shows by 80%'
  },
  {
    icon: Repeat,
    title: 'Recurring & Package Bookings',
    description: 'Lock in regular clients with recurring weekly or monthly appointment schedules, pre-paid packages, and seasonal promotional treatment bundles.',
    highlight: 'Guaranteed Repeat Bookings'
  },
  {
    icon: Users,
    title: 'Staff Roster & Chair Allocation',
    description: 'Assign specific chairs, treatment rooms, and equipment. Manage variable shift schedules, custom commission ladders, and staff breaks in one view.',
    highlight: 'Multi-Stylist Orchestration'
  },
  {
    icon: Layers,
    title: 'Chemical Processing Buffers',
    description: 'Allow colorists to take another haircut or blowout while hair color or toner is developing. Maximize hourly chair productivity and top-line salon revenue.',
    highlight: '+35% Chair Yield'
  }
];
</script>

