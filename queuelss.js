class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class Stack{
	constructor(){
		this.length = 0;
		this.end= null;
		this.start =null;
		
	}

	push(val){
		val = new Node(val);
		if(this.length === 0){
			this.end = val;
			this.start = val;
			val.next = null;
		}else {
			this.end.next =val;
			this.end = val;
		}
		this.length++;
		return this;

	}

	pop(){
		let temp = this.start;
		if(this.length===0) return null;
		if(this.length === 1){
			this.start = null;
			this.end = null;
		}else{
			
			this.start = temp.next;
		}
		this.length--;
		return temp.val;
	}
}

let chant = new Stack();

let getR = (t) => {
	let result = []
	let temp = t.start;
	for(let i = 0; i<t.length; i++){
		let nextMes = temp.next? temp.next.val : temp.next;
		let msg = `${temp.val} ve ${nextMes}`;
		result.push(msg);
		temp = temp.next;
	}
	console.log(result);
}

chant.push('Siyah');
getR(chant);

chant.push('Beyaz');
getR(chant);

chant.push('En Büyük');
getR(chant);

chant.push('Altay');
getR(chant);

console.log(chant.pop());
getR(chant);
console.log(chant.pop());
getR(chant);
console.log(chant.pop());
getR(chant);
console.log(chant.pop());
getR(chant);