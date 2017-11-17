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

const about_me = (req, res) => {
	axios.get('https://www.eventbriteapi.com/v3/users/me/?token=5NZUZAR6DLJ5KUFWKNGT')
	  .then(function (response) {
	    res.send(response.data)
	  })
	  .catch(function (error) {
	    res.send(error)
	});
}


const create = (req, res) => {
	let  EVENTBRITE_API_URL = 'https://www.eventbriteapi.com/v3/',
		_token = '5NZUZAR6DLJ5KUFWKNGT'

	var _headers = {
    'Authorization': 'Bearer ' + _token,
    'Content-Type': 'application/x-www-form-urlencoded',
	}

	var _event = {
	    "event.name.html": req.body["event.name.html"],
	    "event.description.html": req.body["event.description.html"],
	    "event.start.timezone": req.body["event.start.timezone"],
	    "event.start.utc": req.body["event.start.utc"],
	    "event.end.timezone": req.body["event.end.timezone"],
	    "event.end.utc": req.body["event.end.utc"],
	    "event.currency": req.body["event.currency"],
	};

	var options = {
	    url: EVENTBRITE_API_URL + "events/?token="+_token,
	    method: 'POST',
	    headers: _headers,
	    form: _event,
	};

	axios.post(options.url, options.form)
	  .then(function (response) {
	    res.send(response.data)
	  })
	  .catch(function (error) {
	    res.send(error)
	});
}

const event_me = (req, res) =>{
	axios.get('https://www.eventbriteapi.com/v3/users/me/owned_events/?token=5NZUZAR6DLJ5KUFWKNGT')
	  .then(function (response) {
	    res.send(response.data)
	  })
	  .catch(function (error) {
	    res.send(error)
	});

} 

module.exports = {
	events,
	about_me,
	create,
	event_me
}
     