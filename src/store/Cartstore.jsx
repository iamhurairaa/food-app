import { create } from "zustand";

export const useCartstore = create((set) => ({
    cart: [],

    addToCart: (food) =>
        set((state) => ({ cart: [...state.cart, food] })),

    removeFromCart: (index) =>
        set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),

    search: "",
    setSearch: (value) => set({ search: value }),

    
}))