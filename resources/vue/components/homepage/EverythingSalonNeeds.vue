<template>
  <section class="py-20 md:py-28 bg-[#F8F9FE] border-b border-[#E8EAF2]" id="features">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Headline & Subtitle matching Screenshot 3 -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#140B28] tracking-tight leading-[1.15]">
          Everything Your Salon Needs in <br class="hidden sm:inline" />
          <span class="text-salon-gradient">One Salon Software</span>
        </h2>
        
        <p class="mt-4 text-base sm:text-[17px] text-[#484357] font-normal leading-relaxed">
          From the first booking to the repeat visit, Salonist covers every part of running a salon or spa. No juggling apps, spreadsheets or paper diaries.
        </p>
      </div>

      <!-- 6 Big White Feature Cards with Centered Top Circle Icons matching Screenshot 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div 
          v-for="(card, i) in featureCards" 
          :key="i"
          class="relative p-8 rounded-[24px] bg-white border border-[#E8EAF2] hover:border-[#681FA8]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Centered Top Circle Badge with Icon -->
            <div class="w-14 h-14 rounded-full bg-[#FAF5EE] border border-[#E8EAF2] flex items-center justify-center text-[#681FA8] mx-auto mb-6 group-hover:bg-[#12072B] group-hover:text-white transition-colors duration-300 shadow-xs">
              <component :is="card.icon" class="w-6 h-6 stroke-[1.8]" />
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-[#140B28] text-center mb-4 tracking-tight group-hover:text-[#681FA8] transition-colors">
              {{ card.title }}
            </h3>

            <!-- Body Description exactly from Screenshot 3 -->
            <p class="text-sm leading-relaxed text-[#484357] text-center font-normal">
              {{ card.desc }}
            </p>
          </div>

          <!-- Bottom micro-link -->
          <div class="pt-6 mt-6 border-t border-[#F0F2F8] text-center">
            <span class="text-xs font-bold text-[#681FA8] group-hover:underline inline-flex items-center gap-1">
              <span>Learn more about {{ card.title.split('&')[0].trim() }}</span>
              <span>→</span>
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  Calendar, CreditCard, Package, 
  Megaphone, Users, Award 
} from 'lucide-vue-next';

/* Exact 6 Feature Cards from user Screenshot 3 */
const featureCards = [
  {
    title: 'Appointments & Online Booking',
    desc: 'Take bookings online any time, block off breaks, and set up recurring, package and membership appointments. Salon appointment software that fills your calendar without the back-and-forth of phone tag.',
    icon: Calendar
  },
  {
    title: 'Point of Sale',
    desc: 'Check clients out in seconds with integrated salon POS software — card, contactless and Stripe terminals, with bulk checkout and full payment security. Every sale updates your reports and stock automatically.',
    icon: CreditCard
  },
  {
    title: 'Inventory',
    desc: 'Track product stock across every location with centralised inventory, low-quantity alerts and transfer tools, so you never run out mid-service or over-order.',
    icon: Package
  },
  {
    title: 'Marketing & Loyalty',
    desc: 'Grow repeat business with built-in salon marketing — email and SMS campaigns, coupons, gift cards, loyalty points and review requests, all from the same dashboard.',
    icon: Megaphone
  },
  {
    title: 'Staff & Payroll',
    desc: 'Manage staff schedules, commissions, payroll and role permissions in one place, with KPI reporting so you can see exactly how each team member is performing.',
    icon: Users
  },
  {
    title: 'Membership & Subscriptions',
    desc: 'Sell monthly and annual plans from your booking page, automate renewals, and turn loyal clients into confirmed recurring revenue with one platform.',
    icon: Award
  }
];
</script>

