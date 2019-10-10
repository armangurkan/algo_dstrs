function qSort(arr,left=0, right =arr.length-1){
	if(left<right){
		let pInd = pivot(arr,left,right);
		qSort(arr,left,pInd-1);
		qSort(arr,pInd+1,right);

	}
	return arr;
}

function pivot(arr,start=0, end=arr.length-1){
	function swap(arr, i, j){
		[arr[i], arr[j]] = [arr[j],arr[i]];
	}

	let pivot = arr[start];
	let sInd = start;

	for(let i=start+1; i<arr.length; i++){
		if(pivot > arr[i]){
			sInd++;
			swap(arr,sInd,i);
		}
	}

	swap(arr,sInd,start);

	return sInd;

}


console.log(qSort([88,99,34,18,2,-4,26,27,27,98,27]));

//i 				   1 2   3  4 5 6  7  8  9  10
//sInd				0  0 1.  2  3 4 5. 6  7  7  8