import { useState, useEffect } from "react";

function useCountry(code) {
  // 1. declare state
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. if no code, return early
    if (!code) {
      return;
    }

    // 3. reset loading and error before each fetch
    setLoading(true);
    setError(null);

    // 4. fetch country data
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch country");
        }
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]);
      })
      .catch((err) => {
        setError(err.message);
        setCountry(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code]);

  // 5. return state
  return { country, loading, error };
}

export default useCountry;
