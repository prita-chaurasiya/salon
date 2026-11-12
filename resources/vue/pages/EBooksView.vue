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
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-left space-y-4">
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.12] max-w-4xl">
          Guides written for <br />
          people who run the floor.
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-2xl font-normal leading-relaxed">
          Short, practical playbooks on pricing, no-shows, retention and keeping the diary full. Free, no form beyond your email.
        </p>

        <!-- Search Bar & Category Filter Pills (Screenshot 1 Match) -->
        <div class="pt-6 flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
          
          <!-- Search Input -->
          <div class="relative w-full lg:w-96">
            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              🔍
            </span>
            <input 
              v-model="searchQuery"
              type="text"
              placeholder='Search guides — "no-shows", "pricing", "rebooking"'
              class="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E8E8EC] focus:border-[#AA4184] text-xs font-medium text-[#1C151D] focus:outline-none shadow-xs"
            />
          </div>

          <!-- Category Pills -->
          <div class="flex flex-wrap items-center gap-2">
            <button 
              v-for="(cat, cIdx) in categories" 
              :key="cIdx"
              @click="selectedCategory = cat.name"
              class="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              :class="selectedCategory === cat.name 
                ? 'bg-[#1C151D] text-white shadow-md' 
                : 'bg-white text-[#5C525E] border border-[#F0E6EC] hover:border-[#AA4184] hover:text-[#AA4184]'"
            >
              <span>{{ cat.name }}</span>
              <span class="text-[10px] opacity-75 font-semibold">({{ cat.count }})</span>
            </button>
          </div>

        </div>

      </section>

      <!-- Horizontal Divider -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-[#ECECEC] mb-8"></div>
      </div>

      <!-- ================= 2. E-BOOK GUIDES GRID WITH DOWNLOAD FREE BUTTONS (Screenshot 1 & 2 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div class="mb-6 text-xs text-[#8E8291] font-semibold">
          {{ filteredEbooks.length }} guides
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div 
            v-for="(guide, gIdx) in filteredEbooks" 
            :key="gIdx"
            class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#AA4184] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <!-- E-Book Cover Visual Mockup (Screenshot 1 & 2 Match) -->
              <div class="relative h-64 bg-[#FAF7F9] overflow-hidden flex items-center justify-center p-6 border-b border-[#F0E6EC]">
                <img 
                  :src="guide.coverImage" 
                  :alt="guide.title" 
                  class="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-700"
                />
                
                <!-- Category Badge on Top Right -->
                <div class="absolute top-4 right-4">
                  <span class="text-[10px] uppercase font-black px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#1C151D] shadow-xs border border-white/60">
                    {{ guide.category }}
                  </span>
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-7 space-y-3">
                <h3 class="text-xl font-black text-[#1C151D] group-hover:text-[#AA4184] transition-colors leading-snug">
                  {{ guide.title }}
                </h3>
                <p class="text-sm text-[#5C525E] leading-relaxed">
                  {{ guide.desc }}
                </p>
                <p class="text-xs text-slate-400 font-semibold pt-1">
                  PDF &bull; {{ guide.pages }} pages
                </p>
              </div>
            </div>

            <!-- Download Button (Screenshot 2 Exact Match) -->
            <div class="p-7 pt-0">
              <button 
                @click="openDownloadModal(guide)"
                class="w-full py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Download free</span>
                <span>📥</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      <!-- ================= 3. DINGG SOFT BLUSH BACKGROUND SECTION ================= -->
      <DinggCouponPromoSection 
        business-type="salon & spa"
        @start-trial="trialOpen = true"
        class="mb-24"
      />

      <!-- ================= 4. CUSTOMER STORIES: LOVED BY THOUSANDS ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center space-y-3 mb-12">
          <span class="text-xs uppercase font-extrabold tracking-widest text-[#AA4184]">CUSTOMER STORIES</span>
          <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight">
            Loved by thousands of salons and spas
          </h2>
          <p class="text-base text-[#5C525E] max-w-2xl mx-auto">
            Explore how modern salon and aesthetic leaders implement these exact frameworks to scale revenue and bookings.
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
            <span>Read All Verified Customer Stories</span>
            <span>&rarr;</span>
          </router-link>
        </div>
      </section>

      <!-- ================= 5. CTA ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Automate Your Salon"
          title="Turn these playbooks into daily operational revenue"
          subtitle="Explore why 15,000+ salon and spa businesses trust Salonist to grow."
          @start-trial="trialOpen = true"
          @book-demo="demoOpen = true"
        />
      </section>

    </main>

    <Footer />

    <!-- Download E-Book Email Modal -->
    <div 
      v-if="downloadModalOpen" 
      class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      @click.self="downloadModalOpen = false"
    >
      <div class="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#F0E6EC] space-y-5 text-left">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span class="text-[10px] uppercase font-bold text-[#AA4184] bg-[#FAF0F5] px-2.5 py-0.5 rounded-full">Free PDF Download</span>
            <h3 class="text-lg font-black text-[#1C151D] mt-1">{{ activeGuide?.title }}</h3>
          </div>
          <button @click="downloadModalOpen = false" class="text-slate-400 hover:text-[#1C151D] text-lg font-bold">&times;</button>
        </div>

        <p class="text-xs text-[#5C525E] leading-relaxed">
          Where should we send your free copy of <strong>{{ activeGuide?.title }}</strong>? No spam, just pure actionable floor strategies.
        </p>

        <form @submit.prevent="submitDownload" class="space-y-3">
          <div>
            <label class="block text-xs font-bold text-[#1C151D] mb-1">Your Work Email</label>
            <input 
              v-model="emailInput" 
              type="email" 
              required
              placeholder="owner@your-salon.com" 
              class="w-full px-4 py-3 rounded-xl border border-[#E8E8EC] focus:border-[#AA4184] text-xs font-medium focus:outline-none"
            />
          </div>

          <button 
            type="submit" 
            class="w-full py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] text-white font-bold text-xs shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
          >
            {{ downloaded ? '✓ Sent to Your Email!' : 'Send Me the Free PDF Now' }}
          </button>
        </form>

        <p class="text-[11px] text-slate-400 text-center">
          Instant download &bull; Zero spam guarantee &bull; 100% Free
        </p>
      </div>
    </div>

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
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import DinggCouponPromoSection from '../components/common/DinggCouponPromoSection.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const searchQuery = ref('');
const selectedCategory = ref('All');

const downloadModalOpen = ref(false);
const activeGuide = ref(null);
const emailInput = ref('');
const downloaded = ref(false);

const openDownloadModal = (guide) => {
  activeGuide.value = guide;
  downloaded.value = false;
  downloadModalOpen.value = true;
};

const submitDownload = () => {
  downloaded.value = true;
  setTimeout(() => {
    downloadModalOpen.value = false;
  }, 1500);
};

const categories = [
  { name: 'All', count: 12 },
  { name: 'Pricing', count: 2 },
  { name: 'Retention', count: 3 },
  { name: 'Operations', count: 4 },
  { name: 'Seasonal', count: 1 },
  { name: 'Marketing', count: 1 },
  { name: 'Product', count: 1 }
];

const allEbooks = [
  {
    title: 'Raise your prices without losing clients',
    category: 'Pricing',
    desc: 'How to move your price list up, what to tell regulars, and when to do it.',
    pages: 14,
    coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Tips & tricks to increase salon revenue',
    category: 'Pricing',
    desc: "Upsells, retail attachment and package structures that don't feel pushy.",
    pages: 12,
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '7 steps to keep your salon fully booked',
    category: 'Retention',
    desc: 'A week-by-week routine for filling the gaps before they appear.',
    pages: 16,
    coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Zero No-Show Policy: Automated Deposits & Reminders',
    category: 'Retention',
    desc: 'How to introduce pre-authorized card deposits and 2-way SMS confirmation loops.',
    pages: 15,
    coverImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Salon Floor Optimization & Processing Gap Scheduling',
    category: 'Operations',
    desc: 'Master multi-chair orchestration to double revenue during chemical processing downtimes.',
    pages: 18,
    coverImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Tiered Commission & Booth Rental Accounting Playbook',
    category: 'Operations',
    desc: 'Transparent sliding commission models, retail incentives, and booth fee deductions.',
    pages: 20,
    coverImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Opening & Closing Shift Routines for Front-Desk Staff',
    category: 'Operations',
    desc: 'The complete daily checklist for register balancing, appointment audits, and sanitation.',
    pages: 10,
    coverImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'High-Converting Holiday Packages & Gift Card Campaigns',
    category: 'Seasonal',
    desc: 'Launch festive limited-edition treatment bundles and generate upfront holiday cash flow.',
    pages: 14,
    coverImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Automated WhatsApp & SMS Salon Marketing Sequences',
    category: 'Marketing',
    desc: 'Pre-written templates for birthday wishes, lapsed client win-backs, and 5-star reviews.',
    pages: 16,
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Back-Bar Product Usage & Retail Shrinkage Prevention',
    category: 'Product',
    desc: 'Control inventory costs by measuring exact chemical grams used per service.',
    pages: 12,
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Multi-Location Salon Scaling Blueprint',
    category: 'Operations',
    desc: 'Centralized staff rosters, unified gift vouchers, and branch-by-branch P&L reporting.',
    pages: 22,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'VIP Client Tiering & Membership Recurring Revenue Models',
    category: 'Retention',
    desc: 'How to build predictable monthly recurring cash flow with blow-out and facial memberships.',
    pages: 15,
    coverImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  }
];

const filteredEbooks = computed(() => {
  return allEbooks.filter(g => {
    const matchesCat = selectedCategory.value === 'All' || g.category === selectedCategory.value;
    const matchesSearch = !searchQuery.value || 
      g.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
      g.desc.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCat && matchesSearch;
  });
});

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
