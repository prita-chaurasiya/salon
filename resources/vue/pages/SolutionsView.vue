<template>
  <div class="min-h-screen bg-white text-[#140B28] flex flex-col justify-between">
    <Navbar />

    <main class="flex-grow pt-28 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Industries />
        <WhyChooseUs />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Industries from '../components/Industries.vue';
import WhyChooseUs from '../components/WhyChooseUs.vue';
import Footer from '../components/Footer.vue';
</script>
