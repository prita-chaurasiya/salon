<template>
  <section class="py-24 bg-gradient-to-b from-[#18082A] via-[#2D0D42] to-[#140B28] text-white relative overflow-hidden">
    
    <!-- Atmospheric sunset lighting glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,116,0.18)_0,transparent_60%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Headline & Subtitle matching Screenshot 4 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
          All-in-One Salon Booking & <br class="hidden sm:inline" />
          <span class="bg-gradient-to-r from-white via-[#FCE7F3] to-[#E11D74] bg-clip-text text-transparent">
            Scheduling Software
          </span>
        </h2>
        
        <p class="mt-4 text-base sm:text-[17px] text-[#D8CFE5] font-normal leading-relaxed">
          Salonist is salon booking software and salon scheduling software rolled into one. Clients book online 24/7 from your website, Instagram or the Salonist app, while you manage every appointment, staff calendar and time slot from one screen. Automatic reminders cut no-shows, and recurring and package bookings keep your regulars on schedule. It's salon online booking that works the way your day actually runs.
        </p>
      </div>

      <!-- Feature Columns with Red/Coral Circular Badge Icons from Screenshot -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
        
        <div 
          v-for="(col, idx) in bookingPillars" 
          :key="idx"
          class="rounded-[24px] bg-white/[0.04] border border-white/10 p-4 sm:p-5 flex flex-col items-center text-center backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group"
        >
          <!-- Coral Red Circular Icon Badge -->
          <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-[#BE123C] to-[#FB7185] flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
            <component :is="col.icon" class="w-6 h-6 stroke-[2]" />
          </div>

          <!-- Title -->
          <h4 class="text-sm sm:text-base font-bold text-white mb-3">
            {{ col.title }}
          </h4>

          <!-- Sub pills under column matching screenshot pills exactly -->
          <div class="w-full space-y-2 mt-auto">
            <div 
              v-for="(sub, s) in col.subItems" 
              :key="s"
              class="w-full py-2 px-3 rounded-full bg-white/10 text-[11px] font-semibold text-[#FCE7F3] border border-white/10 hover:bg-white/20 transition-colors"
            >
              {{ sub }}
            </div>
          </div>

        </div>

      </div>

      <!-- Explore More Button with Vibrant Gradient linking to internal /features/appointment route -->
      <div class="mt-14 text-center">
        <router-link 
          to="/features/appointment"
          class="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#681FA8] via-[#E11D74] to-[#F97316] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#E11D74]/25 hover:shadow-2xl hover:shadow-[#E11D74]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
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

