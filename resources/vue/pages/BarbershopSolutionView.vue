<template>
  <div class="min-h-screen bg-[#FCFCFB] text-[#4B5563] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION (Screenshot 1 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column Content -->
          <div class="lg:col-span-7 space-y-6">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E293B] tracking-tight leading-[1.1]">
              Barbershop <span class="text-[#581C87]">Software</span>
            </h1>

            <p class="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              Running a busy barbershop takes more than sharp fades. Between walk-ins, booked clients, product sales and paying your barbers, the day fills up fast. Salonist is barbershop software that pulls all of it into one place — a barber booking app your clients actually use, appointment scheduling that keeps every chair full, and fast checkout that gets people paid and out the door. Set up in minutes, run your whole shop from your phone.
            </p>

            <!-- Buttons: Start Free 7-Day Trial & Book A 20-Min Demo -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                @click="trialOnboardingOpen = true"
                class="px-8 py-4 rounded-full bg-[#581C87] text-white font-extrabold text-sm hover:bg-[#7E22CE] transition-all duration-200 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Start Free 7-Day Trial</span>
                <span>→</span>
              </button>

              <button 
                @click="demoOpen = true"
                class="px-8 py-4 rounded-full border border-[#E2E8F0] bg-white text-[#1E293B] font-extrabold text-sm hover:border-[#581C87] hover:text-[#581C87] hover:bg-[#FAF5FF] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar class="w-4 h-4 text-[#581C87]" />
                <span>Book A 20-Min Demo</span>
              </button>
            </div>

            <div class="pt-2 text-xs text-[#6B7280] font-medium flex items-center gap-2 flex-wrap">
              <span>Free 7 days</span>
              <span>•</span>
              <span>Unlimited staff, one price</span>
              <span>•</span>
              <span>We move your data in</span>
            </div>
          </div>

          <!-- Right Column Visual Mockup (Barber cutting hair with floating chair cards) -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md">
              
              <!-- Barber Cutting Hair Image -->
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85" 
                  alt="Barbershop Haircut & Styling"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Floating Card 1: Today's Chairs (Top Right) -->
              <div class="absolute -top-6 -right-6 sm:-right-8 w-64 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-[#E2E8F0] text-xs space-y-2 z-20">
                <div class="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0]">
                  <span class="font-extrabold text-[#1E293B]">Today's Chairs</span>
                  <span class="text-[10px] text-[#6B7280]">Friday, 3:15 pm</span>
                </div>

                <div class="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF5FF]">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#EC4899]"></span>
                    <span class="font-bold text-[#1E293B] text-[11px]">Chair 1 — Marco</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-[#F5F3FF] text-[#581C87] text-[9px] font-bold">Walk-in</span>
                </div>

                <div class="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF5FF]">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#9333EA]"></span>
                    <span class="font-bold text-[#1E293B] text-[11px]">Chair 2 — Dre</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-[#F5F3FF] text-[#581C87] text-[9px] font-bold">Booked</span>
                </div>

                <div class="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF5FF]">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#581C87]"></span>
                    <span class="font-bold text-[#1E293B] text-[11px]">Chair 3 — Sam</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-[#F5F3FF] text-[#581C87] text-[9px] font-bold">Open</span>
                </div>
              </div>

              <!-- Floating Card 2: Book with Marco (Middle Left) -->
              <div class="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-[#E2E8F0] text-xs z-20">
                <p class="font-extrabold text-[#1E293B]">Book with Marco</p>
                <p class="text-[10px] text-[#6B7280] mb-2">Next slot 4:00 pm</p>
                <button class="w-full py-1.5 px-3 rounded-lg bg-[#581C87] text-white text-[10px] font-bold shadow-xs hover:bg-[#7E22CE] transition-colors">
                  Book now
                </button>
              </div>

              <!-- Floating Card 3: Checkout Total (Bottom Right) -->
              <div class="absolute -bottom-5 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-[#E2E8F0] text-xs z-20 w-48">
                <div class="flex justify-between text-[11px] text-[#4B5563]">
                  <span>Skin fade</span>
                  <span class="font-bold text-[#1E293B]">$35</span>
                </div>
                <div class="flex justify-between text-[11px] text-[#4B5563] mt-1">
                  <span>Beard trim</span>
                  <span class="font-bold text-[#1E293B]">$15</span>
                </div>
                <div class="flex justify-between text-xs font-black text-[#1E293B] border-t border-[#E2E8F0] pt-1.5 mt-1.5">
                  <span>Total</span>
                  <span class="text-[#581C87] font-extrabold">$50</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 2. TRUSTED LOGOS STRIP ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <p class="text-center text-sm font-extrabold text-[#1E293B] uppercase tracking-wider mb-6">
          Trusted Growth Software for Barbershops
        </p>
        <TrustedBrandsStrip />
      </section>

      <!-- ================= 3. WHAT STOPS BARBERSHOPS FROM GROWING? ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] tracking-tight">
            What Stops Barbershops from Growing?
          </h2>
        </div>

        <!-- 6 Bottleneck Cards from user's screenshots -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <!-- Card 1 -->
          <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#EC4899] transition-all duration-300">
            <div class="w-14 h-14 rounded-full bg-[#F5F3FF] border border-[#E2E8F0] flex items-center justify-center text-[#EC4899] mb-6 shadow-xs">
              <Calendar class="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              Messy Bookings and Walk-Ins
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              Without smart scheduling, chairs remain empty, wait times increase, and clients miss the right barber.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#EC4899] transition-all duration-300">
            <div class="w-14 h-14 rounded-full bg-[#F5F3FF] border border-[#E2E8F0] flex items-center justify-center text-[#EC4899] mb-6 shadow-xs">
              <RefreshCw class="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              Lost Product Sales
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              No product advice during cuts and no quick checkout mean fewer sales and missed income.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#EC4899] transition-all duration-300">
            <div class="w-14 h-14 rounded-full bg-[#F5F3FF] border border-[#E2E8F0] flex items-center justify-center text-[#EC4899] mb-6 shadow-xs">
              <Users class="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              Client Loyalty Problems
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              No reminders, weak rewards, and staff changes make clients stop coming back and hurt trust.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#EC4899] transition-all duration-300">
            <div class="w-14 h-14 rounded-full bg-[#F5F3FF] border border-[#E2E8F0] flex items-center justify-center text-[#EC4899] mb-6 shadow-xs">
              <Megaphone class="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              Hard to Grow with Multiple Shops
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              Without a unified system, barber shops face stock shortages and limited control over performance.
            </p>
          </div>

          <!-- Card 5 -->
          <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#EC4899] transition-all duration-300">
            <div class="w-14 h-14 rounded-full bg-[#F5F3FF] border border-[#E2E8F0] flex items-center justify-center text-[#EC4899] mb-6 shadow-xs">
              <UserMinus class="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              Clients Stop Returning
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              No follow-ups, poor rewards, and staff changes push clients to other barber shops.
            </p>
          </div>

          <!-- Card 6 -->
          <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#EC4899] transition-all duration-300">
            <div class="w-14 h-14 rounded-full bg-[#F5F3FF] border border-[#E2E8F0] flex items-center justify-center text-[#EC4899] mb-6 shadow-xs">
              <CreditCard class="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              Slow Checkout
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              Without a smart POS system for barbershops, payments take too long and frustrate clients.
            </p>
          </div>

        </div>
      </section>

      <!-- ================= 4. FEATURES OF SALONIST ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] tracking-tight">
            Features Of Salonist
          </h2>
          <p class="text-base sm:text-lg text-[#4B5563] mt-3">
            Salonist delivers beyond the basics to provide everything you need in a single package.
          </p>
        </div>

        <!-- Alternating Feature 1: Barber Booking App -->
        <div class="rounded-3xl bg-[#FAF5FF] border border-[#E2E8F0] p-8 sm:p-12 lg:p-16 mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Mockup: Barber Booking App Screen Preview with Tattooed Barber -->
            <div class="lg:col-span-5 relative">
              <div class="relative mx-auto max-w-sm">
                <!-- Barber Photo -->
                <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=85" 
                    alt="Tattooed Master Barber"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Floating Choose Your Barber Card -->
                <div class="absolute -top-6 -right-6 w-64 rounded-2xl bg-white p-4 shadow-lg border border-[#E2E8F0] text-xs z-10">
                  <p class="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-2">CHOOSE YOUR BARBER</p>
                  <div class="flex items-center justify-between mb-3">
                    <div class="text-center">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" class="w-8 h-8 rounded-full mx-auto ring-2 ring-[#581C87]" />
                      <span class="text-[9px] font-bold mt-1 block text-[#1E293B]">Marco</span>
                    </div>
                    <div class="text-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" class="w-8 h-8 rounded-full mx-auto" />
                      <span class="text-[9px] font-bold mt-1 block text-[#6B7280]">Dre</span>
                    </div>
                    <div class="text-center">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80" class="w-8 h-8 rounded-full mx-auto" />
                      <span class="text-[9px] font-bold mt-1 block text-[#6B7280]">Sam</span>
                    </div>
                  </div>

                  <div class="p-2 rounded-xl bg-[#FAF5FF] border border-[#E2E8F0] mb-2 flex justify-between items-center text-[10px]">
                    <span class="font-bold text-[#1E293B]">Skin Fade</span>
                    <span class="text-[#6B7280]">30 min • $35</span>
                  </div>

                  <div class="grid grid-cols-3 gap-1 text-[9px] font-mono text-center">
                    <span class="p-1 rounded bg-white border border-[#E2E8F0]">3:00</span>
                    <span class="p-1 rounded bg-[#581C87] text-white font-bold">3:30</span>
                    <span class="p-1 rounded bg-white border border-[#E2E8F0]">4:00</span>
                  </div>
                </div>

                <!-- Floating Channels Card (Bottom Left) -->
                <div class="absolute -bottom-4 -left-6 rounded-2xl bg-white p-3 shadow-lg border border-[#E2E8F0] text-xs z-10">
                  <p class="text-[9px] font-bold uppercase text-[#6B7280] mb-1">BOOK FROM</p>
                  <div class="space-y-1 text-[11px] font-semibold text-[#1E293B]">
                    <div class="flex items-center gap-1.5"><span>🌐</span> Website</div>
                    <div class="flex items-center gap-1.5"><span>📷</span> Instagram</div>
                    <div class="flex items-center gap-1.5"><span>📱</span> Phone App</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Content -->
            <div class="lg:col-span-7 space-y-5">
              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                Barber Booking App — Let Clients Book 24/7
              </h3>

              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Half your bookings happen when your shop is closed. With Salonist's barber booking app, clients pick their barber, choose a service and grab an open slot straight from your website, Instagram or their phone — no calls, no back-and-forth. Online booking for barbers means fewer no-shows too, with automatic reminders sent before every appointment. You stay behind the chair; the booking runs itself.
              </p>

              <!-- Exact Bullet Points from Screenshot 4 -->
              <div class="space-y-2.5 pt-2">
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Book a barber in seconds, 24/7</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Automatic SMS & email reminders</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Client picks their preferred barber</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Fewer no-shows, fuller calendar</span>
                </div>
              </div>

              <div class="pt-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-3.5 rounded-full bg-[#581C87] text-white font-bold text-xs hover:bg-[#7E22CE] transition-all duration-200 shadow-md"
                >
                  Get Barber Booking App →
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Alternating Feature 2: Smart POS & Quick Checkout -->
        <div class="rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-12 lg:p-16 mb-12 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                Point of Sale for Barbershops — Fast, Tap-to-Pay Checkout
              </h3>
              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Keep the line moving and chairs spinning. With Salonist’s integrated barbershop POS, ring up haircuts, beard oils, and styling pomades in seconds. Support contactless Apple Pay, split cash/card payments, and let clients add tips with a single tap on the screen.
              </p>
              <div class="space-y-2.5 pt-2">
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Split payments between cash, card, and digital wallets</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Quick tip percentage prompts at terminal (15%, 20%, 25%)</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Automatic commission calculation per barber per cut</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Instant digital SMS receipts with rebooking link</span>
                </div>
              </div>
              <div class="pt-4">
                <button 
                  @click="demoOpen = true"
                  class="px-8 py-3.5 rounded-full border border-[#E2E8F0] bg-white text-[#1E293B] font-bold text-xs hover:border-[#581C87] hover:text-[#581C87] hover:bg-[#FAF5FF] transition-all duration-200 shadow-xs"
                >
                  Book A 20-Min Demo
                </button>
              </div>
            </div>

            <!-- Right Visual Mockup -->
            <div class="lg:col-span-5 relative order-1 lg:order-2">
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900 mx-auto max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=85" 
                  alt="Barbershop POS Checkout"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        <!-- Alternating Feature 3: Staff & Commissions -->
        <div class="rounded-3xl bg-[#FAF5FF] border border-[#E2E8F0] p-8 sm:p-12 lg:p-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-5 relative">
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/5] bg-neutral-900 mx-auto max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1517832606589-715753d4f323?auto=format&fit=crop&w=800&q=85" 
                  alt="Barbershop Staff and Team"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <div class="lg:col-span-7 space-y-5">
              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                Barber Commission, Booth Rent & Staff Payroll
              </h3>
              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Whether your barbers work on commission, flat chair rental, or a hybrid model, Salonist computes exact payouts in real-time. Track daily chair yield, product retail bonuses, and tip totals without spreadsheet headaches.
              </p>
              <div class="space-y-2.5 pt-2">
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Automated sliding-scale commission percentages</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Weekly chair rent deductions from gross receipts</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Transparent barber mobile app to view personal earnings</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 class="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>End-of-day cash drawer reconciliation</span>
                </div>
              </div>
              <div class="pt-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-3.5 rounded-full bg-[#581C87] text-white font-bold text-xs hover:bg-[#7E22CE] transition-all duration-200 shadow-md"
                >
                  Start 7-Day Free Trial →
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

      <!-- ================= 5. BARBERSHOP FAQS ================= -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-sm text-[#6B7280] mt-2">
            Everything you need to know about Salonist for Barbershops
          </p>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIdx) in barbershopFaqs" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-xs"
          >
            <h4 class="font-extrabold text-base text-[#1E293B] mb-2 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-[#F5F3FF] text-[#581C87] flex items-center justify-center text-xs font-black shrink-0">Q</span>
              <span>{{ faq.q }}</span>
            </h4>
            <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed pl-9">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </section>

      <!-- ================= 6. FINAL BOTTOM CTA ================= -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA 
          @start-trial="trialOnboardingOpen = true"
          @book-demo="demoOpen = true"
        />
      </div>

    </main>

    <!-- Footer -->
    <Footer />

    <!-- Modals -->
    <TrialOnboardingModal 
      v-model="trialOnboardingOpen"
      @close="trialOnboardingOpen = false"
      @switch-to-login="trialOnboardingOpen = false; loginOpen = true"
    />

    <LoginModal 
      v-model="loginOpen"
      @close="loginOpen = false"
      @switch-to-trial="loginOpen = false; trialOnboardingOpen = true"
    />

    <DemoBookingModal 
      v-model="demoOpen"
      @close="demoOpen = false"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  Calendar, CheckCircle2, RefreshCw, Users, 
  Megaphone, UserMinus, CreditCard 
} from 'lucide-vue-next';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import TrustedBrandsStrip from '../components/homepage/TrustedBrandsStrip.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';

const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const demoOpen = ref(false);

const barbershopFaqs = [
  { q: 'Can booth renters collect their own card deposits directly?', a: 'Yes, Salonist supports hybrid setups where booth renters connect their personal Stripe accounts while paying automated rent deductions.' },
  { q: 'Does it support walk-in queue screens?', a: 'Yes, your front window or waiting area can display live chair queues with real-time haircut estimates.' },
  { q: 'How does client rebooking work?', a: 'Automated SMS messages send 2-3 weeks after a haircut inviting the customer to click once and confirm their regular spot.' },
  { q: 'Can we sell beard oils, pomades, and hair products at checkout?', a: 'Yes, barcode scanning and quick-pick POS buttons let barbers add retail items in one tap.' }
];
</script>
