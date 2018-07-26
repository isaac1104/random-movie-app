import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MovieData from './MovieData/MovieData';

const App = () => {
  return (
    <div>
      <div className="jumbotron">
        <SearchForm />
      </div>
      <MovieData />
    </div>
  );
}

export default App;
