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
          <Trophy class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>PROVEN CLIENT TRANSFORMATIONS</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.15] max-w-5xl mx-auto">
          Boost Your Salon <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] via-[#923470] to-[#E11D48]">
            Success With Salonist
          </span>
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-2xl mx-auto font-normal leading-relaxed">
          Achieve Your salon success with our all-in-one management tools.
        </p>

        <!-- CTA Button (Screenshot 1 Match) -->
        <div class="flex items-center justify-center pt-2">
          <button 
            @click="trialOpen = true"
            class="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:scale-105 active:scale-95 text-white font-bold text-sm shadow-lg shadow-[#AA4184]/25 transition-all duration-300 cursor-pointer"
          >
            Get Free Trial
          </button>
        </div>

      </section>

      <!-- ================= 2. TRUSTED BRAND LOGO STRIP (Screenshot 1 Bottom Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h3 class="text-sm font-bold uppercase tracking-wider text-[#1C151D] mb-6">
          Trusted Growth Software for Beauty & Wellness
        </h3>
        
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div 
            v-for="(brand, bIdx) in brandLogos" 
            :key="bIdx"
            class="px-6 py-3 rounded-full bg-white border border-[#F0E6EC] shadow-xs flex items-center gap-2 hover:border-[#AA4184] transition-colors"
          >
            <span class="text-sm">{{ brand.icon }}</span>
            <span class="text-xs font-bold text-[#1C151D]">{{ brand.name }}</span>
          </div>
        </div>
      </section>

      <!-- ================= 3. "Nowadays, the competition..." + INSET "Give Salonist a try !!" CARD (Screenshot 2 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Editorial (7 cols - Exact Copy from Screenshot 2) -->
          <div class="lg:col-span-7 space-y-6 text-left">
            
            <p class="text-base text-[#5C525E] leading-relaxed">
              Nowadays, the competition in the beauty industry is at its peak. Every salon owner wants to stay ahead of its competitors. They adopts several techniques to make salon operations efficient and grow their business. Salonist is an all-in-one salon management software that simplifies daily administrative salon operations. It accurately manages bookings, staff payrolls, customer data, bills & payments, etc. Our software provides an exclusive range of powerful features to increase customer satisfaction and loyalty toward the business.
            </p>

            <div class="pt-4 space-y-3">
              <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
                What is Salonist?
              </h2>

              <p class="text-base text-[#5C525E] leading-relaxed">
                Salonist is an easy-to-use salon booking software made for different salons. It has many important features that make it easy for salon owners to manage their operations. They can use Salonist to handle multiple appointments, record customer data, manage payments, inventory, and marketing all in one place. Our software makes the tasks super easy and saves owners or staff valuable time..
              </p>
            </div>

            <!-- Key Features Intro -->
            <div class="pt-4 space-y-2">
              <h3 class="text-2xl font-black text-[#1C151D] tracking-tight">
                Key Features of Salonist
              </h3>
              <p class="text-sm text-[#5C525E] leading-relaxed">
                Salonist includes many advanced features to make salon management smoother. Following are a few of those features. Here we go, check these pointers now:
              </p>
            </div>

          </div>

          <!-- Right Floating "Give Salonist a try !!" Banner Card (Screenshot 2 Exact Match) -->
          <div class="lg:col-span-5">
            <div class="rounded-3xl bg-gradient-to-br from-[#1C151D] via-[#2A1D2C] to-[#451B38] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-[#AA4184]/30">
              
              <!-- Ambient rose glow -->
              <div class="absolute -top-12 -right-12 w-48 h-48 bg-[#AA4184]/40 rounded-full blur-2xl pointer-events-none"></div>

              <div class="relative z-10 space-y-5">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 via-rose-500 to-[#AA4184] flex items-center justify-center font-black text-xs text-white">
                    ▲
                  </div>
                  <span class="text-2xl font-black tracking-tight text-white">Salonist</span>
                </div>

                <h3 class="text-xl font-black text-white leading-snug">
                  Give Salonist a try !!
                </h3>

                <p class="text-sm text-slate-200 leading-relaxed">
                  We have everything that you need to run your Salon business. Use Salonist free for 7 days and experience the difference!!
                </p>

                <div class="pt-2">
                  <button 
                    @click="trialOpen = true"
                    class="w-full py-3.5 rounded-full bg-gradient-to-r from-[#AA4184] to-[#C05A9A] hover:from-[#923470] hover:to-[#AA4184] text-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Start Your Free Trial &rarr;
                  </button>
                </div>

                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>✔ No Credit Card Required</span>
                  <span>✔ Unlimited Staff</span>
                </div>

                <!-- Stylist Photo Strip Inset -->
                <div class="pt-2">
                  <img 
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80" 
                    alt="Salon Professional smiling" 
                    class="w-full h-44 object-cover rounded-2xl shadow-md border border-white/10"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 4. 7 NUMBERED KEY FEATURES ACCORDIONS (Screenshot 3 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div class="space-y-4">
          <div 
            v-for="(feature, fIdx) in keyFeaturesList" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] p-5 shadow-xs hover:border-[#AA4184] transition-all cursor-pointer"
            @click="activeFeature = activeFeature === fIdx ? null : fIdx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-[#1C151D] text-white flex items-center justify-center font-black text-xs">
                  {{ fIdx + 1 }}
                </div>
                <h3 class="font-bold text-base text-[#1C151D]">{{ feature.title }}</h3>
              </div>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-[#AA4184]': activeFeature === fIdx }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <p v-show="activeFeature === fIdx" class="mt-4 text-sm text-[#5C525E] leading-relaxed pl-12 border-t border-slate-100 pt-3">
              {{ feature.content }}
            </p>
          </div>
        </div>

      </section>

      <!-- ================= 5. SALONIST'S CUSTOMER SUCCESS & COMMITMENT (Screenshot 4 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="rounded-[32px] bg-white border border-[#F0E6EC] p-8 sm:p-14 shadow-lg space-y-10 text-left">
          
          <!-- Part A: Salonist's Customer Success -->
          <div class="space-y-4">
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
              Salonist’s Customer Success
            </h2>
            <p class="text-base text-[#5C525E] leading-relaxed">
              We happily share how the top premium brands of the beauty industry have recognized the power of Salonist’s advanced features. Those premium brands are <strong>Mia Makeup, Toni & Guy Salon, Bugwal Salon, and Kelture Aveda</strong>. They integrated Salonist software at their salons and experienced the Salonist’s exclusive features. It provides many advantages to customers and makes their journey super easy. Now, after using Salonist software these brands provide excellent customer service and outshine in the beauty market among other salons.
            </p>
          </div>

          <!-- Part B: Salonist's Commitment to Customer Success -->
          <div class="space-y-4 pt-4 border-t border-slate-100">
            <h2 class="text-3xl sm:text-4xl font-black text-[#1C151D] tracking-tight">
              Salonist’s Commitment to Customer Success
            </h2>
            <p class="text-base text-[#5C525E] leading-relaxed">
              Salonist is dedicated to helping every salon succeed in the beauty industry by using its data-driven and customer-focused approach. We monitor key metrics regularly to ensure our platform is equipped with all the essential tools to support your salon’s growth. Our goal is to improve your online ratings and stand your salon out in the market.
            </p>
          </div>

          <!-- Featured Brand Cards Strip (Screenshot 4 Bottom Match) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div class="p-5 rounded-2xl bg-[#FAF7F9] border border-[#F0E6EC] flex flex-col items-center justify-center text-center">
              <span class="text-2xl font-black text-[#1C151D] font-serif">Mia</span>
              <span class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Mia Makeup</span>
            </div>
            <div class="p-5 rounded-2xl bg-[#FAF7F9] border border-[#F0E6EC] flex flex-col items-center justify-center text-center">
              <span class="text-xl font-black text-[#1C151D] tracking-tighter">TONI&GUY</span>
              <span class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Toni & Guy Salon</span>
            </div>
            <div class="p-5 rounded-2xl bg-[#FAF7F9] border border-[#F0E6EC] flex flex-col items-center justify-center text-center">
              <span class="text-2xl font-black text-[#1C151D] font-serif italic">Buqwal</span>
              <span class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Bugwal Salon</span>
            </div>
            <div class="p-5 rounded-2xl bg-[#FAF7F9] border border-[#F0E6EC] flex flex-col items-center justify-center text-center">
              <span class="text-xl font-bold text-[#1C151D]">Kelture</span>
              <span class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Kelture Aveda</span>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= 6. DINGG SOFT BLUSH BACKGROUND SECTION ================= -->
      <DinggCouponPromoSection 
        business-type="salon"
        @start-trial="trialOpen = true"
        class="mb-24"
      />

      <!-- ================= 7. CUSTOMER STORIES: "Loved by thousands of salons and spas" ================= -->
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
            <span>View All Verified Client Testimonials</span>
            <span>&rarr;</span>
          </router-link>
        </div>
      </section>

      <!-- ================= 8. CTA ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Start Growing"
          title="Achieve your salon success with Salonist today"
          subtitle="Everything from calendar rules to automated retail upsells, ready out of the box."
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
import DinggCouponPromoSection from '../components/common/DinggCouponPromoSection.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import { Trophy } from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const activeFeature = ref(0);

const brandLogos = [
  { name: 'Toni & Guy', icon: '✂️' },
  { name: 'Buqwal', icon: '💈' },
  { name: 'Memories', icon: '🌸' },
  { name: 'Meraki Spa', icon: '🌿' },
  { name: 'Stile Barbers', icon: '✂️' },
  { name: 'Looks Salon', icon: '💆‍♀️' }
];

/* Screenshot 3 Accordions */
const keyFeaturesList = [
  {
    title: 'Appointment Booking',
    content: 'Allow clients to easily schedule, reschedule, or cancel bookings 24/7 online via Instagram, Facebook, and your website, completely eliminating telephone friction and double-bookings.'
  },
  {
    title: 'Handling Customer Data',
    content: 'Maintain centralized digital profiles with hair color formula history, skin consultation notes, patch test records, and retail product purchase history.'
  },
  {
    title: 'Manage Staff Payrolls',
    content: 'Automate multi-tier sliding scale commission calculations, tip splits, hourly wages, and booth rental deductions accurately on checkout.'
  },
  {
    title: 'Automated Marketing',
    content: 'Send automated WhatsApp and SMS appointment reminders, birthday greetings, seasonal flash sales, and Google 5-star review collection prompts.'
  },
  {
    title: 'Financial Management',
    content: 'Reconcile daily till counts, generate Z-reports, manage sales tax and VAT ledgers, and track deferred liabilities from memberships and gift cards.'
  },
  {
    title: 'Inventory Management',
    content: 'Track professional back-bar product usage down to the gram, receive low-quantity reorder alerts, and manage retail product stock across branches.'
  },
  {
    title: 'Manage Loyalty Programs',
    content: 'Reward loyal clients with points on services and retail purchases, create VIP tier packages, and motivate repeat bookings.'
  }
];

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
