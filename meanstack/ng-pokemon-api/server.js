let express = require("express");
	app = express();
	path = require('path');
	session = require('express-session');
	bodyparser = require('body-parser');
	mongoose = require("mongoose");
	Schema = mongoose.Schema;
	PeopleSchema = new mongoose.Schema({
		name: {type: String, required: true, minlength: 2, maxlength: 25},
	}, {timestamps: true});


app.use(bodyparser.json());//app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/server/dist")));
app.use(session({
	secret: 'hushdonttell',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

app.set('views', path.join(__dirname + '/views'));

mongoose.connect("mongodb://localhost/people");
mongoose.model('People', PeopleSchema);
mongoose.Promise = global.Promise;

var People = mongoose.model('People');

//Global vars here:

//app. functions here:

app.get('/', function(req, res) {
	res.render("index");
});

var server = app.listen(1337, () => {
	console.log("listening on port 1337");
});
var io = require("socket.io").listen(server);
io.sockets.on('connection', (socket)=> {
	console.log("Client/socket is connected!");
	console.log("Client/socket id is: ", socket.id);
	//Socket code here:
});