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
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center gap-2 text-xs font-semibold text-[#8E8291] mb-6">
          <router-link to="/" class="hover:text-[#AA4184] transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/why-choose-salonist" class="hover:text-[#AA4184] transition-colors">Why Salonist</router-link>
          <span>/</span>
          <span class="text-[#AA4184] font-bold">Free E-Books & Whitepapers</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-6 shadow-xs">
          <BookOpen class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Operational Guides & Playbooks</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Free Salon & Spa Management <br />
          <span class="text-[#AA4184]">E-Books & Playbooks</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          In-depth playbooks authored by industry consultants and high-growth salon owners. Download free strategic frameworks to maximize chair yield, automate payroll, and elevate customer lifetime value.
        </p>
      </section>

      <!-- ================= FEATURED E-BOOK HERO CARD ================= -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div class="rounded-3xl bg-white border border-[#F0E6EC] p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-[#F0E6EC] shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=85" 
              alt="Featured E-Book" 
              class="w-full h-full object-cover"
            />
          </div>

          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider">
              Featured 2026 Edition • 68 Pages
            </div>

            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] leading-tight">
              The 2026 Blueprint for Multi-Location Salon Profitability
            </h2>

            <p class="text-base text-[#5C525E] leading-relaxed">
              Learn the exact operational blueprints used by 8-figure salon and spa groups to scale chair utilization, eliminate chemical backbar waste, and build predictable monthly membership revenue.
            </p>

            <div class="grid grid-cols-2 gap-4 py-2 border-y border-[#F0E6EC]">
              <div>
                <p class="text-xs text-[#8E8291]">Target Audience</p>
                <p class="text-sm font-bold text-[#1C151D]">Salon Owners & Directors</p>
              </div>
              <div>
                <p class="text-xs text-[#8E8291]">Format</p>
                <p class="text-sm font-bold text-[#1C151D]">Digital PDF + Financial Models</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button 
                @click="trialOpen = true"
                class="px-8 py-3.5 rounded-full bg-[#AA4184] hover:bg-[#923470] text-white font-extrabold text-sm shadow-md transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download class="w-4 h-4" />
                <span>Download Free E-Book</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= E-BOOK LIBRARY GRID ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="mb-12">
          <h2 class="text-2xl sm:text-3xl font-black text-[#1C151D] tracking-tight">
            Comprehensive Resource Library
          </h2>
          <p class="text-sm text-[#8E8291] mt-1">Download actionable PDF guides for every aspect of beauty business management.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(ebook, idx) in ebooks" 
            :key="idx"
            class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-xs hover:border-[#AA4184] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-[#F0E6EC]">
                <img :src="ebook.image" :alt="ebook.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-6">
                <span class="text-[11px] font-black uppercase tracking-wider text-[#AA4184] block mb-2">{{ ebook.tag }}</span>
                <h3 class="text-lg font-black text-[#1C151D] mb-3 leading-snug">
                  {{ ebook.title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed">
                  {{ ebook.desc }}
                </p>
              </div>
            </div>

            <div class="p-6 pt-0">
              <button 
                @click="trialOpen = true"
                class="w-full py-2.5 rounded-full border border-[#F0E6EC] bg-[#FAF7F9] hover:bg-[#FBF0F6] hover:border-[#AA4184] text-[#1C151D] hover:text-[#AA4184] font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download class="w-3.5 h-3.5" />
                <span>Instant PDF Download</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= BOTTOM CTA ================= -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOpen = true"
          @book-demo="trialOpen = true"
        />
      </div>

    </main>

    <!-- Footer -->
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
import { BookOpen, Download } from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';

const trialOpen = ref(false);
const loginOpen = ref(false);

const ebooks = [
  {
    tag: 'Staff & Commissions',
    title: 'The Modern Salon Compensation Handbook',
    desc: 'How to structure tiered commissions, sliding scales, and chair rentals that reward top stylists without eating salon margins.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80'
  },
  {
    tag: 'Marketing & Retention',
    title: 'Zero-Dollar Salon Marketing: The Referral Engine',
    desc: 'Battle-tested SMS and email workflows to reactivate lost clients, generate 5-star Google reviews, and double friend referrals.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80'
  },
  {
    tag: 'Financial Planning',
    title: 'Salon Inventory & Backbar Cost Control Guide',
    desc: 'Stop chemical color leakage. Step-by-step audit methods to reduce product waste by 35% and boost retail profit margins.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80'
  }
];
</script>
