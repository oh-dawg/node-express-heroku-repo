var express = require("express");

// install package json type npm init in consol in nodeExpressPostageCalc folder
// install express npm install express --save video 1 6:00
// install ejs, video 4 6:23
var app = express();

// pool
	const poolPG = require('pg'); //!!!!!!!!!!!!!!!!!!
	//const {Pool} = require("pg");

//connection string to connect to a database
	//const myConnectionString = process.env.DATABASE_URL || "postgres://ifqhbkvidfemnj:b01af7ad1a34b0d69fdf4d6617ef71873dd02d0a5aad44c53e88f5416b59e225@ec2-34-193-232-231.compute-1.amazonaws.com:5432/dbbsvor9teh4sh&ssl=true";
	const myConnecter = "postgres://ifqhbkvidfemnj:b01af7ad1a34b0d69fdf4d6617ef71873dd02d0a5aad44c53e88f5416b59e225@ec2-34-193-232-231.compute-1.amazonaws.com:5432/dbbsvor9teh4sh";
	connectionString = { connectionString: myConnecter, ssl: true};
	
	const pool = new poolPG.Pool(connectionString);
	//const pool = new Pool ({connectionString: myConnectionString});
	module.exports = pool;

app.use(express.static("public"));

app.set("views","viewsTemplate");
app.set("view engine", "ejs");

//document.write("Hello World!");

app.get("/", function(req, res) { 

	console.log("started the landing page");
	res.render("postageForm");
	
});

app.get("/collageForm", function(req, res){
	
	res.render("collageForm");
	
});

app.get("/collageproject", function(req, res) { 


	console.log("started the collage page");
	
	var myRequest = "SELECT * FROM quotetable";
	
	//res.render("collageForm");
	
	//console.log(res);
	//console.log(req);
	//console.log(pool);
	//console.log(myConnectionString);
	pool.query(myRequest, function(err, result) {
		
		if(err) {
			
			console.log(err.code);
			console.log(err.message);
			console.log(err.stack);
			res.status(404).send('Not Finding table');
		}
		
		
		myResult = result.rows;
		//myResult = JSON.parse(this.responseText);
		myText = "";
		for(i = 0; i < myResult.length; i++)
		{
			
			myText += "<p> quote number:" + myResult[i].id + "</p>";
			myText += "<p> first name:" + myResult[i].firstname + "</p>";
			myText += "<p> last name:" + myResult[i].lastname + "</p>";
			myText += "<p> subject:" + myResult[i].arena + "</p>";
			myText += "<p> quote:" + myResult[i].quote + "</p>";
			
		}
		
		console.log(res);
		res.send(myText);
		//res.send(result.rows);
		//console.log(res);
		//pool.end();
		
	});
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! i need to call getCollage
	
});
// comment this out till you can figure out why it wont work when you hit the button on collageForm
/*function getCollage(req, res){
	
	console.log("i got into the collage project function");
	
	var result = {id: 123, picturedetail: "vacation", picturedetail2: "pet", picturedetail3: "nature"};
	
	res.json(result);
	
	var id = req.query.id;
	// i think if i want to emulate the video i put getCollageFromDB in here?
		getCollageFromDb(picturedetail, function(error, result) {
	
		console.log("retrieving item from the DB");
	
		// SELECT * from collagetable;
	
		});
	
}*/
// comment this out till getCollage() is working.
/*function getCollageFromDb(picturedetail, callback){
	console.log("getPersonFromDB");
	
	
	var sql = "SELECT id, picturedetail1, picturedetail2, picturedetail3, ppicturefilename FROM collagetable WHERE id = $1::int";
	var params = [id];
	pool.query(sql, params, function(err, result){
		if(err){
			console.log("an error with the db occured");
			
		}
		
		console.log("found db result" + JSON.strinify(result.rows));
		callback(null, result.rows);
		
	});
		
}

app.get("/postage", handlePostageRequest);
/*app.get("/", function(req, res){
	
	console.log("received a request for /");
	
});*/

