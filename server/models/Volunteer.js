const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true
	},
	street: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: String,
	password: String,
	avatar: String,
	skills: string,
	comment: string

});

module.exports = Volunteer = mongoose.model('Volunteer', VolunteerSchema);
