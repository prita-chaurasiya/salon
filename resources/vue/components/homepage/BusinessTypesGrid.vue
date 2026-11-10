<template>
  <section class="py-20 md:py-28 bg-white border-b border-[#E8EAF2]" id="industries">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Headline & Subtitle matching Screenshot 2 -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#140B28] tracking-tight leading-[1.15]">
          Beauty Salon Software for Every <br class="hidden sm:inline" />
          <span class="text-salon-gradient">Kind of Business</span>
        </h2>
        
        <p class="mt-4 text-base sm:text-[17px] text-[#484357] font-normal leading-relaxed">
          From hair and nails to massage, skin and wellness, Salonist is beauty salon software and spa software trusted across the industry. Every feature — bookings, POS, memberships, marketing — adapts to how your business works, whether you're a solo stylist or a multi-location spa. One platform, built for the whole beauty and wellness world.
        </p>
      </div>

      <!-- 3-Column Pill Grid matching Screenshot 2 exactly -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <a 
          v-for="(item, idx) in businessTypes" 
          :key="idx"
          href="#pricing"
          class="group p-4 px-6 rounded-full bg-[#FAFAFB] border border-[#E8EAF2] hover:border-[#681FA8] hover:bg-[#F1ECF9] transition-all duration-200 flex items-center gap-4 shadow-2xs hover:shadow-sm cursor-pointer"
        >
          <!-- Icon -->
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-[#681FA8] group-hover:scale-110 transition-transform shrink-0">
            <component :is="item.icon" class="w-5 h-5 stroke-[1.8]" />
          </div>

          <!-- Title -->
          <span class="text-sm font-bold text-[#140B28] group-hover:text-[#681FA8] transition-colors">
            {{ item.name }}
          </span>

          <ArrowRight class="w-4 h-4 text-[#681FA8] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  User, Waves, Sparkles, Scissors, Gem, 
  Store, Smile, Flower2, Dog, ArrowRight 
} from 'lucide-vue-next';

/* Exact 11 items from user Screenshot 2 */
const businessTypes = [
  { name: 'Hair Salons Software', icon: User },
  { name: 'Massage Centers', icon: Waves },
  { name: 'Make Up Artist', icon: Sparkles },
  { name: 'Spa Center', icon: Flower2 },
  { name: 'Barber Shops', icon: Scissors },
  { name: 'Bridal Salon Software', icon: Sparkles },
  { name: 'Tattoo Artist Software', icon: Scissors },
  { name: 'Pet Grooming Software', icon: Dog },
  { name: 'Nail Salon Software', icon: Gem },
  { name: 'Aesthetic Skin Clinic Software', icon: Smile },
  { name: 'Salon Booth Renter Software', icon: Store },
];
</script>

