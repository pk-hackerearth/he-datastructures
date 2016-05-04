// Utilities for preparing input
var input = '';
//Array to store chef data in pile
var chefArray = [];
// Function to capture input
function cacheInput(data) {
    input += data;
}
// function to split input data by splitting on new line
function prepareInput() {
    input = input.split("\n");
}
// Main method to process
function main() {
    prepareInput();
    // Read integer n from STDIN
    for(var i=1 ; i<input.length;i++){
		// Splitting input values by space.
		var splitVals = input[i].split(" ");
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
}

// For reading input from command line and mapping to functions.
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);