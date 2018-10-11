let express = require("express");
	app = express();
	path = require('path');
	session = require('express-session');
	bodyparser = require('body-parser');
	port = 1337;
	routes = require("./server/config/routes.js");

require("./server/config/mongoose.js");

app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json()); //We are parsing json data.
app.use(express.static(path.join(__dirname + "/client/dist")));

app.use(session({
	secret: 'hushdonttell',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

routes(app);

// Our server:
app.listen(port, () => {
	console.log("listening on port 1337");
});
// Socket logic:
// var io = require("socket.io").listen(server);
// io.sockets.on('connection', (socket)=> {
// 	console.log("Client/socket is connected!");
// 	console.log("Client/socket id is: ", socket.id);
// 	//Socket code here:
// });