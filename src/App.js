import React from "react";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";
// import movies from "./moviesData";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      moviesWillWatch: [],
      moviesWillWatchCounts: 0
    };
  }

  addWatch = movie => {
    this.setState({
      moviesWillWatchCounts: this.state.moviesWillWatchCounts + 1,
      moviesWillWatch: [...this.state.moviesWillWatch, movie]
    });
  };

  removeWatch = id => {
    this.setState({
      moviesWillWatchCounts: this.state.moviesWillWatchCounts - 1,
      moviesWillWatch: this.state.moviesWillWatch.filter(
        itemMovie => itemMovie.id !== id
      )
    });
  };

  render() {
    // console.log(this.state.moviesWillWatch)
    // console.log(this.state.moviesWillWatchCounts)
    return (
      <div className="container">
        <div className="row mt-4">
          <MovieList
            // movies={movies}
            addWatch={this.addWatch}
            removeWatch={this.removeWatch}
          />
          <MovieListWillWatch
            moviesWillWatch={this.state.moviesWillWatch}
            moviesWillWatchCounts={this.state.moviesWillWatchCounts}
          />
        </div>
      </div>
    );
  }
}

export default App;
