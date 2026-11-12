<template>
  <div class="rounded-3xl bg-[#111111] text-white border border-neutral-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
    <!-- Subtle luxury glow -->
    <div class="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#AA4184]/10 blur-3xl pointer-events-none"></div>

    <div class="relative z-10">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <span class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#AA4184] text-[#111111] mb-2">
            Live Interactive Simulator
          </span>
          <h3 class="text-xl sm:text-2xl font-bold text-white">Experience Salonist Chairside Checkout</h3>
          <p class="text-xs text-neutral-400 mt-1">Tap items, select tip percentage, and observe instant commission & tax reconciliation.</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-xs text-emerald-400 font-mono font-semibold">Terminal #01 (Online)</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
        
        <!-- Left: Quick Service & Retail Tap Selector (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">1. Add Services to Chair</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <button 
                v-for="service in availableServices"
                :key="service.id"
                @click="addItem(service)"
                class="p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between"
                :class="isItemInCart(service.id) ? 'border-[#AA4184] bg-[#AA4184]/10 text-white' : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700'"
              >
                <div class="font-bold text-white">{{ service.name }}</div>
                <div class="flex justify-between items-center mt-2 text-[11px]">
                  <span class="text-[#AA4184] font-semibold">${{ service.price }}</span>
                  <span class="text-neutral-500">{{ service.duration }}m</span>
                </div>
              </button>
            </div>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">2. Add Boutique Retail Products</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <button 
                v-for="product in availableProducts"
                :key="product.id"
                @click="addItem(product)"
                class="p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between"
                :class="isItemInCart(product.id) ? 'border-[#AA4184] bg-[#AA4184]/10 text-white' : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700'"
              >
                <div class="font-bold text-white">{{ product.name }}</div>
                <div class="flex justify-between items-center mt-2 text-[11px]">
                  <span class="text-[#AA4184] font-semibold">${{ product.price }}</span>
                  <span class="text-emerald-400 text-[10px]">Stock: {{ product.stock }}</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Stylist attribution selection -->
          <div class="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
            <div>
              <span class="text-neutral-400 block text-[10px] uppercase font-bold">Attributed Service Provider</span>
              <span class="font-bold text-white mt-0.5 inline-block">Jean-Luc Dupont (Master Stylist • Level 5)</span>
            </div>
            <span class="text-[#AA4184] font-semibold text-xs">Tier: 50% Service / 15% Retail</span>
          </div>

        </div>

        <!-- Right: Real-time Register Screen (5 cols) -->
        <div class="lg:col-span-5 bg-white text-[#111111] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-[#ECECEC]">
              <div>
                <span class="text-[10px] uppercase font-bold text-neutral-400">Guest Order Summary</span>
                <p class="text-xs font-bold text-[#111111]">Claire Fontaine (VIP Diamond)</p>
              </div>
              <button 
                v-if="cart.length > 0"
                @click="clearCart" 
                class="text-[10px] text-red-600 hover:underline font-semibold"
              >
                Clear All
              </button>
            </div>

            <!-- Cart items list -->
            <div class="py-4 space-y-2.5 min-h-[140px] max-h-[180px] overflow-y-auto">
              <div 
                v-if="cart.length === 0" 
                class="text-center py-8 text-neutral-400 text-xs flex flex-col items-center justify-center gap-2"
              >
                <span>Tap services or retail products on the left to test checkout.</span>
              </div>

              <div 
                v-for="item in cart" 
                :key="item.id"
                class="flex items-center justify-between p-2 rounded-lg bg-[#F8F8F8] border border-[#ECECEC] text-xs"
              >
                <div class="pr-2">
                  <p class="font-bold text-[#111111] text-[11px] leading-tight">{{ item.name }}</p>
                  <span class="text-[10px] text-neutral-500 uppercase">{{ item.type }}</span>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                  <span class="font-bold text-xs">${{ item.price }}</span>
                  <button @click="removeItem(item.id)" class="text-neutral-400 hover:text-red-600 font-bold text-xs">✕</button>
                </div>
              </div>
            </div>

            <!-- Tipping row -->
            <div class="pt-3 border-t border-[#ECECEC]">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[11px] font-bold text-[#111111]">Gratuity Choice:</span>
                <span class="text-xs font-bold text-[#AA4184]">${{ tipAmount.toFixed(2) }}</span>
              </div>
              <div class="grid grid-cols-4 gap-1.5 text-xs">
                <button 
                  v-for="tip in tipOptions" 
                  :key="tip"
                  @click="selectedTipPercent = tip"
                  class="py-1 rounded border text-center font-bold text-[11px] transition-colors"
                  :class="selectedTipPercent === tip ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#F8F8F8] text-[#111111] border-[#ECECEC] hover:bg-neutral-200'"
                >
                  {{ tip }}%
                </button>
              </div>
            </div>

            <!-- Financial tally -->
            <div class="pt-3 mt-3 border-t border-[#ECECEC] space-y-1 text-xs">
              <div class="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span class="font-semibold">${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-neutral-600">
                <span>VIP 10% Diamond Privilege</span>
                <span class="font-semibold text-emerald-600">-${{ vipDiscount.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-neutral-600">
                <span>Estimated Tax (8.875%)</span>
                <span>${{ tax.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-neutral-600">
                <span>Gratuity</span>
                <span>${{ tipAmount.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between items-baseline pt-2 border-t border-[#ECECEC] text-[#111111]">
                <span class="font-bold text-sm">Total Charge</span>
                <span class="font-black text-2xl">${{ grandTotal.toFixed(2) }}</span>
              </div>
            </div>

          </div>

          <!-- Payout split preview & action -->
          <div class="mt-4 pt-3 border-t border-[#ECECEC]">
            <div class="p-2.5 rounded-lg bg-[#F8F8F8] border border-[#ECECEC] text-[10px] text-neutral-600 flex justify-between mb-3">
              <span>Stylist Commission: <strong class="text-[#111111]">${{ estimatedCommission.toFixed(2) }}</strong></span>
              <span>Salon Net Margin: <strong class="text-[#111111]">${{ (subtotal - vipDiscount - estimatedCommission).toFixed(2) }}</strong></span>
            </div>

            <button 
              @click="handleCharge"
              :disabled="cart.length === 0"
              class="w-full py-3 rounded-xl bg-[#111111] text-white font-bold text-xs hover:bg-[#AA4184] hover:text-[#111111] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span>{{ charged ? 'Payment Processed via Apple Pay!' : 'Tap to Pay / Authorize Card' }}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const availableServices = [
  { id: 's1', name: 'Signature Balayage & Glaze', price: 295, duration: 120, type: 'service' },
  { id: 's2', name: 'Precision Haircut & Blowout', price: 125, duration: 60, type: 'service' },
  { id: 's3', name: 'Olaplex Bond Scalp Therapy', price: 65, duration: 30, type: 'service' },
  { id: 's4', name: 'Botanical Gloss Refresh', price: 85, duration: 45, type: 'service' },
  { id: 's5', name: 'Full Head Foils & Tone', price: 340, duration: 150, type: 'service' },
  { id: 's6', name: 'Hydra-Facial Express', price: 145, duration: 45, type: 'service' },
];

const availableProducts = [
  { id: 'p1', name: 'Oribe Gold Lust Oil 100ml', price: 59, stock: 14, type: 'retail' },
  { id: 'p2', name: 'Kérastase Chronologiste Mask', price: 78, stock: 8, type: 'retail' },
  { id: 'p3', name: 'Davines OI All-in-One Milk', price: 42, stock: 22, type: 'retail' },
  { id: 'p4', name: 'Aveda Botanical Repair Trio', price: 95, stock: 5, type: 'retail' },
  { id: 'p5', name: 'Pureology Hydrate Shampoo', price: 36, stock: 19, type: 'retail' },
  { id: 'p6', name: 'Silk Sleep Pillowcase (Gold)', price: 89, stock: 7, type: 'retail' },
];

const cart = ref([
  { id: 's1', name: 'Signature Balayage & Glaze', price: 295, type: 'service' },
  { id: 'p1', name: 'Oribe Gold Lust Oil 100ml', price: 59, type: 'retail' },
]);

const tipOptions = [15, 18, 20, 25];
const selectedTipPercent = ref(20);
const charged = ref(false);

const isItemInCart = (id) => cart.value.some(item => item.id === id);

const addItem = (item) => {
  if (isItemInCart(item.id)) {
    cart.value = cart.value.filter(i => i.id !== item.id);
  } else {
    cart.value.push({ id: item.id, name: item.name, price: item.price, type: item.type });
  }
};

const removeItem = (id) => {
  cart.value = cart.value.filter(item => item.id !== id);
};

const clearCart = () => {
  cart.value = [];
};

const subtotal = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0);
});

const vipDiscount = computed(() => {
  return subtotal.value > 0 ? subtotal.value * 0.10 : 0;
});

const tax = computed(() => {
  const taxable = subtotal.value - vipDiscount.value;
  return taxable > 0 ? taxable * 0.08875 : 0;
});

const tipAmount = computed(() => {
  const serviceTotal = cart.value
    .filter(i => i.type === 'service')
    .reduce((sum, i) => sum + i.price, 0);
  return (serviceTotal * selectedTipPercent.value) / 100;
});

const grandTotal = computed(() => {
  const base = subtotal.value - vipDiscount.value + tax.value + tipAmount.value;
  return base > 0 ? base : 0;
});

const estimatedCommission = computed(() => {
  const services = cart.value.filter(i => i.type === 'service').reduce((s, i) => s + i.price, 0);
  const retail = cart.value.filter(i => i.type === 'retail').reduce((s, i) => s + i.price, 0);
  // 50% on services + 15% on retail
  return (services * 0.50) + (retail * 0.15);
});

const handleCharge = () => {
  charged.value = true;
  setTimeout(() => {
    charged.value = false;
  }, 2500);
};
</script>

