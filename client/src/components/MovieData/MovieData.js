import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions';

class MovieData extends Component {
  componentDidMount() {
    const { title } = this.props.match.params;
    this.props.fetchMovieData(title);
  }

  renderMovieData() {
    const { isFetching, error, movieData } = this.props.data;
    const style = {
      movieDetail: {
        color: '#fff'
      }
    };

    if (isFetching) {
      return <h1 style={style.movieData}>Loading...</h1>
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
        <div className='col-sm-6' style={style.movieDetail}>
          <h1>{movieData.Title}</h1>
          <h3>{movieData.Genre}</h3>
          <h5>{movieData.Released} | {movieData.Runtime} | {movieData.Rated}</h5>
          <p>{movieData.Plot}</p>
        </div>
      </div>
    );
  };

  render() {
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

export default connect(mapStateToProps, { fetchMovieData })(MovieData);
