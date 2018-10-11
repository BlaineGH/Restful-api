var path = require("path")
	models = require("../controllers/sfs");

module.exports = (app) =>{
	// app.get("/sfs route", sfs.index);
	// app.post("/sfs route", sfs.create);
	// app.delete("/scfs route", sfs.delete);
	// app.get("/sfs route/:id", sfs.show);
	// app.patch("/sfs route/:id", sfs.update);



	app.all("*", (req,res,next)=>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}