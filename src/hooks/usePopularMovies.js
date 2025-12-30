import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
      //Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const movies = await data.json();
      dispatch(addPopularMovies(movies.results));
    }catch (error) {
      console.error("Error fetching popular movies: ", error);
    }
  }

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;