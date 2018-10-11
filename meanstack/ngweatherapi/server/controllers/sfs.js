var User = require("../models/schema");
	bcrypt = require("bcryptjs");



module.exports = {
	index: (req, res) =>{
		User.find({}, (err,models)=>{
			if(err){
				res.status(401).json(err);
			}
			res.json(schema(s));
		});
	},
	create: (req,res) =>{
		if(req.body.password != req.body.confirmpassword){
			res.render("index",{errors: "passwords are not the same"});
		}
		else{
			let new_user = new User(req.body);
			let salt = bcrypt.genSaltSync(10);
			bcrypt.hash(req.body.password, salt, (err, hash)=>{
				if(err){
					res.status(401).json(err);
				}
				else{
					new_user.password = hash;
					new_user.save((err)=>{
						if(err){
							res.status(401).json(err);
						}
						else{
							res.redirect("/success");
						}
					});
				}
			});
		}
	},
	login: (req,res) =>{
		let user = User.findOne({email: req.body.email}, (err, user)=>{
			if(err){
				res.render("index", {errors: user.errors});
			}
			else{
				bcrypt.compare(req.body.password, user.password, (err,response)=>{
					if(response == true){
						res.redirect("/success");
					}
					else{
						res.render("index",{errors: user.errors});
					}
				});
			}
		});
	},
	show: (req,res) =>{
		User.find({_id: req.params._id}, (err, something)=>{
			if(err){
				res.status(401).json(err);
			}
			res.json(something);
		})
	},
	delete: (req,res)=>{
		let delete_item = User.find({_id: req.params._id});
		delete_item.remove((err,something)=>{
			if(err){
				res.status(401).json(err);
			}
			res.redirect("/");
		});
	},



}