import React from "react";
import styles from "./MovieCard.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context/DataProvider";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { watchList, starred, dispatch } = useData();
  const watchListitemFound = watchList.find((item) => item.id === movie.id);

  const starredItemFound = starred.find((item) => item.id === movie.id);

  const cardClickHandler = () => {
    navigate(`/movie/${movie.id}`);
  };

  const watchlistBtnClickHandler = () => {
    dispatch({ type: "UPDATE_WATCHLIST", payload: movie });
  };

  const starBtnClickHandler = () => {
    dispatch({ type: "UPDATE_STARRED", payload: movie });
  };

  return (
    <article className={styles.cardContainer}>
      <figure onClick={cardClickHandler}>
        <img src={movie.imageURL} alt={movie.imageUrl} />
      </figure>
      <div className={styles.movieDetailsContainer}>
        <h3>{movie.title}</h3>
        <p>{movie.summary}</p>
        <div className={styles.movieDetailsBtnContainer}>
          <button onClick={starBtnClickHandler}>
            {starredItemFound ? "Unstar" : "Star"}
          </button>
          <button onClick={watchlistBtnClickHandler}>
            {watchListitemFound ? "remove to Watchlist" : "add to Watchlist"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
