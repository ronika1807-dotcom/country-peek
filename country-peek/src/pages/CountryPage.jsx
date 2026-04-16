import { useParams, useNavigate } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import '../styles/App.css'

function CountryPage() {
  // 1. read the country code from the URL with useParams
  // 2. set up navigate with useNavigate
  // 3. call useCountry(code) and destructure country, loading, error

  // 4. handle loading state — return a status paragraph
  // 5. handle error state — return an error paragraph
  // 6. handle null country — return null

  // 7. destructure the fields you need from country:
  //    name, flags, population, region, subregion,
  //    capital, languages, currencies, borders

  // 8. convert languages (object) to an array of names
  //    use Object.values() — guard against undefined
  // 9. convert currencies (object) to an array of names
  //    use Object.values().map(c => c.name) — guard against undefined

  return (
    <div className="country-page">
      {/* back button — calls navigate(-1) on click */}

      <div className="country-page__layout">
        {/* flag image with alt text */}

        <div className="country-page__info">
          {/* country common name as h2 */}
          {/* official name as a paragraph */}

          <div className="country-page__details">
            {/* left column: population, region, subregion, capital */}
            {/* right column: languages, currencies */}
          </div>

          {/* borders section — only render if borders exists and has length */}
          {/* render each border code as a span with className="border-badge" */}
        </div>
      </div>
    </div>
  )
}

export default CountryPage