import React from "react";
import styles from "./pages.module.css";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataProvider";
const Movie = () => {
  const { id } = useParams();

  const { data, watchList, starred, dispatch } = useData();

  const movieFound = data.find((item) => item.id === +id);
  const watchListitemFound = watchList.find(
    (item) => item.id === movieFound.id
  );

  const starredItemFound = starred.find((item) => item.id === movieFound.id);

  const watchlistBtnClickHandler = () => {
    dispatch({ type: "UPDATE_WATCHLIST", payload: movieFound });
  };

  const starBtnClickHandler = () => {
    dispatch({ type: "UPDATE_STARRED", payload: movieFound });
  };

  return (
    <div className={styles.singleMovieContainer}>
      <figure>
        <img src={movieFound.imageURL} alt={movieFound.imageURL} />
      </figure>
      <div className={styles.singleMovieDetailsContainer}>
        <h1>{movieFound.title}</h1>
        <p>{movieFound.summary}</p>
        <p>Year: {movieFound.year}</p>
        <p>genre: {movieFound.genre.join(", ")}</p>
        <p>rating: {movieFound.rating}</p>
        <p>diirector: {movieFound.director}</p>
        <p>writer: {movieFound.writer}</p>
        <p>cast: {movieFound.cast.join(", ")}</p>
        <div className={styles.singleMovieDetailsBtnContainer}>
          <button onClick={starBtnClickHandler}>
            {starredItemFound ? "Unstar" : "Star"}
          </button>
          <button onClick={watchlistBtnClickHandler}>
            {watchListitemFound ? "remove to Watchlist" : "add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
