const mongoose = require('mongoose')

const userSchema = new mongoose.model({
	name: {
		type: String,
		required: true,
		min: 6,
	},
	email: {
		type: String,
		required: true,
		max: 255,
	},
})
