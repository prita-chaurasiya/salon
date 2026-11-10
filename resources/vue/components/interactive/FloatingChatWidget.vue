<template>
  <div class="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30">
    <!-- Collapsed Toggle Button -->
    <button 
      v-if="!isOpen"
      @click="isOpen = true"
      class="group relative flex items-center gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#2B2237] text-white shadow-xl hover:bg-[#7C3AED] transition-all duration-300 hover:scale-105 border border-[#6D28D9]"
      aria-label="Open Salon Concierge Chat"
    >
      <div class="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-[#7C3AED]">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" 
          alt="Julian Concierge" 
          class="w-full h-full object-cover"
        />
        <span class="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 border border-[#2B2237]"></span>
      </div>
      <div class="text-left hidden md:block pr-1">
        <p class="text-xs font-bold leading-none text-white">Julian</p>
        <p class="text-[10px] text-[#E9D5FF] mt-0.5">Salonist AI Concierge</p>
      </div>
      <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7C3AED] flex items-center justify-center text-[#2B2237] text-[10px] sm:text-[11px] font-black shadow-xs">
        1
      </div>
    </button>

    <!-- Expanded Chat Window -->
    <div 
      v-else
      class="w-[calc(100vw-2.5rem)] max-w-[360px] sm:w-[380px] rounded-3xl bg-white shadow-[0_25px_60px_rgba(15,61,62,0.25)] border border-[#E9E5F0] overflow-hidden flex flex-col transition-all duration-300"
    >
      <!-- Chat Header -->
      <div class="p-4 bg-[#2B2237] text-white flex items-center justify-between border-b border-[#7C3AED]">
        <div class="flex items-center gap-3">
          <div class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#7C3AED]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" 
              alt="Julian Concierge" 
              class="w-full h-full object-cover"
            />
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white"></span>
          </div>
          <div>
            <h4 class="text-sm font-bold flex items-center gap-1.5 text-white">
              Julian
              <span class="text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-[#F3ECFF] text-[#2B2237]">AI Host</span>
            </h4>
            <p class="text-[11px] text-[#E9D5FF]">Live 24/7 &bull; Instant Answers</p>
          </div>
        </div>

        <button 
          @click="isOpen = false"
          class="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close Concierge"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Messages Body -->
      <div class="p-4 space-y-3.5 max-h-[300px] sm:max-h-[360px] overflow-y-auto bg-[#F7F5FA]/60 text-xs text-[#4B5563]">
        <!-- Agent Greeting -->
        <div class="flex gap-2.5 items-start">
          <div class="w-6 h-6 rounded-full overflow-hidden shrink-0 mt-0.5">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80" 
              alt="Julian" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="bg-white p-3 rounded-2xl rounded-tl-sm border border-[#E9E5F0] shadow-xs max-w-[85%] leading-relaxed">
            <p class="text-[#1E293B] font-medium">Hello! Welcome to Salonist. How can I assist your salon or spa today?</p>
            <span class="text-[9px] text-[#6B7280] block mt-1">Just now</span>
          </div>
        </div>

        <!-- Pre-canned Suggestions -->
        <div class="space-y-1.5 pt-1">
          <p class="text-[10px] font-bold uppercase text-[#6B7280] tracking-wider pl-1">Suggested inquiries:</p>
          <div class="flex flex-wrap gap-1.5">
            <button 
              v-for="(q, qIdx) in quickQuestions" 
              :key="qIdx"
              @click="askQuestion(q)"
              class="px-2.5 py-1.5 rounded-full bg-white border border-[#E9E5F0] hover:border-[#2B2237] hover:text-[#2B2237] text-[11px] text-[#4B5563] transition-colors shadow-xs text-left"
            >
              {{ q }}
            </button>
          </div>
        </div>

        <!-- Chat History -->
        <div 
          v-for="(msg, mIdx) in messages" 
          :key="mIdx"
          class="flex gap-2.5 items-start"
          :class="msg.fromUser ? 'justify-end' : 'justify-start'"
        >
          <div 
            class="p-3 rounded-2xl max-w-[85%] leading-relaxed"
            :class="msg.fromUser 
              ? 'bg-[#2B2237] text-white rounded-tr-sm shadow-xs' 
              : 'bg-white text-[#1E293B] rounded-tl-sm border border-[#E9E5F0] shadow-xs'"
          >
            <p>{{ msg.text }}</p>
            <span 
              class="text-[9px] block mt-1"
              :class="msg.fromUser ? 'text-[#E9D5FF]' : 'text-[#6B7280]'"
            >
              {{ msg.time }}
            </span>
          </div>
        </div>

      </div>

      <!-- Chat Input Area -->
      <div class="p-3 bg-white border-t border-[#E9E5F0]">
        <form @submit.prevent="sendMessage" class="flex items-center gap-2">
          <input 
            v-model="inputMsg"
            type="text"
            placeholder="Type your question..."
            class="flex-1 px-3.5 py-2 rounded-full bg-[#F7F5FA] border border-[#E9E5F0] text-xs text-[#1E293B] placeholder-[#6B7280] focus:outline-none focus:border-[#2B2237] focus:bg-white transition-all"
          />
          <button 
            type="submit"
            class="w-8 h-8 rounded-full bg-[#2B2237] text-white hover:bg-[#7C3AED] flex items-center justify-center transition-colors shadow-xs shrink-0"
            aria-label="Send message"
          >
            <Send class="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { X, Send } from 'lucide-vue-next';

const isOpen = ref(false);
const inputMsg = ref('');
const messages = ref([]);

const quickQuestions = [
  'How does the 7-day trial work?',
  'Does it support multi-chair booking?',
  'Can I import client records?'
];

const askQuestion = (q) => {
  inputMsg.value = q;
  sendMessage();
};

const sendMessage = () => {
  if (!inputMsg.value.trim()) return;
  const userText = inputMsg.value;
  messages.value.push({
    fromUser: true,
    text: userText,
    time: 'Now'
  });
  inputMsg.value = '';

  setTimeout(() => {
    let reply = 'Thank you for reaching out! A Salonist advisor will assist you or you can click "Start Free 7-Day Trial" to test every feature instantly.';
    if (userText.toLowerCase().includes('trial')) {
      reply = 'Our 7-Day Free Trial gives you full access to all scheduling, POS, and inventory features with zero credit card required!';
    } else if (userText.toLowerCase().includes('chair') || userText.toLowerCase().includes('booking')) {
      reply = 'Yes! Salonist supports unlimited chairs, processing gap booking, and synchronized stylist calendars with 24/7 client booking.';
    } else if (userText.toLowerCase().includes('import') || userText.toLowerCase().includes('client')) {
      reply = 'We provide free white-glove client data migration from any software or spreadsheet into Salonist!';
    }

    messages.value.push({
      fromUser: false,
      text: reply,
      time: 'Just now'
    });
  }, 400);
};
</script>
