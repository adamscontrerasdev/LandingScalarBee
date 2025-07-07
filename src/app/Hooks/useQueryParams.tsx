import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export function useQueryParams() {
  const searchParams = useSearchParams();

  const queryParams = useMemo(() => {
    const sellerId = searchParams.get("seller_id") || "";
    const leadId = searchParams.get("lead_id") || "";
    return { sellerId, leadId };
  }, [searchParams]);

  return queryParams;
}