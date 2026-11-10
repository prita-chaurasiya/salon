<template>
  <section class="py-24 bg-[#FAF0F5] text-[#1C151D] relative overflow-hidden border-y border-[#F5DDEB]">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Headline & Subtitle matching User Reference Screenshot -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-serif italic text-[#AA4184] font-bold uppercase tracking-widest block mb-2">
          One platform
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C151D] tracking-tight leading-[1.18]">
          <span>All-in-One Salon Management</span> <br class="hidden sm:inline" />
          <span class="text-[#AA4184]">
            Software Built for Real Businesses
          </span>
        </h2>
        
        <p class="mt-5 text-base sm:text-[17px] text-[#5C525E] font-normal leading-relaxed">
          Salonist is not just another tool. It's a complete <strong>salon booking system</strong> created for real-world salon challenges. From online appointment scheduling to inventory tracking, from staff booking flexibility to customer loyalty programs — everything works together smoothly. No extra tools. No confusion.
        </p>
      </div>

      <!-- Feature Columns: Clean White Cards with border #F0E6EC -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
        
        <div 
          v-for="(col, idx) in bookingPillars" 
          :key="idx"
          class="rounded-[24px] bg-white border border-[#F0E6EC] p-5 flex flex-col items-center text-center shadow-xs hover:border-[#AA4184] hover:-translate-y-1 transition-all duration-200 group"
        >
          <!-- Accent Icon Badge with #AA4184 -->
          <div class="w-14 h-14 rounded-full bg-[#FBF0F6] border border-[#F5DDEB] flex items-center justify-center text-[#AA4184] mb-4 shadow-sm group-hover:scale-105 group-hover:bg-[#AA4184] group-hover:text-white transition-all">
            <component :is="col.icon" class="w-6 h-6 stroke-[2]" />
          </div>

          <!-- Title -->
          <h4 class="text-sm sm:text-base font-bold text-[#1C151D] mb-3 tracking-tight">
            {{ col.title }}
          </h4>

          <!-- Sub pills under column -->
          <div class="w-full space-y-2 mt-auto">
            <div 
              v-for="(sub, s) in col.subItems" 
              :key="s"
              class="w-full py-2 px-3 rounded-full bg-[#FAF7F9] text-[11.5px] font-semibold text-[#5C525E] border border-[#F0E6EC] hover:text-[#AA4184] hover:bg-[#FBF0F6] hover:border-[#F5DDEB] transition-colors"
            >
              {{ sub }}
            </div>
          </div>

        </div>

      </div>

      <!-- Explore More Button: Accent #AA4184, Hover #923470 -->
      <div class="mt-14 text-center">
        <router-link 
          to="/features/appointment"
          class="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#AA4184] hover:bg-[#923470] text-white font-bold text-sm sm:text-base shadow-xl hover:scale-105 transition-all duration-200 group cursor-pointer"
        >
          <span>Explore More</span>
          <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  Calendar, Package, Megaphone, 
  Users, CreditCard, ArrowRight
} from 'lucide-vue-next';

/* Exact columns and pill items matching user's screenshots 1 & 2 */
const bookingPillars = [
  {
    title: 'Appointment',
    icon: Calendar,
    subItems: [
      'Online Booking',
      'Slot Blockers',
      'Off Hours Booking',
      'Package Booking',
      'Membership Booking',
      'Recurring Booking'
    ]
  },
  {
    title: 'Inventory',
    icon: Package,
    subItems: [
      'Centralized Inventory',
      'Audits Reports',
      'Inhouse Inventory',
      'Transparency',
      'Transfer Inventory',
      'Quantity Alerts'
    ]
  },
  {
    title: 'Marketing',
    icon: Megaphone,
    subItems: [
      'Email Marketing',
      'Get More Reviews',
      'Coupons Management',
      'Gift Cards',
      'Loyalty System',
      'SMS Campaigns'
    ]
  },
  {
    title: 'Staff Payroll',
    icon: Users,
    subItems: [
      'Staff Commissions',
      'Payroll',
      'Staff Schedule',
      'KPI Reporting',
      'Notification',
      'Staff Role Assignments'
    ]
  },
  {
    title: 'Point Of Sale',
    icon: CreditCard,
    subItems: [
      'Manage Transactions',
      'Payment Gateway Integration',
      'Bulk Checkout',
      'Stripe Terminals',
      'Payment Reports',
      '100% Payment Security'
    ]
  }
];
</script>

