const axios = require('axios')
const api = require('../helper/api_eventbrite')
const Events = require('../models/eventbrite')

const events = (req, res) =>{
	axios.get(`${api.EVENTBRITE_API_URL}users/me/owned_events/?token=${api._token}`)
	  .then(function (response) {
	    res.status(200).send(response.data)
	  })
	  .catch(function (error) {
	    res.status(500).send(error);
	});
}

const about_me = (req, res) => {
	axios.get(`${api.EVENTBRITE_API_URL}users/me/?token=${api._token}`)
	  .then(function (response) {
	    res.status(200).send(response.data)
	  })
	  .catch(function (error) {
	    res.status(500).send(error);
	});
}


const event_me = (req, res) =>{
	axios.get(`${api.EVENTBRITE_API_URL}users/me/owned_events/?token=${api._token}`)
	  .then(function (response) {
	    res.status(200).send(response.data)
	  })
	  .catch(function (error) {
	    res.status(500).send(error);
	});

} 

const create = (req, res) => {
	var event = {
		    "event.name.html": req.body["event.name.html"],
		    "event.description.html": req.body["event.description.html"],
		    "event.start.timezone": req.body["event.start.timezone"],
		    "event.start.utc": req.body["event.start.utc"],
		    "event.end.timezone": req.body["event.end.timezone"],
		    "event.end.utc": req.body["event.end.utc"],
		    "event.currency": req.body["event.currency"],
		}

api.options.form = event

	
axios.post(api.options.url, api.options.form)
	  .then(function (response) {
	    Events.create({name : response.id})
	    .then(hasil => {
	    	res.send('oke')
	    })
	  })
	  .catch(function (error) {
	    res.send(error)
	});

}

module.exports = {
	events,
	about_me,
	create,
	event_me,

}
