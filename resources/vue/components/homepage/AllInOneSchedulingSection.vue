<template>
  <section class="py-24 bg-[#16141F] text-white relative overflow-hidden">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Headline & Subtitle -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18]">
          <span>All-in-One Salon Booking &</span> <br class="hidden sm:inline" />
          <span class="text-[#C4B5FD] font-extrabold">
            Scheduling Software
          </span>
        </h2>
        
        <p class="mt-5 text-base sm:text-[17px] text-[#BEB8CC] font-normal leading-relaxed">
          Salonist is salon booking software and salon scheduling software rolled into one. Clients book online 24/7 from your website, Instagram or the Salonist app, while you manage every appointment, staff calendar and time slot from one screen. Automatic reminders cut no-shows, and recurring and package bookings keep your regulars on schedule. It's salon online booking that works the way your day actually runs.
        </p>
      </div>

      <!-- Feature Columns: Cards with background #2B2237, border #2F2940 -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
        
        <div 
          v-for="(col, idx) in bookingPillars" 
          :key="idx"
          class="rounded-[24px] bg-[#2B2237] border border-[#2F2940] p-5 flex flex-col items-center text-center hover:border-[#7C3AED] hover:-translate-y-1 transition-all duration-200 group"
        >
          <!-- Accent Icon Badge -->
          <div class="w-14 h-14 rounded-full bg-[#16141F] border border-[#2F2940] flex items-center justify-center text-[#7C3AED] mb-4 shadow-sm group-hover:scale-105 group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
            <component :is="col.icon" class="w-6 h-6 stroke-[2]" />
          </div>

          <!-- Title -->
          <h4 class="text-sm sm:text-base font-bold text-white mb-3 tracking-tight">
            {{ col.title }}
          </h4>

          <!-- Sub pills under column -->
          <div class="w-full space-y-2 mt-auto">
            <div 
              v-for="(sub, s) in col.subItems" 
              :key="s"
              class="w-full py-2 px-3 rounded-full bg-[#16141F] text-[11.5px] font-semibold text-[#BEB8CC] border border-[#2F2940] hover:text-white hover:border-[#7C3AED] transition-colors"
            >
              {{ sub }}
            </div>
          </div>

        </div>

      </div>

      <!-- Explore More Button: Accent #7C3AED, Hover #6D28D9 -->
      <div class="mt-14 text-center">
        <router-link 
          to="/features/appointment"
          class="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm sm:text-base shadow-xl hover:scale-105 transition-all duration-200 group cursor-pointer"
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

