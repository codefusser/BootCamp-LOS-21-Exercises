// How to compute data type of an iterable type
let sum = function(){
	let ar_len = arguments.length;
	let total = 0;
	for(let i=0; i<ar_len; i++){
		if (typeof arguments[i] === 'number')
			total += arguments[i];
		else
			return "invalid input";
	}
	return total;
}