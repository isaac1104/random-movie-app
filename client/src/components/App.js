import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import MovieError from './MovieError/MovieError';
import SearchForm from './SearchForm/SearchForm';
import MovieData from './MovieData/MovieData';

const App = () => {
  const style = {
    container: {
      backgroundColor: '#36393f',
      minHeight: '100vh',
      overflow: 'hidden'
    }
  };

  return (
    <BrowserRouter>
      <div className='container-fluid' style={style.container}>
        <div className="jumbotron">
          <SearchForm />
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movie/error' component={MovieError} />
          <Route exact path='/movie/title/:title' component={MovieData} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
