import React from "react";
import styles from "./MovieCard.module.css";
const MovieCard = ({ movie }) => {
  return (
    <article className={styles.cardContainer}>
      <figure>
        <img src={movie.imageURL} alt={movie.imageUrl} />
      </figure>
      <div className={styles.movieDetailsContainer}>
        <h3>{movie.title}</h3>
        <p>{movie.summary}</p>
        <div className={styles.movieDetailsBtnContainer}>
          <button>Star</button>
          <button>add to Watchlist</button>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
