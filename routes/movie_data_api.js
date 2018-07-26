const axios = require('axios');

module.exports = app => {
  app.get('/api/movie_data', async (req, res) => {
    const request = await axios.get(`https://www.omdbapi.com/?apikey=${req.query.key}&t=${req.query.title}`);
    const { data } = request;
    res.send(data);
  });
};