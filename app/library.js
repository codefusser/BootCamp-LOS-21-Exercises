'use strict'

module.exports = {

 /* Find the average of three integers */
 {

 /* Find the average of three integers */
 isPrimes : function(num){
	if (typeof num === 'number'){
		var isPrime = false;	
			if (num  <= 1){
				return isPrime;
			}
	
			for (var i = 2; i < num; i++) {			
				if (num % i === 0 ) {			
					return !isPrime;		
			}
		}
		return isPrime;	
	}		
},

getPrimes : function(num){
	if (typeof num === 'number'){
		var primeList = [];
		for (var i = 2; i < num; i++) {
			if (!this.isPrimes(i)) {
				primeList.push(i);
			}
		}
		return primeList;
	}else
		return [];		
	}  
}

}
