const request = require("request");
const dotenv = require('dotenv').config()
const apiKey = process.env.API_KEY_MOVIEDB;

let playNowId = (req, res) => {
  // get list movies regional indonesia
  var options = { method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    qs: { region: 'id', page: '1', language: 'id', api_key: apiKey },
    body: '{}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
}

let playNowEn = (req, res) => {
  // get list movies regional english
  var options = { method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    qs: { page: '1', language: 'id', api_key: apiKey },
    body: '{}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
}

let genres = (req, res) => {
  // get list name of genres
  var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  qs: { language: 'id', api_key: apiKey },
  body: '{}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
}

let upcoming = (req, res) => {
  // get list movies upcoming soon
  var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  qs:
   { page: '1',
     language: 'en-US',
     api_key: apiKey },
  body: '{}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
}

module.exports = {
  playNowId,
  playNowEn,
  genres,
  upcoming
}
