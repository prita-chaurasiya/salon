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
          <span>Mastery & Growth Guides</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          {{ pageTitle }} <br />
          <span class="text-[#AA4184]">Operational Playbook</span>
        </h1>

        <p class="mt-5 text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto leading-relaxed">
          {{ pageSubtitle }}
        </p>
      </section>

      <!-- ================= GUIDE PILLARS GRID ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(guide, g) in activeGuideContent" 
            :key="g"
            class="rounded-3xl bg-white border border-[#F0E6EC] overflow-hidden shadow-xs hover:border-[#AA4184] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div class="aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-[#F0E6EC]">
                <img :src="guide.image" :alt="guide.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-8">
                <div class="w-10 h-10 rounded-2xl bg-[#FBF0F6] border border-[#F5DDEB] flex items-center justify-center text-[#AA4184] mb-4 font-black text-xs">
                  0{{ g + 1 }}
                </div>
                <h3 class="text-xl font-bold text-[#1C151D] mb-3 group-hover:text-[#AA4184] transition-colors">
                  {{ guide.title }}
                </h3>
                <p class="text-sm text-[#5C525E] leading-relaxed">
                  {{ guide.desc }}
                </p>
              </div>
            </div>

            <div class="p-8 pt-0">
              <button 
                @click="trialOpen = true"
                class="w-full py-2.5 rounded-full border border-[#F0E6EC] bg-[#FAF7F9] hover:bg-[#FBF0F6] hover:border-[#AA4184] text-[#1C151D] hover:text-[#AA4184] font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Read Full Chapter</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= CTA ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Execute With Precision"
          title="Put these best practices on autopilot with Salonist"
          subtitle="Everything from calendar rules to automated retail upsells, ready out of the box."
          @start-trial="trialOpen = true"
          @book-demo="demoOpen = true"
        />
      </section>

    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import { BookOpen } from 'lucide-vue-next';

const route = useRoute();
const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const guideType = computed(() => {
  if (route.path.includes('spa-management')) return 'spa';
  if (route.path.includes('automation')) return 'automation';
  return 'salon';
});

const pageTitle = computed(() => {
  switch (guideType.value) {
    case 'spa': return 'Spa & Wellness Management';
    case 'automation': return 'Salon Automation & AI Growth';
    default: return 'Salon Business Management';
  }
});

const pageSubtitle = computed(() => {
  switch (guideType.value) {
    case 'spa': return 'How top day spas, resort destinations and wellness clinics optimize treatment rooms, therapist rotations and guest journeys.';
    case 'automation': return 'Step-by-step blueprints to automate client reminders, inventory reordering, review collection and staff payroll.';
    default: return 'A comprehensive blueprint to managing appointment flow, eliminating chair dead-time, and maximizing average ticket size.';
  }
});

const activeGuideContent = computed(() => {
  if (guideType.value === 'spa') {
    return [
      { 
        title: 'Room & Equipment Orchestration', 
        desc: 'Prevent double-booked treatment cabins, sauna suites and facial apparatus by linking resources directly to selected services.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80'
      },
      { 
        title: 'Therapist Rest & Turnover Buffers', 
        desc: 'Automatically schedule recovery slots between deep-tissue sessions to maintain five-star service quality and staff happiness.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80'
      },
      { 
        title: 'VIP Membership & Package Redemptions', 
        desc: 'Manage recurring subscription plans, package credits and series vouchers with biometric or one-tap checkouts.',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=80'
      }
    ];
  } else if (guideType.value === 'automation') {
    return [
      { 
        title: 'Automated 2-Way SMS Confirmations', 
        desc: 'Cut front-desk phone workload by 80% with conversational confirmations that update calendar chair status in real-time.',
        image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=700&q=80'
      },
      { 
        title: 'Predictive Rebooking Triggers', 
        desc: 'Target guests when their hair color, brow lamination or Botox touch-up is due using intelligent lifecycle timing.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80'
      },
      { 
        title: 'Automated Google Review Funnel', 
        desc: 'Send review requests 20 minutes post-checkout to capture 5-star feedback when client satisfaction is at its peak.',
        image: 'https://images.unsplash.com/photo-1512290900672-1f55b0a04975?auto=format&fit=crop&w=700&q=80'
      }
    ];
  } else {
    return [
      { 
        title: 'Multi-Chair Schedule Orchestration', 
        desc: 'Master processing buffer times so colorists can slot blowout or haircut clients during bleach and tone processing windows.',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80'
      },
      { 
        title: 'Retail Upsell & Commission Transparency', 
        desc: 'Empower stylists with live commission tracking right from their staff phone, incentivizing product cross-sells at POS.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80'
      },
      { 
        title: 'Stock Auditing & Barcode Inventory', 
        desc: 'Track professional back-bar tint and retail shelf units down to the milliliter, triggering automatic reorder alerts.',
        image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80'
      }
    ];
  }
});
</script>

