<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#1C151D] flex flex-col justify-between">
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <main class="flex-grow pt-32 pb-24">
      
      <!-- ================= 1. HERO SECTION (Screenshot 1 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <!-- Pill Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FAF0F5] text-[#AA4184] border border-[#F5DDEB] shadow-xs">
          <span>✨</span>
          <span class="uppercase tracking-wider">WHY CHOOSE SALONIST</span>
        </div>

        <!-- Big Hero Heading -->
        <h1 class="text-4xl sm:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Your One-Stop Solution <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] via-[#923470] to-[#E11D48]">
            for All Business Needs
          </span>
        </h1>

        <!-- Subheading -->
        <p class="text-base sm:text-lg text-[#5C525E] font-normal max-w-2xl mx-auto leading-relaxed">
          Salonist is an all-in-one salon management software designed to promote growth in the beauty and wellness industry.
        </p>

        <!-- CTA Buttons (Screenshot 1 Match) -->
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button 
            @click="trialOnboardingOpen = true"
            class="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            Get A Free Trial
          </button>
          
          <a 
            href="#testimonials"
            class="px-8 py-3.5 rounded-full bg-white text-[#1C151D] hover:text-[#AA4184] font-bold text-sm border border-[#E8E8EC] hover:border-[#AA4184] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Client Testimonials
          </a>
        </div>

        <!-- Social Proof Rating Badges (Screenshot 1 Bottom) -->
        <div class="pt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <!-- Capterra -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-black text-sm">
              ▲
            </div>
            <div class="text-left">
              <span class="font-bold text-xs text-[#1C151D] block">Capterra</span>
              <div class="flex items-center gap-1 text-amber-500 text-xs">
                ★★★★★ <span class="text-slate-500 font-semibold text-[11px]">(4.4)</span>
              </div>
            </div>
          </div>

          <!-- G2 -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-black text-sm">
              G
            </div>
            <div class="text-left">
              <span class="font-bold text-xs text-[#1C151D] block">G2 Crowd</span>
              <div class="flex items-center gap-1 text-amber-500 text-xs">
                ★★★★★ <span class="text-slate-500 font-semibold text-[11px]">(5.0)</span>
              </div>
            </div>
          </div>

          <!-- SoftwareSuggest -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
              S
            </div>
            <div class="text-left">
              <span class="font-bold text-xs text-[#1C151D] block">SoftwareSuggest</span>
              <div class="flex items-center gap-1 text-amber-500 text-xs">
                ★★★★★ <span class="text-slate-500 font-semibold text-[11px]">(4.9)</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <!-- ================= 2. TRUSTED LOGO MOSAIC (Screenshot 2 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
        <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight">
          Trusted by over <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] to-[#E11D48]">15000+ Users</span> globally
        </h2>
        <p class="text-base text-[#5C525E] max-w-xl mx-auto mt-3">
          The world's leading companies trust Salonist to run their different business operations.
        </p>

        <!-- Brand Mosaic Grid (Screenshot 2 Exact Style) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-12">
          <div v-for="(brand, i) in brandLogos" :key="i" class="p-5 rounded-2xl bg-white border border-[#F0E6EC] shadow-sm flex flex-col items-center justify-center h-28 hover:shadow-lg hover:border-[#AA4184] hover:-translate-y-1 transition-all duration-300">
            <span class="text-2xl mb-1">{{ brand.icon }}</span>
            <span class="font-bold text-xs text-[#1C151D]">{{ brand.name }}</span>
            <span class="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">{{ brand.type }}</span>
          </div>
        </div>
      </section>

      <!-- ================= 3. CLIENT TESTIMONIAL CARDS (Screenshot 3 Match) ================= -->
      <section id="testimonials" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div class="text-center space-y-3 mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#FAF0F5] text-[#AA4184] border border-[#F5DDEB]">
            <span>VERIFIED SALON REVIEWS</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight">
            Loved by Owners, Stylists & Clinicians
          </h2>
          <p class="text-base text-[#5C525E] max-w-2xl mx-auto">
            Read authentic feedback from high-volume salons and aesthetic clinics that scaled their chair revenue with Salonist.
          </p>
        </div>

        <!-- 4 Column Testimonial Cards (Screenshot 3 Exact Structure) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(card, idx) in testimonialCards" 
            :key="idx" 
            class="rounded-3xl bg-white border border-[#F0E6EC] p-7 shadow-md hover:shadow-xl hover:border-[#AA4184] transition-all duration-300 flex flex-col justify-between"
          >
            <div class="space-y-5">
              <!-- Top Header: Logo / Salon Identity -->
              <div class="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 class="font-black text-sm tracking-wider uppercase text-[#1C151D]">{{ card.brand }}</h4>
                  <span class="text-[10px] text-slate-400 font-medium">{{ card.location }}</span>
                </div>
                <span class="text-lg">{{ card.icon }}</span>
              </div>

              <!-- Testimonial Quote -->
              <p class="text-sm text-[#5C525E] leading-relaxed font-normal">
                "{{ card.quote }}"
              </p>
            </div>

            <div class="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <div>
                <p class="font-bold text-xs text-[#1C151D]">{{ card.author }}</p>
                <p class="text-[11px] text-[#AA4184] font-medium">{{ card.role }}</p>
              </div>
              <div class="flex text-amber-400 text-xs">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 4. VIDEO TESTIMONIALS (Screenshot 4 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div class="text-center space-y-3 mb-12">
          <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight">
            Loved by thousands of salons and spas
          </h2>
          <p class="text-base text-[#5C525E]">
            Watch how our partners switched from pen and paper or clunky legacy systems.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(video, vIdx) in videoTestimonials" 
            :key="vIdx" 
            class="group relative rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] bg-slate-900 cursor-pointer aspect-[3/4]"
          >
            <!-- Background Image -->
            <img 
              :src="video.image" 
              :alt="video.name" 
              class="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <!-- Floating Video Play Button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-[#AA4184] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <!-- Inset Key Quote Overlay (Screenshot 4 Match) -->
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
      </section>

      <!-- ================= 5. INTEGRATIONS STRIP (Screenshot 5 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div class="rounded-[32px] bg-gradient-to-br from-[#FAF0F5] to-white border border-[#F5DDEB] p-8 sm:p-14 shadow-lg">
          
          <div class="max-w-3xl space-y-4">
            <span class="text-xs uppercase font-extrabold tracking-widest text-[#AA4184]">INTEGRATIONS</span>
            <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight leading-tight">
              Keep the tools you <br />already pay for.
            </h2>
            <p class="text-base text-[#5C525E] leading-relaxed">
              More than 40 integrations, live today — including the payment rails most salon software skips: Tap, Tabby, Tamara, Ziina, Network Payments, Stripe, and QuickBooks.
            </p>
            <div>
              <router-link 
                to="/features/integrations" 
                class="inline-flex items-center gap-2 text-sm font-bold text-[#AA4184] hover:text-[#923470] border-b-2 border-[#AA4184] pb-0.5"
              >
                See all 40+ integrations &rarr;
              </router-link>
            </div>
          </div>

          <!-- Integration Pills Strip (Screenshot 5 Match) -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-10">
            <div 
              v-for="(tool, tIdx) in integrationTools" 
              :key="tIdx"
              class="p-3.5 rounded-2xl bg-white border border-[#F0E6EC] shadow-xs flex items-center justify-between hover:shadow-md hover:border-[#AA4184] transition-all"
            >
              <div class="flex items-center gap-2.5">
                <span class="text-base">{{ tool.icon }}</span>
                <span class="font-bold text-xs text-[#1C151D]">{{ tool.name }}</span>
              </div>
              <span class="text-[9px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                {{ tool.category }}
              </span>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= 6. FINAL CONVERSION BANNER (Screenshot 6 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div class="rounded-[36px] bg-[#1C151D] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          <!-- Ambient gradient glow -->
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#AA4184]/40 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div class="lg:col-span-7 space-y-6">
              <span class="text-xs uppercase font-extrabold tracking-widest text-[#AA4184]">FREE TRIAL</span>
              <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Try it on a real <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-white">
                  week of bookings.
                </span>
              </h2>
              <p class="text-base text-slate-300 leading-relaxed max-w-xl">
                Seven days with your own clients, your own services and your own team in it. If it doesn't fit the way your salon runs, walk away and take your data with you.
              </p>

              <!-- Checkpoints (Screenshot 6 Exact Copy) -->
              <div class="space-y-3 pt-2 text-sm text-slate-200">
                <div class="flex items-start gap-2.5">
                  <span class="text-[#AA4184] font-bold">✔</span>
                  <span><strong>No card required.</strong> Nothing is charged when the trial ends.</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="text-[#AA4184] font-bold">✔</span>
                  <span><strong>Unlimited staff</strong> on every plan, including the free one.</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="text-[#AA4184] font-bold">✔</span>
                  <span><strong>We move your data in.</strong> Clients, services and history from your old system.</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="text-[#AA4184] font-bold">✔</span>
                  <span><strong>Cancel by email.</strong> No notice period, no retention call.</span>
                </div>
              </div>

              <!-- Action buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-4 rounded-full bg-gradient-to-r from-[#AA4184] to-[#923470] hover:from-[#923470] hover:to-[#AA4184] text-white font-bold text-sm shadow-xl hover:scale-105 transition-all cursor-pointer"
                >
                  Start your free trial
                </button>
                <button 
                  @click="demoOpen = true"
                  class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
                >
                  Book a 20-minute demo
                </button>
              </div>

            </div>

            <!-- Right: Client Booking App Mobile Showcase -->
            <div class="lg:col-span-5 text-center">
              <div class="relative inline-block rounded-[32px] p-4 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                  alt="Salonist Client Booking App" 
                  class="rounded-2xl w-72 sm:w-80 h-96 object-cover shadow-2xl mx-auto"
                />
                <div class="mt-4 text-left p-2">
                  <p class="text-xs uppercase font-extrabold tracking-wider text-[#AA4184]">CLIENT BOOKING APP</p>
                  <p class="text-sm font-bold text-white mt-1">Your clients book from their phone, not your front desk.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>

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
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';

const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const demoOpen = ref(false);

const brandLogos = [
  { name: 'Adore Hair', type: 'Hair Salon', icon: '💈' },
  { name: 'Chic & Posh', type: 'Beauty Lounge', icon: '💅' },
  { name: 'FashionTV Salon', type: 'Luxury Flagship', icon: '💎' },
  { name: 'Studio 99', type: 'Unisex Salon', icon: '✂️' },
  { name: 'GlossNGlass', type: 'Makeup Studio', icon: '💄' },
  { name: 'Blitz Bar', type: 'Beauty Bar', icon: '⚡' },
  { name: 'Ayur Spa', type: 'Ayurvedic Retreat', icon: '🌿' },
  { name: 'Buddha Spa', type: 'Wellness Center', icon: '🧘' },
  { name: 'Toni&Guy Partner', type: 'Styling Academy', icon: '✂️' },
  { name: 'Locks & Lustre', type: 'Hair Studio', icon: '👑' },
  { name: 'Haircastle', type: 'Barbershop', icon: '🏰' },
  { name: 'Meadows Spa', type: 'Med Spa', icon: '🌸' },
  { name: 'Amanti Beauty', type: 'Skin Clinic', icon: '✨' },
  { name: 'Royal Salon', type: 'Boutique Studio', icon: '👑' }
];

const testimonialCards = [
  {
    brand: 'Ember Rose Salon',
    location: 'Chicago, IL',
    icon: '🌹',
    quote: "Salonist has changed the way we run our salon! It handles everything from booking appointments to payroll and other tasks easily. It's affordable compared to other expensive software options that didn't fit our needs. The customer service is great, and the software is easy to use.",
    author: 'Elena Rostova',
    role: 'Salon Director & Founder'
  },
  {
    brand: 'Buqwal Hair Lounge',
    location: 'London, UK',
    icon: '✂️',
    quote: "When I discovered Salonist, it was the perfect solution for my salon's needs. It has eliminated all the daily chaos I used to face. The Salonist team was very helpful in guiding us, and the software is incredibly user-friendly. Booking appointments is straightforward without any special training.",
    author: 'Marcus Vance',
    role: 'Head Stylist & Co-Owner'
  },
  {
    brand: 'Dr. Youth Aesthetics',
    location: 'Beverly Hills, CA',
    icon: '🩺',
    quote: "Salonist has been a wonderful addition to our clinic! The software simplifies scheduling, payments, and customer data management. Our clients enjoy the user-friendly online booking, and it helps our clinic run smoothly. We highly recommend Salonist!",
    author: 'Dr. Sarah Lin, MD',
    role: 'Medical Director'
  },
  {
    brand: 'GlossNGlass Studio',
    location: 'New York, NY',
    icon: '💄',
    quote: "We used Salonist software for appointment booking, Payroll, and other management scenarios. It is cost savings as other softwares are too expensive as per our needs. Also, it has great client loyalty tools that keep our chairs booked full.",
    author: 'Aria Montgomery',
    role: 'Lead MUA & Studio Manager'
  }
];

const videoTestimonials = [
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

const integrationTools = [
  { name: 'QuickBooks', category: 'Accounts', icon: '📗' },
  { name: 'Qoyod', category: 'Accounts', icon: '📘' },
  { name: 'EFRIS', category: 'E-Invoicing', icon: '🧾' },
  { name: 'Stripe', category: 'Payments', icon: '💳' },
  { name: 'PayPal', category: 'Payments', icon: '🅿️' },
  { name: 'SMS API', category: 'Messaging', icon: '📱' },
  { name: 'Mailchimp', category: 'Email', icon: '🐒' },
  { name: 'GetResponse', category: 'Email', icon: '✉️' },
  { name: 'SMTP', category: 'Email', icon: '📨' },
  { name: 'WordPress', category: 'Website', icon: '🌐' },
  { name: 'WooCommerce', category: 'Store', icon: '🛒' },
  { name: 'WhatsApp API', category: 'Chat', icon: '💬' }
];
</script>

