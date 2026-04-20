// 1. import useTheme
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

function Header() {
  // 2. destructure theme and toggleTheme
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <NavLink to="/" className="header__brand">
        CountryPeek
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>
          Home
        </NavLink>
        <NavLink to="/favourites" className={({ isActive }) => isActive ? 'header__link active' : 'header__link'}>
          Favourites
        </NavLink>
        {/* 3. theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