function handlePostageRequest(req, res){
	console.log("received a request for /postage");
	
	/*res.write("This is the root");
	res.end();*/
	
	var  stampedLetterVar = parseInt(req.query.stampedLetters);
	var  meteredLetterVar = parseInt(req.query.meteredLetters);
	var  largeEnvelopesVar = parseInt(req.query.largeEnvelopes);
	
	//console.log(stampedLetterVar);
	
	//var postageVar = 0.00;
	var postageVar = parseFloat("0.00");
	
	// stamped letters
	if(stampedLetterVar <= 1)
	{
		
		
		//postageVar = 0.55;
		postageVar = parseFloat("0.55");
		console.log(postageVar);
		
	}
	else if(stampedLetterVar <= 2)
	{
		
		 //postageVar = 0.70;
		 postageVar = parseFloat("0.70");
		
	}
	else if(stampedLetterVar <= 3)
	{
		
		//postageVar = 0.85;
		postageVar = parseFloat("0.85");
		
	}
	else if(stampedLetterVar <= 3.5)
	{
		
		//postageVar = 1.00;
		postageVar = parseFloat("1.00");
		
	}
	
	// metered letters
	if(meteredLetterVar <= 1)
	{
		
		//postageVar = 0.50;
		postageVar = parseFloat("0.50");
		
	}
	else if(meteredLetterVar <= 2)
	{
		
		//postageVar = 0.65;
		postageVar = parseFloat("0.65");
		
	}
	else if(meteredLetterVar <= 3)
	{
		
		//postageVar = 0.80;
		postageVar = parseFloat("0.80");
		
	}
	else if(meteredLetterVar <= 3.5)
	{
		
		//postageVar = 0.95;
		postageVar = parseFloat("0.95");
		
	}
	
	// large envelopes
	if(largeEnvelopesVar <= 1)
	{
		
		//postageVar = 1.00;
		postageVar = parseFloat("1.00");
		
	}
	else if(largeEnvelopesVar <= 2)
	{
		
		//postageVar = 1.20;
		postageVar = parseFloat("1.20");
		
	}
	else if(largeEnvelopesVar <= 3)
	{
		
		//postageVar = 1.40;
		postageVar = parseFloat("1.40");
		
	}
	else if(largeEnvelopesVar <= 4)
	{
		
		//postageVar = 1.60;
		postageVar = parseFloat("1.60");
		
	}
	else if(largeEnvelopesVar <= 5)
	{
		
		//postageVar = 1.80;
		postageVar = parseFloat("1.80");
		
	}
	else if(largeEnvelopesVar <= 6)
	{
		
		//postageVar = 2.00;
		postageVar = parseFloat("2.00");
		
	}
	else if(largeEnvelopesVar <= 7)
	{
		
		//postageVar = 2.20;
		postageVar = parseFloat("2.20");
		
	}
	else if(largeEnvelopesVar <= 8)
	{
		
		postageVar = parseFloat("2.40");
		
	}
	else if(largeEnvelopesVar <= 9)
	{
		
		postageVar = parseFloat("2.60");
		
	}
	else if(largeEnvelopesVar <= 10)
	{
		
		postageVar = parseFloat("2.80");
		
	}
	else if(largeEnvelopesVar <= 11)
	{
		
		postageVar = parseFloat("3.00");
		
	}
	else if(largeEnvelopesVar <= 12)
	{
		
		postageVar = parseFloat("3.20");
		
	}
	else if(largeEnvelopesVar <= 13)
	{
		
		postageVar = parseFloat("3.40");
		
	}
	
	
	param = {postage: parseFloat(postageVar).toFixed(2)};
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

app.listen(PORT, () => console.log('listening on my server'));

/*var myPort = process.env.PORT || 5000;

app.listen(myPort, function(){

console.log("the server is running and listening on port 5000");
	
});*/
