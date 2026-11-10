<template>
  <section class="py-24 bg-gradient-to-b from-white to-[#F8F9FE] border-b border-[#E8EAF2]" id="faq">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column Title & Subtitle matching Screenshot 5 -->
        <div class="lg:col-span-5">
          <span class="inline-block px-3.5 py-1 rounded-full bg-[#EFE9FA] text-[#681FA8] font-bold text-xs uppercase tracking-wider mb-4">
            Answers & Clarity
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#140B28] tracking-tight leading-tight mb-4">
            Frequently Asked <br class="hidden sm:inline" />
            <span class="bg-gradient-to-r from-[#681FA8] to-[#E11D74] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p class="text-sm sm:text-base text-[#554C68] leading-relaxed max-w-md">
            Need clarity? Our FAQ section covers everything you need to make an informed decision.
          </p>

          <div class="mt-8 p-6 rounded-2xl bg-[#FAF5EE] border border-[#EBE3D5]">
            <h4 class="text-sm font-bold text-[#140B28] mb-1">Still have questions?</h4>
            <p class="text-xs text-[#554C68] mb-3">Our team is available 24/7 to help you transition smoothly.</p>
            <a 
              href="#contact"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D74] hover:text-[#681FA8] transition-colors"
            >
              <span>Speak with a salon consultant</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Right Column Pill Accordion List matching Screenshot 5 -->
        <div class="lg:col-span-7 space-y-3.5">
          <div 
            v-for="(faq, idx) in salonistFaqs" 
            :key="idx"
            class="rounded-full bg-white border border-[#E8EAF2] hover:border-[#681FA8]/40 transition-all duration-200 overflow-hidden shadow-xs"
            :class="{ '!rounded-3xl border-[#681FA8]/30 shadow-md': openIdx === idx }"
          >
            <button 
              @click="toggle(idx)"
              class="w-full py-4 sm:py-4.5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-bold text-[#140B28] text-sm sm:text-[15px]"
            >
              <span>{{ faq.question }}</span>
              <span class="w-8 h-8 rounded-full bg-[#F8F9FE] flex items-center justify-center text-[#140B28] shrink-0 font-light text-xl transition-transform" :class="{ 'rotate-45 text-[#E11D74]': openIdx === idx }">
                +
              </span>
            </button>

            <!-- Expanded Answer -->
            <div 
              v-show="openIdx === idx"
              class="px-6 sm:px-8 pb-5 text-xs sm:text-[13px] text-[#554C68] leading-relaxed border-t border-neutral-100 pt-3"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const openIdx = ref(0);

const toggle = (idx) => {
  openIdx.value = openIdx.value === idx ? null : idx;
};

/* Exact 5 questions from user's Screenshot 5 */
const salonistFaqs = [
  {
    question: "What is salon management software?",
    answer: "Salon management software is an all-in-one digital platform that automates appointment scheduling, client records, point of sale (POS), staff rotas, inventory tracking, and marketing campaigns from a single dashboard on web, tablet, or smartphone."
  },
  {
    question: "Is Salonist good salon software for a small business?",
    answer: "Yes, Salonist is designed for businesses of all sizes, from solo booth renters and independent stylists to 2-5 chair boutique salons and multi-location franchises. We offer flexible tiers with unlimited staff members and zero hidden setup fees."
  },
  {
    question: "Is Salonist cloud-based?",
    answer: "Yes, Salonist is 100% cloud-based. You and your staff can securely access your appointment calendar, checkout registers, and client history anytime, anywhere on iPad, MacBook, Windows PC, or via our iOS and Android mobile apps."
  },
  {
    question: "What makes Salonist one of the best salon software options?",
    answer: "Salonist uniquely combines 24/7 online client self-booking, integrated contactless POS with Stripe terminals, automated WhatsApp and SMS appointment reminders, stylist commission tracking, and free historical data migration with no contract lock-in."
  },
  {
    question: "How much does Salonist cost?",
    answer: "Salonist offers transparent pricing starting with a free 7-day trial. Our plans feature unlimited staff profiles with no per-seat extra charges, allowing you to scale without sudden price penalties."
  }
];
</script>

