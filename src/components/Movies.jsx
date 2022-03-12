import { MovieCard } from "./MovieCard";

function Movies(props) {
  const { moviesArr } = props;
  return (
    <div className="movies">
      {moviesArr.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export { Movies };
