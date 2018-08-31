import React from 'react';

const Home = () => {
  const style = {
    text: {
      color: '#fff'
    }
  };
  return (
    <div className='text-center'>
      <h1 style={style.text}>Welcome to Movie Database</h1>
      <h3 style={style.text}>Search for your favorite movies!</h3>
    </div>
  )
};

export default Home;
