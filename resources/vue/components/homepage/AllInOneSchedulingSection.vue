<template>
  <section class="py-24 bg-gradient-to-b from-[#1E0A3C] via-[#2A0E4E] to-[#120624] text-white relative overflow-hidden">
    
    <!-- Atmospheric lighting glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.18)_0,transparent_65%)] pointer-events-none"></div>
    <div class="absolute top-10 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-orb-1"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none animate-orb-2"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Headline & Subtitle matching Screenshot 4 with clear readable contrast -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18]">
          <span class="text-white drop-shadow-sm">All-in-One Salon Booking &</span> <br class="hidden sm:inline" />
          <span class="bg-gradient-to-r from-white via-pink-200 to-[#EC4899] bg-clip-text text-transparent drop-shadow-sm font-extrabold">
            Scheduling Software
          </span>
        </h2>
        
        <p class="mt-5 text-base sm:text-[17px] text-purple-100/90 font-normal leading-relaxed">
          Salonist is salon booking software and salon scheduling software rolled into one. Clients book online 24/7 from your website, Instagram or the Salonist app, while you manage every appointment, staff calendar and time slot from one screen. Automatic reminders cut no-shows, and recurring and package bookings keep your regulars on schedule. It's salon online booking that works the way your day actually runs.
        </p>
      </div>

      <!-- Feature Columns with Vibrant Glowing 3D Glass Cards -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
        
        <div 
          v-for="(col, idx) in bookingPillars" 
          :key="idx"
          class="rounded-[24px] bg-white/[0.07] border border-white/15 p-5 flex flex-col items-center text-center backdrop-blur-md hover:bg-white/[0.12] hover:border-pink-400/40 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] group"
        >
          <!-- Vibrant Rose-Violet Circular Icon Badge -->
          <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7E22CE] to-[#EC4899] flex items-center justify-center text-white mb-4 shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform">
            <component :is="col.icon" class="w-6 h-6 stroke-[2]" />
          </div>

          <!-- Title -->
          <h4 class="text-sm sm:text-base font-extrabold text-white mb-3 tracking-tight">
            {{ col.title }}
          </h4>

          <!-- Sub pills under column with clean contrast -->
          <div class="w-full space-y-2 mt-auto">
            <div 
              v-for="(sub, s) in col.subItems" 
              :key="s"
              class="w-full py-2 px-3 rounded-full bg-white/10 text-[11.5px] font-semibold text-purple-100 border border-white/15 hover:bg-white/20 hover:text-white transition-colors"
            >
              {{ sub }}
            </div>
          </div>

        </div>

      </div>

      <!-- Explore More Button with 3D Vibrant Gradient -->
      <div class="mt-14 text-center">
        <router-link 
          to="/features/appointment"
          class="inline-flex items-center gap-2.5 px-9 py-4 rounded-full btn-3d-primary font-bold text-sm sm:text-base shadow-xl transition-all duration-300 group cursor-pointer"
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

