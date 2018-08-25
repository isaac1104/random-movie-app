import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions';
import { Redirect } from 'react-router-dom';
import { Icon, Spin } from 'antd';

class MovieData extends Component {
  componentDidMount() {
    const { fetchMovieData, match: { params: { title } } } = this.props;
    fetchMovieData(title);
  };

  componentDidUpdate(prevProps) {
    const { fetchMovieData, match: { params: { title } } } = this.props;
    if (prevProps.match.params.title !== title) {
      fetchMovieData(title)
    }
  };

  renderMovieData() {
    const { isFetching, error, movieData } = this.props.data;
    const style = {
      movieDetail: {
        color: '#fff'
      }
    };

    if (error) {
      return <Redirect to='/movie/error' />
    }
    if (isFetching) {
      return (
        <Spin
          size='large'
          indicator={
            <Icon
              type='loading'
              style={{ color: '#fff' }}
            />
          }
        />
      )
    }
    if (movieData.length === 0) {
      return <div />
    }
    return (
      <div className='row'>
        <div className='col-sm-6'>
          <img src={movieData.Poster === 'N/A' ? 'https://via.placeholder.com/300x448?text=Poster+Not+Available' : movieData.Poster} alt='movie poster' className='img-fluid' />
        </div>
        <div className='col-sm-6'>
          <h1 style={style.movieDetail}>{movieData.Title}</h1>
          <h3 style={style.movieDetail}>{movieData.Released} | {movieData.Runtime} | {movieData.Rated}</h3>
          <h5 style={style.movieDetail}>{movieData.Genre}</h5>
          <p style={style.movieDetail}>{movieData.Plot}</p>
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
