<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-2 scale-[0.98]"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 -translate-y-2 scale-[0.98]"
  >
    <div
      v-show="isOpen"
      @mouseenter="$emit('keep-open')"
      @mouseleave="$emit('close')"
      class="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-50 origin-top pointer-events-auto"
      :class="menuWidthClass"
    >
      <!-- Caret Arrow Pointer aligned to caller (Exact Salonist match) -->
      <div 
        class="absolute -top-2 w-4 h-4 bg-white border-t border-l border-[#F0E6EC] transform rotate-45 transition-all duration-300 z-10"
        :style="{ left: pointerPosition }"
      ></div>

      <!-- Mega Card Container with 24px radius, soft border, luxury shadow -->
      <div class="relative bg-white rounded-[24px] border border-[#F0E6EC] shadow-[0_20px_50px_rgba(15,61,62,0.08)] p-8 overflow-hidden text-[#1C151D]">
        
        <!-- ================= 1. WHY SALONIST (Preserved Exactly) ================= -->
        <div v-if="category === 'why-us'" class="grid grid-cols-3 gap-8">
          
          <!-- Column 1: COMPANY -->
          <div>
            <h5 class="text-[12px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-5">
              COMPANY
            </h5>
            <div class="space-y-4">
              <a 
                v-for="(item, i) in whyUsData.company" 
                :key="i" 
                :href="item.href"
                class="group flex items-center gap-3.5 text-left transition-colors p-1.5 -mx-1.5 rounded-xl hover:bg-[#FBF0F6]"
              >
                <div class="w-6 h-6 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-5 h-5 stroke-[1.5]" />
                </div>
                <div class="flex-1">
                  <span class="text-[15px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors block">
                    {{ item.title }}
                  </span>
                </div>
              </a>
            </div>
          </div>

          <!-- Column 2: GUIDES -->
          <div>
            <h5 class="text-[12px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-5">
              GUIDES
            </h5>
            <div class="space-y-4">
              <a 
                v-for="(item, i) in whyUsData.guides" 
                :key="i" 
                :href="item.href"
                class="group flex items-center gap-3.5 text-left transition-colors p-1.5 -mx-1.5 rounded-xl hover:bg-[#FBF0F6]"
              >
                <div class="w-6 h-6 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-5 h-5 stroke-[1.5]" />
                </div>
                <div class="flex-1">
                  <span class="text-[15px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors block">
                    {{ item.title }}
                  </span>
                </div>
              </a>
            </div>
          </div>

          <!-- Column 3: RESOURCES -->
          <div>
            <h5 class="text-[12px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-5">
              RESOURCES
            </h5>
            <div class="space-y-4">
              <a 
                v-for="(item, i) in whyUsData.resources" 
                :key="i" 
                :href="item.href"
                class="group flex items-center gap-3.5 text-left transition-colors p-1.5 -mx-1.5 rounded-xl hover:bg-[#FBF0F6]"
              >
                <div class="w-6 h-6 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-5 h-5 stroke-[1.5]" />
                </div>
                <div class="flex-1">
                  <span class="text-[15px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors block">
                    {{ item.title }}
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        <!-- ================= 2. FEATURES (Preserved Exactly) ================= -->
        <div v-else-if="category === 'features'" class="grid grid-cols-4 gap-7">
          
          <!-- Column 1: SCHEDULING & PAYMENTS -->
          <div>
            <h5 class="text-[11px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-4">
              SCHEDULING & PAYMENTS
            </h5>
            <div class="space-y-3.5">
              <a 
                v-for="(item, i) in featuresData.scheduling" 
                :key="i" 
                :href="item.href"
                class="group flex items-center gap-3 text-left transition-colors p-1 -mx-1 rounded-lg hover:bg-[#FBF0F6]"
              >
                <div class="w-5 h-5 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-4 h-4 stroke-[1.6]" />
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[13.5px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors">
                    {{ item.title }}
                  </span>
                  <span v-if="item.isNew" class="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-[#FBF0F6] text-[#AA4184]">
                    NEW
                  </span>
                </div>
              </a>
            </div>
          </div>

          <!-- Column 2: CLIENT RELATIONSHIPS -->
          <div>
            <h5 class="text-[11px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-4">
              CLIENT RELATIONSHIPS
            </h5>
            <div class="space-y-3.5">
              <a 
                v-for="(item, i) in featuresData.clients" 
                :key="i" 
                :href="item.href"
                class="group flex items-center gap-3 text-left transition-colors p-1 -mx-1 rounded-lg hover:bg-[#FBF0F6]"
              >
                <div class="w-5 h-5 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-4 h-4 stroke-[1.6]" />
                </div>
                <span class="text-[13.5px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors">
                  {{ item.title }}
                </span>
              </a>
            </div>
          </div>

          <!-- Column 3: MARKETING & AUTOMATION -->
          <div>
            <h5 class="text-[11px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-4">
              MARKETING & AUTOMATION
            </h5>
            <div class="space-y-3.5">
              <a 
                v-for="(item, i) in featuresData.marketing" 
                :key="i" 
                :href="item.href"
                class="group flex items-center gap-3 text-left transition-colors p-1 -mx-1 rounded-lg hover:bg-[#FBF0F6]"
              >
                <div class="w-5 h-5 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-4 h-4 stroke-[1.6]" />
                </div>
                <span class="text-[13.5px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors">
                  {{ item.title }}
                </span>
              </a>
            </div>
          </div>

          <!-- Column 4: MANAGEMENT -->
          <div>
            <h5 class="text-[11px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-4">
              MANAGEMENT
            </h5>
            <div class="space-y-3.5">
              <a 
                v-for="(item, i) in featuresData.management" 
                :key="i" 
                :href="item.href"
                class="group flex items-center gap-3 text-left transition-colors p-1 -mx-1 rounded-lg hover:bg-[#FBF0F6]"
              >
                <div class="w-5 h-5 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-4 h-4 stroke-[1.6]" />
                </div>
                <span class="text-[13.5px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors">
                  {{ item.title }}
                </span>
              </a>
            </div>
          </div>

        </div>

        <!-- ================= 3. SOLUTIONS (EXACT MATCH TO USER'S UPLOADED SCREENSHOT) ================= -->
        <div v-else-if="category === 'solutions'" class="grid grid-cols-3 gap-10">
          
          <!-- Column 1: HAIR & BEAUTY (4 Exact Items from Screenshot) -->
          <div>
            <h5 class="text-[12px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-5">
              HAIR & BEAUTY
            </h5>
            <div class="space-y-4">
              <router-link 
                v-for="(item, i) in exactSolutions.hairBeauty" 
                :key="i" 
                :to="item.to"
                @click="$emit('close')"
                class="group flex items-center gap-3.5 text-left transition-colors p-1.5 -mx-1.5 rounded-xl hover:bg-[#FBF0F6]"
              >
                <div class="w-6 h-6 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-5 h-5 stroke-[1.5]" />
                </div>
                <span class="text-[14.5px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors">
                  {{ item.title }}
                </span>
              </router-link>
            </div>
          </div>

          <!-- Column 2: SPA & WELLNESS (4 Exact Items from Screenshot) -->
          <div>
            <h5 class="text-[12px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-5">
              SPA & WELLNESS
            </h5>
            <div class="space-y-4">
              <router-link 
                v-for="(item, i) in exactSolutions.spaWellness" 
                :key="i" 
                :to="item.to"
                @click="$emit('close')"
                class="group flex items-center gap-3.5 text-left transition-colors p-1.5 -mx-1.5 rounded-xl hover:bg-[#FBF0F6]"
              >
                <div class="w-6 h-6 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-5 h-5 stroke-[1.5]" />
                </div>
                <span class="text-[14.5px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors">
                  {{ item.title }}
                </span>
              </router-link>
            </div>
          </div>

          <!-- Column 3: CLINICS & SPECIALTY (4 Exact Items from Screenshot) -->
          <div>
            <h5 class="text-[12px] font-extrabold uppercase tracking-wider text-[#8E8291] mb-5">
              CLINICS & SPECIALTY
            </h5>
            <div class="space-y-4">
              <router-link 
                v-for="(item, i) in exactSolutions.clinicsSpecialty" 
                :key="i" 
                :to="item.to"
                @click="$emit('close')"
                class="group flex items-center gap-3.5 text-left transition-colors p-1.5 -mx-1.5 rounded-xl hover:bg-[#FBF0F6]"
              >
                <div class="w-6 h-6 flex items-center justify-center text-[#AA4184] group-hover:text-[#AA4184] transition-colors shrink-0">
                  <component :is="item.icon" class="w-5 h-5 stroke-[1.5]" />
                </div>
                <span class="text-[14.5px] font-medium text-[#1C151D] group-hover:text-[#AA4184] transition-colors">
                  {{ item.title }}
                </span>
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';
import { 
  // Why Us icons
  CheckSquare, FileSpreadsheet, Armchair, Sparkles, Settings,
  FileEdit, BookMarked, Trophy,
  
  // Features icons
  Calendar, MousePointerClick, Calculator, HandCoins, Wallet,
  UserCheck, CreditCard, Award, FileText, Gift,
  Megaphone, ShoppingCart, RefreshCw,
  ClipboardList, Users, PieChart, Network, Smartphone,

  // Solutions exact screenshot icons
  Scissors, User, HeartHandshake, Gem,
  Flower2, Waves, Sun, Stethoscope,
  Smile, ShieldAlert, Store, Dog
} from 'lucide-vue-next';

const props = defineProps({
  category: {
    type: String,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['keep-open', 'close']);

const pointerPosition = computed(() => {
  switch (props.category) {
    case 'why-us':
      return '18%';
    case 'features':
      return '42%';
    case 'solutions':
      return '64%';
    default:
      return '50%';
  }
});

const menuWidthClass = computed(() => {
  switch (props.category) {
    case 'features':
      return 'w-[1060px] max-w-[95vw]';
    case 'why-us':
      return 'w-[840px] max-w-[92vw]';
    case 'solutions':
    default:
      return 'w-[890px] max-w-[93vw]';
  }
});

/* Exact Data from Image 1: Why Salonist */
const whyUsData = {
  company: [
    { title: 'Why Choose Salonist?', icon: CheckSquare, href: '#why-choose-us' },
    { title: 'Compare Salonist', icon: FileSpreadsheet, href: '#faq' },
  ],
  guides: [
    { title: 'Salon Management Guide', icon: Armchair, href: '#blog' },
    { title: 'Spa Management Guide', icon: Sparkles, href: '#blog' },
    { title: 'Salon Automation', icon: Settings, href: '#blog' },
  ],
  resources: [
    { title: 'Blog', icon: FileEdit, href: '#blog' },
    { title: 'E-Book', icon: BookMarked, href: '#blog' },
    { title: 'Salon Success', icon: Trophy, href: '#testimonials' },
  ]
};

/* Exact Data from Image 2: Features */
const featuresData = {
  scheduling: [
    { title: 'Appointment Management', icon: Calendar, href: '/features/appointment' },
    { title: 'Online Booking', icon: MousePointerClick, href: '/features/appointment' },
    { title: 'Point of Sale', icon: Calculator, href: '#features' },
    { title: 'SalonistPay', icon: HandCoins, href: '#features' },
    { title: 'Digital Ewallet', icon: Wallet, isNew: true, href: '#features' },
  ],
  clients: [
    { title: 'Customer Management', icon: UserCheck, href: '#features' },
    { title: 'Membership Program', icon: CreditCard, href: '#features' },
    { title: 'Reward / Loyalty System', icon: Award, href: '#features' },
    { title: 'Forms', icon: FileText, href: '#features' },
    { title: 'Gift Cards', icon: Gift, href: '#features' },
  ],
  marketing: [
    { title: 'Marketing Automation', icon: Megaphone, href: '#features' },
    { title: 'Online Store', icon: ShoppingCart, href: '#features' },
    { title: 'Integrations', icon: RefreshCw, href: '#features' },
  ],
  management: [
    { title: 'Inventory Management', icon: ClipboardList, href: '#features' },
    { title: 'Employee Management', icon: Users, href: '#features' },
    { title: 'Analytics Services', icon: PieChart, href: '#features' },
    { title: 'Locations/Branch Management', icon: Network, href: '#features' },
    { title: 'Customize Mobile App', icon: Smartphone, href: '#features' },
  ]
};

/* ================= EXACT 12 ITEMS FROM USER'S SCREENSHOT ================= */
const exactSolutions = {
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
    { title: 'Salon Booth Renter Software', icon: Store, to: '/solutions/salon-booth-rental' },
    { title: 'Pet Grooming Software', icon: Dog, to: '/solutions/pet-grooming' },
  ]
};
</script>
