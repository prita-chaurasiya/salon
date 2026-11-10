<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
      
      <!-- Section 1: Image Left, Content Right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Visual Left (7 cols) -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <div class="relative p-4 rounded-3xl bg-[#F8F8F8] border border-[#ECECEC] shadow-xl group">
            <div class="rounded-2xl overflow-hidden border border-[#ECECEC] bg-white">
              <!-- Mock header inside preview -->
              <div class="p-4 bg-[#111111] text-white flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#C8A96A]"></span>
                  <span class="font-bold tracking-wide">Dynamic Chair Matrix • Fifth Ave</span>
                </div>
                <span class="text-[11px] text-[#C8A96A] font-semibold">Live Drag-and-Drop</span>
              </div>
              
              <!-- Content Mockup -->
              <div class="p-6 space-y-4">
                <div class="grid grid-cols-4 gap-3 text-xs font-semibold text-[#2B2B2B] pb-2 border-b border-[#ECECEC]">
                  <div>Master Stylist 1</div>
                  <div>Master Colorist 2</div>
                  <div>Lead Esthetician</div>
                  <div>Junior Stylist</div>
                </div>

                <div class="grid grid-cols-4 gap-3 min-h-[220px]">
                  <div class="space-y-2">
                    <div class="p-3 rounded-lg bg-neutral-900 text-white text-xs border-l-4 border-[#C8A96A]">
                      <p class="font-bold">Balayage Custom</p>
                      <p class="text-[10px] text-neutral-400">09:00 - 11:30 (VIP)</p>
                      <span class="mt-1 inline-block text-[9px] px-1 rounded bg-[#C8A96A] text-[#111111] font-bold">Confirmed</span>
                    </div>
                    <div class="p-3 rounded-lg bg-emerald-50 text-emerald-950 text-xs border-l-4 border-emerald-600">
                      <p class="font-bold">Wash & Sculpt</p>
                      <p class="text-[10px] text-emerald-800">11:45 - 12:45</p>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <div class="p-3 rounded-lg bg-[#F8F8F8] border text-[#111111] text-xs border-l-4 border-neutral-400">
                      <p class="font-bold">Root Touch-Up</p>
                      <p class="text-[10px] text-[#2B2B2B]/70">10:00 - 11:15</p>
                    </div>
                    <div class="p-3 rounded-lg bg-amber-50 text-amber-950 text-xs border-l-4 border-[#C8A96A]">
                      <p class="font-bold">Glossing Glaze</p>
                      <p class="text-[10px] text-amber-800">01:00 - 02:00</p>
                      <span class="mt-1 inline-block text-[9px] px-1 rounded bg-amber-200 text-amber-900 font-bold">Processing</span>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <div class="p-3 rounded-lg bg-blue-50 text-blue-950 text-xs border-l-4 border-blue-600">
                      <p class="font-bold">HydraFacial Deluxe</p>
                      <p class="text-[10px] text-blue-800">09:30 - 11:00</p>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <div class="p-3 rounded-lg bg-[#F8F8F8] border border-dashed border-neutral-300 text-neutral-400 text-xs flex items-center justify-center h-28">
                      <span>+ Open Slot (45m)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="absolute -bottom-4 -right-4 p-3 bg-white border border-[#ECECEC] rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Zero double-booking guarantee</span>
            </div>
          </div>
        </div>

        <!-- Content Right (5 cols) -->
        <div class="lg:col-span-5 order-1 lg:order-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#ECECEC] bg-[#F8F8F8] text-[#C8A96A]">
            <span>Calm & Precision Scheduling</span>
          </div>

          <h3 class="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
            The multi-chair calendar your team will genuinely adore.
          </h3>

          <p class="text-base text-[#2B2B2B]/80 font-normal leading-relaxed mb-6">
            Eliminate frantic front-desk scrambles. Aurum automatically splits multi-step treatments into active stylist work and chemical processing buffer times, dynamically assigning wash basins and chairs.
          </p>

          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-3 text-sm text-[#2B2B2B]">
              <div class="w-5 h-5 rounded-full bg-[#111111] text-[#C8A96A] flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
              <span><strong>Intelligent buffer automation:</strong> Free up stylist chairs while foils and toners process.</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-[#2B2B2B]">
              <div class="w-5 h-5 rounded-full bg-[#111111] text-[#C8A96A] flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
              <span><strong>Cross-location calendar view:</strong> Effortlessly see stylist availability across your entire salon group.</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-[#2B2B2B]">
              <div class="w-5 h-5 rounded-full bg-[#111111] text-[#C8A96A] flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
              <span><strong>Card-on-file no-show policy:</strong> Secure deposits seamlessly via Apple Pay before reservations confirm.</span>
            </li>
          </ul>

          <button class="px-6 py-3 rounded-xl bg-[#111111] text-white font-semibold text-xs hover:bg-[#C8A96A] hover:text-[#111111] transition-all flex items-center gap-2">
            <span>Explore Booking Matrix</span>
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Section 2: Content Left, Image Right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Content Left (5 cols) -->
        <div class="lg:col-span-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#ECECEC] bg-[#F8F8F8] text-[#C8A96A]">
            <span>Fast Checkout & POS</span>
          </div>

          <h3 class="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
            A checkout experience as refined as your guest’s blowout.
          </h3>

          <p class="text-base text-[#2B2B2B]/80 font-normal leading-relaxed mb-6">
            Say farewell to clumsy hardware and awkward tip prompts. Aurum’s sleek point-of-sale offers graceful split-checks, instantaneous retail barcode scanning, and transparent tip allocations.
          </p>

          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-3 text-sm text-[#2B2B2B]">
              <div class="w-5 h-5 rounded-full bg-[#111111] text-[#C8A96A] flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
              <span><strong>Discreet guest tipping screen:</strong> Elegant custom percentages without guilt or awkward pauses.</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-[#2B2B2B]">
              <div class="w-5 h-5 rounded-full bg-[#111111] text-[#C8A96A] flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
              <span><strong>Instant retail recommendation prompts:</strong> Front-desk staff see the exact products recommended during chair consultation.</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-[#2B2B2B]">
              <div class="w-5 h-5 rounded-full bg-[#111111] text-[#C8A96A] flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
              <span><strong>Omnichannel gift card redemption:</strong> Accepts stored balances, membership perks, and promo vouchers in 1 click.</span>
            </li>
          </ul>

          <button class="px-6 py-3 rounded-xl bg-[#111111] text-white font-semibold text-xs hover:bg-[#C8A96A] hover:text-[#111111] transition-all flex items-center gap-2">
            <span>Discover Checkout Terminal</span>
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Visual Right (7 cols) -->
        <div class="lg:col-span-7">
          <div class="relative p-4 rounded-3xl bg-[#F8F8F8] border border-[#ECECEC] shadow-xl">
            <div class="rounded-2xl overflow-hidden border border-[#ECECEC] bg-white p-6 space-y-6">
              
              <div class="flex items-center justify-between pb-4 border-b border-[#ECECEC]">
                <div>
                  <h4 class="font-bold text-base text-[#111111]">Register #1 • Main Reception</h4>
                  <p class="text-xs text-[#2B2B2B]/60">Guest: Madeleine Montgomery (Card on file • Visa ****4920)</p>
                </div>
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-[#C8A96A]/20 text-[#111111]">
                  VIP Platinum
                </span>
              </div>

              <!-- Cart Line Items -->
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 rounded-xl bg-[#F8F8F8] text-xs">
                  <div>
                    <p class="font-bold text-[#111111]">Signature Balayage & Cut</p>
                    <p class="text-[11px] text-[#2B2B2B]/70">Stylist: Jean-Luc Dupont (Master)</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-sm">$320.00</p>
                    <span class="text-[10px] text-neutral-400">Tax exempt</span>
                  </div>
                </div>

                <div class="flex items-center justify-between p-3 rounded-xl bg-[#F8F8F8] text-xs">
                  <div>
                    <p class="font-bold text-[#111111]">Kérastase Chronologiste Masque (200ml)</p>
                    <p class="text-[11px] text-[#2B2B2B]/70">Recommended by stylist • 15% VIP Perk applied</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-sm">$68.00</p>
                    <p class="text-[10px] line-through text-neutral-400">$80.00</p>
                  </div>
                </div>
              </div>

              <!-- Totals Breakdown -->
              <div class="pt-4 border-t border-[#ECECEC] space-y-2 text-xs">
                <div class="flex justify-between text-[#2B2B2B]">
                  <span>Subtotal</span>
                  <span class="font-semibold">$388.00</span>
                </div>
                <div class="flex justify-between text-[#2B2B2B]">
                  <span>Member Benefit Discount</span>
                  <span class="text-emerald-700 font-semibold">-$12.00</span>
                </div>
                <div class="flex justify-between text-[#2B2B2B]">
                  <span>Tip (Selected 20%)</span>
                  <span class="font-semibold">$64.00</span>
                </div>
                <div class="flex justify-between items-center pt-3 border-t border-[#ECECEC] text-base font-bold text-[#111111]">
                  <span>Total Settled</span>
                  <span class="text-xl text-[#111111]">$440.00</span>
                </div>
              </div>

              <!-- Payment Button -->
              <div class="grid grid-cols-2 gap-3 pt-2">
                <button class="py-3 rounded-xl border border-[#ECECEC] bg-white font-semibold text-xs text-[#111111] hover:bg-neutral-100">
                  Email Receipt & Rebook
                </button>
                <button class="py-3 rounded-xl bg-[#111111] text-white font-semibold text-xs hover:bg-[#C8A96A] hover:text-[#111111] transition-colors">
                  Charge Visa (One-Click)
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
</script>

