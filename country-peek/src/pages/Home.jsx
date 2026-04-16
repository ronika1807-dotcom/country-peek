import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");
  // 1. add state for: countries (array), loading (boolean), error (null)
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. if query is empty — clear countries and error, return early
    if (!query.trim()) {
      setCountries([]);
      setError(null);
      return;
    }

    // 3. set up a debounce timer (400ms)
    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("No countries found");
          }
          return res.json();
        })
        .then((data) => {
          setCountries(data);
          setError(null);
        })
        .catch((err) => {
          setCountries([]);
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400);

    // 4. cleanup function cancels the timer
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="home">
      <SearchBar query={query} onQueryChange={setQuery} />

      {/* 5. show a loading paragraph when loading is true */}
      {loading && <p>Loading...</p>}

      {/* 6. show an error paragraph when error is set */}
      {error && <p className="error">{error}</p>}

      {/* 7. show countries when available */}
      {!loading && !error && countries.length > 0 && (
        <div className="cards-grid">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}

      {/* 8. show placeholder when query is empty */}
      {!loading && !error && countries.length === 0 && !query && (
        <p className="home__placeholder">
          Start searching to explore countries.
        </p>
      )}
    </div>
  );
}

export default Home;
