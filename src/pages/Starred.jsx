import React from "react";
import styles from "./pages.module.css";
import { useData } from "../context/DataProvider";
const Starred = () => {
  const { starred } = useData();
  return (
    <div className={styles.starredContainer}>
      {starred.map((item) => {
        return <MovieCard key={item.id} movie={item} />;
      })}
    </div>
  );
};

export default Starred;
