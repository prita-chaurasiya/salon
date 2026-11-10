<template>
  <footer class="bg-[#0F3D3E] text-[#D7E4E3] pt-16 sm:pt-20 pb-8 relative overflow-hidden border-t border-[#134A4C]">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- 4 Columns Grid matching User's Reference Screenshot exactly -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-14 text-sm">
        
        <!-- Column 1: Our Company + FOLLOW US -->
        <div>
          <h4 class="text-base sm:text-lg font-black text-[#FFFFFF] mb-5 tracking-tight">
            Our Company
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#D7E4E3]">
            <li><router-link to="/contact" class="hover:text-[#5FA8A9] transition-colors">About Us</router-link></li>
            <li><a href="#testimonials" class="hover:text-[#5FA8A9] transition-colors">Leadership</a></li>
            <li><a href="#faq" class="hover:text-[#5FA8A9] transition-colors">Terms & Conditions</a></li>
            <li><a href="#pricing" class="hover:text-[#5FA8A9] transition-colors">Refund policy</a></li>
            <li><router-link to="/contact" class="hover:text-[#5FA8A9] transition-colors">Contact Us</router-link></li>
            <li><a href="#blog" class="hover:text-[#5FA8A9] transition-colors">Blog</a></li>
            <li><a href="#faq" class="hover:text-[#5FA8A9] transition-colors">Sitemap</a></li>
          </ul>

          <!-- FOLLOW US Section matching Screenshot -->
          <div class="mt-8">
            <h5 class="text-xs sm:text-sm font-black uppercase tracking-wider text-[#FFFFFF] mb-3.5">
              FOLLOW US
            </h5>
            <div class="flex items-center gap-2.5">
              <!-- Facebook -->
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-8 h-8 rounded-full bg-[#134A4C] text-[#D7E4E3] hover:text-white flex items-center justify-center hover:scale-110 hover:bg-[#5FA8A9] transition-all shadow-sm"
              >
                <Facebook class="w-4 h-4 fill-current" />
              </a>

              <!-- Instagram -->
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-8 h-8 rounded-full bg-[#134A4C] text-[#D7E4E3] hover:text-white flex items-center justify-center hover:scale-110 hover:bg-[#5FA8A9] transition-all shadow-sm"
              >
                <Instagram class="w-4 h-4" />
              </a>

              <!-- X / Twitter -->
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-8 h-8 rounded-full bg-[#134A4C] text-[#D7E4E3] hover:text-white flex items-center justify-center hover:scale-110 hover:bg-[#5FA8A9] transition-all shadow-sm"
              >
                <Twitter class="w-4 h-4 fill-current" />
              </a>

              <!-- LinkedIn -->
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-8 h-8 rounded-full bg-[#134A4C] text-[#D7E4E3] hover:text-white flex items-center justify-center hover:scale-110 hover:bg-[#5FA8A9] transition-all shadow-sm"
              >
                <Linkedin class="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>

        <!-- Column 2: Other Links -->
        <div>
          <h4 class="text-base sm:text-lg font-black text-[#FFFFFF] mb-5 tracking-tight">
            Other Links
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#D7E4E3]">
            <li><router-link to="/solutions/tattoo-studio" class="hover:text-[#5FA8A9] transition-colors">Tattoo Artist Software</router-link></li>
            <li><router-link to="/solutions/salon-booth-rental" class="hover:text-[#5FA8A9] transition-colors">Salon Booth For Renter</router-link></li>
            <li><router-link to="/solutions/tanning-salon" class="hover:text-[#5FA8A9] transition-colors">Tanning Salon Software</router-link></li>
            <li><router-link to="/solutions/pet-grooming" class="hover:text-[#5FA8A9] transition-colors">Pet Grooming</router-link></li>
            <li><router-link to="/solutions/makeup-studio" class="hover:text-[#5FA8A9] transition-colors">Makeup Artist Booking Software</router-link></li>
            <li><router-link to="/features/appointment" class="hover:text-[#5FA8A9] transition-colors">Mobile Salon Scheduling Software</router-link></li>
          </ul>
        </div>

        <!-- Column 3: Who Can Use It? -->
        <div>
          <h4 class="text-base sm:text-lg font-black text-[#FFFFFF] mb-5 tracking-tight">
            Who Can Use It?
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#D7E4E3]">
            <li><router-link to="/solutions/barbershop" class="hover:text-[#5FA8A9] transition-colors">Barber Shops</router-link></li>
            <li><router-link to="/solutions/hair-salon" class="hover:text-[#5FA8A9] transition-colors">Hair Salons</router-link></li>
            <li><router-link to="/solutions/massage-therapy" class="hover:text-[#5FA8A9] transition-colors">Massage Therapy</router-link></li>
            <li><router-link to="/solutions/nail-salon" class="hover:text-[#5FA8A9] transition-colors">Nail Salon</router-link></li>
            <li><router-link to="/solutions/spa-software" class="hover:text-[#5FA8A9] transition-colors">Spas</router-link></li>
            <li><router-link to="/solutions/bridal-salon" class="hover:text-[#5FA8A9] transition-colors">Bridal Salon</router-link></li>
            <li><router-link to="/solutions/medical-spa" class="hover:text-[#5FA8A9] transition-colors">Medical Spa Software</router-link></li>
            <li><router-link to="/solutions/aesthetic-clinic" class="hover:text-[#5FA8A9] transition-colors">Aesthetic Skin Clinic</router-link></li>
          </ul>
        </div>

        <!-- Column 4: Our Resources -->
        <div>
          <h4 class="text-base sm:text-lg font-black text-[#FFFFFF] mb-5 tracking-tight">
            Our Resources
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#D7E4E3]">
            <li><a href="#customer-stories" class="hover:text-[#5FA8A9] transition-colors">Videos</a></li>
            <li><router-link to="/contact" class="hover:text-[#5FA8A9] transition-colors">Help Center</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#5FA8A9] transition-colors">Support</router-link></li>
            <li><a href="#features" class="hover:text-[#5FA8A9] transition-colors">Download the app</a></li>
            <li><a href="#faq" class="hover:text-[#5FA8A9] transition-colors">Security</a></li>
            <li><a href="#customer-stories" class="hover:text-[#5FA8A9] transition-colors">Client Testimonials</a></li>
            <li><a href="#pricing" class="hover:text-[#5FA8A9] transition-colors">Reseller Partner Program</a></li>
            <li><a href="#pricing" class="hover:text-[#5FA8A9] transition-colors">Affiliate Partnership</a></li>
            <li><a href="#why-choose-us" class="hover:text-[#5FA8A9] transition-colors">Compare Us</a></li>
          </ul>
        </div>

      </div>

      <!-- Trust Badges & Request A Demo Strip (Matching Screenshot Floating Container) -->
      <div class="rounded-3xl bg-[#134A4C]/60 backdrop-blur-md border border-[#365A5B] p-4 sm:p-5 mb-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        
        <!-- 5 White Pill Badges matching screenshot -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          
          <!-- Badge 1: PCI DSS Level 1 -->
          <div class="h-10 sm:h-11 px-4 rounded-full bg-white flex items-center justify-center gap-1.5 shadow-sm">
            <span class="text-[12px] font-black text-[#0F3D3E] tracking-tighter">PCI</span>
            <span class="text-[9px] font-bold px-1 py-0.5 rounded bg-[#0F3D3E] text-white leading-none">DSS</span>
            <span class="text-[8px] font-mono text-[#4B5563] uppercase">Level 1</span>
          </div>

          <!-- Badge 2: AICPA SOC -->
          <div class="h-10 sm:h-11 px-4 rounded-full bg-white flex items-center justify-center gap-2 shadow-sm">
            <div class="w-6 h-6 rounded-full bg-[#0F3D3E] text-white flex items-center justify-center text-[7px] font-black">
              SOC
            </div>
            <div class="text-[8px] text-[#1E293B] font-bold leading-tight text-left">
              <span>AICPA</span><br>
              <span class="text-[7px] font-normal text-[#6B7280]">SOC 1 & SOC 2</span>
            </div>
          </div>

          <!-- Badge 3: HIPAA Compliant -->
          <div class="h-10 sm:h-11 px-4 rounded-full bg-white flex items-center justify-center gap-1.5 shadow-sm">
            <ShieldCheck class="w-4 h-4 text-[#0F3D3E]" />
            <span class="text-[10px] font-black tracking-tight text-[#1E293B]">HIPAA</span>
          </div>

          <!-- Badge 4: GDPR Compliant -->
          <div class="h-10 sm:h-11 px-4 rounded-full bg-white flex items-center justify-center gap-1.5 shadow-sm">
            <div class="w-5 h-5 rounded-full bg-[#0F3D3E] text-[#5FA8A9] flex items-center justify-center text-[8px] font-bold">
              ★
            </div>
            <span class="text-[10px] font-black tracking-tight text-[#1E293B]">GDPR</span>
          </div>

          <!-- Badge 5: CCPA Compliant -->
          <div class="h-10 sm:h-11 px-4 rounded-full bg-white flex items-center justify-center gap-1.5 shadow-sm">
            <div class="w-5 h-5 rounded-full bg-[#365A5B] text-white flex items-center justify-center text-[7px] font-black">
              CCPA
            </div>
            <span class="text-[10px] font-bold text-[#1E293B]">Compliant</span>
          </div>

        </div>

        <!-- Request A Demo Button matching primary brand button -->
        <router-link 
          to="/demo"
          class="px-8 py-3.5 rounded-full bg-[#5FA8A9] text-white font-extrabold text-sm shadow-md hover:bg-[#4E9394] hover:scale-105 active:scale-95 transition-all duration-200 shrink-0"
        >
          Request A Demo
        </router-link>

      </div>

      <!-- Bottom Copyright & Privacy Bar -->
      <div class="pt-4 border-t border-[#134A4C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E4E3]/80 gap-3">
        <p>Copyright © 2026 salonist.io | All Rights Reserved.</p>
        <div class="flex items-center gap-4">
          <a href="#faq" class="hover:text-[#5FA8A9] transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#faq" class="hover:text-[#5FA8A9] transition-colors">Terms of Service</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { 
  Facebook, Instagram, Twitter, Linkedin, 
  ShieldCheck 
} from 'lucide-vue-next';
</script>
