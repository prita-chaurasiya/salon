<template>
  <div class="min-h-screen bg-[#FAF8FE] text-[#140B28] flex flex-col justify-between">
    <Navbar />

    <main class="flex-grow pt-32 pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8EAF2] shadow-xl">
          <span class="text-xs font-bold uppercase tracking-wider text-[#E11D74]">Executive Concierge</span>
          <h1 class="text-3xl font-extrabold text-[#140B28] mt-2 mb-4">Book a Customized Demonstration</h1>
          <p class="text-sm text-[#554C68] mb-8 leading-relaxed">
            See how leading salons eliminate no-shows and increase average guest retail order value.
          </p>
          <form @submit.prevent="booked = true" class="space-y-4 text-xs">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-[#140B28] mb-1">First Name</label>
                <input required type="text" class="w-full p-3 rounded-xl border border-[#E8EAF2] bg-[#FAF8FE] focus:bg-white focus:border-[#681FA8] outline-none" />
              </div>
              <div>
                <label class="block font-bold text-[#140B28] mb-1">Last Name</label>
                <input required type="text" class="w-full p-3 rounded-xl border border-[#E8EAF2] bg-[#FAF8FE] focus:bg-white focus:border-[#681FA8] outline-none" />
              </div>
            </div>
            <div>
              <label class="block font-bold text-[#140B28] mb-1">Work Email</label>
              <input required type="email" class="w-full p-3 rounded-xl border border-[#E8EAF2] bg-[#FAF8FE] focus:bg-white focus:border-[#681FA8] outline-none" />
            </div>
            <div>
              <label class="block font-bold text-[#140B28] mb-1">Current Salon Software</label>
              <select class="w-full p-3 rounded-xl border border-[#E8EAF2] bg-[#FAF8FE] focus:bg-white focus:border-[#681FA8] outline-none">
                <option>Vagaro</option>
                <option>Phorest</option>
                <option>Fresha</option>
                <option>Boulevard</option>
                <option>Mindbody</option>
                <option>Square Appointments</option>
                <option>Pen & Paper / Other</option>
              </select>
            </div>
            <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-[#681FA8] via-[#E11D74] to-[#F97316] text-white font-bold text-xs hover:opacity-95 shadow-lg transition-all">
              {{ booked ? 'Demo Confirmed! Check Your Inbox' : 'Schedule My Concierge Demo' }}
            </button>
          </form>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

const booked = ref(false);
</script>
