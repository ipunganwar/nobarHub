const axios = require('axios')

const events = (req, res) =>{
	axios.get('https://www.eventbriteapi.com/v3/users/me/owned_events/?token=5NZUZAR6DLJ5KUFWKNGT')
	  .then(function (response) {
	    res.send(response.data)
	  })
	  .catch(function (error) {
	    res.send(error);
	});
}

const token = (req, res) => {
	axios.get('https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=PGVEUG6QD2OEHCV3K4RFBIXPAYFJEHAU4QCVVAEPM2OJZNCKS6')
	  .then(function (response) {
	    res.send(response.data)
	  })
	  .catch(function (error) {
	    console.log(error)
	});
}


var _event = {
    "event.name.html": "Test Event 01",
    "event.description.html": "Test Event 01",
    "event.start.timezone": "America/Chicago",
    "event.start.utc": "2017-07-10T18:00:00Z",
    "event.end.timezone": "America/Chicago",
    "event.end.utc": "2017-07-10T20:00:00Z",
    "event.currency": "USD",
};
let  EVENTBRITE_API_URL = 'https://www.eventbriteapi.com/v3/',
		_token = '5NZUZAR6DLJ5KUFWKNGT'

var _headers = {
    'Authorization': 'Bearer ' + _token,
    'Content-Type': 'application/x-www-form-urlencoded',
}

var options = {
    url: EVENTBRITE_API_URL + "events/?token="+_token,
    method: 'POST',
    headers: _headers,
    form: _event,
};


const create = (req, res) => {
	axios.post(options.url, options.form)
	  .then(function (response) {
	    res.send(response.data)
	  })
	  .catch(function (error) {
	    console.log(error)
	});
}

module.exports = {
	events,
	token,
	create
}
     