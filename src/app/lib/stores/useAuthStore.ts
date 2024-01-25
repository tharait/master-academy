import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useAuthStore = create<AuthUserState>()(
   persist( (set) => ({ 
    currentUser: null, 
    setCurrentUser: (currentUser) => set({ currentUser })}), 
   { name: 'couponMasterMerchantAuthStorage', })
);

export interface AuthUser {
    displayName: string;
    merchantId: string;
    branchCodes: string[];
    roles: string[];
    accessToken: string;
    refreshToken: string;
    expiresAt: number; 
    issuedAt: number;
}

export interface AuthUserState {
    currentUser: AuthUser | null;
    setCurrentUser: (currentUser: AuthUser | null) => void;
}