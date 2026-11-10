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
          <BookOpen class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>Salonist Academy & Knowledge Hub</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Insights, Trends & Strategies <br />
          <span class="text-[#AA4184]">for Salon, Spa & Clinic Leaders</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          Actionable business articles, downloadable playbooks, and owner interviews designed to scale your beauty and wellness brand.
        </p>
      </section>

      <!-- ================= FEATURED ARTICLES GRID ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div 
            v-for="(post, p) in blogPosts" 
            :key="p"
            class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden card-3d flex flex-col justify-between"
          >
            <div>
              <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
              <div class="p-6">
                <span class="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] border border-[#F5DDEB]">
                  {{ post.tag }}
                </span>
                <h3 class="text-lg font-bold text-[#1C151D] mt-3 mb-2 leading-snug">
                  {{ post.title }}
                </h3>
                <p class="text-xs text-[#5C525E] leading-relaxed">
                  {{ post.excerpt }}
                </p>
              </div>
            </div>

            <div class="p-6 pt-0 flex items-center justify-between text-xs text-[#8E8291] border-t border-[#F0E6EC] mt-4 pt-4">
              <span>{{ post.readTime }} read</span>
              <span class="font-bold text-[#AA4184] hover:underline cursor-pointer">Read Guide →</span>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= CTA ================= -->
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import { BookOpen } from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const blogPosts = [
  {
    title: 'How to Eliminate Salon No-Shows: The 2026 Automated Booking Playbook',
    tag: 'Client Retention',
    excerpt: 'Discover how multi-channel automated SMS and upfront deposit policies reduce late cancellations from 18% down to under 2%.',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Skin Clinic EHR & Charting: Why Digital Consent Forms Protect Revenue',
    tag: 'Aesthetic Clinic',
    excerpt: 'Paper consent forms create liability hazards. Learn how biometric signing and visual face mapping protect injectors and dermatologists.',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Modern Barber Shop Chair-Rental vs Commission Math',
    tag: 'Barber Business',
    excerpt: 'Analyze the profitability formulas behind booth rental models versus tiered service and retail product commissions.',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  }
];
</script>
