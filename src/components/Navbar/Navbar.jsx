import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Repeat } from "react-feather";
import { movies } from "../../data";
import { useData } from "../../context/DataProvider";
const Navbar = ({ searchText, setSearchText }) => {
  const { watchList, starred } = useData;
  const [resetData, setResetData] = useState(false);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     localStorage.setItem(
  //       "data",
  //       JSON.stringify({ data: movies, watchList, starred })
  //     );
  //   }, [resetData]);
  const resetBtnChangeHandler = () => {
    localStorage.setItem(
      "data",
      JSON.stringify({ data: movies, watchList: watchList, starred: starred })
    );
    setResetData((prev) => !prev);
  };
  return (
    <nav className={styles.navContainer}>
      <h2 onClick={() => navigate("/")}>IMDB</h2>
      <div>
        <input
          type="text"
          placeholder="search movie by title, cast or director"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <Repeat onClick={resetBtnChangeHandler} />
      </div>

      <div className={styles.navItemContainer}>
        <NavLink to="/">movies</NavLink>
        <NavLink to="/watchlist">watch-list</NavLink>
        <NavLink to="/starred">starred</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
