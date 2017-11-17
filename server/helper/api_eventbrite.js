const TOKEN = process.env.TOKEN;

let  EVENTBRITE_API_URL = 'https://www.eventbriteapi.com/v3/',
	_token = TOKEN,
	_headers = {
	    'Authorization': 'Bearer ' + _token,
	    'Content-Type': 'application/x-www-form-urlencoded',
	},

	options = {
	    url: EVENTBRITE_API_URL + "events/?token="+_token,
	    method: 'POST',
	    headers: _headers,
	    form: '',
	};

module.exports = {
	EVENTBRITE_API_URL,
	_token,
	_headers,
	options

}