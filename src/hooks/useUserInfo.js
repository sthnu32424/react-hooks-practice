import { useState, useEffect } from "react";

export function useUserInfo(userId) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(userId)}`,
        );

        if (response.status === 404) {
          throw new Error("User not found");
        }

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const userInfo = await response.json();
        setUserInfo(userInfo);
      } catch (error) {
        setError(error);
        setUserInfo(null);
      } finally {
        setLoading(false);
      }
    }

    if (!userId) return;

    fetchUserInfo();
  }, [userId]);

  return { userInfo, loading, error };
}
