import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerId = useSelector((state) => state.movies.trailerVideo);

  //fetch trailer video and updating the store with trailer video data
  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await response.json();
      const filterData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length > 0 ? filterData[0] : data.results[0];
      dispatch(addTrailerVideo(trailer.key));
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return trailerId;
};

export default useMovieTrailer;
