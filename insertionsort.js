function insSort(arr){
	for(let i = 1 ; i<arr.length; i++){
		
		let curVal = arr[i];
		for(var j=i-1; j>=0 && arr[j]>curVal; j--){
			arr[j+1]=arr[j];
			
		}

		arr[j+1]=curVal;
		
		
	}
	return arr;
}



console.log(insSort([7,6,95,5,99,1,77,12,43]));



