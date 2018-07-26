const axios = require('axios');

module.exports = app => {
  app.get('/api/movie_data', async (req, res) => {
    const request = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${req.query.title}`);
    const { data } = request;
    res.send(data);
  });
};
