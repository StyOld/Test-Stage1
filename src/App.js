import React from "react";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      moviesWillWatch: []
    };
  }

  addWatch = addmovie => {
    this.setState({
      moviesWillWatch: [...this.state.moviesWillWatch, addmovie]
    });
  };

  removeWatch = id => {
    this.setState({
      moviesWillWatch: this.state.moviesWillWatch.filter(
        itemMovie => itemMovie.id !== id
      )
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <MovieList 
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
