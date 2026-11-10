<template>
  <div class="rounded-3xl bg-white border border-[#ECECEC] p-6 sm:p-8 shadow-sm">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#ECECEC]">
      <div>
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#C8A96A]/20 text-[#111111]">
          Financial ROI Model
        </span>
        <h3 class="text-xl sm:text-2xl font-bold text-[#111111] mt-1">Salon Profit & Retention Lift Simulator</h3>
        <p class="text-xs text-[#2B2B2B]/70 mt-0.5">Adjust chair counts and current tickets to project monthly gains from Aurum OS.</p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-semibold text-[#2B2B2B]">Currency:</span>
        <span class="px-2.5 py-1 rounded-lg bg-[#F8F8F8] border border-[#ECECEC] text-xs font-bold text-[#111111]">$ USD</span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
      
      <!-- Sliders Left (7 cols) -->
      <div class="lg:col-span-7 space-y-6">
        
        <!-- Slider 1: Chairs -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-bold text-[#111111]">Active Stylist Chairs / Service Providers</label>
            <span class="text-sm font-extrabold text-[#C8A96A] bg-[#111111] px-2.5 py-0.5 rounded-lg">{{ chairs }} Chairs</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1" 
            v-model.number="chairs"
            class="w-full h-2 bg-[#ECECEC] rounded-lg appearance-none cursor-pointer accent-[#C8A96A]"
          />
          <div class="flex justify-between text-[10px] text-neutral-400 mt-1">
            <span>1 Chair (Solo Studio)</span>
            <span>15 Chairs</span>
            <span>30 Chairs (Flagship)</span>
          </div>
        </div>

        <!-- Slider 2: Average Ticket -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-bold text-[#111111]">Average Service Ticket Price</label>
            <span class="text-sm font-extrabold text-[#111111] bg-[#F8F8F8] border border-[#ECECEC] px-2.5 py-0.5 rounded-lg">${{ avgTicket }}</span>
          </div>
          <input 
            type="range" 
            min="50" 
            max="450" 
            step="10" 
            v-model.number="avgTicket"
            class="w-full h-2 bg-[#ECECEC] rounded-lg appearance-none cursor-pointer accent-[#C8A96A]"
          />
          <div class="flex justify-between text-[10px] text-neutral-400 mt-1">
            <span>$50</span>
            <span>$250</span>
            <span>$450+ (Luxury)</span>
          </div>
        </div>

        <!-- Slider 3: Weekly Appointments Per Chair -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-bold text-[#111111]">Weekly Appointments Per Chair</label>
            <span class="text-sm font-extrabold text-[#111111] bg-[#F8F8F8] border border-[#ECECEC] px-2.5 py-0.5 rounded-lg">{{ weeklyAppts }} clients / chair</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="45" 
            step="1" 
            v-model.number="weeklyAppts"
            class="w-full h-2 bg-[#ECECEC] rounded-lg appearance-none cursor-pointer accent-[#C8A96A]"
          />
          <div class="flex justify-between text-[10px] text-neutral-400 mt-1">
            <span>10</span>
            <span>28</span>
            <span>45 appointments</span>
          </div>
        </div>

        <!-- Assumptions pill strip -->
        <div class="p-4 rounded-xl bg-[#F8F8F8] border border-[#ECECEC] text-[11px] text-[#2B2B2B]/75 space-y-1">
          <p class="font-bold text-[#111111]">Algorithmic Baseline Calculation:</p>
          <p>• +34% extra chair utilization via automated processing buffer slots.</p>
          <p>• 88% reduction in last-minute no-shows via pre-authorized card deposits.</p>
          <p>• +18% increase in retail take-home basket sizes via chairside recommendations.</p>
        </div>

      </div>

      <!-- Projected Output Right (5 cols) -->
      <div class="lg:col-span-5 rounded-2xl bg-[#111111] text-white p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-[#C8A96A]">Projected New Revenue</span>
          <p class="text-xs text-neutral-400 mt-1">Estimated annual top-line expansion with Aurum:</p>
          
          <div class="my-6">
            <p class="text-4xl sm:text-5xl font-black text-white tracking-tight">
              ${{ formatNumber(projectedAnnualGains) }}
            </p>
            <p class="text-xs text-[#C8A96A] font-semibold mt-1">
              +${{ formatNumber(projectedMonthlyGains) }} / month in recaptured revenue
            </p>
          </div>

          <div class="space-y-3 pt-4 border-t border-neutral-800 text-xs">
            <div class="flex justify-between text-neutral-300">
              <span>Recaptured No-Shows:</span>
              <span class="font-bold text-white">+${{ formatNumber(noShowSavings) }}/mo</span>
            </div>
            <div class="flex justify-between text-neutral-300">
              <span>Buffer Gap Chair Yield:</span>
              <span class="font-bold text-white">+${{ formatNumber(chairYieldGains) }}/mo</span>
            </div>
            <div class="flex justify-between text-neutral-300">
              <span>Retail Upsell Lift:</span>
              <span class="font-bold text-white">+${{ formatNumber(retailLift) }}/mo</span>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-neutral-800 mt-6">
          <button 
            @click="$emit('book-demo', { chairs, avgTicket, weeklyAppts, projectedAnnualGains })"
            class="w-full py-3.5 rounded-xl bg-[#C8A96A] text-[#111111] font-bold text-xs hover:bg-white transition-colors"
          >
            Review Custom Financial Breakdown →
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

defineEmits(['book-demo']);

const chairs = ref(6);
const avgTicket = ref(175);
const weeklyAppts = ref(22);

const monthlyBaseGross = computed(() => {
  return chairs.value * weeklyAppts.value * avgTicket.value * 4.33;
});

const noShowSavings = computed(() => {
  // Recapturing ~6% lost no-show volume
  return Math.round(monthlyBaseGross.value * 0.06);
});

const chairYieldGains = computed(() => {
  // ~14% extra throughput with buffer gap scheduling
  return Math.round(monthlyBaseGross.value * 0.14);
});

const retailLift = computed(() => {
  // ~8% additional retail basket conversion
  return Math.round(monthlyBaseGross.value * 0.08);
});

const projectedMonthlyGains = computed(() => {
  return noShowSavings.value + chairYieldGains.value + retailLift.value;
});

const projectedAnnualGains = computed(() => {
  return projectedMonthlyGains.value * 12;
});

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
</script>

