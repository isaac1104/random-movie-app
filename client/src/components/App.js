import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MovieData from './MovieData/MovieData';

const App = () => {
  const style = {
    container: {
      backgroundColor: '#222222',
      minHeight: '100vh',
      overflow: 'hidden'
    }
  };

  return (
    <div className='container-fluid' style={style.container}>
      <div className="jumbotron">
        <SearchForm />
      </div>
      <MovieData />
    </div>
  );
}

export default App;
