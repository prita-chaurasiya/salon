<template>
  <header 
    class="fixed top-0 left-0 w-full z-40 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#F0E6EC] shadow-[0_4px_20px_rgba(170,65,132,0.04)] py-2.5' 
        : 'bg-[#FCFBFD] py-0'
    ]"
  >
    <!-- Top Announcement Bar: Rich Burgundy #1F1521 with #AA4184 pulse -->
    <div class="bg-[#1F1521] text-white text-[12px] py-2 px-4 transition-all duration-300 border-b border-[#352037]">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#AA4184] animate-pulse"></span>
          <span class="text-white font-bold">New Release:</span>
          <span class="text-[#E8D3DF] hidden sm:inline">Unlimited staff with zero per-seat fees.</span>
        </div>

        <div class="flex items-center gap-4 text-[11px]">
          <span class="text-[#F5DDEB] font-semibold hidden md:inline">24/7 VIP Concierge Support</span>
          <a href="#pricing" class="font-bold underline text-white hover:text-[#F5DDEB] transition-colors">
            View Tiers →
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
      <div class="flex items-center justify-between">
        
        <!-- Logo on Left with DINGG Style #AA4184 Emblem -->
        <a href="/" class="flex items-center gap-2.5 group shrink-0">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-[#AA4184] flex items-center justify-center text-white font-black text-sm font-sans shadow-sm group-hover:bg-[#923470] transition-colors">
              S
            </div>
            <span class="text-2xl font-black tracking-tight text-[#1C151D] font-sans">Salonist</span>
          </div>
        </a>

        <!-- Centered Navigation with Exact Salonist Menus (Desktop) -->
        <nav class="hidden lg:flex items-center gap-2 relative">
          
          <div class="relative" @mouseenter="openMenu('why-us')">
            <button 
              class="px-3.5 py-2 text-[14px] font-bold text-[#5C525E] hover:text-[#AA4184] transition-colors rounded-full flex items-center gap-1 group"
              :class="{ 'text-[#AA4184] bg-[#FBF0F6]': activeMenu === 'why-us' }"
            >
              <span>Why Salonist</span>
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-200 text-[#8E8291] group-hover:text-[#AA4184]" :class="{ 'rotate-180 text-[#AA4184]': activeMenu === 'why-us' }" />
            </button>
          </div>

          <div class="relative" @mouseenter="openMenu('features')">
            <button 
              class="px-3.5 py-2 text-[14px] font-bold text-[#5C525E] hover:text-[#AA4184] transition-colors rounded-full flex items-center gap-1 group"
              :class="{ 'text-[#AA4184] bg-[#FBF0F6]': activeMenu === 'features' }"
            >
              <span>Features</span>
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-200 text-[#8E8291] group-hover:text-[#AA4184]" :class="{ 'rotate-180 text-[#AA4184]': activeMenu === 'features' }" />
            </button>
          </div>

          <div class="relative" @mouseenter="openMenu('solutions')">
            <button 
              class="px-3.5 py-2 text-[14px] font-bold text-[#5C525E] hover:text-[#AA4184] transition-colors rounded-full flex items-center gap-1 group"
              :class="{ 'text-[#AA4184] bg-[#FBF0F6]': activeMenu === 'solutions' }"
            >
              <span>Solutions</span>
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-200 text-[#8E8291] group-hover:text-[#AA4184]" :class="{ 'rotate-180 text-[#AA4184]': activeMenu === 'solutions' }" />
            </button>
          </div>

          <router-link 
            to="/pricing" 
            class="px-3.5 py-2 text-[14px] font-bold text-[#5C525E] hover:text-[#AA4184] transition-colors rounded-full"
          >
            Pricing
          </router-link>

        </nav>

        <!-- Right Side CTA Group -->
        <div class="hidden lg:flex items-center gap-3 shrink-0">
          
          <!-- Circular Language Flag ENG Badge -->
          <div class="w-8 h-8 rounded-full border border-[#E2CDD9] bg-white flex items-center justify-center text-[10px] font-extrabold text-[#AA4184] shadow-xs cursor-pointer hover:bg-[#FBF0F6]">
            ENG
          </div>

          <!-- Marketplace Pill Button with Storefront Icon -->
          <a 
            href="#features"
            class="px-4 py-2 text-[13px] font-bold text-[#1C151D] bg-white border border-[#E2CDD9] hover:border-[#AA4184] hover:bg-[#FBF0F6] rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs"
          >
            <Store class="w-4 h-4 text-[#AA4184]" />
            <span>Marketplace</span>
          </a>

          <!-- Log In -->
          <router-link 
            to="/login"
            class="px-3 py-2 text-[13.5px] font-bold text-[#5C525E] hover:text-[#AA4184] transition-colors cursor-pointer"
          >
            Log In
          </router-link>

          <!-- Start Free Trial button (Primary #AA4184) -->
          <button 
            @click="$emit('start-trial')"
            class="px-6 py-2.5 text-[13.5px] font-bold rounded-full bg-[#AA4184] hover:bg-[#923470] text-white shadow-sm transition-all duration-200 cursor-pointer hover:scale-[1.02]"
          >
            Start Free Trial
          </button>
        </div>

        <!-- Mobile Menu Toggle Button (Hamburger / Close) -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-2 text-[#1C151D] rounded-xl border border-[#F0E6EC] bg-white hover:bg-[#FBF0F6] transition-colors"
          aria-label="Toggle navigation menu"
        >
          <Menu v-if="!mobileOpen" class="w-6 h-6 text-[#1C151D]" />
          <X v-else class="w-6 h-6 text-[#1C151D]" />
        </button>

      </div>
    </div>

    <!-- Mega Menu Floating Modal Layer (Desktop) -->
    <MegaMenu 
      :is-open="activeMenu !== null"
      :category="activeMenu"
      @close="closeMenu"
      @keep-open="keepMenuOpen"
    />

    <!-- ================= FULL INTERACTIVE MOBILE DRAWER MENU ================= -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="mobileOpen"
        class="lg:hidden fixed inset-x-0 top-[108px] bottom-0 bg-[#FCFBFD] border-t border-[#F0E6EC] p-5 shadow-2xl overflow-y-auto z-50 flex flex-col justify-between"
      >
        <div class="space-y-2">
          
          <!-- Accordion 1: Why Salonist -->
          <div class="border-b border-[#F0E6EC] pb-2">
            <button 
              @click="toggleMobileSection('why-us')"
              class="w-full flex items-center justify-between py-3 text-base font-bold text-[#1C151D] hover:text-[#AA4184]"
            >
              <span>Why Salonist</span>
              <ChevronDown 
                class="w-4 h-4 text-[#8E8291] transition-transform duration-200" 
                :class="{ 'rotate-180 text-[#AA4184]': mobileSection === 'why-us' }" 
              />
            </button>
            <div v-show="mobileSection === 'why-us'" class="pl-3 pb-3 space-y-2.5 pt-1">
              <a 
                v-for="(item, i) in whyUsLinks" 
                :key="i" 
                :href="item.href"
                @click="mobileOpen = false"
                class="flex items-center gap-2.5 py-1.5 text-sm text-[#5C525E] hover:text-[#AA4184]"
              >
                <component :is="item.icon" class="w-4 h-4 text-[#AA4184]" />
                <span>{{ item.title }}</span>
              </a>
            </div>
          </div>

          <!-- Accordion 2: Features -->
          <div class="border-b border-[#F0E6EC] pb-2">
            <button 
              @click="toggleMobileSection('features')"
              class="w-full flex items-center justify-between py-3 text-base font-bold text-[#1C151D] hover:text-[#AA4184]"
            >
              <span>Features</span>
              <ChevronDown 
                class="w-4 h-4 text-[#8E8291] transition-transform duration-200" 
                :class="{ 'rotate-180 text-[#AA4184]': mobileSection === 'features' }" 
              />
            </button>
            <div v-show="mobileSection === 'features'" class="pl-3 pb-3 space-y-2.5 pt-1">
              <router-link 
                v-for="(item, i) in featureLinks" 
                :key="i" 
                :to="item.to"
                @click="mobileOpen = false"
                class="flex items-center gap-2.5 py-1.5 text-sm text-[#5C525E] hover:text-[#AA4184]"
              >
                <component :is="item.icon" class="w-4 h-4 text-[#AA4184]" />
                <span>{{ item.title }}</span>
              </router-link>
            </div>
          </div>

          <!-- Accordion 3: Solutions & Industries (All 12 Dedicated Pages) -->
          <div class="border-b border-[#F0E6EC] pb-2">
            <button 
              @click="toggleMobileSection('solutions')"
              class="w-full flex items-center justify-between py-3 text-base font-bold text-[#1C151D] hover:text-[#AA4184]"
            >
              <div class="flex items-center gap-2">
                <span>Solutions & Industries</span>
                <span class="px-2 py-0.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-[10px] font-black uppercase">12</span>
              </div>
              <ChevronDown 
                class="w-4 h-4 text-[#8E8291] transition-transform duration-200" 
                :class="{ 'rotate-180 text-[#AA4184]': mobileSection === 'solutions' }" 
              />
            </button>
            
            <div v-show="mobileSection === 'solutions'" class="pl-2 pb-3 space-y-4 pt-2">
              
              <!-- Group 1: Hair & Beauty -->
              <div>
                <p class="text-[11px] font-black uppercase tracking-wider text-[#8E8291] mb-2">Hair & Beauty</p>
                <div class="space-y-1.5 pl-2">
                  <router-link 
                    v-for="(sol, s) in solutionsList.hairBeauty" 
                    :key="s"
                    :to="sol.to"
                    @click="mobileOpen = false"
                    class="flex items-center gap-2.5 py-1.5 text-sm text-[#5C525E] hover:text-[#AA4184]"
                  >
                    <component :is="sol.icon" class="w-4 h-4 text-[#AA4184]" />
                    <span>{{ sol.title }}</span>
                  </router-link>
                </div>
              </div>

              <!-- Group 2: Spa & Wellness -->
              <div>
                <p class="text-[11px] font-black uppercase tracking-wider text-[#8E8291] mb-2">Spa & Wellness</p>
                <div class="space-y-1.5 pl-2">
                  <router-link 
                    v-for="(sol, s) in solutionsList.spaWellness" 
                    :key="s"
                    :to="sol.to"
                    @click="mobileOpen = false"
                    class="flex items-center gap-2.5 py-1.5 text-sm text-[#5C525E] hover:text-[#AA4184]"
                  >
                    <component :is="sol.icon" class="w-4 h-4 text-[#AA4184]" />
                    <span>{{ sol.title }}</span>
                  </router-link>
                </div>
              </div>

              <!-- Group 3: Clinics & Specialty -->
              <div>
                <p class="text-[11px] font-black uppercase tracking-wider text-[#8E8291] mb-2">Clinics & Specialty</p>
                <div class="space-y-1.5 pl-2">
                  <router-link 
                    v-for="(sol, s) in solutionsList.clinicsSpecialty" 
                    :key="s"
                    :to="sol.to"
                    @click="mobileOpen = false"
                    class="flex items-center gap-2.5 py-1.5 text-sm text-[#5C525E] hover:text-[#AA4184]"
                  >
                    <component :is="sol.icon" class="w-4 h-4 text-[#AA4184]" />
                    <span>{{ sol.title }}</span>
                  </router-link>
                </div>
              </div>

            </div>
          </div>

          <!-- Standalone Links -->
          <router-link 
            to="/pricing" 
            @click="mobileOpen = false" 
            class="block py-3 text-base font-bold text-[#1C151D] hover:text-[#AA4184] border-b border-[#F0E6EC]"
          >
            Pricing
          </router-link>

          <a 
            href="#how-it-works" 
            @click="mobileOpen = false" 
            class="block py-3 text-base font-bold text-[#1C151D] hover:text-[#AA4184] border-b border-[#F0E6EC]"
          >
            How It Works
          </a>

          <a 
            href="#faq" 
            @click="mobileOpen = false" 
            class="block py-3 text-base font-bold text-[#1C151D] hover:text-[#AA4184] border-b border-[#F0E6EC]"
          >
            FAQ
          </a>

          <router-link 
            to="/contact" 
            @click="mobileOpen = false" 
            class="block py-3 text-base font-bold text-[#1C151D] hover:text-[#AA4184] border-b border-[#F0E6EC]"
          >
            Contact & Support
          </router-link>

        </div>

        <!-- Mobile Drawer Action Buttons -->
        <div class="pt-6 pb-20 space-y-3">
          <router-link 
            to="/login"
            @click="mobileOpen = false" 
            class="w-full py-3.5 rounded-full border border-[#E2CDD9] text-sm font-bold text-[#1C151D] bg-white hover:bg-[#FBF0F6] flex items-center justify-center transition-colors"
          >
            Log In
          </router-link>
          <button 
            @click="mobileOpen = false; $emit('start-trial')" 
            class="w-full py-3.5 rounded-full bg-[#AA4184] hover:bg-[#923470] text-white text-sm font-bold cursor-pointer transition-colors shadow-sm"
          >
            Start Free 7-Day Trial →
          </button>
        </div>

      </div>
    </Transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { 
  ChevronDown, Store, Menu, X, 
  Scissors, User, HeartHandshake, Gem, 
  Flower2, Waves, Sun, Stethoscope, 
  Smile, ShieldAlert, Store as StoreIcon, Dog,
  Calendar, Calculator, CreditCard, Users, CheckSquare, Sparkles
} from 'lucide-vue-next';
import MegaMenu from './MegaMenu.vue';

defineEmits(['open-login', 'start-trial']);

const isScrolled = ref(false);
const activeMenu = ref(null);
const mobileOpen = ref(false);
const mobileSection = ref(null);
let closeTimer = null;

const toggleMobileMenu = () => {
  mobileOpen.value = !mobileOpen.value;
  if (!mobileOpen.value) {
    mobileSection.value = null;
  }
};

const toggleMobileSection = (sec) => {
  mobileSection.value = mobileSection.value === sec ? null : sec;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const openMenu = (id) => {
  if (closeTimer) clearTimeout(closeTimer);
  activeMenu.value = id;
};

const closeMenu = () => {
  closeTimer = setTimeout(() => {
    activeMenu.value = null;
  }, 200);
};

const keepMenuOpen = () => {
  if (closeTimer) clearTimeout(closeTimer);
};

/* Links for mobile accordion */
const whyUsLinks = [
  { title: 'Why Choose Salonist?', icon: CheckSquare, href: '#why-choose-us' },
  { title: 'Salon Management Guide', icon: Sparkles, href: '#blog' },
  { title: 'Client Success Stories', icon: Sparkles, href: '#testimonials' },
];

const featureLinks = [
  { title: 'Appointment Scheduling', icon: Calendar, to: '/features/appointment' },
  { title: 'Point of Sale (POS)', icon: Calculator, to: '/features' },
  { title: 'Client Profiles & History', icon: Users, to: '/features' },
  { title: 'Membership & Loyalty', icon: CreditCard, to: '/features' },
];

const solutionsList = {
  hairBeauty: [
    { title: 'Barbershop Software', icon: Scissors, to: '/solutions/barbershop' },
    { title: 'Hair Salons Software', icon: User, to: '/solutions/hair-salon' },
    { title: 'Bridal Salon Software', icon: HeartHandshake, to: '/solutions/bridal-salon' },
    { title: 'Nail Salon Software', icon: Gem, to: '/solutions/nail-salon' },
  ],
  spaWellness: [
    { title: 'Spa Software', icon: Flower2, to: '/solutions/spa-software' },
    { title: 'Massage Therapy Software', icon: Waves, to: '/solutions/massage-therapy' },
    { title: 'Tanning Salon Software', icon: Sun, to: '/solutions/tanning-salon' },
    { title: 'Medical spa Software', icon: Stethoscope, to: '/solutions/medical-spa' },
  ],
  clinicsSpecialty: [
    { title: 'Aesthetic skin clinic Software', icon: Smile, to: '/solutions/aesthetic-clinic' },
    { title: 'Tattoo Artist Software', icon: ShieldAlert, to: '/solutions/tattoo-studio' },
    { title: 'Salon Booth Renter Software', icon: StoreIcon, to: '/solutions/salon-booth-rental' },
    { title: 'Pet Grooming Software', icon: Dog, to: '/solutions/pet-grooming' },
  ]
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
