import { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleSearch = (event) => {
    if (event.key === `Enter`) {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => this.props.searchMovie(this.state.search, this.state.type)
    );
  };
  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <input
            id="movie-title"
            type="text"
            className="validate"
            placeholder="Title"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleSearch}
          />
          <label className="active search-title" htmlFor="movie-title">
            Enter Movie Title
          </label>
          <button
            id="search-btn"
            className="btn"
            onClick={() => this.props.searchMovie(this.state.search)}
          >
            Seach
          </button>
        </div>
        <label>
          <input
            name="type"
            type="radio"
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type === `all`}
          />
          <span>All</span>
        </label>
        <label>
          <input
            name="type"
            type="radio"
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === `movie`}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            name="type"
            type="radio"
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type === `series`}
          />
          <span>Series</span>
        </label>
      </div>
    );
  }
}

export { SearchBar };
