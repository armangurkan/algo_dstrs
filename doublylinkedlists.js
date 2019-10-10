class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}


class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;

	}

	push(val){
		val = new Node(val);
		if(this.length === 0){
			this.tail = val; 
			this.head = val;
			val.prev = null;
			val.next = null;
		} 
		
		if(this.length === 1) {
			this.tail = val;
			this.tail.prev = this.head;
			this.head.next = this.tail;
			this.tail.next =null;
			//1 2t
		}

		if(this.length > 1){
			this.tail.next = val;
			val.prev = this.tail;
			this.tail = val;
			this.tail.next = null;
		}
		this.length++;
		return val;
	}


	pop(){

		if(this.length < 1) return undefined;
		let temp = this.tail;
		if(this.length === 1){
			this.tail = null;
			this.head = null;
		} else{
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev =null;
		}
		
		this.length --;
		return temp;

	}


	shift(){
		let temp = this.head;
		if(this.length === 0) return undefined;
		if(this.length === 1){
			this.tail = null;
			this.head = null;
		}else{
			this.head = this.head.next;
			this.head.prev = null;
		}
		this.length --;
		return this;
	}

	unshift(val){
		val = new Node(val);
		if(this.length < 1){
			this.tail = val; 
			this.head = val;
			val.prev = null;
			val.next = null;
		} 
		
		if(this.length === 1) {
			this.head = val;
			this.head.next = this.tail;
			this.tail.prev = this.head;
			this.head.prev =null;
		}

		if(this.length > 1){
			this.head.prev = val;
			val.next = this.head;
			this.head = val;
			this.head.prev = null;
		}
		this.length++;
		return this;

	}

	get(ind){
		if(ind >= this.length || ind < 0) return 'nothing to get here' && null;
		let cur = this.head;
		let curR = this.tail;
		let count = 0;
		let countR = this.length-1;
		if(this.length -ind >= ind){
			while(ind !== count){
			cur = cur.next;
			count ++;
			}
		} else {
			while(ind !== countR){
			curR = curR.prev;
			countR --;
			}
		}		
		return cur || curR;
	}

	set(ind, val){
		if(this.get(ind) !== null){
			this.get(ind).val = val;
			return true;	
		}
		return false;
		
	}

	insert(ind,val){
		if(ind > this.length || ind<0) return false;
		if(ind === 0) return !!this.unshift(val);
		if(ind === this.length) return !!this.push(val);
		if(this.get(ind) !== null){
			val = new Node(val);
			let temp = this.get(ind);
			val.prev = temp.prev;
			val.next = temp;
			val.next.prev = val;
			val.prev.next = val;
			this.length++;
			return val;	
		}
			return false;
		// 1 2 3 4 5
		//       

	}

	remove(ind){
		if(ind >= this.length || ind<0) return false;
		if(ind === 0) return !!this.shift();
		if(ind === this.length-1) return !!this.pop();
		if(this.get(ind)!==null){
			let temp = this.get(ind);
			temp.prev.next = temp.next;
			temp.next.prev = temp.prev;
			temp.next, temp.prev = null;
			this.length--;
			return this;		
		}
			return false;

	}


	reverse(){
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let temp2 = this.head;
		for(let i=0; i<this.length;i++){
			let temp3 = temp2.next;
			temp2.next = temp2.prev;
			temp2.prev = temp3;
			temp2 = temp2.next;
		}
		return this;

	}


}


let topitops = new DoublyLinkedList();

let result = () =>

	{ 
		let res =[];
		for(let i = 0, el = topitops.head; i< topitops.length; i++){

		res.push(el.val);
		el = el.next;
		}
		return res;
	}
console.log(topitops.push('Özgiş'));
console.log(topitops.push('Areliko'));
// console.log(topitops.push('Flinksi'));
// console.log(`it's popping ${topitops.tail} and now topitops is`,topitops.pop());
console.log('its unshifting', topitops.unshift('Flinksi'));
console.log(result());
console.log(`it's shifting ${topitops.head} and now topitops is`,topitops.shift());
// topitops.push('Arman');
// topitops.push('Ora');
// topitops.push('Alp');

// // console.log('this is the get result',topitops.get(8));

// // console.log('this is the set result',topitops.set(8,'Armiş'));
// console.log(result());

// // console.log(res);

// topitops.insert(0,'Reybzi Beybzi');
// console.log(result());
// console.log(topitops);
// // console.log(res);
// topitops.insert(0,'Flinksi');
// console.log(result());
// topitops.remove(0);
// console.log(result());
// console.log(topitops);
// topitops.reverse();
console.log(result());
let start = topitops.head;
for(let i = 0; i< topitops.length; i++){
	console.log(start.val);
	start = start.next;
}

