import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    movies.nowPlayingMovies && movies.popularMovies && (
      <div className="bg-black">
        <div className="-mt-24 relative z-20 pl-12">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Trending" movies={movies.nowPlayingMovies} />
          <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
          <MovieList title="Horror" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
