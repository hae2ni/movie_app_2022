import React, { Component } from "react";
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends Component {
  render() {
    const { id, title, year, genres, summary, cover_img } = this.props;
    return (
      <div className="movies">
        <div className="movie">
          <img src={cover_img} alt={title} title={title} />
            <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
              {genres.map((data, index) => (
                <li key={index}>
                  {data}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{summary.slice(0,150)} ...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  year:PropTypes.number.isRequired,
  genres:PropTypes.array.isRequired,
  summary:PropTypes.string.isRequired,
  cover_img:PropTypes.string.isRequired,
};
