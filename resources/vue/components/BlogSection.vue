<template>
  <section class="py-24 bg-[#F8F8F8] border-b border-[#ECECEC]" id="blog">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#ECECEC] bg-white text-[#C8A96A] shadow-sm">
            Operational Intelligence
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            The Aurum Journal.
          </h2>
          <p class="text-base text-[#2B2B2B]/75 mt-2 max-w-xl font-normal">
            Actionable strategies, salon profitability benchmarks, tax optimizations, and guest retention insights from top industry leaders.
          </p>
        </div>

        <a 
          href="#all-articles" 
          class="px-5 py-2.5 rounded-xl border border-[#ECECEC] bg-white text-xs font-semibold text-[#111111] hover:bg-neutral-100 transition-colors self-start md:self-end"
        >
          View All 84 Articles →
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BlogCard
          v-for="(post, idx) in posts"
          :key="idx"
          :title="post.title"
          :excerpt="post.excerpt"
          :category="post.category"
          :date="post.date"
          :read-time="post.readTime"
          :image="post.image"
          :author="post.author"
          :author-avatar="post.authorAvatar"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import BlogCard from './BlogCard.vue';

const posts = [
  {
    title: "How to Increase Chair Yield by 34% Using Processing Gap Scheduling",
    excerpt: "Why the traditional 'one stylist, one client' model leaves hundreds of thousands of dollars on the salon floor every year, and how automated processing buffers transform profitability.",
    category: "Salon Operations",
    date: "October 18, 2026",
    readTime: "6",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    author: "Dominic Laurent",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80"
  },
  {
    title: "The Death of Clunky Salon POS: Why Discretion is the New Luxury",
    excerpt: "Modern luxury salon guests despise bright iPad swivel stands demanding 25% tips in a crowded reception room. Here is the blueprint for silent checkout etiquette.",
    category: "Guest Experience",
    date: "October 04, 2026",
    readTime: "8",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    author: "Aurelia Vance",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
  },
  {
    title: "Sliding Commission Ladders: Designing Fair Stylist Compensation Plans",
    excerpt: "How top salons retain their best senior colorists without eating their bottom line. A deep dive into service vs retail tiers and booth rental hybrid models.",
    category: "Compensation & Team",
    date: "September 27, 2026",
    readTime: "11",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    author: "Elena Rostova",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
  }
];
</script>

