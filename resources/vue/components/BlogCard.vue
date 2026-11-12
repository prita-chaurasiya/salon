<template>
  <div class="relative overflow-hidden rounded-2xl bg-white border border-[#ECECEC] transition-all duration-300 hover:border-[#AA4184] hover:shadow-xl hover:-translate-y-1 group">
    <div class="relative aspect-[16/10] overflow-hidden bg-[#F8F8F8]">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#111111]/85 backdrop-blur-sm text-[#AA4184] border border-white/10">
          {{ category }}
        </span>
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-center gap-3 text-xs text-[#2B2B2B]/70 font-medium mb-3">
        <span>{{ date }}</span>
        <span>•</span>
        <span>{{ readTime }} min read</span>
      </div>

      <h3 class="text-xl font-bold text-[#111111] group-hover:text-[#AA4184] transition-colors leading-snug mb-3">
        {{ title }}
      </h3>

      <p class="text-xs md:text-sm text-[#2B2B2B]/75 line-clamp-2 leading-relaxed mb-6 font-normal">
        {{ excerpt }}
      </p>

      <div class="pt-4 border-t border-[#ECECEC] flex items-center justify-between text-xs font-semibold text-[#111111]">
        <div class="flex items-center gap-2">
          <img :src="authorAvatar" class="w-6 h-6 rounded-full object-cover" />
          <span>{{ author }}</span>
        </div>
        <span class="group-hover:translate-x-1 transition-transform text-[#AA4184]">Read Guide →</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'Salon Operations'
  },
  date: {
    type: String,
    default: 'October 24, 2026'
  },
  readTime: {
    type: [Number, String],
    default: '5'
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  author: {
    type: String,
    default: 'Aurelia Vance'
  },
  authorAvatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80'
  }
});
</script>

