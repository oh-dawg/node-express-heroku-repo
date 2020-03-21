// use this file only when neither the functions in postageCalcServer.js wont work, or the script in collageForm wont work.

 const {Pool} = require("pg");

//connection string to connect to a database
//const myConnectionString = process.env.DATABASE_URL || "postgres://kmkadjqhvmxugg:f04afeed7007ac3f3c39f7dd165c2ca20ec541b7942b032d92b7c2bd96eb1bc6@ec2-52-45-14-227.compute-1.amazonaws.com:5432/dfjeaerva4s9th?ssl=true";
//const pool = new Pool ({connectionString: myConnectionString});

function getCollage(req, res){
	
	console.log("i got into the collage project function");
	
	var result = {id: 123, picturedetail: "vacation", picturedetail2: "pet", picturedetail3: "nature"};
	
	res.json(result);
	
	var id = req.query.id;
	// i think if i want to emulate the video i put getCollageFromDB in here?
		getCollageFromDb(picturedetail, function(error, result) {
	
		console.log("retrieving item from the DB");
	
		// SELECT * from collagetable;
	
		});
	
}

function getCollageFromDb(picturedetail, callback){
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