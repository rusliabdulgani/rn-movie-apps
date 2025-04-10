import * as process from "node:process";

export const TMDB_CONFIG = {
  base_url: "https://api.themoviedb.org/3",
  api_key: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
}

export const fetchPopularMovies = async ({query}: { query: string }) => {
  const endpoint = '/discover/movie?sort_by=popularity.desc';

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch movies ${response.statusText}`);
  }

  const data = await response.json();

  return data.results;
}

