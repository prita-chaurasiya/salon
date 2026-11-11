<template>
  <section class="py-24 bg-[#FCFBFD] border-b border-[#F0E6EC] relative overflow-hidden">
    <!-- Ambient luxury background glow matching DINGG -->
    <div class="absolute -top-32 right-1/4 w-[500px] h-[300px] bg-gradient-to-br from-[#AA4184]/8 to-[#923470]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] font-extrabold text-xs uppercase tracking-wider border border-[#F5DDEB] mb-4 shadow-xs">
          <span class="w-2 h-2 rounded-full bg-[#AA4184] animate-pulse"></span>
          <span>The B2M2 Salon Operating System</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C151D] tracking-tight leading-[1.15]">
          Fast, No-Friction <br />
          <span class="text-[#AA4184]">Salon Booking & Management</span>
        </h2>
        <p class="mt-4 text-base sm:text-lg text-[#5C525E] leading-relaxed">
          Inspired by DINGG's proven <strong>Book • Bill • Manage • Market</strong> framework. Built specifically to eliminate reception chaos, eliminate phone tag, and elevate chair yield.
        </p>
      </div>

      <!-- 4 Pillars Grid with Clean Luxury Photography & Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        
        <!-- Pillar 1: BOOK -->
        <div class="rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xs hover:border-[#AA4184] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="rounded-2xl overflow-hidden aspect-[16/11] bg-neutral-900 border border-[#F0E6EC] mb-5 relative">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80" 
                alt="24/7 Online Booking" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase text-[#AA4184] border border-[#F0E6EC]">
                01 • Book
              </span>
            </div>

            <h3 class="text-lg font-black text-[#1C151D] mb-2 group-hover:text-[#AA4184] transition-colors">
              Smart 24/7 Online Booking
            </h3>
            <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed mb-4">
              Dedicated salon booking link for Instagram, Google Reserve, and WhatsApp. Centralized multi-staff calendar prevents double bookings and auto-sends SMS reminders.
            </p>
          </div>

          <div class="pt-4 border-t border-[#F0E6EC] space-y-1.5 text-xs text-[#1C151D] font-medium">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Instagram & WhatsApp 1-tap booking</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Automated WhatsApp reminder alerts</span>
            </div>
          </div>
        </div>

        <!-- Pillar 2: BILL -->
        <div class="rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xs hover:border-[#AA4184] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="rounded-2xl overflow-hidden aspect-[16/11] bg-neutral-900 border border-[#F0E6EC] mb-5 relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80" 
                alt="Fast Salon POS" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase text-[#AA4184] border border-[#F0E6EC]">
                02 • Bill
              </span>
            </div>

            <h3 class="text-lg font-black text-[#1C151D] mb-2 group-hover:text-[#AA4184] transition-colors">
              Fast POS & WhatsApp Invoices
            </h3>
            <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed mb-4">
              Ring up service packages, retail shampoos, and tips in under 15 seconds. Support multi-mode tenders, GST calculations, and paperless WhatsApp receipts.
            </p>
          </div>

          <div class="pt-4 border-t border-[#F0E6EC] space-y-1.5 text-xs text-[#1C151D] font-medium">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Direct WhatsApp digital receipts</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Split tender, packages & gift cards</span>
            </div>
          </div>
        </div>

        <!-- Pillar 3: MANAGE -->
        <div class="rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xs hover:border-[#AA4184] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="rounded-2xl overflow-hidden aspect-[16/11] bg-neutral-900 border border-[#F0E6EC] mb-5 relative">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" 
                alt="Stylist Staff & Inventory" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase text-[#AA4184] border border-[#F0E6EC]">
                03 • Manage
              </span>
            </div>

            <h3 class="text-lg font-black text-[#1C151D] mb-2 group-hover:text-[#AA4184] transition-colors">
              Staff Commissions & Stock
            </h3>
            <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed mb-4">
              Eliminate month-end commission disputes with automated calculations per stylist. Track backbar color tubes by the gram and retail stock with barcode scanners.
            </p>
          </div>

          <div class="pt-4 border-t border-[#F0E6EC] space-y-1.5 text-xs text-[#1C151D] font-medium">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Real-time stylist commission ledger</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Backbar chemical consumption tracking</span>
            </div>
          </div>
        </div>

        <!-- Pillar 4: MARKET -->
        <div class="rounded-3xl bg-white border border-[#F0E6EC] p-6 shadow-xs hover:border-[#AA4184] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="rounded-2xl overflow-hidden aspect-[16/11] bg-neutral-900 border border-[#F0E6EC] mb-5 relative">
              <img 
                src="https://images.unsplash.com/photo-1512290900672-1f55b0a04975?auto=format&fit=crop&w=600&q=80" 
                alt="Automated Client Retention" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase text-[#AA4184] border border-[#F0E6EC]">
                04 • Market
              </span>
            </div>

            <h3 class="text-lg font-black text-[#1C151D] mb-2 group-hover:text-[#AA4184] transition-colors">
              Feedback & Client Retention
            </h3>
            <p class="text-xs sm:text-sm text-[#5C525E] leading-relaxed mb-4">
              Capture post-visit client feedback loops instantly to protect Google reputation. Trigger automated birthday perks and 4-week haircut rebooking reminders.
            </p>
          </div>

          <div class="pt-4 border-t border-[#F0E6EC] space-y-1.5 text-xs text-[#1C151D] font-medium">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Private post-service feedback capture</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-[#AA4184] shrink-0" />
              <span>Win-back dormant clients automatically</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Quick Action Pill -->
      <div class="mt-14 text-center">
        <button 
          @click="$emit('start-trial')"
          class="px-8 py-4 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:from-[#2B2237] hover:to-[#7C3AED] text-white font-extrabold text-sm shadow-xl shadow-[#AA4184]/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Experience the B2M2 Salon OS (Free 7-Day Trial)</span>
          <span>→</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { CheckCircle2 } from 'lucide-vue-next';

defineEmits(['start-trial']);
</script>
