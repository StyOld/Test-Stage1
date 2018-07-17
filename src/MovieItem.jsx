import React from "react";

export default class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willwatch: true
    };
  }

  watchClick = () => {
    this.state.willwatch ? this.props.addWatch(this.props.movie) : this.props.removeWatch(this.props.movie.id);
    this.setState({
      willwatch: !this.state.willwatch
    });
  };

  render() {
    const { movie: { title, vote_average, backdrop_path } } = this.props;
    return (
      <div className="card" /*style={{width: "100%"}}*/>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {vote_average}</p>
            <button type="button"
              onClick={this.watchClick}
              className={this.state.willwatch ? "btn btn-secondary" : "btn btn-success"}
            >
              Will Watch
            </button>
          </div>
        </div>
      </div>
    );
  }
}
