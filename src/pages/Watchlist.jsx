import React from "react";
import styles from "./pages.module.css";
import { useData } from "../context/DataProvider";
import MovieCard from "../components/Cards/MovieCard/MovieCard";

const Watchlist = () => {
  const { watchList } = useData();

  if (watchList.length < 1) {
    return (
      <div className={styles.starredContainer}>
        <h1>Oops! mo movie added to watch later.</h1>
      </div>
    );
  }

  return (
    <div className={styles.watchlistContainer}>
      {watchList.map((item) => {
        return <MovieCard key={item.id} movie={item} />;
      })}
    </div>
  );
};

export default Watchlist;
