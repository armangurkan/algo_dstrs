class MaxHeap{
	constructor(){
		this.values =[];
	}


	insert(val){
		this.values.push(val);

		let values = this.values;
		
		if(values.length === 1) return values;
		let curIndex = values.length-1;
		let parentIndex = Math.floor((curIndex-1)/2);

		while(val > values[parentIndex]){
			[values[parentIndex], values[curIndex]]=[values[curIndex], values[parentIndex]];
			curIndex = parentIndex;
			parentIndex = Math.floor((curIndex-1)/2);
			
		}
		return this.values;
	}
	extractMax(){
		let values = this.values;
		if(values.length < 1) return false;
		if(values.length === 1){
			values.pop();
			return values;
		}
		// console.log(values)
		let setMaxInd = (arr, curI) => {
			let lInd = (curI*2)+1;
			let rInd = (curI*2)+2;
				if(arr[lInd] > arr[rInd]){
					return lInd;
				} else {
					return !!arr[rInd]? rInd : lInd;
				}
		}
		[values[0], values[values.length-1]]=[values[values.length-1], values[0]];
		values.pop();
		let curIndex = 0
		let sIndex = setMaxInd(values, curIndex);
		
		while(values[curIndex] < values[sIndex]){
			// console.log(values);

			// console.log('sindex',values[sIndex]);

			[values[curIndex], values[sIndex]]=[values[sIndex], values[curIndex]];
			curIndex = sIndex;
			sIndex = setMaxInd(values, curIndex);
		}
		return values;
	}


}

let numbers = new MaxHeap();

numbers.insert(41);
numbers.insert(39);
numbers.insert(33);
numbers.insert(18);
numbers.insert(27);
numbers.insert(12);
console.log(numbers.insert(55));
console.log(numbers.extractMax());
console.log(numbers.extractMax());
console.log(numbers.extractMax());
console.log(numbers.extractMax());
console.log(numbers.extractMax());
console.log(numbers.extractMax());
console.log(numbers.extractMax());
console.log(numbers.extractMax());

