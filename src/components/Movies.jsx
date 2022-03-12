import { MovieCard } from "./MovieCard";

function Movies(props) {
  const { moviesArr = [] } = props;
  return (
    <div className="movies">
      {moviesArr.length ? (
        moviesArr.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing Found...</h4>
      )}
    </div>
  );
}

export { Movies };
