var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', cacheInput).on('end', processData);

function cacheInput(data) {
    input_stdin += data;
}

function processData() {
    input_stdin_array = input_stdin.split("\n");
    main();    
}

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main(){
	var n = readLine();
	for(var i=0;i<n;i++){
		var str = readLine().split(" ");
		var orgString = str[0];
		var firstString = orgString.substring(0,parseInt(str[1]));
		var reverseSubstring = orgString.substring(parseInt(str[1]),parseInt(str[2])+1)
								.split("")  // converting string to char array
								.sort()    // sorting the array of chars in ascending order
								.reverse() // reversing the array
								.join("");  // converting char array to string
		var lastString = orgString.substring(parseInt(str[2])+1,orgString.length)
		console.log(firstString + reverseSubstring + lastString);	
	}
}