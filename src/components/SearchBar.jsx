import { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
  };

  handleSearch = (event) => {
    if (event.key === `Enter`) {
      this.props.searchMovie(this.state.search);
    }
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
          <label className="active search-title" for="movie-title">
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
      </div>
    );
  }
}

export { SearchBar };
