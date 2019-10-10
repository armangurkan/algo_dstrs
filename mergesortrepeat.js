function merge(arr1, arr2){
	let result = [];
	let i =0;
	let j= 0;
	while(i<arr1.length && j<arr2.length){
		if(arr1[i]<arr2[j]){
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	while(i<arr1.length){
		result.push(arr1[i]);
		i++;
	}

	while(j<arr2.length){
		result.push(arr2[j]);
		j++;
	}
	return result;
}


function mSort(arr){
	if(arr.length <= 1) {console.log(arr); return arr;}
	let mid = Math.floor(arr.length/2);
	let left = mSort(arr.slice(0,mid));
	let right = mSort(arr.slice(mid));

	return merge(left, right);
}








console.log(mSort([2,4,9,1,-4,49,5]));