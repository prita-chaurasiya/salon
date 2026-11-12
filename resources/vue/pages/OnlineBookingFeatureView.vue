<template>
  <div class="min-h-screen bg-[#FCFBFD] text-[#5C525E] flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar 
      @open-login="loginOpen = true"
      @start-trial="trialOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-grow pt-28 sm:pt-36 pb-24">
      
      <!-- ================= 1. HERO SECTION ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center space-y-6">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-xs font-black uppercase tracking-wider border border-[#F5DDEB] mb-2 shadow-xs">
          <CalendarCheck class="w-3.5 h-3.5 text-[#AA4184]" />
          <span>ONLINE BOOKING SOFTWARE FOR SALONS & SPAS</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C151D] tracking-tight leading-[1.12] max-w-5xl mx-auto">
          Online Salon Booking Software: <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#AA4184] via-[#923470] to-[#E11D48]">
            Fill Your Calendar 24/7 Without Phone Calls
          </span>
        </h1>

        <p class="text-base sm:text-lg text-[#5C525E] max-w-3xl mx-auto font-normal leading-relaxed">
          Let your customers book appointments anytime, anywhere. Salonist gives you a customized, branded booking website and links with Instagram, Facebook, and Google Reserve to turn online searches into confirmed bookings.
        </p>

        <!-- CTA Buttons with Luxury Gradient -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button 
            @click="trialOpen = true"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] hover:scale-105 active:scale-95 text-white font-bold text-sm shadow-lg shadow-[#AA4184]/25 transition-all duration-300 cursor-pointer"
          >
            Start Free 7-Day Trial
          </button>
          
          <router-link 
            to="/client-testimonials"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D8D3E2] bg-white hover:bg-[#FAF7F9] hover:border-[#AA4184] text-[#1C151D] hover:text-[#AA4184] font-bold text-sm shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            Client Testimonials
          </router-link>
        </div>

      </section>

      <!-- ================= 2. TRUSTED BRAND PILLS ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <h3 class="text-sm font-bold uppercase tracking-wider text-[#1C151D] mb-6">
          Trusted Growth Software for Beauty & Wellness
        </h3>
        
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div 
            v-for="(brand, bIdx) in brandLogos" 
            :key="bIdx"
            class="px-6 py-3 rounded-full bg-white border border-[#F0E6EC] shadow-xs flex items-center gap-2 hover:border-[#AA4184] transition-colors"
          >
            <span class="text-sm">{{ brand.icon }}</span>
            <span class="text-xs font-bold text-[#1C151D]">{{ brand.name }}</span>
          </div>
        </div>
      </section>

      <!-- ================= 3. SECTION 1: "Online Booking Settings" (Screenshot 1 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <!-- Left: Image with Inset Floating UI Cards (Screenshot 1 Match) -->
          <div class="lg:col-span-6 relative flex justify-center">
            <div class="relative w-full max-w-md">
              
              <!-- Main Model Image -->
              <div class="rounded-3xl overflow-hidden shadow-2xl border border-[#F0E6EC] aspect-[4/5] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" 
                  alt="Client booking on phone at cafe" 
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Top Left Floating Card: "Booking Settings" -->
              <div class="absolute -top-6 -left-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl w-60 space-y-3">
                <p class="font-bold text-xs text-[#1C151D]">Booking Settings</p>
                
                <div class="space-y-2 text-[10px]">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-[#1C151D]">Staff availability</p>
                      <p class="text-slate-400">Amy, Marco, Sam bookable</p>
                    </div>
                    <span class="w-7 h-4 rounded-full bg-[#1C151D] flex items-center justify-end px-0.5"><span class="w-3 h-3 rounded-full bg-white"></span></span>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-[#1C151D]">Lead time</p>
                      <p class="text-slate-400">2 hours minimum notice</p>
                    </div>
                    <span class="w-7 h-4 rounded-full bg-[#1C151D] flex items-center justify-end px-0.5"><span class="w-3 h-3 rounded-full bg-white"></span></span>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-[#1C151D]">Cancellation policy</p>
                      <p class="text-slate-400">24-hour notice required</p>
                    </div>
                    <span class="w-7 h-4 rounded-full bg-[#1C151D] flex items-center justify-end px-0.5"><span class="w-3 h-3 rounded-full bg-white"></span></span>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-[#1C151D]">Auto-approve bookings</p>
                      <p class="text-slate-400">Manual review enabled</p>
                    </div>
                    <span class="w-7 h-4 rounded-full bg-slate-200 flex items-center justify-start px-0.5"><span class="w-3 h-3 rounded-full bg-white"></span></span>
                  </div>
                </div>
              </div>

              <!-- Bottom Right Floating Card: "Booking request" -->
              <div class="absolute -bottom-6 -right-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl w-64 space-y-2">
                <p class="text-[10px] uppercase font-bold text-slate-400">Booking request</p>
                <p class="font-bold text-xs text-[#1C151D]">M. Torres &mdash; Balayage, 2:00pm</p>
                <div class="flex items-center gap-2 pt-1">
                  <button class="flex-1 py-1.5 rounded-lg bg-[#1C151D] text-white text-[10px] font-bold">Accept</button>
                  <button class="flex-1 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-bold">Deny</button>
                </div>
              </div>

            </div>
          </div>

          <!-- Right: Text & Checkpoints (Screenshot 1 Exact Copy) -->
          <div class="lg:col-span-6 space-y-6 text-left">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C151D] tracking-tight leading-tight">
              Online Booking Settings
            </h2>

            <p class="text-lg text-[#1C151D] font-bold">
              Make your online booking system fit your needs.
            </p>

            <div class="space-y-4 pt-1 text-sm sm:text-base text-[#5C525E]">
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Set up your staff availability to get booked.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Accept, reschedule, or deny all requested bookings flexibly.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Set lead times to control when customers can book services online.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Add your cancellation policy for clear communication.</span>
              </div>
            </div>

            <div class="pt-4">
              <button 
                @click="trialOpen = true"
                class="px-8 py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Configure Your Booking Flow &rarr;
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= 4. SECTION 2: "Create Your Salon Online Booking Page Instantly" (Screenshot 2 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <!-- Left: Text & Checkpoints (Screenshot 2 Exact Copy) -->
          <div class="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C151D] tracking-tight leading-tight">
              Create Your Salon Online <br class="hidden sm:inline" />
              Booking Page Instantly
            </h2>

            <div class="space-y-4 pt-2 text-sm sm:text-base text-[#5C525E]">
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Set up your free booking page in minutes with easy step-by-step options.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Add your services, prices, and staff schedules for clients to choose from.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Let customers book appointments online 24/7 without calls or messages.</span>
              </div>
            </div>

            <div class="pt-4">
              <button 
                @click="trialOpen = true"
                class="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] text-white font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Claim Your Salon Link &rarr;
              </button>
            </div>
          </div>

          <!-- Right: Image with Floating Step Progress & Link Pill (Screenshot 2 Match) -->
          <div class="lg:col-span-6 relative flex justify-center order-1 lg:order-2">
            <div class="relative w-full max-w-md">
              
              <div class="rounded-3xl overflow-hidden shadow-2xl border border-[#F0E6EC] aspect-[4/5] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="Stylist creating booking page on laptop" 
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Top Right Floating Card: "Set Up Your Booking Page" Step List -->
              <div class="absolute -top-6 -right-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl w-60 space-y-2.5">
                <p class="font-bold text-xs text-[#1C151D]">Set Up Your Booking Page</p>
                <div class="space-y-2 text-[10px]">
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 font-semibold text-[#1C151D]"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px]">✓</span> Add services & prices</span>
                    <span class="text-emerald-600 font-bold">Done</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 font-semibold text-[#1C151D]"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px]">✓</span> Set staff schedules</span>
                    <span class="text-emerald-600 font-bold">Done</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 font-semibold text-[#1C151D]"><span class="w-3.5 h-3.5 rounded-full bg-[#AA4184] text-white flex items-center justify-center text-[8px]">3</span> Customize your page</span>
                    <span class="text-[#AA4184] font-bold">In progress</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 text-slate-400"><span class="w-3.5 h-3.5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[8px]">4</span> Publish & share link</span>
                    <span class="text-slate-400">Next</span>
                  </div>
                </div>
              </div>

              <!-- Bottom Left Floating Pill: "YOUR BOOKING PAGE" link copy -->
              <div class="absolute -bottom-4 -left-4 z-20 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl flex items-center gap-3">
                <div>
                  <p class="text-[9px] uppercase font-bold text-slate-400">YOUR BOOKING PAGE</p>
                  <p class="text-xs font-bold text-[#1C151D]">salonist.link/glow</p>
                </div>
                <button class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#FAF0F5] hover:text-[#AA4184] text-slate-600 text-[10px] font-bold transition-colors">
                  Copy
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 5. SECTION 3: "Customize and Control Your Online Booking Site" (Screenshot 3 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <!-- Left: Image with Floating Color Palette & Restriction Badge (Screenshot 3 Match) -->
          <div class="lg:col-span-6 relative flex justify-center">
            <div class="relative w-full max-w-md">
              
              <div class="rounded-3xl overflow-hidden shadow-2xl border border-[#F0E6EC] aspect-[4/5] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                  alt="Stylist combing client hair at luxury station" 
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Top Left Floating Card: "Customize Your Page" -->
              <div class="absolute -top-6 -left-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl w-56 space-y-2">
                <p class="text-[10px] uppercase font-bold text-slate-400">Customize Your Page</p>
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-[#1C151D] text-white flex items-center justify-center font-black text-xs">GS</div>
                  <div>
                    <p class="font-bold text-xs text-[#1C151D]">Glow Salon</p>
                    <p class="text-[9px] text-slate-400">Logo uploaded</p>
                  </div>
                </div>
                <!-- Color Swatches -->
                <div class="flex items-center gap-1.5 pt-1">
                  <span class="w-4 h-4 rounded-full bg-[#1C151D]"></span>
                  <span class="w-4 h-4 rounded-full bg-amber-500"></span>
                  <span class="w-4 h-4 rounded-full bg-emerald-500"></span>
                  <span class="w-4 h-4 rounded-full bg-[#AA4184]"></span>
                </div>
              </div>

              <!-- Middle Right Floating Card: Booking request for R. Kim -->
              <div class="absolute top-1/2 -right-6 z-20 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl w-60 space-y-1.5">
                <p class="text-[9px] uppercase font-bold text-slate-400">Booking request</p>
                <p class="font-bold text-xs text-[#1C151D]">R. Kim &mdash; Massage, 3:00pm</p>
                <div class="flex items-center gap-2 pt-1">
                  <button class="flex-1 py-1 rounded bg-[#1C151D] text-white text-[9px] font-bold">Approve</button>
                  <button class="flex-1 py-1 rounded bg-slate-100 text-slate-600 text-[9px] font-bold">Decline</button>
                </div>
              </div>

              <!-- Bottom Left Floating Pill: "Client restricted" -->
              <div class="absolute -bottom-4 -left-4 z-20 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl flex items-center gap-2.5">
                <div class="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs">👤</div>
                <div>
                  <p class="text-xs font-bold text-[#1C151D]">Client restricted</p>
                  <p class="text-[9px] text-slate-400">Availability updated instantly</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Right: Text & Checkpoints (Screenshot 3 Exact Copy) -->
          <div class="lg:col-span-6 space-y-6 text-left">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C151D] tracking-tight leading-tight">
              Customize and Control Your <br class="hidden sm:inline" />
              Online Booking Site
            </h2>

            <div class="space-y-4 pt-2 text-sm sm:text-base text-[#5C525E]">
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Personalize your booking page with your salon logo, colors, and policies.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Approve or decline bookings manually to stay in full control.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Restrict specific clients or update your availability anytime.</span>
              </div>
            </div>

            <div class="pt-4">
              <button 
                @click="trialOpen = true"
                class="px-8 py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Customize Your Brand Theme &rarr;
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= 6. SECTION 4: "Grow Your Client Base with a Free Online Scheduling Tool" (Screenshot 4 Match) ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <!-- Left: Text & Checkpoints (Screenshot 4 Exact Copy) -->
          <div class="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C151D] tracking-tight leading-tight">
              Grow Your Client Base with a <br class="hidden sm:inline" />
              Free Online Scheduling Tool
            </h2>

            <div class="space-y-4 pt-2 text-sm sm:text-base text-[#5C525E]">
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Accept online bookings through your free booking site.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Send automatic reminders to reduce no-shows and missed appointments.</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-[#1C151D] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
                <span>Connect your booking page with Facebook, Instagram, and Google "Book Now" buttons to get more clients.</span>
              </div>
            </div>

            <div class="pt-4">
              <button 
                @click="trialOpen = true"
                class="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C151D] via-[#AA4184] to-[#923470] text-white font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Connect Social Booking &rarr;
              </button>
            </div>
          </div>

          <!-- Right: Image with Social Pills & Reminder Message (Screenshot 4 Match) -->
          <div class="lg:col-span-6 relative flex justify-center order-1 lg:order-2">
            <div class="relative w-full max-w-md">
              
              <div class="rounded-3xl overflow-hidden shadow-2xl border border-[#F0E6EC] aspect-[4/5] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" 
                  alt="Happy salon client consultation" 
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Top Right Floating Card: Social Channels List -->
              <div class="absolute -top-6 -right-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl w-56 space-y-2.5">
                <div class="space-y-1.5 text-xs font-bold text-[#1C151D]">
                  <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">f</span>
                    <span>Facebook</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white flex items-center justify-center text-[10px]">📷</span>
                    <span>Instagram</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-white border border-slate-200 text-red-500 flex items-center justify-center text-[10px]">G</span>
                    <span>Google</span>
                  </div>
                </div>
                <button class="w-full py-1.5 rounded-xl bg-[#1C151D] text-white text-xs font-bold">
                  Book Now
                </button>
              </div>

              <!-- Bottom Left Floating Card: "Reminder Message" -->
              <div class="absolute -bottom-6 -left-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E6EC] shadow-xl w-64 space-y-2 text-left">
                <div class="w-7 h-7 rounded-lg bg-[#1C151D] text-white flex items-center justify-center text-xs">💬</div>
                <p class="font-bold text-xs text-[#1C151D]">Reminder Message</p>
                <p class="text-[11px] text-[#5C525E] leading-relaxed">
                  Your appointment has been booked on Friday <strong>05 December, 2026, 11:30 am</strong> with Yusuf at <strong>Buqwal Salon</strong>. See you soon!
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= 7. DINGG SOFT BLUSH BACKGROUND SECTION ================= -->
      <DinggCouponPromoSection 
        business-type="salon"
        @start-trial="trialOpen = true"
        class="mb-24"
      />

      <!-- ================= 8. CUSTOMER STORIES: "Loved by thousands of salons and spas" ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="text-center space-y-3 mb-12">
          <span class="text-xs uppercase font-extrabold tracking-widest text-[#AA4184]">CUSTOMER STORIES</span>
          <h2 class="text-3xl sm:text-5xl font-black text-[#1C151D] tracking-tight">
            Loved by thousands of salons and spas
          </h2>
          <p class="text-base text-[#5C525E] max-w-2xl mx-auto">
            Watch real video case studies from salon directors who scaled multi-chair revenue and eliminated calendar double-bookings.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(video, vIdx) in videoStories" 
            :key="vIdx" 
            class="group relative rounded-3xl overflow-hidden shadow-xl border border-[#F0E6EC] bg-slate-900 cursor-pointer aspect-[3/4]"
          >
            <img 
              :src="video.image" 
              :alt="video.name" 
              class="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-[#AA4184] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <div class="absolute inset-x-4 bottom-6 text-center space-y-1">
              <p class="text-lg font-black text-white leading-tight drop-shadow-md">
                "{{ video.highlight }}"
              </p>
              <h4 class="font-bold text-xs text-rose-200 uppercase tracking-widest pt-2">
                {{ video.name }}
              </h4>
              <p class="text-[11px] text-slate-300">{{ video.salonType }}</p>
            </div>
          </div>
        </div>

        <div class="text-center pt-10">
          <router-link 
            to="/client-testimonials"
            class="px-8 py-3.5 rounded-full bg-[#1C151D] hover:bg-[#AA4184] text-white font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>View All Verified Client Testimonials</span>
            <span>&rarr;</span>
          </router-link>
        </div>
      </section>

      <!-- ================= 9. CTA ================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CTA 
          badge="Launch Online Booking"
          title="Turn everyday web and social traffic into booked chairs"
          subtitle="Everything from branded booking sites to automated WhatsApp confirmation links, ready out of the box."
          @start-trial="trialOpen = true"
          @book-demo="demoOpen = true"
        />
      </section>

    </main>

    <Footer />

    <!-- Modals -->
    <TrialOnboardingModal 
      v-model="trialOpen" 
      @close="trialOpen = false" 
      @switch-to-login="trialOpen = false; loginOpen = true"
    />
    <LoginModal 
      v-model="loginOpen" 
      @close="loginOpen = false" 
      @switch-to-trial="loginOpen = false; trialOpen = true"
    />
    <DemoBookingModal 
      v-model="demoOpen" 
      @close="demoOpen = false" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CTA from '../components/CTA.vue';
import DinggCouponPromoSection from '../components/common/DinggCouponPromoSection.vue';
import TrialOnboardingModal from '../components/interactive/TrialOnboardingModal.vue';
import LoginModal from '../components/interactive/LoginModal.vue';
import DemoBookingModal from '../components/interactive/DemoBookingModal.vue';
import { CalendarCheck } from 'lucide-vue-next';

const trialOpen = ref(false);
const demoOpen = ref(false);
const loginOpen = ref(false);

const brandLogos = [
  { name: 'Toni & Guy', icon: '✂️' },
  { name: 'Buqwal', icon: '💈' },
  { name: 'Memories', icon: '🌸' },
  { name: 'Meraki Spa', icon: '🌿' },
  { name: 'Stile Barbers', icon: '✂️' },
  { name: 'Looks Salon', icon: '💆‍♀️' }
];

const videoStories = [
  {
    name: 'Slenco Grooming',
    salonType: 'Flagship Barbershop Chain',
    highlight: 'managing staff and appointments seamlessly',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'BB Salon & Spa',
    salonType: 'Boutique Hair & Color Bar',
    highlight: 'valuable asset for our everyday growth',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'G Salon Flagship',
    salonType: 'Multi-Station Beauty Studio',
    highlight: 'zero chair double-bookings ever again',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Glow Box Clinic',
    salonType: 'Aesthetic Skin & Laser Clinic',
    highlight: 'our most successful software investment',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80'
  }
];
</script>
