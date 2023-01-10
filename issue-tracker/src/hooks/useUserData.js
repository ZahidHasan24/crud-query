import { useQuery } from "react-query";

export default function useUserData(userId) {
  const usersData = useQuery(
    ["users", userId],
    () => fetch(`/api/users/${userId}`).then((res) => res.json()),
    {
      enabled: !!userId,
      staleTime: 1000 * 60 * 5,
    }
  );

  return usersData;
}
