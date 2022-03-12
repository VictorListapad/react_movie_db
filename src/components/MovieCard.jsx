function MovieCard(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === `N/A` ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x430?text=${title}`}
          />
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <div>
          <span>{year}</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
}

export { MovieCard };
