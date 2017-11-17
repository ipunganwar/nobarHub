const mongoose = require('mongoose').connect('mongodb://localhost/nobarDB');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	id : String,
	name : String,
	user : [{type: Schema.Types.ObjectId, ref: 'Users'}]
})

const Events = mongoose.model('Events', eventSchema)

module.exports = Events