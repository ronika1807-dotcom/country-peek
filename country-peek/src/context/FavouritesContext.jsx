import { createContext, useReducer, useEffect, useContext } from 'react'

// 1. Reducer function
function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return [...state, action.payload]
    case 'REMOVE_FAVOURITE':
      return state.filter(country => country.cca3 !== action.payload)
    default:
      return state
  }
}

// 2. Create context
const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  // 3. Load initial state from localStorage
  const initialState = JSON.parse(localStorage.getItem('favourites') || '[]')

  // 4. useReducer with reducer and initial state
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState)

  // 5. Persist favourites to localStorage on every change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  // 6. Return Provider wrapping children
  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

// 7. Custom hook
export function useFavourites() {
  return useContext(FavouritesContext)
}
