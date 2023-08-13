import React, { useEffect, useState } from "react";
import styles from "./pages.module.css";
import { getAllGenre, getAllRating, getAllYears } from "../utils/home.utils";
import { useData } from "../context/DataProvider";
import MovieCard from "../components/Cards/MovieCard/MovieCard";
const Home = ({ searchText }) => {
  const { data, watchList, starred } = useData();
  const [reset, setReset] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("All Genre");
  const [selectedYear, setSelectedYear] = useState("Release Year");
  const [selectedRating, setSelectedRating] = useState("Rating");

  //   useEffect(() => {
  //     localStorage.setItem(
  //       "data",
  //       JSON.stringify({ data: ratingFilteredData, watchList, starred })
  //     );
  //   }, [selectedGenre, selectedYear, selectedRating]);
  const selectYearChangeHandler = (e) => {
    const updatedYear =
      e.target.value === "Release Year" ? e.target.value : +e.target.value;
    setSelectedYear(updatedYear);
  };

  const selectRatingChangeHandler = (e) => {
    const updatedYear =
      e.target.value === "Rating" ? e.target.value : +e.target.value;
    setSelectedRating(updatedYear);
  };

  const selectGenreChangeHandler = (e) => {
    const updatedYear =
      e.target.value === "All Genre" ? e.target.value : e.target.value;
    setSelectedGenre(updatedYear);
  };
  const filteredData =
    searchText !== ""
      ? data.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.director.toLowerCase().includes(searchText.toLowerCase()) ||
            item.cast.find((item) =>
              item.toLowerCase().includes(searchText.toLowerCase())
            )
        )
      : data;
  const genreFilteredData =
    selectedGenre === "All Genre"
      ? filteredData
      : filteredData.filter((item) =>
          item.genre.find((item) => item === selectedGenre)
        );

  const yearFilteredData =
    selectedYear === "Release Year"
      ? genreFilteredData
      : genreFilteredData.filter((item) => item.year === selectedYear);

  const ratingFilteredData =
    selectedRating === "Rating"
      ? yearFilteredData
      : yearFilteredData.filter((item) => +item.rating === +selectedRating);

  localStorage.setItem(
    "data",
    JSON.stringify({ data: ratingFilteredData, watchList, starred })
  );
  return (
    <div className={styles.homeContainer}>
      <header>
        <h1>Movies</h1>
        <select onChange={selectGenreChangeHandler}>
          {getAllGenre(data).map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select onChange={selectYearChangeHandler}>
          {getAllYears.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select onChange={selectRatingChangeHandler}>
          {getAllRating().map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button>Add movie</button>
      </header>
      <main className={styles.movieMainContainer}>
        {ratingFilteredData.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </main>
    </div>
  );
};

export default Home;
