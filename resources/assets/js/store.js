import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        mobileMenuOpen: false,
        activeMegaMenu: null,
        currency: '$',
        billingCycle: 'annual', // 'monthly' | 'annual'
        searchModalOpen: false,
        demoModalOpen: false,
        scrolled: false,
    }),
    actions: {
        setMobileMenu(status) {
            this.mobileMenuOpen = status;
        },
        setActiveMegaMenu(menu) {
            this.activeMegaMenu = menu;
        },
        toggleBillingCycle() {
            this.billingCycle = this.billingCycle === 'annual' ? 'monthly' : 'annual';
        },
        setSearchModal(status) {
            this.searchModalOpen = status;
        },
        setDemoModal(status) {
            this.demoModalOpen = status;
        },
        setScrolled(val) {
            this.scrolled = val;
        }
    }
});

