<template>
  <div class="min-h-screen bg-white text-[#140B28] flex flex-col justify-between">
    <Navbar />

    <main class="flex-grow pt-28 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureGrid />
        <DetailedFeatures />
        <ProductShowcase />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import FeatureGrid from '../components/FeatureGrid.vue';
import DetailedFeatures from '../components/DetailedFeatures.vue';
import ProductShowcase from '../components/ProductShowcase.vue';
import Footer from '../components/Footer.vue';
</script>
