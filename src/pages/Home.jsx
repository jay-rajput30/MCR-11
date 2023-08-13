import React from "react";
import styles from "./pages.module.css";
import { getAllGenre, getAllRating, getAllYears } from "../utils/home.utils";
import { useData } from "../context/DataProvider";
const Home = () => {
  const { data } = useData();
  return (
    <div className={styles.homeContainer}>
      <header>
        <h1>Movies</h1>
        <select>
          {getAllGenre(data).map((item, idx) => {
            return <option key={idx}>{item}</option>;
          })}
        </select>
        <select>
          {getAllYears.map((item, idx) => {
            return <option key={idx}>{item}</option>;
          })}
        </select>
        <select>
          {getAllRating().map((item, idx) => {
            return <option key={idx}>{item}</option>;
          })}
        </select>
        <button>Add movie</button>
      </header>
      <main></main>
    </div>
  );
};

export default Home;
