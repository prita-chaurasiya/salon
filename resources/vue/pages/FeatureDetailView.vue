<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. BREADCRUMB & HERO ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-[#8E8291] mb-6">
          <router-link to="/" class="hover:text-[#AA4184] transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/features" class="hover:text-[#AA4184] transition-colors">Features</router-link>
          <span>/</span>
          <span class="text-[#AA4184] font-bold">{{ feature.title }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Content -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] font-extrabold text-xs uppercase tracking-wider border border-[#F0E6EC]">
              <span class="w-2 h-2 rounded-full bg-[#AA4184] animate-pulse"></span>
              <span>{{ feature.category }} • Enterprise Capability</span>
            </div>

            <!-- Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.12]">
              {{ feature.title.split(' ')[0] }}
              <span class="text-[#AA4184]">
                {{ feature.title.split(' ').slice(1).join(' ') || 'Platform' }}
              </span>
            </h1>

            <p class="text-lg sm:text-xl font-bold text-[#1C151D] leading-snug">
              {{ feature.tagline }}
            </p>

            <!-- Description -->
            <p class="text-base sm:text-lg text-[#5C525E] leading-relaxed max-w-2xl font-normal">
              {{ feature.heroDescription }}
            </p>

            <!-- Action Buttons with Luxury Gradient -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                @click="trialOnboardingOpen = true"
                class="px-8 py-4 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:from-[#2B2237] hover:to-[#7C3AED] text-white font-extrabold text-sm transition-all duration-300 shadow-lg shadow-[#AA4184]/25 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free 7-Day Trial</span>
                <span>→</span>
              </button>

              <button 
                @click="demoOpen = true"
                class="px-8 py-4 rounded-full border border-[#F0E6EC] bg-white text-[#1C151D] font-extrabold text-sm hover:border-[#AA4184] hover:text-[#AA4184] hover:bg-[#FAF7F9] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Calendar class="w-4 h-4 text-[#AA4184]" />
                <span>Book 20-Min Demo</span>
              </button>
            </div>

            <!-- Trust Line -->
            <div class="pt-2 text-xs text-[#8E8291] font-medium flex items-center gap-3 flex-wrap">
              <span class="flex items-center gap-1.5"><CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184]" /> Instant setup in 3 mins</span>
              <span>•</span>
              <span class="flex items-center gap-1.5"><CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184]" /> Unlimited staff included</span>
              <span>•</span>
              <span class="flex items-center gap-1.5"><CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184]" /> Free data migration</span>
            </div>
          </div>

          <!-- Right Large Screenshot Mockup Area -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-lg">
              <!-- Glow backdrop -->
              <div class="absolute -inset-4 bg-gradient-to-r from-[#AA4184]/10 to-[#923470]/5 rounded-3xl blur-2xl"></div>

              <!-- Main Dashboard Card -->
              <div class="relative rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-[0_20px_50px_rgba(22,20,31,0.06)] overflow-hidden">
                <div class="flex items-center justify-between pb-4 border-b border-[#F0E6EC] mb-5">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-[#E5E7EB]"></span>
                    <span class="w-3 h-3 rounded-full bg-[#E5E7EB]"></span>
                    <span class="w-3 h-3 rounded-full bg-[#E5E7EB]"></span>
                    <span class="text-xs font-bold text-[#8E8291] ml-2">salonist.io/features/{{ feature.slug }}</span>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full bg-[#FBF0F6] text-[#AA4184] font-black text-[10px] uppercase">
                    Live
                  </span>
                </div>

                <div class="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-[#F0E6EC] mb-4">
                  <img 
                    :src="feature.heroImage" 
                    :alt="feature.title" 
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Metric preview bar -->
                <div class="grid grid-cols-2 gap-3 pt-2">
                  <div 
                    v-for="(st, sIdx) in feature.stats.slice(0, 2)" 
                    :key="sIdx"
                    class="p-3 rounded-xl bg-[#FAF7F9] border border-[#F0E6EC]"
                  >
                    <p class="text-xs text-[#8E8291]">{{ st.label }}</p>
                    <p class="text-lg font-black text-[#AA4184] mt-0.5">{{ st.value }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= 2. TRUSTED BRAND STRIP ================= -->
      <div class="border-y border-[#F0E6EC] bg-[#FAF7F9] py-8 mb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-xs font-extrabold uppercase tracking-widest text-[#8E8291] mb-6">
            Empowering 20,000+ Salons, Spas & Aesthetic Clinics Globally
          </p>
          <div class="flex items-center justify-center gap-8 sm:gap-14 flex-wrap opacity-75">
            <span v-for="b in brands" :key="b" class="text-sm font-black text-[#1C151D] tracking-wider uppercase font-serif">
              {{ b }}
            </span>
          </div>
        </div>
      </div>

      <!-- ================= 3. STATS STRIP ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(stat, idx) in feature.stats" 
            :key="idx"
            class="rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xs text-center"
          >
            <div class="text-3xl sm:text-4xl font-black text-[#AA4184] mb-2 tracking-tight">
              {{ stat.value }}
            </div>
            <div class="text-xs sm:text-sm font-bold text-[#1C151D]">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 4. DETAILED OVERVIEW & BENEFITS ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            Designed for Modern Salon Operations
          </h2>
          <p class="mt-4 text-base sm:text-lg text-[#5C525E] leading-relaxed">
            {{ feature.overview }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="(b, bIdx) in feature.benefits" 
            :key="bIdx"
            class="rounded-3xl bg-white border border-[#F0E6EC] p-8 shadow-xs hover:border-[#AA4184] transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-black text-[#1C151D] mb-3 group-hover:text-[#AA4184] transition-colors">
              {{ b.title }}
            </h3>
            <p class="text-sm sm:text-base text-[#5C525E] leading-relaxed">
              {{ b.desc }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 5. TIMELINE / HOW IT WORKS ================= -->
      <section class="bg-[#FAF7F9] border-y border-[#F0E6EC] py-24 mb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center mb-16">
            <span class="text-xs font-black uppercase tracking-widest text-[#AA4184]">Workflow</span>
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight mt-2">
              How {{ feature.title }} Works
            </h2>
            <p class="mt-4 text-sm sm:text-base text-[#5C525E]">
              {{ feature.howItWorks }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="(t, tIdx) in feature.timeline" 
              :key="tIdx"
              class="rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xs relative"
            >
              <div class="text-3xl font-black text-[#AA4184]/25 mb-4">
                {{ t.step }}
              </div>
              <h4 class="text-base font-black text-[#1C151D] mb-2">
                {{ t.title }}
              </h4>
              <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed">
                {{ t.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 6. TESTIMONIAL QUOTE ================= -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div class="rounded-3xl bg-white border border-[#F0E6EC] p-8 sm:p-12 shadow-xs">
          <div class="flex items-center justify-center gap-1 text-[#AA4184] mb-6">
            <Star v-for="s in 5" :key="s" class="w-5 h-5 fill-current" />
          </div>
          <p class="text-lg sm:text-xl font-serif italic text-[#1C151D] leading-relaxed mb-6">
            "Switching our multi-location brand to Salonist {{ feature.title }} was the smoothest transition we’ve ever experienced. Our front desk saves over 15 hours a week, and our clients constantly compliment how effortless the experience is."
          </p>
          <div>
            <p class="font-black text-[#1C151D] text-sm">Elena Rostova</p>
            <p class="text-xs text-[#8E8291]">Founder & Creative Director, Maison Luxe Salons</p>
          </div>
        </div>
      </section>

      <!-- ================= 7. ACCORDION FAQS ================= -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-sm text-[#8E8291] mt-2">
            Everything you need to know about Salonist {{ feature.title }}
          </p>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIdx) in feature.faqs" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] p-6 shadow-xs"
          >
            <h4 class="font-black text-base text-[#1C151D] mb-2 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center text-xs font-black shrink-0">Q</span>
              <span>{{ faq.q }}</span>
            </h4>
            <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed pl-9">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 8. RELATED FEATURES & SOLUTIONS ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="border-t border-[#F0E6EC] pt-16">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-xl font-black text-[#1C151D]">Explore Related Features</h3>
            <router-link to="/features" class="text-xs font-extrabold text-[#AA4184] hover:underline">
              View All 18 Features →
            </router-link>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <router-link 
              v-for="rf in relatedFeatures" 
              :key="rf.slug"
              :to="'/features/' + rf.slug"
              class="p-4 rounded-2xl bg-white border border-[#F0E6EC] hover:border-[#AA4184] hover:bg-[#FAF7F9] transition-all duration-200"
            >
              <p class="text-xs text-[#8E8291] font-semibold mb-1">{{ rf.category }}</p>
              <p class="text-sm font-bold text-[#1C151D]">{{ rf.title }}</p>
            </router-link>
          </div>
        </div>
      </section>

      <!-- ================= 9. FINAL BOTTOM CTA ================= -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOnboardingOpen = true"
          @book-demo="demoOpen = true"
        />
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

    <DemoBookingModal 
      v-model="demoOpen"
      @close="demoOpen = false"
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Calendar, CheckCircle2, Sparkles, Star } from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import { featuresDirectory } from '../data/featuresData.js';

const route = useRoute();

const featureSlug = computed(() => {
  return route.params.slug || 'appointment-management';
});

const feature = computed(() => {
  return featuresDirectory[featureSlug.value] || featuresDirectory['appointment-management'];
});

const brands = [
  'Buqwal Luxury Hair', 'Memories Wellness', 'Meraki Aesthetic', 'Stile Barbers', 'Looks Salon & Spa', 'Onyx Studio'
];

const relatedFeatures = computed(() => {
  return Object.values(featuresDirectory)
    .filter(f => f.slug !== featureSlug.value)
    .slice(0, 4);
});

const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const demoOpen = ref(false);
</script>

