var	mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	email: {
		type: String, 
		required: true, 
		unique: [true, "Email has already been taken. Please select a new email"]
	},
	first_name: {
		type: String, 
		required: [true,"Please enter First Name"], 
		minlength: 2, 
		maxlength: 25
	},
	last_name: {
		type: String, 
		required: [true,"Please enter Last Name"], 
		minlength: 2, 
		maxlength: 25
	},
	birthday: {
		type: Date, 
		required: [true,"Please enter Birthdate"]
	},
	password: {
		type: String, 
		required: true, 
		minlength: 8, 
		validate: {
			validator: (value)=>{
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
			},
			message: " Password failed validation; you must have atleast 1 number, 1 upercase letter and 1 special character"}
		}
}, {timestamps: true});

module.exports = mongoose.model("Schema", UserSchema);//set up our schema