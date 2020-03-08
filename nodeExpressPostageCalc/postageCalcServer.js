var express = require("express");

// install package json type npm init in consol in nodeExpressPostageCalc folder
// install express npm install express --save video 1 6:00
// install ejs, video 4 6:23
var app = express();

app.use(express.static("public"));

app.set("views","viewsTemplate");
app.set("view engine", "ejs");

/*app.get("/", function(req, res) { 

	console.log("started the landing page");
	res.render("postageForm");
	
});*/

app.get("/postage", handlePostageRequest);
/*app.get("/", function(req, res){
	
	console.log("received a request for /");
	
});*/

function handlePostageRequest(req, res){
	console.log("received a request for /postage");
	
	/*res.write("This is the root");
	res.end();*/
	
	var  stampedLetterVar = Number(req.query.stampedLetters);
	var  meteredLetterVar = Number(req.query.meteredLetters);
	var  largeEnvelopesVar = Number(req.query.largeEnvelopes);
	
	var postageVar = 0;
	
	// stamped letters
	if(stampedLetterVar <= 1)
	{
		
		postageVar = 0.55;
		
	}
	if(stampedLetterVar <= 2)
	{
		
		postageVar = 0.70;
		
	}
	if(stampedLetterVar <= 3)
	{
		
		postageVar = 0.85;
		
	}
	if(stampedLetterVar <= 3.5)
	{
		
		postageVar = 1.00;
		
	}
	
	// metered letters
	if(meteredLetterVar <= 1)
	{
		
		postageVar = 0.50;
		
	}
	if(meteredLetterVar <= 2)
	{
		
		postageVar = 0.65;
		
	}
	if(meteredLetterVar <= 3)
	{
		
		postageVar = 0.80;
		
	}
	if(meteredLetterVar <= 3.5)
	{
		
		postageVar = 0.95;
		
	}
	
	// large envelopes
	if(largeEnvelopesVar <= 1)
	{
		
		postageVar = 1.00;
		
	}
	if(largeEnvelopesVar <= 2)
	{
		
		postageVar = 1.20;
		
	}
	if(largeEnvelopesVar <= 3)
	{
		
		postageVar = 1.40;
		
	}
	if(largeEnvelopesVar <= 4)
	{
		
		postageVar = 1.60;
		
	}
	if(largeEnvelopesVar <= 5)
	{
		
		postageVar = 1.80;
		
	}
	if(largeEnvelopesVar <= 6)
	{
		
		postageVar = 2.00;
		
	}
	if(largeEnvelopesVar <= 7)
	{
		
		postageVar = 2.20;
		
	}
	if(largeEnvelopesVar <= 8)
	{
		
		postageVar = 2.40;
		
	}
	if(largeEnvelopesVar <= 9)
	{
		
		postageVar = 2.60;
		
	}
	if(largeEnvelopesVar <= 10)
	{
		
		postageVar = 2.80;
		
	}
	if(largeEnvelopesVar <= 11)
	{
		
		postageVar = 3.00;
		
	}
	if(largeEnvelopesVar <= 12)
	{
		
		postageVar = 3.20;
		
	}
	if(largeEnvelopesVar <= 13)
	{
		
		postageVar = 3.40;
		
	}
	
	
	var param = {postage: postageVar};
	res.render("responseDisplay", param);
	
	
}

app.get("/home", function(req, res){
	
	var name = "john";
	
	var emailAddress = "john@email.com";
	
	var params = {username: name, email: emailAddress};
	
	console.log("received a request for /home");
	
	//res.render("responseDisplay", params);
	
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('listening on ${PORT}'));

/*var myPort = process.env.PORT || 5000;

app.listen(myPort, function(){

console.log("the server is running and listening on port 5000");
	
});*/
