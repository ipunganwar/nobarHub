var request = require("request");

let playNow = (req, res) => {
  var options = { method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    qs: { region: 'id', page: '1', language: 'en-US', api_key: 'd98a38d9b77d57002f7b1b64a1872aad' },
    body: '{}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
}

module.exports = {
  playNow
}
