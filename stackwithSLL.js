class Node{
	constructor(val){
		this.val = val;
		this.next = null;
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
			this.start = val;
			this.end = val;
			val.next = null;
		}else if(this.length===1){
			val.next = this.start;
			this.end = val;
		} else{
			val.next = this.end;
			this.end = val;
		}
		this.length++;
		return this;

	}

	pop(){
		let temp = this.end;
		if(this.length===0) return null;
		if(this.length === 1){
			this.end.next = null;
			this.end = null;
			this.start = null;
		}else{
			this.end = this.end.next;
			temp.next =null;
		}
		this.length--;
		return temp;
	}
}

let teams = new Stack();

let getR = (t) => {
	let result = []
	let temp = t.end;
	for(let i = 0; i<t.length; i++){
		let nextMes = temp.next? temp.next.val : temp.next;
		let msg = `${temp.val} and next el is: ${nextMes}`;
		result.push(msg);
		temp = temp.next;
	}
	console.log(result);
}

teams.push('Altay');
getR(teams);

teams.push('GS');
getR(teams);

teams.push('ManU');
getR(teams);

teams.push('Barcelona');
getR(teams);

console.log(teams.pop());
getR(teams);
console.log(teams.pop());
getR(teams);
console.log(teams.pop());
getR(teams);
console.log(teams.pop());
getR(teams);