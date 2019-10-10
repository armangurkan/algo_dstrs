class Node{
	consturctor(v, p){
		this.v = v;
		this.p = p;
	}
}




class MinHeap{
	constructor(){
		this.values =[];
	}


	insert(v, p){
		let val = new Node(v, p);
		
		val.v = v;
		val.p = p;
		this.values.push(val);

		let values = this.values;
		
		if(values.length === 1) return values;
		let curIndex = values.length-1;
		let parentIndex = Math.floor((curIndex-1)/2);

		while(parentIndex >=0 && val.p < values[parentIndex].p){
			

			[values[parentIndex], values[curIndex]]=[values[curIndex], values[parentIndex]];
			curIndex = parentIndex;
			parentIndex = Math.floor((curIndex-1)/2);

			
		}
		return this.values;
	}
	extractMin(){
		let values = this.values;
		if(values.length < 1) return false;
		if(values.length === 1){
			values.pop();
			return values;
		}
		function setMinInd(arr, curI) {
			let lInd = (curI*2)+1;
			let rInd = (curI*2)+2;
			if(lInd>values.length-1) return lInd;
			if(rInd>values.length-1) return lInd;
			if(arr[lInd].p < arr[rInd].p){
				return lInd;
			} else {
				return rInd;
			}
		}

		[values[0], values[values.length-1]]=[values[values.length-1], values[0]];
		values.pop();
		let curIndex = 0
		let sIndex = setMinInd(this.values, curIndex);
		while((sIndex<values.length) && values[curIndex].p > values[sIndex].p){
			[values[curIndex], values[sIndex]]=[values[sIndex], values[curIndex]];
			curIndex = sIndex;
			sIndex = setMinInd(this.values, curIndex);
		}
		return values;
	}


}

let numbers = new MinHeap();

numbers.insert("bir", 1);
numbers.insert("iki", 2);
numbers.insert("uc", 3);
numbers.insert("dort", 4);
numbers.insert("bes", 5);
numbers.insert("alti", 6);
console.log(numbers.insert("yedi", 7));
console.log(numbers.extractMin());
console.log(numbers.extractMin());
console.log(numbers.extractMin());
console.log(numbers.extractMin());
console.log(numbers.extractMin());
console.log(numbers.extractMin());
console.log(numbers.extractMin());
console.log(numbers.extractMin());

