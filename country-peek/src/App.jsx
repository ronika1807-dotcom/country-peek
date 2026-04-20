import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import CountryPage from './pages/CountryPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <main className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
