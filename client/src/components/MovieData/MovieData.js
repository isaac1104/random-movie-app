import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieData extends Component {
  renderMovieData() {
    const { isFetching, error, movieData } = this.props.data;
    if (isFetching) {
      return <h1>Loading...</h1>
    }
    if (error) {
      return <h1 className='text-danger'>{movieData}</h1>
    }
    if (movieData.length === 0) {
      return <div />
    }
    return (
      <div className='row'>
        <div className='col-sm-6'>
          <img src={movieData.Poster} alt='movie poster' className='img' />
        </div>
        <div className='col-sm-6 text-primary'>
          <h1>{movieData.Title}</h1>
          <h3>{movieData.Genre}</h3>
          <h5>{movieData.Released} | {movieData.Runtime} | {movieData.Rated}</h5>
          <p>{movieData.Plot}</p>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props.data);
    return (
      <div className='container text-center'>
        {this.renderMovieData()}
      </div>
    );
  }
};

function mapStateToProps({ data }) {
  return {
    data
  };
};

export default connect(mapStateToProps, null)(MovieData);
