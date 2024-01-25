export interface ICoupon {
    code: string;
    merchantId: string;
    title: string;
    summary: string;
    discount: number;
    isPercentage: boolean;
    eligibleBranchCodes: string[];
    eligibleProductIds: string[];
    conditions: string;
    validFrom: string;
    validTo: string;
    eligibleMinPurchase: number;
    url: string;
    image: string;
    offerMinPurchase: number;
    discontinuedAt: string;
}