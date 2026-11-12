<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION (Screenshot Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-4">
        
        <span class="text-xs uppercase font-extrabold tracking-widest text-[#AA4184]">BLOG</span>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.12]">
          Insights for salon & spa owners
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto font-normal leading-relaxed">
          Practical guides on pricing, retention, no-shows, marketing and running a profitable floor.
        </p>

        <!-- Category Filter Pills (Screenshot Match) -->
        <div class="pt-6 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          <button 
            v-for="(cat, cIdx) in categories" 
            :key="cIdx"
            @click="selectedCategory = cat"
            class="px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer"
            :class="selectedCategory === cat 
              ? 'bg-[#1C151D] text-white shadow-md' 
              : 'bg-white text-[#5C525E] border border-[#F0E6EC] hover:border-[#AA4184] hover:text-[#AA4184]'"
          >
            {{ cat }}
          </button>
        </div>

      </section>

      <!-- ================= 2. ARTICLES COUNT & GRID (Screenshot Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div class="mb-6 flex items-center justify-between text-xs text-[#8E8291] font-semibold">
          <span>{{ filteredPosts.length }} posts</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div 
            v-for="(post, p) in filteredPosts" 
            :key="p"
            class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#AA4184] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <!-- Blog Post Visual Mockup Banner -->
              <div class="relative h-56 bg-gradient-to-br from-[#FAF0F5] to-slate-100 overflow-hidden flex items-center justify-center p-4">
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-700" 
                />
                
                <!-- Badge on Top of Image (Screenshot Match) -->
                <div class="absolute top-4 left-4">
                  <span class="text-[10px] uppercase font-black px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#1C151D] shadow-xs border border-white/60">
                    {{ post.badge }}
                  </span>
                </div>
              </div>

              <!-- Post Content Body -->
              <div class="p-7 space-y-3">
                <h3 class="text-lg sm:text-xl font-black text-[#1C151D] group-hover:text-[#AA4184] transition-colors leading-snug">
                  {{ post.title }}
                </h3>
                <p class="text-sm text-[#5C525E] leading-relaxed line-clamp-3">
                  {{ post.excerpt }}
                </p>
              </div>
            </div>

            <!-- Footer Author & Date -->
            <div class="p-7 pt-0 flex items-center justify-between text-xs text-[#8E8291] border-t border-slate-100 mt-4 pt-4">
              <span>{{ post.author }} &bull; {{ post.date }}</span>
              <span class="font-bold text-[#AA4184] group-hover:underline">Read article &rarr;</span>
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

      <!-- ================= 4. CUSTOMER STORIES: LOVED BY THOUSANDS (Screenshot Match) ================= -->
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

        <!-- Video Stories Grid (Exact Match) -->
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

            <!-- Video Play Button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-[#AA4184] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <!-- Inset Key Quote Overlay -->
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

        <!-- Direct CTA to Client Testimonials Page -->
        <div class="text-center pt-10">
          <router-link 
            to="/client-testimonials"
            class="px-8 py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Explore All Client Reviews & Testimonials</span>
            <span>&rarr;</span>
          </router-link>
        </div>

      </section>

      <!-- ================= 5. CTA ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Scale Your Salon"
          title="Turn these ideas into daily operational revenue"
          subtitle="Explore why 15,000+ business owners trust Salonist to grow their brand."
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

const selectedCategory = ref('All posts');

const categories = [
  'All posts',
  'Customers Stories',
  'Latest news on Salonist',
  'Pet Grooming',
  'Salon',
  'Skincare',
  'Spa',
  'Trends',
  'Wellness'
];

const allBlogPosts = [
  {
    title: 'The Power of Digital Presence in Growing Your Spa Business',
    badge: 'SPA ALONIST',
    category: 'Spa',
    excerpt: 'Most spa owners are so busy with daily client tasks that digital touchpoints get neglected. Learn how online booking, social media triggers, and Google reviews turn local searches into booked tables.',
    author: 'Sophie Jobs',
    date: 'June 04, 2026',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'How to Start Your Own Spa Business?',
    badge: 'SPA ALONIST',
    category: 'Spa',
    excerpt: 'Opening a spa is one of the most rewarding ways to enter wellness entrepreneurship. Here is the operational checklist: licensing, equipment budgeting, inventory sourcing, and booking software setup.',
    author: 'Sophie Jobs',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Salonist Launches Google Reviews Integration for Salons and Spas',
    badge: 'LATEST NEWS ON SALONIST',
    category: 'Latest news on Salonist',
    excerpt: 'Automate your 5-star reputation. Salonist now triggers customized review requests directly to clients WhatsApp and SMS 90 minutes after checkout, driving local Google Maps dominance.',
    author: 'Editorial Team',
    date: 'May 15, 2026',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'How to Eliminate Salon No-Shows: The Automated Booking Playbook',
    badge: 'SALON PLAYBOOK',
    category: 'Salon',
    excerpt: 'Discover how multi-channel automated SMS and upfront deposit policies reduce late cancellations from 18% down to under 2%.',
    author: 'Elena Rostova',
    date: 'April 22, 2026',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Skin Clinic EHR & Charting: Why Digital Consent Protects Revenue',
    badge: 'SKINCARE & MEDSPA',
    category: 'Skincare',
    excerpt: 'Paper consent forms create liability hazards. Learn how biometric signing and visual face mapping protect injectors and dermatologists.',
    author: 'Dr. Sarah Lin, MD',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Modern Pet Grooming: Managing Breed Profiles & Vaccination Logs',
    badge: 'PET GROOMING',
    category: 'Pet Grooming',
    excerpt: 'Track rabies vaccination expiries, coat conditions, and pet temperament records seamlessly during booking check-in.',
    author: 'Marcus Vance',
    date: 'March 29, 2026',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80'
  }
];

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All posts') return allBlogPosts;
  return allBlogPosts.filter(p => p.category === selectedCategory.value);
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
