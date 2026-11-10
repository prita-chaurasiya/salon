<template>
  <div class="min-h-screen bg-white text-[#140B28] flex flex-col justify-between">
    <Navbar />

    <main class="flex-grow pt-32 pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-[#E11D74]">Direct Line</span>
          <h1 class="text-3xl sm:text-5xl font-black text-[#140B28] mt-2 mb-4">Talk to Our Salon Consultants</h1>
          <p class="text-sm text-[#554C68] max-w-xl mx-auto">
            Whether you're planning a multi-location expansion or need hardware guidance, we are here.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div class="p-6 rounded-2xl bg-[#FAF8FE] border border-[#E8EAF2]">
            <h4 class="font-bold text-sm text-[#140B28]">Headquarters</h4>
            <p class="text-xs text-[#554C68] mt-1">575 Fifth Avenue, 28th Floor<br>New York, NY 10017</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#FAF8FE] border border-[#E8EAF2]">
            <h4 class="font-bold text-sm text-[#140B28]">Support Desk</h4>
            <p class="text-xs text-[#554C68] mt-1">concierge@salonist.io<br>Average reply: 4 minutes</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#FAF8FE] border border-[#E8EAF2]">
            <h4 class="font-bold text-sm text-[#140B28]">Telephone</h4>
            <p class="text-xs text-[#554C68] mt-1">+1 (800) 840-SALON<br>Mon-Sun 7am-11pm EST</p>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>
