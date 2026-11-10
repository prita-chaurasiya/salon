<template>
  <div class="relative w-full overflow-hidden rounded-[28px] bg-white border border-[#E8E8EC] p-6 sm:p-10 shadow-[0_20px_50px_rgba(18,18,20,0.06)]">
    
    <!-- Top Bar with Multi-Location Switcher and Date Controls -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E8EC]">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-[#121214] text-[#C5A46D] flex items-center justify-center font-bold text-base shadow-sm">
          A
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-lg font-bold text-[#121214]">Flagship Manhattan • 5th Ave</h3>
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F9F5EE] text-[#9E7844] border border-[#E6DFC5]">
              Live 6 Chairs
            </span>
          </div>
          <p class="text-xs text-[#4A4A52]">Saturday, Oct 24 • Today's Roster: 6 Master Specialists • 94.6% Booked</p>
        </div>
      </div>

      <div class="flex items-center gap-2.5">
        <!-- Filter pill buttons -->
        <button 
          v-for="view in viewModes" 
          :key="view"
          @click="activeView = view"
          class="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
          :class="activeView === view ? 'bg-[#121214] text-white' : 'bg-[#FAFAFB] text-[#4A4A52] hover:bg-neutral-200'"
        >
          {{ view }}
        </button>

        <button 
          @click="$emit('open-booking')"
          class="px-4 py-1.5 rounded-full bg-[#C5A46D] text-[#121214] font-bold text-xs hover:bg-[#D8BA84] transition-colors flex items-center gap-1.5 shadow-xs ml-2"
        >
          <span>+ New Walk-In</span>
        </button>
      </div>
    </div>

    <!-- Live Stylist Chair Utilization Timeline -->
    <div class="pt-6">
      
      <!-- Time Header Strip -->
      <div class="grid grid-cols-12 gap-2 pb-3 border-b border-[#E8E8EC] text-[11px] font-bold text-neutral-400 text-center">
        <div class="col-span-3 text-left pl-2">Specialist & Chair</div>
        <div class="col-span-9 grid grid-cols-6 text-center">
          <span>10:00 AM</span>
          <span>11:30 AM</span>
          <span>01:00 PM</span>
          <span>02:30 PM</span>
          <span>04:00 PM</span>
          <span>05:30 PM</span>
        </div>
      </div>

      <!-- Stylist Rows with Processing Buffer Slots -->
      <div class="divide-y divide-[#E8E8EC]">
        
        <div 
          v-for="chair in stylistChairs" 
          :key="chair.id"
          class="grid grid-cols-12 gap-2 py-3.5 items-center group hover:bg-[#FAFAFB] transition-colors rounded-xl px-2"
        >
          <!-- Stylist Info (Col 1-3) -->
          <div class="col-span-3 flex items-center gap-3">
            <img :src="chair.avatar" class="w-9 h-9 rounded-full object-cover border border-[#E8E8EC]" />
            <div>
              <p class="text-xs font-bold text-[#121214] flex items-center gap-1.5">
                {{ chair.name }}
                <span class="text-[9px] font-semibold text-[#9E7844]">({{ chair.chair }})</span>
              </p>
              <p class="text-[10px] text-neutral-500">{{ chair.specialty }} • {{ chair.todayYield }}</p>
            </div>
          </div>

          <!-- Schedule Timeline Slots (Col 4-12) -->
          <div class="col-span-9 grid grid-cols-6 gap-2 relative">
            
            <div 
              v-for="(slot, s) in chair.slots" 
              :key="s"
              class="relative rounded-lg p-2 text-[10px] transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
              :class="[
                slot.span ? `col-span-${slot.span}` : 'col-span-1',
                slot.status === 'processing' 
                  ? 'bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E]' 
                  : slot.status === 'booked'
                    ? 'bg-[#F9F5EE] border border-[#E6DFC5] text-[#7E5F33]'
                    : slot.status === 'in-chair'
                      ? 'bg-[#121214] text-white shadow-xs'
                      : 'bg-white border border-dashed border-neutral-300 text-neutral-400 hover:border-[#9E7844]'
              ]"
            >
              <div class="flex items-center justify-between">
                <span class="font-bold truncate">{{ slot.client }}</span>
                <span v-if="slot.badge" class="text-[8px] font-extrabold uppercase px-1 rounded" :class="slot.status === 'in-chair' ? 'bg-[#C5A46D] text-[#121214]' : 'bg-white text-[#9E7844]'">
                  {{ slot.badge }}
                </span>
              </div>
              
              <div class="flex justify-between items-center text-[9px] mt-1 opacity-85">
                <span>{{ slot.service }}</span>
                <span class="font-mono font-semibold">{{ slot.time }}</span>
              </div>

              <!-- Processing Buffer Bar Highlight -->
              <div v-if="slot.buffer" class="mt-1 pt-1 border-t border-current/20 flex items-center justify-between text-[8px] font-semibold">
                <span>Buffer Slot: Re-usable</span>
                <span class="font-bold">{{ slot.buffer }}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Real-time Metrics Bottom Strip -->
      <div class="mt-6 pt-5 border-t border-[#E8E8EC] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div class="p-3 rounded-xl bg-[#FAFAFB] border border-[#E8E8EC]">
          <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Chair Utilization</span>
          <p class="text-base font-extrabold text-[#121214] mt-0.5">94.6% (Peak High)</p>
          <span class="text-[10px] text-emerald-600 font-semibold">+8.2% vs last Saturday</span>
        </div>

        <div class="p-3 rounded-xl bg-[#FAFAFB] border border-[#E8E8EC]">
          <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Gross Day Velocity</span>
          <p class="text-base font-extrabold text-[#121214] mt-0.5">$6,480.00</p>
          <span class="text-[10px] text-[#9E7844] font-semibold">Avg Ticket: $248.00</span>
        </div>

        <div class="p-3 rounded-xl bg-[#FAFAFB] border border-[#E8E8EC]">
          <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Retail Ratio</span>
          <p class="text-base font-extrabold text-[#121214] mt-0.5">28.4% Take-Home</p>
          <span class="text-[10px] text-emerald-600 font-semibold">32 Bottles Dispatched</span>
        </div>

        <div class="p-3 rounded-xl bg-[#FAFAFB] border border-[#E8E8EC]">
          <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">No-Show Rate</span>
          <p class="text-base font-extrabold text-emerald-700 mt-0.5">0.0% Protected</p>
          <span class="text-[10px] text-neutral-500 font-medium">100% Pre-Auth Card Holds</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineEmits(['open-booking']);

const activeView = ref('Chair View');
const viewModes = ['Chair View', 'Specialist View', 'Room Matrix'];

const stylistChairs = [
  {
    id: 1,
    name: 'Jean-Luc Dupont',
    chair: 'Station 1',
    specialty: 'Master Balayage',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    todayYield: '$1,820 Today',
    slots: [
      { client: 'Claire F.', service: 'Bespoke Balayage', time: '10:00 AM', status: 'in-chair', badge: 'VIP Diamond', buffer: '30m Foil Turn' },
      { client: 'Victoria S.', service: 'Glossing & Glaze', time: '11:30 AM', status: 'processing', badge: 'Processing' },
      { client: 'Open Chair', service: 'Blowout Slot', time: '01:00 PM', status: 'open' },
      { client: 'Madeleine M.', service: 'Full Highlights', time: '02:30 PM', status: 'booked', badge: 'Confirmed' },
      { client: 'Sarah K.', service: 'Scalp Ritual', time: '04:00 PM', status: 'booked' },
      { client: 'Open Chair', service: 'Walk-in Ready', time: '05:30 PM', status: 'open' },
    ]
  },
  {
    id: 2,
    name: 'Aurelia Vance',
    chair: 'Station 2',
    specialty: 'Artistic Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    todayYield: '$2,140 Today',
    slots: [
      { client: 'Elena R.', service: 'Sculpt & Blowout', time: '10:00 AM', status: 'booked', badge: 'Confirmed' },
      { client: 'Chloe B.', service: 'Root Retouch', time: '11:30 AM', status: 'in-chair', badge: 'In Chair', buffer: '40m Color Lift' },
      { client: 'Sophia W.', service: 'Keratin Mask', time: '01:00 PM', status: 'booked' },
      { client: 'Camille L.', service: 'Bridal Trial', time: '02:30 PM', status: 'booked', badge: 'VIP' },
      { client: 'Open Chair', service: 'Buffer Open', time: '04:00 PM', status: 'open' },
      { client: 'Isabella G.', service: 'Signature Cut', time: '05:30 PM', status: 'booked' },
    ]
  },
  {
    id: 3,
    name: 'Marcus Sterling',
    chair: 'Station 3',
    specialty: 'Scissor Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    todayYield: '$1,350 Today',
    slots: [
      { client: 'Alexander T.', service: 'Fade & Beard', time: '10:00 AM', status: 'booked' },
      { client: 'Julian P.', service: 'Scissor Sculpt', time: '11:30 AM', status: 'booked' },
      { client: 'David K.', service: 'Hot Towel Cut', time: '01:00 PM', status: 'in-chair', badge: 'Active' },
      { client: 'Open Slot', service: 'Express Cut', time: '02:30 PM', status: 'open' },
      { client: 'Harrison V.', service: 'Texture Finish', time: '04:00 PM', status: 'booked' },
      { client: 'Lucas M.', service: 'Beard Trim', time: '05:30 PM', status: 'booked' },
    ]
  }
];
</script>

