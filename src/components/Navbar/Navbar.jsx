import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navContainer}>
      <h2 onClick={() => navigate("/")}>IMDB</h2>
      <input
        type="text"
        placeholder="search movie by title, cast or director"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <div className={styles.navItemContainer}>
        <NavLink to="/">movies</NavLink>
        <NavLink to="/watchlist">watch-list</NavLink>
        <NavLink to="/starred">starred</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
