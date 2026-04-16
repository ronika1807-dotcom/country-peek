import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Update route: use :code instead of :name */}
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="/favourites" element={<div>Favourites placeholder</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
