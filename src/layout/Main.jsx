import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { SearchBar } from "../components/SearchBar";
const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovie = (movieTitle, type = `all`) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content container">
        <SearchBar searchMovie={this.searchMovie} />
        {!loading ? <Movies moviesArr={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
