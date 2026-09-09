import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../../context/AuthProvider";
import { queryKeys } from "../../../../config/queryKeys";
import { fetchProfileOverview } from "./api";


export function useProfileOverview() {
  const { user } = useAuth();
  return useQuery({
    queryKey: queryKeys.profile.overview(user?.id),
    queryFn: fetchProfileOverview,
    enabled: Boolean(user?.id), // Only fetch if user is authenticated
  });
}