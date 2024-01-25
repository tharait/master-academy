import useSWR from "swr";
import { MERCHANT_COUPON_DETAIL_API } from "../config";
import { useHttp } from "../hooks/useHttp";
import { ICoupon } from "../models/ICoupon";

export const useCoupon = (code : string) => {
    const {httpGet} = useHttp();
    const fetcher = (arg:any) => httpGet(arg).then((res) => res.data);
    return useSWR(MERCHANT_COUPON_DETAIL_API + code, fetcher);
}