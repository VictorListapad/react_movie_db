import React, { Component } from "react";
import { Movies } from "../components/Movies";
const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    const { movies } = this.state;
    return (
      <main className="content container">
        <Movies moviesArr={movies} />
      </main>
    );
  }
}

export { Main };
