import {create} from 'zustand';
import {ICoupon} from "../models/ICoupon";

interface ICouponStore {
    coupons: ICoupon[];
    setCoupons: (coupons: ICoupon[]) => void;
}

export const useCouponStore = create<ICouponStore>()((set) => ({
    coupons: [],
    setCoupons: (coupons: ICoupon[]) => set({coupons: coupons}),
}));