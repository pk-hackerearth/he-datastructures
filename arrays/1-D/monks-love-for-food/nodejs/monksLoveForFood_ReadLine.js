// Module imports
var readline = require('readline');
// Initializing variables
// noOfQueries to read command line input
var noOfQueries;
// Flag to check whether noOfQueries is read or not
var readNoOfQueries = false;
// Array to take all input
var inputArray = [];
// Array to store chef data in pile
var chefArray = [];
// Counter to stop reading input from command line
var counter = 1;
// Initializing readline interface to read stdin and stdout
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Event for on Reading line.
rl.on('line', function(line){
	// Flag to check for reading other inputs
	if(readNoOfQueries){
		if(noOfQueries > counter){
			// Pushing read line into inputArray
			inputArray.push(line);
			// Incrementing counter
			counter++;
		}else if(noOfQueries === counter){
			// Pushing read line into inputArray
			inputArray.push(line);
			// Triggering event for stop reading command line input.
			rl.close();
		}	
	}else{
		// Reading noOfQueries input
		noOfQueries = parseInt(line);
		// Setting readNoOfQueries to true
		readNoOfQueries = true;
	}
  
});
// Event for readline close
rl.on('close', function(){
	// Looping through inputArray
	for(var i=0 ; i<inputArray.length;i++){
		// Splitting input values by space.
		var splitVals = inputArray[i].split(" ");
		// Checking whether query is from customer
		if(parseInt(splitVals[0]) === 1){
			var packageCost = chefArray[chefArray.length-1]?chefArray[chefArray.length-1]:undefined;
			if(packageCost){
				// Printing package cost
				console.log(packageCost);
				// Removing element from chefArray
				chefArray.pop()
			}else{
				console.log('No Food');
			}				
		}
		// Query is from chef
		else{
			// Pushing it to chefArray
			chefArray.push(splitVals[1]);
		}
	}
	process.exit();
});