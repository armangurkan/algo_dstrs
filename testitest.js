function intInDig(num, i){

		return Math.floor(Math.abs(num) / Math.pow(10,i) % 10);

		
	}

	console.log(intInDig(39408934,1));