<template>
  <section class="py-24 bg-white border-b border-[#ECECEC]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        badge="Multi-Device Ecosystem"
        title="Flawless Across Every Screen"
        highlight="Laptop, Tablet & Smartphone."
        subtitle="Experience fluid synchronization across reception laptops, stylist iPad stations, and client self-service phones in real time."
        :center="true"
      />

      <!-- Tab selection -->
      <div class="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 uppercase whitespace-nowrap"
          :class="[
            activeTab === tab.id
              ? 'bg-[#111111] text-white shadow-md'
              : 'bg-[#F8F8F8] text-[#2B2B2B] hover:bg-neutral-200 border border-[#ECECEC]'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Device Showcase View -->
      <div class="relative rounded-3xl bg-[#F8F8F8] border border-[#ECECEC] p-6 sm:p-10 lg:p-14 overflow-hidden">
        
        <!-- Tab 1: Booking Screen -->
        <div v-if="activeTab === 'booking'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#C8A96A]">Seamless Online Guest Portal</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Convert Instagram & Google searches directly into paid chairs.
            </h3>
            <p class="text-sm text-[#2B2B2B]/80 leading-relaxed font-normal">
              Guests book from their phones in under 45 seconds with instant service customizers, preferred stylist selection, and automated Apple Pay deposits.
            </p>
            <div class="pt-4 border-t border-[#ECECEC] space-y-2">
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Zero login barriers for first-time bookers
              </div>
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Automated Google Maps Reserve integration
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 flex justify-center">
            <!-- Realistic Phone Mockup -->
            <div class="w-72 sm:w-80 rounded-[40px] bg-[#111111] p-3 shadow-2xl border-4 border-neutral-800">
              <div class="rounded-[32px] overflow-hidden bg-white p-5 text-xs text-[#111111] space-y-4">
                <div class="w-20 h-4 bg-neutral-900 mx-auto rounded-full mb-2"></div>
                <div class="flex items-center justify-between pb-2 border-b border-[#ECECEC]">
                  <span class="font-bold">Maison Aurelia</span>
                  <span class="text-[10px] text-[#C8A96A] font-semibold">Step 2 of 3</span>
                </div>
                <div class="space-y-2">
                  <p class="font-bold text-xs">Select Preferred Specialist</p>
                  <div class="p-2.5 rounded-xl border border-[#C8A96A] bg-[#C8A96A]/10 flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" class="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p class="font-bold text-[11px]">Jean-Luc (Master)</p>
                      <p class="text-[9px] text-[#2B2B2B]">Next Available: Today 3:30 PM</p>
                    </div>
                  </div>
                  <div class="p-2.5 rounded-xl border border-[#ECECEC] flex items-center gap-3 opacity-75">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" class="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p class="font-bold text-[11px]">Marcus (Artistic Lead)</p>
                      <p class="text-[9px] text-[#2B2B2B]">Next Available: Tomorrow 11:00 AM</p>
                    </div>
                  </div>
                </div>
                <div class="p-3 rounded-xl bg-[#F8F8F8] border border-[#ECECEC] text-[10px] space-y-1">
                  <div class="flex justify-between"><span>Balayage & Gloss</span><span class="font-bold">$280</span></div>
                  <div class="flex justify-between"><span>Deposit Due (20%)</span><span class="font-bold text-emerald-600">$56</span></div>
                </div>
                <button 
                  @click="$emit('open-booking-flow')"
                  class="w-full py-2.5 rounded-xl bg-[#111111] text-white text-[11px] font-bold hover:bg-[#C8A96A] hover:text-[#111111] transition-colors"
                >
                  Continue with Apple Pay (Try Interactive)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: POS Screen -->
        <div v-else-if="activeTab === 'pos'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#C8A96A]">Stylist Station Tablet Mode</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Equip your artists to add retail and book the next visit right in chair.
            </h3>
            <p class="text-sm text-[#2B2B2B]/80 leading-relaxed font-normal">
              Stylists love using their iPads to formulate color shades, upload portfolio photos, and add take-home shampoo bottles before the guest ever walks to the front desk.
            </p>
            <div class="pt-4 border-t border-[#ECECEC] space-y-2">
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Live formula library with exact gram measurements
              </div>
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Rebooking prompt boosts retention by 42%
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 flex justify-center">
            <!-- Tablet Simulation Mockup -->
            <div class="w-full max-w-lg rounded-2xl bg-[#111111] p-3 shadow-2xl border border-neutral-800">
              <div class="rounded-xl overflow-hidden bg-white p-5 text-xs text-[#111111] space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-[#ECECEC]">
                  <span class="font-bold text-sm">Chair Station #4 • Tablet Mode</span>
                  <span class="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">In Service</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div class="p-3 rounded-xl bg-[#F8F8F8] border border-[#ECECEC]">
                    <p class="font-bold text-xs mb-1">Color Bowl Log</p>
                    <p class="text-[10px] text-neutral-600">30g 7N + 15g 8GB + 45g 20Vol</p>
                    <span class="text-[9px] text-[#C8A96A] font-bold mt-1 inline-block">Saved to Guest Dossier</span>
                  </div>
                  <div class="p-3 rounded-xl bg-[#F8F8F8] border border-[#ECECEC]">
                    <p class="font-bold text-xs mb-1">Recommended Retail</p>
                    <p class="text-[10px] text-neutral-600">Pureology Hydrate Trio Added</p>
                    <span class="text-[9px] text-emerald-700 font-bold mt-1 inline-block">Commission +$14.20</span>
                  </div>
                </div>
                <div class="p-3 rounded-xl bg-neutral-900 text-white flex items-center justify-between">
                  <span class="text-xs">Rebook Next Touchup (6 Weeks)</span>
                  <button class="px-3 py-1 rounded bg-[#C8A96A] text-[#111111] font-bold text-xs">Lock Dec 12</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 3: CRM Screen -->
        <div v-else-if="activeTab === 'crm'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#C8A96A]">360° VIP Guest Dossiers</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Know your guest's beverage taste, scalp sensitivities & spending history.
            </h3>
            <p class="text-sm text-[#2B2B2B]/80 leading-relaxed font-normal">
              Deliver white-glove hospitality. Your team instantly sees whether a guest prefers sparkling water with lime, has a latex sensitivity, or hasn't rebooked in 60 days.
            </p>
            <div class="pt-4 border-t border-[#ECECEC] space-y-2">
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Total lifetime spending & average ticket analytics
              </div>
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Encrypted allergy and scalp diagnosis records
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 flex justify-center">
            <div class="w-full max-w-lg rounded-2xl bg-white border border-[#ECECEC] p-6 shadow-xl space-y-4 text-xs">
              <div class="flex items-center gap-4 pb-4 border-b border-[#ECECEC]">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" class="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 class="text-base font-bold text-[#111111]">Victoria Sterling</h4>
                  <p class="text-xs text-[#2B2B2B]/70">Member since 2022 • Top 1% Spender ($8,420 YTD)</p>
                </div>
                <span class="ml-auto px-2.5 py-1 rounded bg-[#C8A96A] text-[#111111] font-bold text-[10px]">DIAMOND VIP</span>
              </div>
              <div class="grid grid-cols-3 gap-3 text-center">
                <div class="p-2.5 rounded-lg bg-[#F8F8F8] border">
                  <p class="text-[10px] text-neutral-500">Visits</p>
                  <p class="font-bold text-sm">24 total</p>
                </div>
                <div class="p-2.5 rounded-lg bg-[#F8F8F8] border">
                  <p class="text-[10px] text-neutral-500">Avg Ticket</p>
                  <p class="font-bold text-sm">$350.80</p>
                </div>
                <div class="p-2.5 rounded-lg bg-[#F8F8F8] border">
                  <p class="text-[10px] text-neutral-500">Favorite Stylist</p>
                  <p class="font-bold text-sm">Jean-Luc</p>
                </div>
              </div>
              <div class="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px]">
                <strong>Hospitality Note:</strong> Prefers oat milk cappuccino. Highly sensitive to ammonia hair dyes; strictly use vegan bleach system.
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 4: Analytics Screen -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#C8A96A]">Executive Level BI</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Real-time P&L, chair yield, and automated multi-location rollups.
            </h3>
            <p class="text-sm text-[#2B2B2B]/80 leading-relaxed font-normal">
              Track exactly which chair generates the highest gross margin per hour. Monitor product sales conversion by stylist and forecast next month’s payroll liabilities.
            </p>
            <div class="pt-4 border-t border-[#ECECEC] space-y-2">
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Live comparison against historical revenue benchmarks
              </div>
              <div class="flex items-center gap-2 text-xs text-[#2B2B2B] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                Single-click accounting export for QuickBooks & Xero
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 flex justify-center">
            <div class="w-full max-w-lg rounded-2xl bg-white border border-[#ECECEC] p-6 shadow-xl space-y-4 text-xs">
              <div class="flex items-center justify-between pb-3 border-b border-[#ECECEC]">
                <span class="font-bold text-sm">Real-time Enterprise Yield</span>
                <span class="text-xs text-neutral-500">All Locations (Consolidated)</span>
              </div>
              <div class="p-4 rounded-xl bg-[#111111] text-white">
                <div class="flex justify-between items-baseline">
                  <span class="text-xs text-neutral-400">Monthly Net Revenue</span>
                  <span class="text-xs text-emerald-400 font-bold">+31.2% YoY</span>
                </div>
                <p class="text-3xl font-black text-white mt-1">$214,840.00</p>
                <div class="w-full bg-neutral-800 h-2 rounded-full mt-3 overflow-hidden">
                  <div class="bg-[#C8A96A] h-full w-[84%]"></div>
                </div>
                <p class="text-[10px] text-neutral-400 mt-1">84% toward monthly target ($255,000)</p>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div class="p-3 rounded-lg bg-[#F8F8F8] border">
                  <p class="text-[10px] text-neutral-500 uppercase">Avg Chair Hourly Yield</p>
                  <p class="font-bold text-base mt-1">$142 / hr</p>
                </div>
                <div class="p-3 rounded-lg bg-[#F8F8F8] border">
                  <p class="text-[10px] text-neutral-500 uppercase">Retail / Service Ratio</p>
                  <p class="font-bold text-base mt-1">26.8% (Elite Tier)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from './SectionTitle.vue';

defineEmits(['open-booking-flow']);

const activeTab = ref('booking');

const tabs = [
  { id: 'booking', name: 'Booking Portal' },
  { id: 'pos', name: 'In-Chair POS' },
  { id: 'crm', name: 'Guest CRM' },
  { id: 'analytics', name: 'Executive BI' },
];
</script>

