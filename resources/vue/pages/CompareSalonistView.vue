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
          <Sparkles class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>COMPARE SALONIST PLATFORM</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-5xl mx-auto">
          All-in-One Growth Software <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] via-[#923470] to-[#E11D48]">
            For the Beauty and Wellness Industry
          </span>
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto font-normal leading-relaxed">
          Enjoy more features for less cost. Try 7 Days Free Trial
        </p>

        <!-- CTA Buttons with Luxury Gradient & Client Testimonials link -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button 
            @click="trialOpen = true"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:scale-105 active:scale-95 text-white font-bold text-sm shadow-lg shadow-[#AA4184]/25 transition-all duration-300 cursor-pointer"
          >
            Get Free Trial
          </button>
          
          <router-link 
            to="/client-testimonials"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D8D3E2] bg-white hover:bg-[#FAF7F9] hover:border-[#AA4184] text-[#1C151D] hover:text-[#AA4184] font-bold text-sm shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            Client Testimonials
          </router-link>
        </div>

      </section>

      <!-- ================= 2. SAVINGS CARDS GRID (Screenshot 1 & 2 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div 
            v-for="(card, cIdx) in competitorSavings" 
            :key="cIdx"
            class="p-6 sm:p-7 rounded-3xl bg-white border border-[#F0E6EC] shadow-sm hover:shadow-xl hover:border-[#AA4184] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <p class="font-bold text-sm text-[#1C151D]">{{ card.title }}</p>
              <div class="mt-4">
                <p class="text-2xl sm:text-3xl font-black text-[#1C151D] tracking-tight">
                  Save {{ card.saving }}
                </p>
                <p class="text-xs font-semibold text-slate-400 mt-0.5">Per Year</p>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#AA4184]">
              <span>Unlimited Staff</span>
              <span>0% Commission</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 3. SCHEDULE STATS BANNER (Screenshot 3 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-[32px] bg-white border border-[#F0E6EC] p-8 sm:p-12 shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left heading (5 cols) -->
            <div class="lg:col-span-5">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1C151D] tracking-tight leading-tight">
                Your revenue increases only when your schedule is full
              </h2>
            </div>

            <!-- Right Key Metrics (7 cols) -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-10">
              <div>
                <p class="text-3xl sm:text-4xl font-black text-[#1C151D]">15000+</p>
                <p class="text-xs font-medium text-slate-500 mt-1">Businesses Using Salonist</p>
              </div>
              <div>
                <p class="text-3xl sm:text-4xl font-black text-[#1C151D]">60+</p>
                <p class="text-xs font-medium text-slate-500 mt-1">Countries Worldwide</p>
              </div>
              <div>
                <p class="text-3xl sm:text-4xl font-black text-[#1C151D]">10+</p>
                <p class="text-xs font-medium text-slate-500 mt-1">Years Experience</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================= 4. CASE STUDIES: "Salonist is the leading software..." (Screenshot 3 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center space-y-3 mb-12">
          <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight">
            Salonist is the leading software used by <br class="hidden sm:inline" />thousands of businesses
          </h2>
          <p class="text-base text-[#5C525E]">
            Real world salon and spa operators that scaled multi-chair revenue and saved thousands annually.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Case Study 1: Sea Sand Sun (Screenshot 3 Match) -->
          <div class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-md hover:shadow-xl hover:border-[#AA4184] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" 
                  alt="Sea Sand Sun Nails & Eyelashes Studio" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div class="p-7 space-y-3">
                <span class="text-[11px] font-bold uppercase tracking-wider text-[#AA4184]">Nails & Eyelashes Studio</span>
                <h3 class="text-xl font-black text-[#1C151D] group-hover:text-[#AA4184] transition-colors leading-snug">
                  How Salonist Empowered Sea Sand Sun Studio to Thrive in Thailand?
                </h3>
                <p class="text-sm text-[#5C525E] leading-relaxed">
                  Sea Sand Sun automated daily bookings, client check-ins, and multi-staff commission calculations, eliminating administrative chaos and boosting chair utilization by 42%.
                </p>
              </div>
            </div>
            <div class="p-7 pt-0 text-xs text-slate-400 font-medium">
              By Sophie Jobs on May 31, 2024
            </div>
          </div>

          <!-- Case Study 2: Toni & Guy Unisex Salon (Screenshot 3 Match) -->
          <div class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-md hover:shadow-xl hover:border-[#AA4184] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" 
                  alt="Toni & Guy Unisex Salon" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div class="p-7 space-y-3">
                <span class="text-[11px] font-bold uppercase tracking-wider text-[#AA4184]">Unisex Salon & Flagship</span>
                <h3 class="text-xl font-black text-[#1C151D] group-hover:text-[#AA4184] transition-colors leading-snug">
                  Toni & Guy Unisex Salon Create a Unique Brand Identity with Salonist?
                </h3>
                <p class="text-sm text-[#5C525E] leading-relaxed">
                  With custom white-label mobile app booking, personalized loyalty reward points, and live POS sync, Toni & Guy delivered a 5-star VIP salon journey.
                </p>
              </div>
            </div>
            <div class="p-7 pt-0 text-xs text-slate-400 font-medium">
              By Sophie Jobs on May 31, 2024
            </div>
          </div>

          <!-- Case Study 3: Ember Rose Aesthetic Clinic -->
          <div class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-md hover:shadow-xl hover:border-[#AA4184] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                  alt="Ember Rose Aesthetic Clinic" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div class="p-7 space-y-3">
                <span class="text-[11px] font-bold uppercase tracking-wider text-[#AA4184]">Medi-Spa & Skin Clinic</span>
                <h3 class="text-xl font-black text-[#1C151D] group-hover:text-[#AA4184] transition-colors leading-snug">
                  How Ember Rose Saved $2,660/Year by Leaving Outdated Legacy Software
                </h3>
                <p class="text-sm text-[#5C525E] leading-relaxed">
                  Replaced per-seat charges with Salonist unlimited flat rate pricing while adopting digital consultation forms and automated WhatsApp confirmations.
                </p>
              </div>
            </div>
            <div class="p-7 pt-0 text-xs text-slate-400 font-medium">
              By Marcus Vance on June 14, 2024
            </div>
          </div>

        </div>

        <!-- More Case Studies CTA (Screenshot 4 Match) -->
        <div class="text-center pt-10">
          <router-link 
            to="/client-testimonials"
            class="px-8 py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm shadow-md transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
          >
            <span>More Case Studies</span>
            <span>&rarr;</span>
          </router-link>
        </div>

      </section>

      <!-- ================= 5. AWARDS & USER LOVE BANNER (Screenshot 4 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-[32px] bg-white border border-[#F0E6EC] p-8 sm:p-12 shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left heading (5 cols) -->
            <div class="lg:col-span-5">
              <h2 class="text-2xl sm:text-3xl font-black text-[#1C151D] tracking-tight leading-tight">
                We focus on our customers, and they show their love in return
              </h2>
            </div>

            <!-- Right 4 Award Badges (7 cols - Screenshot 4 Exact Badges) -->
            <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-10 text-center">
              
              <!-- Badge 1: Best Customer Support -->
              <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs mb-2">
                  🏆
                </div>
                <p class="font-bold text-xs text-[#1C151D]">Best Customer</p>
                <p class="text-[10px] text-slate-500">Support 2026</p>
              </div>

              <!-- Badge 2: Highly Recommended -->
              <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-2">
                  ★★★★★
                </div>
                <p class="font-bold text-xs text-[#1C151D]">Highly</p>
                <p class="text-[10px] text-slate-500">Recommended</p>
              </div>

              <!-- Badge 3: Users Love Us -->
              <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-xs mb-2">
                  ❤️
                </div>
                <p class="font-bold text-xs text-[#1C151D]">Users Love Us</p>
                <p class="text-[10px] text-slate-500">Top Rated 2026</p>
              </div>

              <!-- Badge 4: SourceForge User Experience -->
              <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 font-bold flex items-center justify-center text-xs mb-2">
                  ⚡
                </div>
                <p class="font-bold text-xs text-[#1C151D]">User Experience</p>
                <p class="text-[10px] text-slate-500">SourceForge</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- ================= 6. DETAILED COMPARISON MATRIX TABLE ================= -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center space-y-3 mb-10">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            Comprehensive Feature-by-Feature Breakdown
          </h2>
          <p class="text-sm text-[#5C525E]">
            See why high-growth salons migrate to Salonist from legacy software.
          </p>
        </div>

        <div class="rounded-3xl bg-white border border-[#F0E6EC] shadow-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead class="bg-[#FAF7F9] border-b border-[#F0E6EC] text-[#1C151D]">
                <tr>
                  <th class="p-6 font-extrabold text-base">Key Capabilities</th>
                  <th class="p-6 font-black text-base text-[#AA4184] bg-[#FBF0F6]/80 text-center">
                    Salonist.io
                  </th>
                  <th class="p-6 font-bold text-center text-[#5C525E]">Fresha / Treatwell</th>
                  <th class="p-6 font-bold text-center text-[#5C525E]">Mindbody / Zenoti</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F0E6EC]">
                <tr v-for="(row, r) in comparisonRows" :key="r" class="hover:bg-[#FCFBFD] transition-colors">
                  <td class="p-6 font-medium text-[#1C151D]">
                    <div class="font-bold">{{ row.feature }}</div>
                    <div class="text-xs text-[#8E8291] mt-0.5">{{ row.desc }}</div>
                  </td>
                  <td class="p-6 bg-[#FBF0F6]/40 text-center font-bold text-[#AA4184]">
                    <span v-if="typeof row.salonist === 'boolean'" class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#AA4184] text-white text-xs">
                      ✓
                    </span>
                    <span v-else>{{ row.salonist }}</span>
                  </td>
                  <td class="p-6 text-center text-[#5C525E]">
                    <span v-if="typeof row.competitor1 === 'boolean'" :class="row.competitor1 ? 'text-emerald-600' : 'text-rose-500'">
                      {{ row.competitor1 ? '✓' : '✕' }}
                    </span>
                    <span v-else>{{ row.competitor1 }}</span>
                  </td>
                  <td class="p-6 text-center text-[#5C525E]">
                    <span v-if="typeof row.competitor2 === 'boolean'" :class="row.competitor2 ? 'text-emerald-600' : 'text-rose-500'">
                      {{ row.competitor2 ? '✓' : '✕' }}
                    </span>
                    <span v-else>{{ row.competitor2 }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ================= 7. CTA ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Switch In Minutes"
          title="We move your client history and future bookings for free"
          subtitle="Our white-glove onboarding specialists transfer all records so your day runs without a hitch."
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
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import { Sparkles } from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const competitorSavings = [
  { title: 'Salonist Vs Zenoti', saving: '$1,950' },
  { title: 'Salonist Vs Mangomint', saving: '$2,660' },
  { title: 'Salonist Vs Acuity', saving: '$100' },
  { title: 'Salonist Vs Boulevard', saving: '$240' },
  { title: 'Salonist Vs Mindbody', saving: '$362' },
  { title: 'Salonist Vs Booker', saving: '$1,300' },
  { title: 'Salonist Vs Square', saving: '$120' },
  { title: 'Salonist Vs Versum', saving: '$396' },
  { title: 'Salonist Vs Fresha', saving: '$1,204' },
  { title: 'Salonist Vs Vagaro', saving: '$418' },
  { title: 'Salonist Vs Booksy', saving: '$1,930' },
  { title: 'Salonist Vs GlossGenius', saving: '$1,186' },
  { title: 'Salonist Vs Treatwell', saving: '$420' }
];

const comparisonRows = [
  { feature: 'Unlimited Staff Accounts', desc: 'No per-employee monthly fee increase', salonist: 'Included (Zero Extra)', competitor1: 'Charge Per User', competitor2: 'Tiered User Pricing' },
  { feature: '24/7 Web & Instagram Booking', desc: 'Customizable branded booking widgets', salonist: true, competitor1: true, competitor2: true },
  { feature: 'Commission Deductions on Marketplace', desc: 'Take a cut of your repeat clients', salonist: '0% (Never Charged)', competitor1: '20% First Visit Fee', competitor2: 'High Platform Fees' },
  { feature: 'Built-in Hardware POS Integration', desc: 'Touchscreen checkout, drawers, barcode scanning', salonist: true, competitor1: 'Limited', competitor2: true },
  { feature: 'Skin Clinic & Medi-Spa Charts', desc: 'EHR intake forms, visual face mapping, treatment records', salonist: true, competitor1: false, competitor2: 'Costly Add-on' },
  { feature: 'Automated SMS / WhatsApp Reminders', desc: 'Drastically reduce costly no-shows', salonist: 'Included', competitor1: 'High Extra SMS Rates', competitor2: 'Included in High Tier' },
  { feature: 'Loyalty & Reward Engine', desc: 'Drive repeat bookings with point multipliers', salonist: true, competitor1: 'Basic', competitor2: true },
  { feature: 'Free White-Glove Data Migration', desc: 'Import clients, inventory, appointment history', salonist: '100% Free VIP Service', competitor1: 'Self-Service Only', competitor2: '$500+ Setup Fee' }
];
</script>
