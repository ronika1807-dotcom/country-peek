import { useParams, useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountries";
import "../styles/App.css";

function CountryPage() {
  // 1. read the country code from the URL
  const { code } = useParams();
  // 2. set up navigate
  const navigate = useNavigate();
  // 3. call useCountry(code)
  const { country, loading, error } = useCountry(code);

  // 4. handle loading state
  if (loading) {
    return <p className="page-status">Loading country data...</p>;
  }

  // 5. handle error state
  if (error) {
    return <p className="page-status page-status--error">{error}</p>;
  }

  // 6. handle null country
  if (!country) {
    return null;
  }

  // 7. destructure fields
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country;

  // 8. convert languages to array
  const languageList = languages ? Object.values(languages) : [];

  // 9. convert currencies to array of names
  const currencyList = currencies
    ? Object.values(currencies).map((c) => c.name)
    : [];

  return (
    <div className="country-page">
      {/* back button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="country-page__layout">
        {/* flag image */}
        <img
          src={flags.svg}
          alt={`${name.common} flag`}
          className="country-page__flag"
        />

        <div className="country-page__info">
          {/* country name */}
          <h2 className="country-page__name">{name.common}</h2>
          {/* official name */}
          <p className="country-page__official">{name.official}</p>

          <div className="country-page__details">
            {/* left column */}
            <p>
              <span>Population:</span> {population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span> {region}
            </p>
            <p>
              <span>Subregion:</span> {subregion}
            </p>
            <p>
              <span>Capital:</span> {capital?.[0] ?? "N/A"}
            </p>

            {/* right column */}
            <p>
              <span>Languages:</span>{" "}
              {languageList.length > 0 ? languageList.join(", ") : "N/A"}
            </p>
            <p>
              <span>Currencies:</span>{" "}
              {currencyList.length > 0 ? currencyList.join(", ") : "N/A"}
            </p>
          </div>

          {/* borders */}
          {borders && borders.length > 0 && (
            <div className="country-page__borders">
              <h4>Border Countries:</h4>
              {borders.map((border) => (
                <span key={border} className="border-badge">
                  {border}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
