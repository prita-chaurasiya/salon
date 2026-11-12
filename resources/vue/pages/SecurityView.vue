<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      <!-- Breadcrumb -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav class="flex items-center gap-2 text-xs font-semibold text-[#8E8291]">
          <router-link to="/" class="hover:text-[#AA4184] transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/why-choose-salonist" class="hover:text-[#AA4184] transition-colors">Why Salonist</router-link>
          <span>/</span>
          <span class="text-[#AA4184] font-bold">Security, Compliance & Privacy</span>
        </nav>
      </section>

      <!-- Hero Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-6 shadow-xs">
          <ShieldCheck class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Institutional Enterprise Security</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Bank-Grade Security for Your <br />
          <span class="text-[#AA4184]">Salon & Patient Records</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          From medical aesthetics treatment histories to credit card tokens and staff payroll, Salonist protects your salon with 256-bit encryption, HIPAA-ready consent forms, and automated hourly cloud backups.
        </p>
      </section>

      <!-- 4 Core Pillars of Security -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(p, idx) in securityPillars" :key="idx" class="p-8 rounded-3xl bg-white border border-[#F0E6EC] shadow-xs hover:border-[#AA4184] transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center mb-6">
              <component :is="p.icon" class="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 class="text-xl font-black text-[#1C151D] mb-2">{{ p.title }}</h3>
            <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Granular Role-Based Permissions Showcase -->
      <section class="bg-[#FAF7F9] border-y border-[#F0E6EC] py-20 mb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-6 space-y-5">
              <span class="text-xs font-black uppercase tracking-wider text-[#AA4184]">Client Privacy Protection</span>
              <h2 class="text-3xl font-black text-[#1C151D] tracking-tight leading-snug">
                Protect Client Phone Numbers & Prevent Staff Poaching
              </h2>
              <p class="text-sm text-[#5C525E] leading-relaxed">
                When stylists or booth renters leave your salon, your customer list should remain protected. Salonist enables client contact number masking so front desk and stylists can message or call clients via VoIP without seeing personal phone numbers or exporting your database.
              </p>
              <div class="space-y-2 text-xs font-bold text-[#1C151D]">
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="w-4 h-4 text-[#AA4184]" />
                  <span>Mask client phone numbers and email addresses</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="w-4 h-4 text-[#AA4184]" />
                  <span>Restrict financial revenue reports to salon owners only</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="w-4 h-4 text-[#AA4184]" />
                  <span>Immutable audit logs of every appointment edit and refund</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xl space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-[#F0E6EC]">
                <span class="text-xs font-black uppercase text-[#1C151D]">Role-Based Access Control</span>
                <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-200">
                  Enforced
                </span>
              </div>
              <div class="space-y-2.5 text-xs">
                <div class="p-3 rounded-xl bg-[#FAF7F9] flex justify-between items-center">
                  <span class="font-bold text-[#1C151D]">Owner & General Manager</span>
                  <span class="text-xs text-emerald-600 font-bold">Full Access (Financials + Config)</span>
                </div>
                <div class="p-3 rounded-xl bg-[#FAF7F9] flex justify-between items-center">
                  <span class="font-bold text-[#1C151D]">Front-Desk Coordinator</span>
                  <span class="text-xs text-[#AA4184] font-bold">Calendar + POS (No Financial Exports)</span>
                </div>
                <div class="p-3 rounded-xl bg-[#FAF7F9] flex justify-between items-center">
                  <span class="font-bold text-[#1C151D]">Stylist / Service Provider</span>
                  <span class="text-xs text-[#5C525E] font-bold">Own Chair Only (Masked Client Contacts)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOpen = true"
          @book-demo="trialOpen = true"
        />
      </div>
    </main>

    <Footer />

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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  ShieldCheck, Lock, Server, FileText, CheckCircle2 
} from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';

const trialOpen = ref(false);
const loginOpen = ref(false);

const securityPillars = [
  {
    title: 'PCI-DSS Level 1 Card Vault',
    desc: 'Credit card details are tokenized via Stripe and Adyen. Sensitive numbers never touch your salon iPad or local browser.',
    icon: Lock
  },
  {
    title: 'HIPAA & Clinical Consent',
    desc: 'Medical intake questionnaires, before-and-after photos, and allergy notes are encrypted at rest and in transit.',
    icon: FileText
  },
  {
    title: 'Automated Hourly Backups',
    desc: 'Redundant cloud infrastructure with real-time replication ensures your calendar is never lost, even if a tablet breaks.',
    icon: Server
  },
  {
    title: 'Granular Role Permissions',
    desc: 'Control exactly which staff members can see client phone numbers, edit service prices, or view daily revenue totals.',
    icon: ShieldCheck
  }
];
</script>

