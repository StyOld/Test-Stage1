import React from "react";

export default class MovieWillWatchItem extends React.Component {

  render() {
    const { movieWill: { title, vote_average } } = this.props;
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <div>{title}</div>
          <div>{vote_average}</div>
        </div>
      </li>
    );
  }
}
