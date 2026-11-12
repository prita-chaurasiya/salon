<template>
  <div class="min-h-screen bg-[#FCFCFB] text-[#4B5563] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOnboardingOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION (Screenshot-Accurate Architecture) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column Content -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Category Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] font-black text-xs uppercase tracking-wider border border-[#F0E6EC]">
              <span class="w-2 h-2 rounded-full bg-[#AA4184] animate-ping"></span>
              <span>{{ solution.category }} • Dedicated Solution</span>
            </div>

            <!-- Page Title / Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E293B] tracking-tight leading-[1.1]">
              {{ solution.title.split(' ')[0] }} 
              <span class="text-[#AA4184]">
                {{ solution.title.split(' ').slice(1).join(' ') }}
              </span>
            </h1>

            <!-- Descriptive Copy -->
            <p class="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              {{ solution.heroDescription }}
            </p>

            <!-- Buttons: Start Free 7-Day Trial & Book A 20-Min Demo with Luxury Gradient -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                @click="trialOnboardingOpen = true"
                class="px-8 py-4 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:from-[#2B2237] hover:to-[#7C3AED] text-white font-extrabold text-sm transition-all duration-300 shadow-lg shadow-[#AA4184]/25 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free 7-Day Trial</span>
                <span>→</span>
              </button>

              <button 
                @click="demoOpen = true"
                class="px-8 py-4 rounded-full border border-[#F0E6EC] bg-white text-[#1C151D] font-extrabold text-sm hover:border-[#AA4184] hover:text-[#AA4184] hover:bg-[#FAF7F9] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Calendar class="w-4 h-4 text-[#AA4184]" />
                <span>Book A 20-Min Demo</span>
              </button>
            </div>

            <!-- Trust Line -->
            <div class="pt-2 text-xs text-[#6B7280] font-medium flex items-center gap-2 flex-wrap">
              <span>Free 7 days</span>
              <span>•</span>
              <span>Unlimited staff, one price</span>
              <span>•</span>
              <span>We move your data in</span>
            </div>
          </div>

          <!-- Right Column Visual Mockup with Floating Interactive Cards -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md">
              
              <!-- Main Feature Image -->
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] aspect-[4/5] bg-neutral-900">
                <img 
                  :src="solution.heroImage" 
                  :alt="solution.title"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Floating Card 1: Today's Active Stations (Top Right) -->
              <div class="absolute -top-6 -right-6 sm:-right-8 w-64 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-[#F0E6EC] text-xs space-y-2 z-20">
                <div class="flex items-center justify-between pb-1.5 border-b border-[#F0E6EC]">
                  <span class="font-extrabold text-[#1E293B]">Live Schedule</span>
                  <span class="text-[10px] text-[#6B7280]">Real-time</span>
                </div>

                <div 
                  v-for="(chair, cIdx) in solution.floatingTodayChairs" 
                  :key="cIdx"
                  class="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF7F9]"
                >
                  <div class="flex items-center gap-2">
                    <span 
                      class="w-2 h-2 rounded-full"
                      :class="chair.color === 'amber' ? 'bg-[#AA4184]' : chair.color === 'purple' ? 'bg-[#923470]' : 'bg-[#AA4184]'"
                    ></span>
                    <span class="font-bold text-[#1E293B] text-[11px] truncate max-w-[120px]">{{ chair.name }}</span>
                  </div>
                  <span 
                    class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#FBF0F6] text-[#AA4184]"
                  >
                    {{ chair.status }}
                  </span>
                </div>
              </div>

              <!-- Floating Card 2: Quick Booking Card (Middle Left) -->
              <div class="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-[#F0E6EC] text-xs z-20 max-w-[180px]">
                <p class="font-extrabold text-[#1E293B] truncate">{{ solution.floatingBookingPrompt.title }}</p>
                <p class="text-[10px] text-[#6B7280] mb-2 truncate">{{ solution.floatingBookingPrompt.sub }}</p>
                <button 
                  @click="trialOnboardingOpen = true"
                  class="w-full py-1.5 px-3 rounded-lg bg-[#AA4184] text-white text-[10px] font-bold shadow-xs hover:bg-[#AA4184] transition-colors"
                >
                  Book now
                </button>
              </div>

              <!-- Floating Card 3: POS Receipt Slip (Bottom Right) -->
              <div class="absolute -bottom-5 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-[#F0E6EC] text-xs z-20 w-48">
                <div class="flex justify-between text-[11px] text-[#4B5563]">
                  <span class="truncate pr-1">{{ solution.floatingReceipt.item1.split('$')[0] }}</span>
                  <span class="font-bold text-[#1E293B]">${{ solution.floatingReceipt.item1.split('$')[1] }}</span>
                </div>
                <div class="flex justify-between text-[11px] text-[#4B5563] mt-1">
                  <span class="truncate pr-1">{{ solution.floatingReceipt.item2.split('$')[0] }}</span>
                  <span class="font-bold text-[#1E293B]">${{ solution.floatingReceipt.item2.split('$')[1] }}</span>
                </div>
                <div class="flex justify-between text-xs font-black text-[#1E293B] border-t border-[#F0E6EC] pt-1.5 mt-1.5">
                  <span>Total</span>
                  <span class="text-[#AA4184] font-extrabold">{{ solution.floatingReceipt.total }}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 2. TRUSTED LOGOS STRIP ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <p class="text-center text-sm font-extrabold text-[#1E293B] uppercase tracking-wider mb-6">
          {{ solution.trustedTitle }}
        </p>
        <TrustedBrandsStrip />
      </section>

      <!-- ================= 3. WHAT STOPS THIS BUSINESS FROM GROWING? (6 Exact Bottleneck Cards) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] tracking-tight">
            {{ solution.problemTitle }}
          </h2>
        </div>

        <!-- 6 Bottleneck Cards from Salonist Architecture -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div 
            v-for="(prob, pIdx) in solution.problems" 
            :key="pIdx"
            class="rounded-3xl bg-white border border-[#F0E6EC] p-8 text-center flex flex-col items-center hover:shadow-lg hover:border-[#AA4184] transition-all duration-300 group"
          >
            <div class="w-14 h-14 rounded-full bg-[#FBF0F6] border border-[#F0E6EC] flex items-center justify-center text-[#AA4184] mb-6 shadow-xs group-hover:scale-110 transition-transform">
              <component :is="problemIcons[pIdx % problemIcons.length]" class="w-6 h-6 stroke-[1.8] text-[#AA4184]" />
            </div>
            <h3 class="text-lg font-bold text-[#1E293B] mb-3">
              {{ prob.title }}
            </h3>
            <p class="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
              {{ prob.desc }}
            </p>
          </div>

        </div>
      </section>

      <!-- ================= 4. FEATURES OF SALONIST (Alternating Visual Showcases) ================= -->
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

        <!-- Alternating Feature 1: Online Booking App & Staff Matching -->
        <div class="rounded-3xl bg-[#FAF7F9] border border-[#F0E6EC] p-8 sm:p-12 lg:p-16 mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Mockup Preview with floating badges -->
            <div class="lg:col-span-5 relative">
              <div class="relative mx-auto max-w-sm">
                <div class="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] aspect-[4/5] bg-neutral-900">
                  <img 
                    :src="solution.feature1.image" 
                    :alt="solution.feature1.title"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Floating Specialty Card -->
                <div class="absolute -top-6 -right-6 w-60 rounded-2xl bg-white p-4 shadow-lg border border-[#F0E6EC] text-xs z-10">
                  <p class="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-2">24/7 ONLINE BOOKING</p>
                  <div class="flex items-center justify-between mb-3">
                    <div class="text-center">
                      <div class="w-8 h-8 rounded-full bg-[#FBF0F6] text-[#AA4184] font-bold flex items-center justify-center mx-auto text-xs">A</div>
                      <span class="text-[9px] font-bold mt-1 block text-[#1E293B]">Staff 1</span>
                    </div>
                    <div class="text-center">
                      <div class="w-8 h-8 rounded-full bg-[#FAF7F9] text-[#923470] font-bold flex items-center justify-center mx-auto text-xs">B</div>
                      <span class="text-[9px] font-bold mt-1 block text-[#6B7280]">Staff 2</span>
                    </div>
                    <div class="text-center">
                      <div class="w-8 h-8 rounded-full bg-[#FAF7F9] text-[#923470] font-bold flex items-center justify-center mx-auto text-xs">C</div>
                      <span class="text-[9px] font-bold mt-1 block text-[#6B7280]">Staff 3</span>
                    </div>
                  </div>

                  <div class="p-2 rounded-xl bg-[#FAF7F9] border border-[#F0E6EC] mb-2 flex justify-between items-center text-[10px]">
                    <span class="font-bold text-[#1E293B]">Instant Confirmation</span>
                    <span class="text-[#AA4184] font-bold">✓ Active</span>
                  </div>

                  <div class="grid grid-cols-3 gap-1 text-[9px] font-mono text-center">
                    <span class="p-1 rounded bg-white border border-[#F0E6EC]">11:00</span>
                    <span class="p-1 rounded bg-[#AA4184] text-white font-bold">12:30</span>
                    <span class="p-1 rounded bg-white border border-[#F0E6EC]">2:00</span>
                  </div>
                </div>

                <!-- Floating Channels Card (Bottom Left) -->
                <div class="absolute -bottom-4 -left-6 rounded-2xl bg-white p-3 shadow-lg border border-[#F0E6EC] text-xs z-10">
                  <p class="text-[9px] font-bold uppercase text-[#6B7280] mb-1">CHANNELS</p>
                  <div class="space-y-1 text-[11px] font-semibold text-[#1E293B]">
                    <div class="flex items-center gap-1.5"><span>🌐</span> Website</div>
                    <div class="flex items-center gap-1.5"><span>📷</span> Instagram</div>
                    <div class="flex items-center gap-1.5"><span>📱</span> Client App</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Content -->
            <div class="lg:col-span-7 space-y-5">
              <span class="inline-block px-3 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] font-black text-[10px] uppercase tracking-wider border border-[#F0E6EC]">
                {{ solution.feature1.tag }}
              </span>

              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                {{ solution.feature1.title }}
              </h3>

              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {{ solution.feature1.desc }}
              </p>

              <!-- Bullets -->
              <div class="space-y-2.5 pt-2">
                <div 
                  v-for="(bullet, bIdx) in solution.feature1.bullets" 
                  :key="bIdx"
                  class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]"
                >
                  <CheckCircle2 class="w-4 h-4 text-[#AA4184] shrink-0" />
                  <span>{{ bullet }}</span>
                </div>
              </div>

              <div class="pt-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-3.5 rounded-full bg-[#AA4184] text-white font-bold text-xs hover:bg-[#AA4184] transition-all duration-200 shadow-md"
                >
                  Explore Capabilities →
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Alternating Feature 2: High-Speed POS & Digital Invoicing -->
        <div class="rounded-3xl bg-white border border-[#F0E6EC] p-8 sm:p-12 lg:p-16 mb-12 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <span class="inline-block px-3 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] font-black text-[10px] uppercase tracking-wider border border-[#F0E6EC]">
                {{ solution.feature2.tag }}
              </span>

              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                {{ solution.feature2.title }}
              </h3>

              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {{ solution.feature2.desc }}
              </p>

              <div class="space-y-2.5 pt-2">
                <div 
                  v-for="(bullet, bIdx) in solution.feature2.bullets" 
                  :key="bIdx"
                  class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]"
                >
                  <CheckCircle2 class="w-4 h-4 text-[#AA4184] shrink-0" />
                  <span>{{ bullet }}</span>
                </div>
              </div>

              <div class="pt-4">
                <button 
                  @click="demoOpen = true"
                  class="px-8 py-3.5 rounded-full border border-[#F0E6EC] bg-white text-[#1E293B] font-bold text-xs hover:border-[#AA4184] hover:text-[#AA4184] hover:bg-[#FAF7F9] transition-all duration-200 shadow-xs"
                >
                  Schedule A Demo Walkthrough
                </button>
              </div>
            </div>

            <!-- Right Visual Mockup -->
            <div class="lg:col-span-5 relative order-1 lg:order-2">
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] aspect-[4/5] bg-neutral-900 mx-auto max-w-sm">
                <img 
                  :src="solution.feature2.image" 
                  :alt="solution.feature2.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        <!-- Alternating Feature 3: Staff Management, Payroll & Retention -->
        <div class="rounded-3xl bg-[#FAF7F9] border border-[#F0E6EC] p-8 sm:p-12 lg:p-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-5 relative">
              <div class="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] aspect-[4/5] bg-neutral-900 mx-auto max-w-sm">
                <img 
                  :src="solution.feature3.image" 
                  :alt="solution.feature3.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <div class="lg:col-span-7 space-y-5">
              <span class="inline-block px-3 py-1 rounded-full bg-[#FBF0F6] text-[#AA4184] font-black text-[10px] uppercase tracking-wider border border-[#F0E6EC]">
                {{ solution.feature3.tag }}
              </span>

              <h3 class="text-2xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                {{ solution.feature3.title }}
              </h3>

              <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {{ solution.feature3.desc }}
              </p>

              <div class="space-y-2.5 pt-2">
                <div 
                  v-for="(bullet, bIdx) in solution.feature3.bullets" 
                  :key="bIdx"
                  class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]"
                >
                  <CheckCircle2 class="w-4 h-4 text-[#AA4184] shrink-0" />
                  <span>{{ bullet }}</span>
                </div>
              </div>

              <div class="pt-4">
                <button 
                  @click="trialOnboardingOpen = true"
                  class="px-8 py-3.5 rounded-full bg-[#AA4184] text-white font-bold text-xs hover:bg-[#AA4184] transition-all duration-200 shadow-md"
                >
                  Start 7-Day Free Trial →
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

      <!-- ================= 4.5 DINGG/SALONIST COUPONS & GIFT CARDS SHOWCASE (User Screenshot Match) ================= -->
      <section class="bg-[#FAF0F5] border-y border-[#F5DDEB] py-20 mb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Copy: Exact match to user screenshot -->
            <div class="lg:col-span-6 space-y-6">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F0E6EC] shadow-xs">
                <span>✓ Reduced no-shows</span>
              </div>

              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C151D] tracking-tight leading-[1.15]">
                Easy and Flexible <br />
                <span class="text-[#AA4184]">Coupons and Gift Cards</span>
              </h2>

              <p class="text-base text-[#5C525E] leading-relaxed">
                Promotions and gift cards play a big role in {{ solution.title.toLowerCase() }} growth, especially for new client acquisition. Salonist's <strong>{{ solution.title.toLowerCase() }} software</strong> makes it easy to create, manage, and track coupons and gift cards.
              </p>

              <p class="text-base text-[#5C525E] leading-relaxed">
                Everything is linked to client profiles, so there's no confusion during redemption. It's simple, clean, and works well even during busy days.
              </p>

              <!-- Feature Pills Strip -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div class="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#F0E6EC] shadow-xs">
                  <span class="w-2 h-2 rounded-full bg-[#AA4184]"></span>
                  <span class="text-xs font-bold text-[#1C151D]">Instant Online Vouchers</span>
                </div>
                <div class="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#F0E6EC] shadow-xs">
                  <span class="w-2 h-2 rounded-full bg-[#AA4184]"></span>
                  <span class="text-xs font-bold text-[#1C151D]">One-Tap POS Redemption</span>
                </div>
              </div>
            </div>

            <!-- Right Visual: Woman with smartphone and floating interactive callouts matching screenshot -->
            <div class="lg:col-span-6 relative flex justify-center">
              <div class="relative max-w-md w-full">
                
                <!-- Curved Teal/Sage Background Blob matching screenshot -->
                <div class="absolute inset-0 bg-[#A0D2CD]/50 rounded-[40px] transform rotate-3 scale-95 -z-10"></div>

                <!-- Main Photo -->
                <div class="rounded-[36px] overflow-hidden bg-white border border-[#F0E6EC] shadow-xl aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85" 
                    alt="Salon Client Happy" 
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Floating Callout 1: Top Right (Coral Red) -->
                <div class="absolute -top-3 -right-4 sm:-right-6 px-4 py-2 rounded-xl bg-[#E05345] text-white text-xs font-black shadow-lg animate-pulse">
                  Launch Seasonal Promotions
                </div>

                <!-- Floating Callout 2: Middle Right (Berry Rose #AA4184) -->
                <div class="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#AA4184] text-white text-xs font-black shadow-lg">
                  Use Targeted Discounts On Packages
                </div>

                <!-- Floating Callout 3: Bottom Left (Lime Gold) -->
                <div class="absolute bottom-6 -left-4 sm:-left-6 px-4 py-2 rounded-xl bg-[#C7D938] text-[#1C151D] text-xs font-black shadow-lg">
                  Easily Track Redemption And Sales
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================= 5. SOLUTION-SPECIFIC ACCORDION FAQS ================= -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-sm text-[#6B7280] mt-2">
            Everything you need to know about Salonist for {{ solution.title }}
          </p>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIdx) in solution.faqs" 
            :key="fIdx"
            class="rounded-2xl bg-white border border-[#F0E6EC] p-6 shadow-xs"
          >
            <h4 class="font-extrabold text-base text-[#1E293B] mb-2 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-[#FBF0F6] text-[#AA4184] flex items-center justify-center text-xs font-black shrink-0">Q</span>
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
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
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
import { solutionsDirectory } from '../data/solutionsData.js';

const route = useRoute();

const solutionSlug = computed(() => {
  const p = route.params.slug;
  if (!p) return 'barbershop';
  return p;
});

const solution = computed(() => {
  return solutionsDirectory[solutionSlug.value] || solutionsDirectory['barbershop'];
});

const problemIcons = [Calendar, RefreshCw, Users, Megaphone, UserMinus, CreditCard];

const trialOnboardingOpen = ref(false);
const loginOpen = ref(false);
const demoOpen = ref(false);
</script>
