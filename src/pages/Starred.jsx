import React from "react";
import styles from "./pages.module.css";
import { useData } from "../context/DataProvider";
import MovieCard from "../components/Cards/MovieCard/MovieCard";
const Starred = () => {
  const { starred } = useData();
  if (starred.length < 1) {
    return (
      <div className={styles.starredContainer}>
        <h1>Oops! mo movie starred.</h1>
      </div>
    );
  }
  return (
    <div className={styles.starredContainer}>
      {starred.map((item) => {
        return <MovieCard key={item.id} movie={item} />;
      })}
    </div>
  );
};

export default Starred;
