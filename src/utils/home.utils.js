import { movies } from "../data";

export const getAllYears = [
  "Release Year",
  1990,
  1991,
  1992,
  1993,
  1994,
  1995,
  1995,
  1996,
  1997,
  1998,
  1999,
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
];

export const getAllGenre = (data) => {
  const allGenre = data.reduce((acc, cur) => [...acc, ...cur.genre], []);
  return ["All Genre", ...Array.from(new Set(allGenre))];
};

export const getAllRating = () => {
  return ["Rating", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};
