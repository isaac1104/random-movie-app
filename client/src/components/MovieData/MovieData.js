import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieData extends Component {
  renderMovieData() {
    const { isFetching, error, movieData } = this.props.data;
    if (isFetching) {
      return <h1>Loading...</h1>
    } else if (error) {
      return <h1 className='text-danger'>{movieData}</h1>
    } else {
      return <h1 className='text-info'>{movieData.Title}</h1>
    }
  };

  render() {
    console.log(this.props.data);
    return (
      <div className='text-center'>
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
