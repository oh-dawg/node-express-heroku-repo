var express = require("express");

// install package json type npm init in consol in nodeExpressPostageCalc folder
// install express npm install express --save video 1 6:00
// install ejs, video 4 6:23
var app = express();

app.use(express.static("public"));

app.set("views","viewsTemplate");
app.set("view engine", "ejs");

app.get("/", handleRootRequest);
/*app.get("/", function(req, res){
	
	console.log("received a request for /");
	
});*/

function handleRootRequest(req, res){
	console.log("received a request for /");
	
	res.write("This is the root");
	res.end();
	
}

app.get("/home", function(req, res){
	
	var name = "john";
	
	var emailAddress = "john@email.com";
	
	var params = {username: name, email: emailAddress};
	
	console.log("received a request for /home");
	
	res.render("responseDisplay", params);
	
});

app.listen(80, function(){

console.log("the server is running and listening on port 5000");
	
});
