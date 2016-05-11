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
	for(var i=0;i<input_stdin_array.length;i++){
		var input = readLine().split("//");
		input[0] = input[0].split("->").join(".");
		console.log(input.join("//"))
	}
}