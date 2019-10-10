function merge(arr1, arr2){
	let i = 0;
	let j = 0;
	let result=[];
	while (arr1.length>0 && arr2.length>0){
		if(arr1[0]<arr2[0]){
			result.push(arr1[0]);
			arr1.shift();
		} else {
			result.push(arr2[0]);
			arr2.shift();
		}
		console.log(arr1, arr2, 'Double Condition result=>', result);
	}
	
	while(arr1.length >0){
		result.push(arr1[0]);
		arr1.shift();
		console.log(arr1, arr2, 'Single Condition 1 result=>', result);
		
	}
	while(arr2.length>0){

		result.push(arr2[0]);
		arr2.shift();
		
		console.log(arr1, arr2, 'Single Condition 2 result=>', result);
	}
	
	

	return result;

}


function mergeSort(arr){
	console.log(arr);
	if (arr.length <= 1) {console.log(arr, 'arr'); return arr; }
	let mid = Math.floor(arr.length/2);
	let right = mergeSort(arr.slice(0,mid));
	let left = mergeSort(arr.slice(mid));
	

	return merge(right, left);
}



console.log(mergeSort([2,4,9,1,-4,49,5]));