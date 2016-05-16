
var http = require("http");
var numberOfRequests = 0;
/*var randOne;
var randTwo;*/
var lastRandOne = 0;
var lastRandTwo = 0;

var funnyNames = {
	"partOne":[
	{name:"Happy"},
	{name:"Angry"},
	{name:"Crazy"},
	{name:"Smelly"},
	{name:"Rad"},
	{name:"Woozy"},
	{name:"Jelly"},
	{name:"Fluffy"},
	{name:"Fuzzy"},
	{name:"Chubby"},
	{name:"Mad"}],

	"partTwo":[
	{name:"Robots"},
	{name:"Cats"},
	{name:"Rockets"},
	{name:"Penguins"},
	{name:"Puppies"},
	{name:"Ice-Cream"},
	{name:"Bappelsin"},
	{name:"Music"},
	{name:"Boozt"},
	{name:"Bamse"},
	{name:"Tunes"},
	{name:"Movie"},]
};


/*var lastSesion = function(lastRandOne)
	{
		sesion = numberOfRequests
		var lastRandOne = randOne;
		var lastRandTwo = randTwo;
		console.log(lastRandOne + " " + lastRandTwo);
		return lastRandOne;
	};


function mySesion(randOne)
{
	lastRandOne = randOne;
	return lastRandOne;
}*/

var server = http.createServer(function(request, response){

		// Koden som kör för varje request till varje server...
		console.log(".....................");


		/*if(numberOfRequests > 0)
			{
				//response.write(JSON.stringify(funnyNames.partOne[lastRandOne]));
				var lastRandOne = mySesion(randOne);
			}*/



		numberOfRequests++;
		console.log("ny request" + numberOfRequests);


		randTwo = [Math.floor(Math.random() * funnyNames.partTwo.length)];
		randOne = [Math.floor(Math.random() * funnyNames.partOne.length)];
		console.log("First random: " + randOne + "Second random: " + randTwo);

		var result = {"theRandomNames":[funnyNames.partOne[randOne], funnyNames.partTwo[randTwo]]};

		//response.write(JSON.stringify(funnyNames.partTwo[randOne]));
		response.write(JSON.stringify(result));
		//response.write(notFunnyNames.part1[randOne] + " " + notFunnyNames.part2[randTwo]);


		response.end();
	});


server.listen(8008);
