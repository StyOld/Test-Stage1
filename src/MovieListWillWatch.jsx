import React from "react";
import MovieWillWatchItem from "./MovieWillWatchItem";

export default class MovieListWillWatch extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div style={{ width: "100%" }}>
          <h4>Will Watch: {this.props.moviesWillWatchCounts} movies</h4>
          <ul className="list-group">
            {this.props.moviesWillWatch.map(movieWill => (
              <MovieWillWatchItem key={movieWill.id} movieWill={movieWill} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
