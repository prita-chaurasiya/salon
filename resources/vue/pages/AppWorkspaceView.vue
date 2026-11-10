<template>
  <div class="min-h-screen bg-[#FAF7F9] text-[#1E293B] flex flex-col font-sans">
    
    <!-- Top Salonist Navigation Bar -->
    <header class="h-16 bg-[#AA4184] text-white flex items-center justify-between px-4 sm:px-6 shadow-md z-30 shrink-0">
      
      <!-- Left: Logo & Branch Switcher -->
      <div class="flex items-center gap-4">
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-black text-white text-sm shadow-xs group-hover:bg-white/20 transition-colors">
            S
          </div>
          <span class="text-xl font-black tracking-tight text-white hidden sm:inline">Salonist</span>
          <span class="px-2 py-0.5 rounded-full bg-[#FBF0F6] text-[#AA4184] text-[10px] font-black uppercase tracking-wider">
            Workspace
          </span>
        </router-link>

        <!-- Location Switcher Pill -->
        <div class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white">
          <MapPin class="w-3.5 h-3.5 text-[#AA4184]" />
          <span class="font-bold">Downtown Flagship Suite</span>
          <ChevronDown class="w-3.5 h-3.5 text-white/70" />
        </div>
      </div>

      <!-- Center: Quick Global Search -->
      <div class="hidden lg:flex items-center w-80 relative">
        <Search class="w-4 h-4 text-white/60 absolute left-3 pointer-events-none" />
        <input 
          v-model="searchQuery"
          type="text"
          placeholder="Search clients, appointments, phone..."
          class="w-full pl-9 pr-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors"
        />
      </div>

      <!-- Right: Action Buttons & Admin Profile -->
      <div class="flex items-center gap-3">
        
        <!-- Quick Sale POS Button -->
        <button 
          @click="activeTab = 'pos'"
          class="px-3.5 py-1.5 rounded-full bg-[#AA4184] text-[#AA4184] font-extrabold text-xs hover:bg-[#4EA0A1] transition-all flex items-center gap-1.5 shadow-xs"
        >
          <CreditCard class="w-3.5 h-3.5" />
          <span>Quick Sale POS</span>
        </button>

        <!-- New Appointment Trigger -->
        <button 
          @click="openNewBookingModal"
          class="px-3.5 py-1.5 rounded-full bg-white text-[#AA4184] font-extrabold text-xs hover:bg-[#FAF7F9] transition-all flex items-center gap-1.5 shadow-xs"
        >
          <Plus class="w-3.5 h-3.5" />
          <span class="hidden sm:inline">New Booking</span>
        </button>

        <!-- Notification Bell -->
        <button class="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <Bell class="w-4 h-4" />
          <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#AA4184]"></span>
        </button>

        <!-- Stylist / Owner Profile -->
        <div class="flex items-center gap-2 pl-2 border-l border-white/15">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
            alt="Elena"
            class="w-8 h-8 rounded-full object-cover ring-2 ring-[#AA4184]"
          />
          <div class="hidden xl:block text-left text-xs leading-tight">
            <p class="font-bold text-white">Elena Vance</p>
            <p class="text-[10px] text-[#E9D5FF]">Salon Director</p>
          </div>
        </div>

      </div>

    </header>

    <!-- App Body: Sidebar + Main Content Stage -->
    <div class="flex-1 flex overflow-hidden">
      
      <!-- Left Vertical Module Sidebar -->
      <aside class="w-16 sm:w-60 bg-white border-r border-[#F0E6EC] flex flex-col justify-between shrink-0 select-none">
        <div class="p-2 sm:p-3 space-y-1">
          
          <button 
            v-for="item in navModules" 
            :key="item.id"
            @click="activeTab = item.id"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all"
            :class="activeTab === item.id 
              ? 'bg-[#FBF0F6] text-[#AA4184] shadow-xs' 
              : 'text-[#4B5563] hover:bg-[#FAF7F9] hover:text-[#1E293B]'"
          >
            <component :is="item.icon" class="w-5 h-5 shrink-0" :class="activeTab === item.id ? 'text-[#AA4184]' : 'text-[#6B7280]'" />
            <span class="hidden sm:inline">{{ item.label }}</span>
            <span v-if="item.badge" class="hidden sm:inline ml-auto px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase" :class="item.badgeColor">
              {{ item.badge }}
            </span>
          </button>

        </div>

        <!-- Sidebar Footer Status -->
        <div class="p-3 border-t border-[#F0E6EC] hidden sm:block">
          <div class="p-2.5 rounded-xl bg-[#FAF7F9] border border-[#F0E6EC] space-y-1 text-[11px]">
            <div class="flex items-center justify-between text-[#1E293B] font-bold">
              <span>Today's Chairs</span>
              <span class="text-[#AA4184]">88% Full</span>
            </div>
            <div class="w-full bg-[#F0E6EC] h-1.5 rounded-full overflow-hidden">
              <div class="bg-[#AA4184] h-full rounded-full" style="width: 88%"></div>
            </div>
            <p class="text-[10px] text-[#6B7280]">14 completed • 4 in-chair</p>
          </div>
        </div>
      </aside>

      <!-- Main Stage Container -->
      <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#FAF7F9]">
        
        <!-- MODULE 1: APPOINTMENT MASTER CALENDAR -->
        <div v-if="activeTab === 'calendar'" class="space-y-6">
          
          <!-- Calendar Controls Bar -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#F0E6EC] shadow-xs">
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1 bg-[#FAF7F9] p-1 rounded-xl border border-[#F0E6EC]">
                <button class="p-1 rounded-lg hover:bg-white text-[#1E293B] transition-colors"><ChevronLeft class="w-4 h-4" /></button>
                <button class="px-3 py-1 rounded-lg bg-white font-bold text-xs shadow-xs text-[#AA4184]">Today</button>
                <button class="p-1 rounded-lg hover:bg-white text-[#1E293B] transition-colors"><ChevronRight class="w-4 h-4" /></button>
              </div>
              <h2 class="text-base sm:text-lg font-black text-[#1E293B]">
                Friday, Nov 13 &bull; Multi-Chair Live Roster
              </h2>
            </div>

            <!-- Stylist Filter Tags -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 text-xs">
              <span class="font-bold text-[#6B7280] text-[11px] uppercase mr-1">Chairs:</span>
              <span 
                v-for="(stylist, sIdx) in stylists" 
                :key="sIdx"
                class="px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 shrink-0 cursor-pointer"
                :class="stylist.active ? 'bg-[#FBF0F6] text-[#AA4184] border-[#F0E6EC]' : 'bg-white text-[#6B7280] border-[#F0E6EC]'"
              >
                <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: stylist.color }"></span>
                <span>{{ stylist.name }}</span>
              </span>
            </div>
          </div>

          <!-- Multi-Staff Timeline Matrix -->
          <div class="bg-white rounded-2xl border border-[#F0E6EC] shadow-xs overflow-hidden">
            <div class="grid grid-cols-12 border-b border-[#F0E6EC] bg-[#FCFCFB] text-xs font-bold text-[#1E293B] p-3 text-center">
              <div class="col-span-2 text-left pl-3 text-[#6B7280]">Time Slot</div>
              <div class="col-span-2">Chair 1 &bull; Marco (Barber)</div>
              <div class="col-span-3">Chair 2 &bull; Chloe (Colorist)</div>
              <div class="col-span-3">Chair 3 &bull; Liam (Stylist)</div>
              <div class="col-span-2">Spa Suite &bull; Sam</div>
            </div>

            <div class="divide-y divide-[#F0E6EC]">
              <div 
                v-for="(slot, idx) in timeSlots" 
                :key="idx"
                class="grid grid-cols-12 min-h-[72px] text-xs transition-colors hover:bg-[#FAF7F9]/50"
              >
                <!-- Time Label -->
                <div class="col-span-2 p-3 font-mono font-bold text-[#6B7280] border-r border-[#F0E6EC] bg-[#FCFCFB]/60 flex items-center">
                  {{ slot.time }}
                </div>

                <!-- Marco's Column -->
                <div class="col-span-2 p-1.5 border-r border-[#F0E6EC] relative">
                  <div 
                    v-if="slot.marco"
                    @click="viewAppointment(slot.marco)"
                    class="h-full p-2 rounded-xl text-[11px] font-bold cursor-pointer transition-transform hover:scale-[1.02] shadow-xs flex flex-col justify-between"
                    :class="slot.marco.statusClass"
                  >
                    <div class="flex justify-between items-start">
                      <span class="truncate font-extrabold">{{ slot.marco.client }}</span>
                      <span class="text-[9px] px-1 rounded bg-black/10">{{ slot.marco.price }}</span>
                    </div>
                    <span class="text-[10px] opacity-80 truncate">{{ slot.marco.service }}</span>
                  </div>
                  <div 
                    v-else 
                    @click="quickBookSlot('Marco', slot.time)"
                    class="h-full rounded-xl border border-dashed border-transparent hover:border-[#AA4184] flex items-center justify-center text-transparent hover:text-[#AA4184] text-[10px] font-bold cursor-pointer"
                  >
                    + Open Slot
                  </div>
                </div>

                <!-- Chloe's Column (With Processing Buffer Highlight) -->
                <div class="col-span-3 p-1.5 border-r border-[#F0E6EC] relative">
                  <div 
                    v-if="slot.chloe"
                    @click="viewAppointment(slot.chloe)"
                    class="h-full p-2 rounded-xl text-[11px] font-bold cursor-pointer transition-transform hover:scale-[1.02] shadow-xs flex flex-col justify-between"
                    :class="slot.chloe.statusClass"
                  >
                    <div class="flex justify-between items-start">
                      <span class="truncate font-extrabold">{{ slot.chloe.client }}</span>
                      <span class="text-[9px] px-1 rounded bg-black/10">{{ slot.chloe.price }}</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-[10px] opacity-80 truncate">
                      <span>{{ slot.chloe.service }}</span>
                      <span v-if="slot.chloe.isProcessing" class="px-1 rounded bg-amber-500 text-white font-mono text-[8px]">DEVELOPING</span>
                    </div>
                  </div>
                  <div 
                    v-else 
                    @click="quickBookSlot('Chloe', slot.time)"
                    class="h-full rounded-xl border border-dashed border-transparent hover:border-[#AA4184] flex items-center justify-center text-transparent hover:text-[#AA4184] text-[10px] font-bold cursor-pointer"
                  >
                    + Open Chair
                  </div>
                </div>

                <!-- Liam's Column -->
                <div class="col-span-3 p-1.5 border-r border-[#F0E6EC] relative">
                  <div 
                    v-if="slot.liam"
                    @click="viewAppointment(slot.liam)"
                    class="h-full p-2 rounded-xl text-[11px] font-bold cursor-pointer transition-transform hover:scale-[1.02] shadow-xs flex flex-col justify-between"
                    :class="slot.liam.statusClass"
                  >
                    <div class="flex justify-between items-start">
                      <span class="truncate font-extrabold">{{ slot.liam.client }}</span>
                      <span class="text-[9px] px-1 rounded bg-black/10">{{ slot.liam.price }}</span>
                    </div>
                    <span class="text-[10px] opacity-80 truncate">{{ slot.liam.service }}</span>
                  </div>
                  <div 
                    v-else 
                    @click="quickBookSlot('Liam', slot.time)"
                    class="h-full rounded-xl border border-dashed border-transparent hover:border-[#AA4184] flex items-center justify-center text-transparent hover:text-[#AA4184] text-[10px] font-bold cursor-pointer"
                  >
                    + Open Chair
                  </div>
                </div>

                <!-- Sam's Column -->
                <div class="col-span-2 p-1.5 relative">
                  <div 
                    v-if="slot.sam"
                    @click="viewAppointment(slot.sam)"
                    class="h-full p-2 rounded-xl text-[11px] font-bold cursor-pointer transition-transform hover:scale-[1.02] shadow-xs flex flex-col justify-between"
                    :class="slot.sam.statusClass"
                  >
                    <div class="flex justify-between items-start">
                      <span class="truncate font-extrabold">{{ slot.sam.client }}</span>
                      <span class="text-[9px] px-1 rounded bg-black/10">{{ slot.sam.price }}</span>
                    </div>
                    <span class="text-[10px] opacity-80 truncate">{{ slot.sam.service }}</span>
                  </div>
                  <div 
                    v-else 
                    @click="quickBookSlot('Sam', slot.time)"
                    class="h-full rounded-xl border border-dashed border-transparent hover:border-[#AA4184] flex items-center justify-center text-transparent hover:text-[#AA4184] text-[10px] font-bold cursor-pointer"
                  >
                    + Open Suite
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        <!-- MODULE 2: POINT OF SALE (POS) & QUICK BILLING -->
        <div v-else-if="activeTab === 'pos'" class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Left: Catalog & Search (8 cols) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Category Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <button 
                v-for="cat in posCategories" 
                :key="cat"
                @click="selectedPosCategory = cat"
                class="px-4 py-2 rounded-xl font-bold transition-all shrink-0 shadow-xs"
                :class="selectedPosCategory === cat 
                  ? 'bg-[#AA4184] text-white' 
                  : 'bg-white text-[#4B5563] border border-[#F0E6EC] hover:bg-[#FAF7F9]'"
              >
                {{ cat }}
              </button>
            </div>

            <!-- Items Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div 
                v-for="item in filteredPosItems" 
                :key="item.id"
                @click="addToCart(item)"
                class="p-4 rounded-2xl bg-white border border-[#F0E6EC] hover:border-[#AA4184] hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-[#FBF0F6] text-[#AA4184] mb-2 inline-block">
                    {{ item.category }}
                  </span>
                  <h4 class="font-bold text-sm text-[#1E293B] group-hover:text-[#AA4184] transition-colors leading-snug">
                    {{ item.name }}
                  </h4>
                  <p class="text-xs text-[#6B7280] mt-1">{{ item.timeOrSize }}</p>
                </div>

                <div class="pt-4 mt-3 border-t border-[#F0E6EC] flex items-center justify-between">
                  <span class="font-black text-base text-[#1E293B]">${{ item.price }}</span>
                  <span class="w-6 h-6 rounded-full bg-[#FAF7F9] group-hover:bg-[#AA4184] group-hover:text-white flex items-center justify-center text-xs transition-colors font-bold">+</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right: Interactive Live Register Cart (4 cols) -->
          <div class="lg:col-span-4 bg-white rounded-2xl border border-[#F0E6EC] p-5 shadow-sm space-y-5 sticky top-6">
            
            <!-- Cart Header & Client Selector -->
            <div class="flex items-center justify-between pb-3 border-b border-[#F0E6EC]">
              <div>
                <h3 class="font-black text-base text-[#1E293B]">Live Checkout Register</h3>
                <p class="text-[11px] text-[#6B7280]">Order #SAL-84920</p>
              </div>
              <button @click="cartItems = []" class="text-xs text-red-500 font-bold hover:underline">Clear</button>
            </div>

            <!-- Client Assignment -->
            <div class="p-2.5 rounded-xl bg-[#FAF7F9] border border-[#F0E6EC] flex items-center justify-between text-xs">
              <div class="flex items-center gap-2">
                <UserCheck class="w-4 h-4 text-[#AA4184]" />
                <div>
                  <p class="font-bold text-[#1E293B]">Sophia Martinez</p>
                  <p class="text-[10px] text-[#6B7280]">VIP Regular &bull; 440 Loyalty Pts</p>
                </div>
              </div>
              <button class="text-[11px] font-bold text-[#AA4184] hover:underline">Change</button>
            </div>

            <!-- Line Items Scroll -->
            <div class="space-y-3 max-h-56 overflow-y-auto pr-1 text-xs">
              <div 
                v-for="(cItem, cIdx) in cartItems" 
                :key="cIdx"
                class="flex items-center justify-between p-2 rounded-xl bg-[#FCFCFB] border border-[#F0E6EC]"
              >
                <div>
                  <p class="font-bold text-[#1E293B]">{{ cItem.name }}</p>
                  <p class="text-[10px] text-[#6B7280]">${{ cItem.price }} &bull; Stylist: {{ cItem.stylist || 'Marco' }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-black text-[#1E293B]">${{ cItem.price }}</span>
                  <button @click="cartItems.splice(cIdx, 1)" class="text-neutral-400 hover:text-red-500 text-sm font-bold">&times;</button>
                </div>
              </div>

              <div v-if="cartItems.length === 0" class="text-center py-8 text-[#6B7280] text-xs">
                Tap any service or product from catalog to add to sale.
              </div>
            </div>

            <!-- Gratuity / Tip Prompt -->
            <div class="pt-2 border-t border-[#F0E6EC]">
              <p class="text-[11px] font-bold text-[#6B7280] uppercase mb-1.5">Add Gratuity / Tip:</p>
              <div class="grid grid-cols-4 gap-1.5 text-xs text-center font-bold">
                <button 
                  v-for="tip in [15, 18, 20, 25]" 
                  :key="tip"
                  @click="selectedTipPercent = tip"
                  class="py-1 rounded-lg border transition-all"
                  :class="selectedTipPercent === tip 
                    ? 'bg-[#AA4184] text-white border-[#AA4184]' 
                    : 'bg-[#FAF7F9] text-[#4B5563] border-[#F0E6EC] hover:bg-white'"
                >
                  {{ tip }}%
                </button>
              </div>
            </div>

            <!-- Bill Totals -->
            <div class="space-y-1.5 pt-2 border-t border-[#F0E6EC] text-xs">
              <div class="flex justify-between text-[#4B5563]">
                <span>Subtotal</span>
                <span class="font-bold text-[#1E293B]">${{ cartSubtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-[#4B5563]">
                <span>Tax (8%)</span>
                <span>${{ cartTax.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-[#4B5563]">
                <span>Gratuity ({{ selectedTipPercent }}%)</span>
                <span class="text-[#AA4184] font-bold">+${{ cartTip.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-base font-black text-[#1E293B] pt-2 border-t border-[#F0E6EC]">
                <span>Total Due</span>
                <span class="text-[#AA4184]">${{ cartGrandTotal.toFixed(2) }}</span>
              </div>
            </div>

            <!-- Checkout Action Buttons -->
            <div class="space-y-2 pt-2">
              <button 
                @click="processPayment('card')"
                class="w-full py-3.5 rounded-xl bg-[#AA4184] text-white font-black text-xs hover:bg-[#AA4184] transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01]"
              >
                <CreditCard class="w-4 h-4" />
                <span>Tap Card / Terminal Payment</span>
              </button>

              <div class="grid grid-cols-2 gap-2 text-xs font-bold">
                <button 
                  @click="processPayment('cash')"
                  class="py-2.5 rounded-xl border border-[#F0E6EC] bg-white text-[#1E293B] hover:bg-[#FAF7F9] transition-colors"
                >
                  💵 Cash Drawer
                </button>
                <button 
                  @click="processPayment('split')"
                  class="py-2.5 rounded-xl border border-[#F0E6EC] bg-white text-[#1E293B] hover:bg-[#FAF7F9] transition-colors"
                >
                  Split / Deposit
                </button>
              </div>
            </div>

          </div>

        </div>

        <!-- MODULE 3: CLIENT DOSSIERS & FORMULA VAULT -->
        <div v-else-if="activeTab === 'clients'" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-black text-[#1E293B]">Client Database & Formula Vault</h2>
              <p class="text-xs text-[#6B7280]">1,480 active client records with formulation histories.</p>
            </div>
            <button class="px-4 py-2 rounded-full bg-[#AA4184] text-white font-bold text-xs hover:bg-[#AA4184] flex items-center gap-1.5 shadow-xs">
              <Plus class="w-3.5 h-3.5" />
              <span>Add New Client</span>
            </button>
          </div>

          <!-- Clients Table -->
          <div class="bg-white rounded-2xl border border-[#F0E6EC] shadow-xs overflow-hidden">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#FCFCFB] text-[#6B7280] font-bold border-b border-[#F0E6EC] uppercase text-[10px] tracking-wider">
                <tr>
                  <th class="p-3.5 pl-4">Client Name</th>
                  <th class="p-3.5">Contact</th>
                  <th class="p-3.5">Preferred Stylist</th>
                  <th class="p-3.5">Color Formula / Notes</th>
                  <th class="p-3.5">Total Spent</th>
                  <th class="p-3.5">Last Visit</th>
                  <th class="p-3.5 text-right pr-4">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F0E6EC] text-[#4B5563]">
                <tr v-for="(client, cIdx) in clientsList" :key="cIdx" class="hover:bg-[#FAF7F9]/60 transition-colors">
                  <td class="p-3.5 pl-4 font-bold text-[#1E293B] flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-full bg-[#FBF0F6] text-[#AA4184] font-black flex items-center justify-center text-xs">
                      {{ client.name[0] }}
                    </div>
                    <span>{{ client.name }}</span>
                    <span v-if="client.isVip" class="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-black">VIP</span>
                  </td>
                  <td class="p-3.5 font-mono text-[#6B7280]">{{ client.phone }}</td>
                  <td class="p-3.5 font-bold text-[#1E293B]">{{ client.stylist }}</td>
                  <td class="p-3.5 max-w-xs truncate font-mono text-[11px] text-[#AA4184] bg-[#FBF0F6]/40 rounded px-2">
                    {{ client.formula }}
                  </td>
                  <td class="p-3.5 font-bold text-[#1E293B]">${{ client.totalSpent }}</td>
                  <td class="p-3.5 text-[#6B7280]">{{ client.lastVisit }}</td>
                  <td class="p-3.5 text-right pr-4 space-x-2">
                    <button @click="openClientDossier(client)" class="text-[#AA4184] font-bold hover:underline">Dossier</button>
                    <button @click="bookForClient(client)" class="text-[#AA4184] font-bold hover:underline">Book</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- MODULE 4: INVENTORY & STOCK LEVELS -->
        <div v-else-if="activeTab === 'inventory'" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-black text-[#1E293B]">Inventory & Backbar Depletion</h2>
              <p class="text-xs text-[#6B7280]">Real-time stock alerts across retail shelf and developer dispensary.</p>
            </div>
            <button class="px-4 py-2 rounded-full bg-[#AA4184] text-white font-bold text-xs hover:bg-[#AA4184] flex items-center gap-1.5 shadow-xs">
              <Plus class="w-3.5 h-3.5" />
              <span>Receive New Stock</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="p-5 rounded-2xl bg-white border border-[#F0E6EC] shadow-xs">
              <p class="text-xs font-bold text-[#6B7280] uppercase">Retail Stock Value</p>
              <p class="text-2xl font-black text-[#1E293B] mt-1">$24,850.00</p>
              <p class="text-[11px] text-emerald-600 font-bold mt-1">✓ 142 SKUs fully stocked</p>
            </div>
            <div class="p-5 rounded-2xl bg-white border border-[#F0E6EC] shadow-xs">
              <p class="text-xs font-bold text-[#6B7280] uppercase">Backbar Chemical Usage</p>
              <p class="text-2xl font-black text-[#1E293B] mt-1">4.2 kg / day</p>
              <p class="text-[11px] text-[#AA4184] font-bold mt-1">Standard dispensary yield</p>
            </div>
            <div class="p-5 rounded-2xl bg-white border border-[#F0E6EC] shadow-xs">
              <p class="text-xs font-bold text-[#6B7280] uppercase">Low Stock Warnings</p>
              <p class="text-2xl font-black text-amber-600 mt-1">3 Items</p>
              <p class="text-[11px] text-amber-700 font-bold mt-1">Needs reorder before Friday</p>
            </div>
          </div>

          <!-- Inventory List -->
          <div class="bg-white rounded-2xl border border-[#F0E6EC] shadow-xs overflow-hidden">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#FCFCFB] text-[#6B7280] font-bold border-b border-[#F0E6EC] uppercase text-[10px] tracking-wider">
                <tr>
                  <th class="p-3.5 pl-4">Product Name</th>
                  <th class="p-3.5">Category</th>
                  <th class="p-3.5">SKU / Barcode</th>
                  <th class="p-3.5">Units in Stock</th>
                  <th class="p-3.5">Unit Retail</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 text-right pr-4">Quick Adjust</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F0E6EC] text-[#4B5563]">
                <tr v-for="(prod, pIdx) in inventoryList" :key="pIdx" class="hover:bg-[#FAF7F9]/60 transition-colors">
                  <td class="p-3.5 pl-4 font-bold text-[#1E293B]">{{ prod.name }}</td>
                  <td class="p-3.5">{{ prod.category }}</td>
                  <td class="p-3.5 font-mono text-[#6B7280]">{{ prod.sku }}</td>
                  <td class="p-3.5 font-bold" :class="prod.stock <= prod.min ? 'text-amber-600' : 'text-[#1E293B]'">
                    {{ prod.stock }} units
                  </td>
                  <td class="p-3.5 font-bold">${{ prod.price }}</td>
                  <td class="p-3.5">
                    <span 
                      class="px-2 py-0.5 rounded-full text-[9px] font-bold"
                      :class="prod.stock <= prod.min ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'"
                    >
                      {{ prod.stock <= prod.min ? 'Low Stock' : 'Optimal' }}
                    </span>
                  </td>
                  <td class="p-3.5 text-right pr-4 space-x-1.5 font-bold font-mono">
                    <button @click="prod.stock--" class="px-2 py-0.5 rounded bg-[#FAF7F9] border hover:bg-white text-xs">-</button>
                    <button @click="prod.stock++" class="px-2 py-0.5 rounded bg-[#FAF7F9] border hover:bg-white text-xs">+</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- MODULE 5: STAFF ROTAS & COMMISSIONS -->
        <div v-else-if="activeTab === 'staff'" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-black text-[#1E293B]">Staff Rota, Commissions & Tips</h2>
              <p class="text-xs text-[#6B7280]">Daily chair yield and calculated payroll bonuses.</p>
            </div>
            <button class="px-4 py-2 rounded-full bg-[#AA4184] text-white font-bold text-xs hover:bg-[#AA4184] flex items-center gap-1.5 shadow-xs">
              <Plus class="w-3.5 h-3.5" />
              <span>Add Staff Profile</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div 
              v-for="(st, stIdx) in staffRoster" 
              :key="stIdx"
              class="p-5 rounded-2xl bg-white border border-[#F0E6EC] shadow-xs space-y-4"
            >
              <div class="flex items-center gap-3">
                <img :src="st.avatar" :alt="st.name" class="w-10 h-10 rounded-full object-cover ring-2 ring-[#AA4184]" />
                <div>
                  <h4 class="font-bold text-sm text-[#1E293B]">{{ st.name }}</h4>
                  <p class="text-[11px] text-[#6B7280]">{{ st.role }}</p>
                </div>
              </div>

              <div class="space-y-2 text-xs border-t border-[#F0E6EC] pt-3">
                <div class="flex justify-between text-[#4B5563]">
                  <span>Today's Sales</span>
                  <span class="font-bold text-[#1E293B]">${{ st.sales }}</span>
                </div>
                <div class="flex justify-between text-[#4B5563]">
                  <span>Commission Rate</span>
                  <span class="font-bold text-[#AA4184]">{{ st.commissionRate }}%</span>
                </div>
                <div class="flex justify-between text-[#4B5563]">
                  <span>Tips Collected</span>
                  <span class="font-bold text-emerald-600">${{ st.tips }}</span>
                </div>
                <div class="flex justify-between text-[#1E293B] font-black pt-2 border-t border-[#F0E6EC]">
                  <span>Est. Daily Payout</span>
                  <span class="text-[#AA4184]">${{ st.estimatedPayout }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>

    <!-- Booking Modal Simulator -->
    <div 
      v-if="bookingModalOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50"
    >
      <div class="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-[#F0E6EC] space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-[#F0E6EC]">
          <h3 class="font-black text-base text-[#1E293B]">Create Salon Appointment</h3>
          <button @click="bookingModalOpen = false" class="text-xl font-bold text-neutral-400 hover:text-neutral-800">&times;</button>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-[#1E293B] mb-1">Select Guest / Client:</label>
            <input 
              v-model="newBooking.client"
              type="text" 
              placeholder="e.g. Jessica Alba" 
              class="w-full p-2.5 rounded-xl border border-[#F0E6EC] focus:border-[#AA4184] focus:outline-none" 
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-[#1E293B] mb-1">Stylist / Chair:</label>
              <select v-model="newBooking.stylist" class="w-full p-2.5 rounded-xl border border-[#F0E6EC] focus:border-[#AA4184] focus:outline-none bg-white">
                <option value="Marco">Marco (Barber)</option>
                <option value="Chloe">Chloe (Colorist)</option>
                <option value="Liam">Liam (Stylist)</option>
                <option value="Sam">Sam (Spa Suite)</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-[#1E293B] mb-1">Time Slot:</label>
              <select v-model="newBooking.time" class="w-full p-2.5 rounded-xl border border-[#F0E6EC] focus:border-[#AA4184] focus:outline-none bg-white">
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-[#1E293B] mb-1">Select Service:</label>
            <select v-model="newBooking.service" class="w-full p-2.5 rounded-xl border border-[#F0E6EC] focus:border-[#AA4184] focus:outline-none bg-white">
              <option value="Precision Haircut & Style ($65)">Precision Haircut & Style ($65)</option>
              <option value="Balayage & Gloss Toner ($220)">Balayage & Gloss Toner ($220)</option>
              <option value="Hot Shave & Beard Trim ($45)">Hot Shave & Beard Trim ($45)</option>
              <option value="Hydrating Facial & Mask ($110)">Hydrating Facial & Mask ($110)</option>
            </select>
          </div>
        </div>

        <div class="pt-3 flex gap-2">
          <button 
            @click="bookingModalOpen = false" 
            class="flex-1 py-2.5 rounded-full border border-[#F0E6EC] text-xs font-bold hover:bg-[#FAF7F9]"
          >
            Cancel
          </button>
          <button 
            @click="confirmBooking" 
            class="flex-1 py-2.5 rounded-full bg-[#AA4184] text-white text-xs font-bold hover:bg-[#AA4184]"
          >
            Save to Master Calendar
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  Calendar, CreditCard, Users, Package, 
  UserCheck, Plus, Search, Bell, MapPin, 
  ChevronDown, ChevronLeft, ChevronRight 
} from 'lucide-vue-next';

const activeTab = ref('calendar');
const searchQuery = ref('');
const selectedPosCategory = ref('All');
const selectedTipPercent = ref(18);
const bookingModalOpen = ref(false);

const navModules = [
  { id: 'calendar', label: 'Master Calendar', icon: Calendar, badge: 'Live', badgeColor: 'bg-emerald-100 text-emerald-800' },
  { id: 'pos', label: 'Point of Sale (POS)', icon: CreditCard, badge: null },
  { id: 'clients', label: 'Client Vault & CRM', icon: Users, badge: '1.4k' },
  { id: 'inventory', label: 'Inventory & Backbar', icon: Package, badge: '3 Low', badgeColor: 'bg-amber-100 text-amber-800' },
  { id: 'staff', label: 'Staff & Commissions', icon: UserCheck, badge: null }
];

const stylists = [
  { name: 'Marco', color: '#AA4184', active: true },
  { name: 'Chloe', color: '#923470', active: true },
  { name: 'Liam', color: '#AA4184', active: true },
  { name: 'Sam', color: '#D97706', active: true }
];

/* Interactive Master Schedule Grid */
const timeSlots = ref([
  {
    time: '9:00 AM',
    marco: { client: 'David Miller', service: 'Fade & Lineup', price: '$35', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    chloe: { client: 'Emma Watson', service: 'Full Balayage', price: '$225', isProcessing: true, statusClass: 'bg-[#FAF7F9] border border-[#F0E6EC] text-[#1E293B]' },
    liam: null,
    sam: null
  },
  {
    time: '10:00 AM',
    marco: { client: 'Marcus Vance', service: 'Hot Shave', price: '$40', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    chloe: { client: 'Express Cut (Gap)', service: 'Blowout', price: '$55', statusClass: 'bg-emerald-50 border border-emerald-200 text-emerald-800' },
    liam: { client: 'Sophia Lauren', service: 'Layered Cut', price: '$75', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    sam: { client: 'Elena Rostova', service: 'Swedish 60m', price: '$120', statusClass: 'bg-purple-50 border border-purple-200 text-purple-800' }
  },
  {
    time: '11:00 AM',
    marco: null,
    chloe: { client: 'Emma (Wash & Tone)', service: 'Gloss Toner', price: '$45', statusClass: 'bg-[#FAF7F9] border border-[#F0E6EC] text-[#1E293B]' },
    liam: { client: 'Lucas Gray', service: 'Beard Trim', price: '$30', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    sam: null
  },
  {
    time: '12:00 PM',
    marco: { client: 'Tyler Durden', service: 'Buzz & Fade', price: '$35', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    chloe: null,
    liam: { client: 'Olivia Wilde', service: 'Silk Press', price: '$95', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    sam: { client: 'Sarah Jenkins', service: 'Hydrafacial', price: '$150', statusClass: 'bg-purple-50 border border-purple-200 text-purple-800' }
  },
  {
    time: '1:00 PM',
    marco: null,
    chloe: { client: 'Rachel Green', service: 'Root Touchup', price: '$90', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    liam: null,
    sam: null
  },
  {
    time: '2:00 PM',
    marco: { client: 'Alex Turner', service: 'Signature Fade', price: '$45', statusClass: 'bg-[#FBF0F6] border border-[#AA4184]/30 text-[#AA4184]' },
    chloe: { client: 'Nina Dobrev', service: 'Keratin Infusion', price: '$260', statusClass: 'bg-[#FAF7F9] border border-[#F0E6EC] text-[#1E293B]' },
    liam: { client: 'Zendaya Coleman', service: 'Gloss Blowout', price: '$85', statusClass: 'bg-emerald-50 border border-emerald-200 text-emerald-800' },
    sam: { client: 'Jessica Alba', service: 'Deep Tissue', price: '$140', statusClass: 'bg-purple-50 border border-purple-200 text-purple-800' }
  }
]);

/* POS Catalog */
const posCategories = ['All', 'Hair Services', 'Color & Chemical', 'Barbershop', 'Spa Treatments', 'Retail Products'];

const posItems = [
  { id: 1, name: 'Precision Haircut & Blowdry', category: 'Hair Services', timeOrSize: '45 mins', price: 65 },
  { id: 2, name: 'Full Custom Balayage', category: 'Color & Chemical', timeOrSize: '150 mins', price: 220 },
  { id: 3, name: 'Skin Fade & Beard Sculpt', category: 'Barbershop', timeOrSize: '35 mins', price: 45 },
  { id: 4, name: 'Hot Towel Straight Razor Shave', category: 'Barbershop', timeOrSize: '25 mins', price: 35 },
  { id: 5, name: 'Deep Tissue Therapeutic 60m', category: 'Spa Treatments', timeOrSize: '60 mins', price: 125 },
  { id: 6, name: 'Hydrating Clinical Facial', category: 'Spa Treatments', timeOrSize: '50 mins', price: 110 },
  { id: 7, name: 'Oribe Gold Lust Repair Shampoo', category: 'Retail Products', timeOrSize: '250 ml', price: 49 },
  { id: 8, name: 'Kérastase Elixir Ultime Hair Oil', category: 'Retail Products', timeOrSize: '100 ml', price: 58 },
  { id: 9, name: 'Aesop Post-Shave Soothing Lotion', category: 'Retail Products', timeOrSize: '60 ml', price: 55 }
];

const filteredPosItems = computed(() => {
  if (selectedPosCategory.value === 'All') return posItems;
  return posItems.filter(i => i.category === selectedPosCategory.value);
});

/* Cart State */
const cartItems = ref([
  { id: 2, name: 'Full Custom Balayage', price: 220, stylist: 'Chloe' },
  { id: 8, name: 'Kérastase Elixir Ultime Hair Oil', price: 58, stylist: 'Chloe' }
]);

const cartSubtotal = computed(() => cartItems.value.reduce((acc, curr) => acc + curr.price, 0));
const cartTax = computed(() => cartSubtotal.value * 0.08);
const cartTip = computed(() => (cartSubtotal.value * selectedTipPercent.value) / 100);
const cartGrandTotal = computed(() => cartSubtotal.value + cartTax.value + cartTip.value);

const addToCart = (item) => {
  cartItems.value.push({ ...item, stylist: 'Chloe' });
};

const processPayment = (type) => {
  if (cartItems.value.length === 0) {
    alert('Please add items to register first!');
    return;
  }
  alert(`Payment of $${cartGrandTotal.value.toFixed(2)} completed successfully via ${type.toUpperCase()}! Receipt sent to guest's phone.`);
  cartItems.value = [];
};

/* Client Vault */
const clientsList = [
  { name: 'Sophia Martinez', phone: '+1 (555) 392-4910', stylist: 'Chloe Vance', formula: 'Wella Koleston 7/1 + 20vol (1:1), 35m', totalSpent: '1,420', lastVisit: 'Yesterday', isVip: true },
  { name: 'David Miller', phone: '+1 (555) 849-2041', stylist: 'Marco Rossi', formula: 'Skin fade, #1.5 on top, natural hairline', totalSpent: '640', lastVisit: 'Today', isVip: false },
  { name: 'Emma Watson', phone: '+1 (555) 203-9182', stylist: 'Liam Gray', formula: 'Redken Shades EQ 09P + 09B + Clear', totalSpent: '2,890', lastVisit: '3 days ago', isVip: true },
  { name: 'Elena Rostova', phone: '+1 (555) 771-4920', stylist: 'Sam Patel', formula: 'Lavender essential oil, medium pressure', totalSpent: '980', lastVisit: '1 week ago', isVip: false }
];

/* Inventory */
const inventoryList = ref([
  { name: 'Oribe Gold Lust Repair Shampoo', category: 'Retail Shelf', sku: 'ORB-GL-250', stock: 18, min: 5, price: 49 },
  { name: 'Kérastase Elixir Ultime Hair Oil', category: 'Retail Shelf', sku: 'KER-ELX-100', stock: 24, min: 8, price: 58 },
  { name: 'Wella Blondor Multi Blonde Bleach 800g', category: 'Backbar Dispensary', sku: 'WEL-BLD-800', stock: 2, min: 4, price: 42 },
  { name: 'Redken Shades EQ Processing Solution 1L', category: 'Backbar Dispensary', sku: 'RED-PRC-1000', stock: 1, min: 3, price: 28 },
  { name: 'Aesop Post-Shave Hydrating Balm', category: 'Barbershop Retail', sku: 'AES-SHV-060', stock: 12, min: 4, price: 55 }
]);

/* Staff Roster */
const staffRoster = [
  { name: 'Marco Rossi', role: 'Master Barber', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80', sales: 420, commissionRate: 55, tips: 95, estimatedPayout: 326 },
  { name: 'Chloe Vance', role: 'Lead Colorist', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80', sales: 840, commissionRate: 50, tips: 160, estimatedPayout: 580 },
  { name: 'Liam Gray', role: 'Senior Stylist', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80', sales: 510, commissionRate: 48, tips: 110, estimatedPayout: 354 },
  { name: 'Sam Patel', role: 'Spa Therapist', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80', sales: 380, commissionRate: 50, tips: 80, estimatedPayout: 270 }
];

/* New Booking State */
const newBooking = ref({
  client: '',
  stylist: 'Marco',
  time: '11:00 AM',
  service: 'Precision Haircut & Style ($65)'
});

const openNewBookingModal = () => {
  bookingModalOpen.value = true;
};

const quickBookSlot = (stylist, time) => {
  newBooking.value.stylist = stylist;
  newBooking.value.time = time;
  bookingModalOpen.value = true;
};

const confirmBooking = () => {
  if (!newBooking.value.client) {
    alert('Please enter client name');
    return;
  }
  alert(`Appointment created for ${newBooking.value.client} with ${newBooking.value.stylist} at ${newBooking.value.time}!`);
  bookingModalOpen.value = false;
};

const viewAppointment = (app) => {
  alert(`Viewing: ${app.client} - ${app.service} (${app.price})`);
};

const openClientDossier = (client) => {
  alert(`Client: ${client.name}\nFormula: ${client.formula}\nTotal Spent: $${client.totalSpent}`);
};

const bookForClient = (client) => {
  newBooking.value.client = client.name;
  newBooking.value.stylist = client.stylist.split(' ')[0];
  bookingModalOpen.value = true;
};
</script>

