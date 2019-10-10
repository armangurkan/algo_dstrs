
function qSort(arr, left = 0, right = arr.length -1){
	//how
	console.log('First','left:',left,'right:',right)
	if(left<right){
		console.log('left smaller than right')
		let pInd = pivot(arr,left,right);
		qSort(arr, left, pInd-1);
		qSort(arr,pInd+1,right);


	}
	console.log('Second',arr,'left:', left,'right:', right);
	return arr;

}

function pivot(arr, start = 0, end = arr.length-1){
	function swap(arr,i,j){
			[arr[i],arr[j]] = [arr[j],arr[i]];
			console.log('swapping:',arr[i],'and',arr[j]);
		}
	let pivot = arr[start];
	let sInd = start;
	for(let i=start+1; i<arr.length; i++){
		console.log('this is pivot:',pivot,'this is i:',arr[i],'this is sInd:', arr[sInd]);
		console.log('is',pivot,'>',arr[i]);
		if(pivot > arr[i]){
			sInd++;
			swap(arr,sInd,i);
			
		}
		console.log(arr, 'in for loop', 'start:',start,'end:',end);
	}
	swap(arr,start,sInd);
	
	console.log(arr, 'in pivot', 'start:',start,'end:',end, 'pivot',sInd);
	

	return sInd;

}
	



console.log(qSort([94,3,58,7]));


//,11,99,1,-4,7,7,0