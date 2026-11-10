<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= HERO ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-6 shadow-xs">
          <Sparkles class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Feature Comparison Matrix</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          See How Salonist Compares <br />
          <span class="text-[#AA4184]">Against Other Salon Software</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          Compare Salonist against legacy and generic scheduling tools. Get unlimited staff, modern POS, automated marketing, and zero per-seat penalty fees.
        </p>
      </section>

      <!-- ================= COMPARISON TABLE ================= -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-3xl bg-white border border-[#F0E6EC] shadow-xl overflow-hidden">
          
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <!-- Table Head -->
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

              <!-- Table Body -->
              <tbody class="divide-y divide-[#F0E6EC]">
                <tr v-for="(row, r) in comparisonRows" :key="r" class="hover:bg-[#FCFBFD] transition-colors">
                  <td class="p-6 font-medium text-[#1C151D]">
                    <div class="font-bold">{{ row.feature }}</div>
                    <div class="text-xs text-[#8E8291] mt-0.5">{{ row.desc }}</div>
                  </td>
                  <!-- Salonist -->
                  <td class="p-6 bg-[#FBF0F6]/40 text-center font-bold text-[#AA4184]">
                    <span v-if="typeof row.salonist === 'boolean'" class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#AA4184] text-white text-xs">
                      ✓
                    </span>
                    <span v-else>{{ row.salonist }}</span>
                  </td>
                  <!-- Competitor 1 -->
                  <td class="p-6 text-center text-[#5C525E]">
                    <span v-if="typeof row.competitor1 === 'boolean'" :class="row.competitor1 ? 'text-emerald-600' : 'text-rose-500'">
                      {{ row.competitor1 ? '✓' : '✕' }}
                    </span>
                    <span v-else>{{ row.competitor1 }}</span>
                  </td>
                  <!-- Competitor 2 -->
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

      <!-- ================= CTA ================= -->
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import { Sparkles } from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

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

