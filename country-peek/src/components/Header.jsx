// 1. import useTheme
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Header() {
  // 2. destructure theme and toggleTheme
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        CountryPeek
      </Link>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
        {/* 3. theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
