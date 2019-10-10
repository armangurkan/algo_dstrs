function radixSort(arr){
	let maxdr =0;
	//firt helper function to get each integer for each digit
	function intInDig(num, i){

		return Math.floor(Math.abs(num) / Math.pow(10,i) % 10);

		 
	}
	// helper function to get niumber of digits in each function
	function numOfDig(num){
		if(num ===0) return 1;
		return Math.floor(Math.log10(Math.abs(num)) +1 );

	}
	//helper function to find the number with the most number of digits
	function maxDig(arr){
		
		for(let i =0; i<arr.length; i++){
			maxdr = Math.max(maxdr, numOfDig(arr[i]));
			
		}
		return maxdr;
		
	}
	maxDig(arr);
	
	
	//we need an object as a bucket.
	let bucket ={}


	let result =[];

	

	/*create a loop that would loop over Max Number of digits times, that would re order the numbers according the 
	value of the given digit*/
	for(let j=0; j<maxdr; j++){

		bucket = {};
		
		
		//first take out each arr element and place it in the bucket according to the digits;
		for(let z =0; z<arr.length; z++){
			let num = intInDig(arr[z], j);
			// console.log('digit in the indicated j',num)
			// console.log('j:',j);
			if(typeof bucket[intInDig(arr[z], j)] === 'object'){
				bucket[intInDig(arr[z], j)].push(arr[z]);
			} else {
				bucket[intInDig(arr[z], j)] = [];
				bucket[intInDig(arr[z], j)].push(arr[z]);
			}
			console.log(bucket, 'this is the bucket');
			
		}
		// console.log('current bucket',bucket[0]);
		
		//take each element from the bucket starting from 0 to 9 and place it back in the array
		for(let el of Object.keys(bucket)){
			console.log(el, 'for', el, 'when j is', j);
			result = result.concat(bucket[el]);
			console.log(el, 'is pushed in to the result and the result became:', result);
			
		}
		arr = result;
		result = [];

		console.log('AND THIS IS THE RESULT ARRAY:', arr, 'and this is maxdr:', maxdr);
	}
	

	return arr;
}

console.log('this is the final answer',radixSort([4,54,48,34,4,934349,13,12,25,37,165,4774,3883,391,301]));






