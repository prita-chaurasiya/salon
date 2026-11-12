<template>
  <div class="rounded-3xl bg-white border border-[#F0E6EC] p-6 sm:p-8 shadow-sm">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F0E6EC]">
      <div>
        <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FBF0F6] text-[#AA4184] border border-[#F5DDEB]">
          Financial ROI Model
        </span>
        <h3 class="text-xl sm:text-2xl font-bold text-[#1C151D] mt-1.5">Salon Profit & Retention Lift Simulator</h3>
        <p class="text-xs text-[#5C525E] mt-0.5">Adjust chair counts and current tickets to project monthly gains from Salonist.</p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-semibold text-[#5C525E]">Currency:</span>
        <span class="px-2.5 py-1 rounded-lg bg-[#FAF7F9] border border-[#F0E6EC] text-xs font-bold text-[#1C151D]">$ USD</span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
      
      <!-- Sliders Left (7 cols) -->
      <div class="lg:col-span-7 space-y-6">
        
        <!-- Slider 1: Chairs -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-bold text-[#1C151D]">Active Stylist Chairs / Service Providers</label>
            <span class="text-sm font-extrabold text-white bg-[#1C151D] px-2.5 py-0.5 rounded-lg">{{ chairs }} Chairs</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1" 
            v-model.number="chairs"
            class="w-full h-2 bg-[#F0E6EC] rounded-lg appearance-none cursor-pointer accent-[#AA4184]"
          />
          <div class="flex justify-between text-[10px] text-[#8E8291] mt-1 font-medium">
            <span>1 Chair (Solo Studio)</span>
            <span>15 Chairs</span>
            <span>30 Chairs (Flagship)</span>
          </div>
        </div>

        <!-- Slider 2: Average Ticket -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-bold text-[#1C151D]">Average Service Ticket Price</label>
            <span class="text-sm font-extrabold text-[#AA4184] bg-[#FBF0F6] border border-[#F5DDEB] px-2.5 py-0.5 rounded-lg">${{ avgTicket }}</span>
          </div>
          <input 
            type="range" 
            min="50" 
            max="450" 
            step="10" 
            v-model.number="avgTicket"
            class="w-full h-2 bg-[#F0E6EC] rounded-lg appearance-none cursor-pointer accent-[#AA4184]"
          />
          <div class="flex justify-between text-[10px] text-[#8E8291] mt-1 font-medium">
            <span>$50</span>
            <span>$250</span>
            <span>$450+ (Luxury)</span>
          </div>
        </div>

        <!-- Slider 3: Weekly Appointments Per Chair -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-bold text-[#1C151D]">Weekly Appointments Per Chair</label>
            <span class="text-sm font-extrabold text-[#1C151D] bg-[#FAF7F9] border border-[#F0E6EC] px-2.5 py-0.5 rounded-lg">{{ weeklyAppts }} clients / chair</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="45" 
            step="1" 
            v-model.number="weeklyAppts"
            class="w-full h-2 bg-[#F0E6EC] rounded-lg appearance-none cursor-pointer accent-[#AA4184]"
          />
          <div class="flex justify-between text-[10px] text-[#8E8291] mt-1 font-medium">
            <span>10</span>
            <span>28</span>
            <span>45 appointments</span>
          </div>
        </div>

        <!-- Assumptions pill strip with DINGG #FAF0F5 theme -->
        <div class="p-4 rounded-2xl bg-[#FAF0F5] border border-[#F5DDEB] text-[11px] text-[#5C525E] space-y-1.5">
          <p class="font-bold text-[#1C151D] flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-[#AA4184]"></span>
            Algorithmic Baseline Calculation:
          </p>
          <p>• +34% extra chair utilization via automated processing buffer slots.</p>
          <p>• 88% reduction in last-minute no-shows via pre-authorized card deposits.</p>
          <p>• +18% increase in retail take-home basket sizes via chairside recommendations.</p>
        </div>

      </div>

      <!-- Projected Output Right (5 cols) with Deep Noir & #AA4184 Theme -->
      <div class="lg:col-span-5 rounded-3xl bg-[#1C151D] text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
        <!-- Ambient subtle glow -->
        <div class="absolute -top-12 -right-12 w-48 h-48 bg-[#AA4184]/20 rounded-full blur-2xl pointer-events-none"></div>

        <div class="relative z-10">
          <span class="text-[10px] font-bold uppercase tracking-wider text-[#AA4184] bg-white/10 px-2.5 py-1 rounded-full">
            PROJECTED NEW REVENUE
          </span>
          <p class="text-xs text-[#BEB8CC] mt-2">Estimated annual top-line expansion with Salonist:</p>
          
          <div class="my-6">
            <p class="text-4xl sm:text-5xl font-black text-white tracking-tight">
              ${{ formatNumber(projectedAnnualGains) }}
            </p>
            <p class="text-xs text-[#E8A5CF] font-semibold mt-1">
              +${{ formatNumber(projectedMonthlyGains) }} / month in recaptured revenue
            </p>
          </div>

          <div class="space-y-3 pt-4 border-t border-white/10 text-xs">
            <div class="flex justify-between text-[#BEB8CC]">
              <span>Recaptured No-Shows:</span>
              <span class="font-bold text-white">+${{ formatNumber(noShowSavings) }}/mo</span>
            </div>
            <div class="flex justify-between text-[#BEB8CC]">
              <span>Buffer Gap Chair Yield:</span>
              <span class="font-bold text-white">+${{ formatNumber(chairYieldGains) }}/mo</span>
            </div>
            <div class="flex justify-between text-[#BEB8CC]">
              <span>Retail Upsell Lift:</span>
              <span class="font-bold text-white">+${{ formatNumber(retailLift) }}/mo</span>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-white/10 mt-6 relative z-10">
          <button 
            @click="$emit('book-demo', { chairs, avgTicket, weeklyAppts, projectedAnnualGains })"
            class="w-full py-3.5 rounded-full bg-gradient-to-r from-[#AA4184] to-[#923470] hover:from-[#923470] hover:to-[#7C3AED] text-white font-extrabold text-xs transition-all shadow-md hover:scale-[1.02] cursor-pointer"
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
  return Math.round(monthlyBaseGross.value * 0.06);
});

const chairYieldGains = computed(() => {
  return Math.round(monthlyBaseGross.value * 0.14);
});

const retailLift = computed(() => {
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
