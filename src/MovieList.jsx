import React from "react";
import MovieItem from "./MovieItem";
import movies from "./moviesData";

export default class MovieList extends React.Component {
  render() {
    const { addWatch, removeWatch } = this.props;

    return (
      <div className="col-9">
        <div className="row">
          {movies.map(movie => (
            <div className="col-4 mb-4" key={movie.id}>
              <MovieItem
                movie={movie}
                addWatch={addWatch}
                removeWatch={removeWatch}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
