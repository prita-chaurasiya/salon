<template>
  <section class="py-24 bg-white border-b border-[#E8EAF2]" id="customer-stories">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-[#EFE9FA] text-[#681FA8] font-bold text-xs uppercase tracking-wider mb-3">
          Customer Stories
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#140B28] tracking-tight">
          Loved by Thousands of <br class="hidden sm:inline" />
          <span class="bg-gradient-to-r from-[#681FA8] via-[#E11D74] to-[#F97316] bg-clip-text text-transparent">
            Salons and Spas
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-[#554C68] max-w-2xl mx-auto leading-relaxed">
          See how leading salon owners, stylists, and spa directors streamline their daily bookings, empower their staff, and grow recurring revenues.
        </p>
      </div>

      <!-- Video & Photo Stories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        <div 
          v-for="(story, idx) in customerStories" 
          :key="idx"
          class="rounded-[24px] bg-[#FAF8FE] border border-[#E8EAF2] overflow-hidden group hover:shadow-xl hover:border-[#681FA8]/30 transition-all duration-300 flex flex-col justify-between"
        >
          <!-- Video Card Header with Play Trigger -->
          <div class="relative aspect-video overflow-hidden bg-neutral-900 cursor-pointer">
            <img 
              :src="story.coverImage" 
              :alt="story.salonName"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            
            <!-- Video Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <!-- Play Button Badge -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/90 text-[#681FA8] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E11D74] group-hover:text-white transition-all duration-300">
                <Play class="w-6 h-6 fill-current translate-x-0.5" />
              </div>
            </div>

            <!-- Video Duration Pill -->
            <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono font-medium">
              {{ story.duration }}
            </div>

            <!-- Salon Category Tag -->
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#140B28] text-[11px] font-bold">
              {{ story.category }}
            </div>
          </div>

          <!-- Story Details -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1 text-amber-500 mb-3">
                <Star v-for="s in 5" :key="s" class="w-4 h-4 fill-current" />
              </div>

              <blockquote class="text-[13px] sm:text-sm font-medium text-[#140B28] leading-relaxed mb-4">
                "{{ story.quote }}"
              </blockquote>
            </div>

            <div class="pt-4 border-t border-[#E8EAF2] flex items-center justify-between">
              <div>
                <p class="font-extrabold text-sm text-[#140B28]">{{ story.owner }}</p>
                <p class="text-xs text-[#554C68]">{{ story.salonName }} • {{ story.city }}</p>
              </div>

              <span class="px-2.5 py-1 rounded-lg bg-[#EFE9FA] text-[#681FA8] text-xs font-bold">
                {{ story.metric }}
              </span>
            </div>

          </div>

        </div>

      </div>

      <!-- "What Our Clients Say" Interactive Quotes Carousel/Grid -->
      <div class="rounded-[28px] bg-[#FAF5EE] border border-[#EBE3D5] p-8 sm:p-12 mb-16">
        <div class="max-w-4xl mx-auto text-center mb-10">
          <span class="text-xs font-bold uppercase tracking-widest text-[#E11D74]">
            Community Love
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#140B28] mt-1">
            What Our Clients Say
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          <div 
            v-for="(client, cIdx) in clientReviews" 
            :key="cIdx"
            class="bg-white rounded-2xl p-6 border border-[#E8E4DB] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-1 text-amber-500">
                  <Star v-for="s in 5" :key="s" class="w-3.5 h-3.5 fill-current" />
                </div>
                <span class="text-[11px] text-[#554C68] font-semibold">Verified Customer</span>
              </div>

              <p class="text-xs sm:text-sm text-[#140B28] leading-relaxed mb-6 font-medium">
                "{{ client.comment }}"
              </p>
            </div>

            <div class="flex items-center gap-3 pt-3 border-t border-[#F2ECE1]">
              <img 
                :src="client.avatar" 
                :alt="client.name"
                class="w-10 h-10 rounded-full object-cover border border-[#E8E4DB]"
              />
              <div>
                <h5 class="text-xs sm:text-sm font-bold text-[#140B28]">{{ client.name }}</h5>
                <p class="text-[11px] text-[#554C68]">{{ client.salon }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Awards & Trust Badges Strip matching Screenshot 4 ("We focus on our customers, and they show their love in return") -->
      <div class="rounded-[28px] bg-white border border-[#E8EAF2] p-8 sm:p-10 shadow-sm">
        
        <!-- Top Pill "More Testimonials" matching Screenshot 4 -->
        <div class="text-center -mt-14 mb-8">
          <a 
            href="#testimonials"
            class="inline-flex items-center px-6 py-2.5 rounded-full bg-[#140B28] text-white text-xs font-bold hover:bg-[#681FA8] transition-colors shadow-md"
          >
            More Testimonials
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left side Heading matching Screenshot 4 -->
          <div class="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#E8EAF2] pb-6 lg:pb-0 lg:pr-8">
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#140B28] leading-snug">
              We focus on our customers, and they show their love in return
            </h3>
          </div>

          <!-- Right side 4 Badges matching Screenshot 4 -->
          <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            
            <!-- Badge 1: SoftwareWorld Best Customer Support -->
            <div class="flex flex-col items-center p-3 rounded-2xl hover:bg-[#F8F9FE] transition-colors">
              <div class="w-20 h-20 rounded-full border-2 border-[#1E40AF] bg-blue-50/50 flex flex-col items-center justify-center p-2 mb-2 text-blue-900 shadow-xs">
                <Trophy class="w-5 h-5 text-[#1E40AF] mb-0.5" />
                <span class="text-[9px] font-black uppercase tracking-tighter leading-none text-blue-950">SoftwareWorld</span>
                <span class="text-[8px] font-mono text-blue-700">2026</span>
              </div>
              <p class="text-xs font-bold text-[#140B28]">Best Customer</p>
              <p class="text-[11px] text-[#554C68]">Support</p>
            </div>

            <!-- Badge 2: Highly Recommended -->
            <div class="flex flex-col items-center p-3 rounded-2xl hover:bg-[#F8F9FE] transition-colors">
              <div class="w-20 h-20 rounded-full border-2 border-[#0284C7] bg-sky-50/50 flex flex-col items-center justify-center p-2 mb-2 text-sky-900 shadow-xs">
                <ShieldCheck class="w-5 h-5 text-[#0284C7] mb-0.5" />
                <span class="text-[9px] font-black uppercase tracking-tighter leading-none text-sky-950">REVIEWS</span>
                <span class="text-[8px] font-bold text-sky-700">★★★★★</span>
              </div>
              <p class="text-xs font-bold text-[#140B28]">Highly</p>
              <p class="text-[11px] text-[#554C68]">Recommended</p>
            </div>

            <!-- Badge 3: Slashdot Users Love Us -->
            <div class="flex flex-col items-center p-3 rounded-2xl hover:bg-[#F8F9FE] transition-colors">
              <div class="w-20 h-20 rounded-full border-2 border-[#0F766E] bg-teal-50/50 flex flex-col items-center justify-center p-2 mb-2 text-teal-900 shadow-xs">
                <HeartHandshake class="w-5 h-5 text-[#0F766E] mb-0.5" />
                <span class="text-[9px] font-black uppercase tracking-tighter leading-none text-teal-950">Users Love Us</span>
                <span class="text-[8px] font-mono text-teal-700">2026</span>
              </div>
              <p class="text-xs font-bold text-[#140B28]">Users</p>
              <p class="text-[11px] text-[#554C68]">love us</p>
            </div>

            <!-- Badge 4: SourceForge User Experience -->
            <div class="flex flex-col items-center p-3 rounded-2xl hover:bg-[#F8F9FE] transition-colors">
              <div class="w-20 h-20 rounded-full border-2 border-[#EA580C] bg-orange-50/50 flex flex-col items-center justify-center p-2 mb-2 text-orange-900 shadow-xs">
                <Medal class="w-5 h-5 text-[#EA580C] mb-0.5" />
                <span class="text-[9px] font-black uppercase tracking-tighter leading-none text-orange-950">SOURCEFORGE</span>
                <span class="text-[8px] font-bold text-orange-600">★★★★★</span>
              </div>
              <p class="text-xs font-bold text-[#140B28]">User</p>
              <p class="text-[11px] text-[#554C68]">experience</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  Play, Star, Trophy, ShieldCheck, 
  HeartHandshake, Medal 
} from 'lucide-vue-next';

const customerStories = [
  {
    owner: 'Elena & Marcus Vance',
    salonName: 'Atelier Aurelia Coiffure',
    city: 'New York & London',
    category: 'Hair Salon Chain',
    duration: '2:45 min',
    quote: 'Our front desk used to drown in phone tags and no-shows. Salonist filled our open slots automatically and gave us 44% more bookings in 90 days.',
    metric: '+44% Bookings',
    coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    owner: 'Dr. Sophia Lindqvist',
    salonName: 'Nordic Glow MedSpa',
    city: 'Stockholm & Oslo',
    category: 'Medical Spa',
    duration: '3:10 min',
    quote: 'The consultation forms and recurring membership packages are seamless. We increased our monthly subscription base to over 1,200 active members.',
    metric: '1,200+ Members',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    owner: 'Matteo Rossi',
    salonName: 'Barbiere di Milano',
    city: 'Milan',
    category: 'Luxury Barbershop',
    duration: '1:55 min',
    quote: 'Our barbers tap checkout right from the chair on their iPads. Tips increased by 28% and clients love receiving their digital receipts on WhatsApp.',
    metric: '+28% Tips',
    coverImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  }
];

const clientReviews = [
  {
    name: 'Sarah Jenkins',
    salon: 'Luxe Locks Hair Studio, Austin',
    comment: 'The online booking system and automated SMS reminders cut our salon no-shows to practically zero. Staff love seeing their personal commission tally live.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
  },
  {
    name: 'Jean-Pierre Dubois',
    salon: 'Maison Beauté, Paris',
    comment: 'Inventory tracking and low stock notifications saved us during peak festive season. It connects directly with Stripe and our barcode scanner with no glitch.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  },
  {
    name: 'Camilla Thorne',
    salon: 'Serenity Day Spa & Wellness, Miami',
    comment: 'Managing 14 treatment rooms across two branches is effortless now. Room allocation buffer prevents delays and our therapists are far happier.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80'
  },
  {
    name: 'Liam Henderson',
    salon: 'The Crown Barber Club, London',
    comment: 'The best investment we made this year. Setup took less than two hours and our clients frequently compliment how smooth our booking page looks.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  }
];
</script>

