import useSWR from "swr";
import { MERCHANT_ACTIVE_COUPONS_API } from "../config";
import { useHttp } from "./useHttp";

export const useActiveCoupons = () => {
    const {httpGet} = useHttp();
    const fetcher = (arg:any) => httpGet(arg).then((res) => res.data);
    return useSWR(MERCHANT_ACTIVE_COUPONS_API, fetcher);
}