import { useFavourites } from '../context/FavouritesContext'

function CountryCard({ country }) {
  const { cca3, name, flags } = country

  // 2. destructure favourites and dispatch from useFavourites()
  const { favourites, dispatch } = useFavourites()

  // 3. check if this country is already saved
  const isSaved = favourites.some(f => f.cca3 === cca3)

  const handleFavouriteClick = (e) => {
    e.stopPropagation()
    if (isSaved) {
      dispatch({ type: 'REMOVE_FAVOURITE', payload: cca3 })
    } else {
      dispatch({ type: 'ADD_FAVOURITE', payload: country })
    }
  }

  return (
    <div className="country-card">
      {/* existing Link wrapper */}
      <div className="card__flag">
        <img src={flags.svg} alt={`${name.common} flag`} />
      </div>
      <div className="card__body">
        <h3>{name.common}</h3>
        {/* 4. add favourite button */}
        <button
          className={`fav-btn ${isSaved ? 'fav-btn--saved' : ''}`}
          onClick={handleFavouriteClick}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </div>
  )
}

export default CountryCard
