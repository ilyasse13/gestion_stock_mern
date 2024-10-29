import { create } from "zustand";
import axiosClient from "../api/axios";


export const useProductStore = create((set) => ({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async (stock_id) => {
        set({ loading: true, error: null });
    try {
        const response = await axiosClient.get(`/products/${stock_id}`)
        set({ products: response.data, loading: false });
    }catch(error){
        set({ loading: false, error: error })
    }
    }
}))