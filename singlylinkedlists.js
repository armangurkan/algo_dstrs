class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}


class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;

	}

	push(val){
		val = new Node(val);
		
		if(!this.head){
			this.head = val;
			this.tail = this.head;

		} else {
			this.tail.next = val;
			this.tail = val;
		}
		this.length++;
		return this;
		


	}
	pop(){
		let temp = this.head;
		if(!this.head) return `Nothing to pop`;
		for (let i =0 ; i<=this.length; i++) {
			 if (temp.next===null){
			 	this.head = null;
			 	this.tail = null;
				this.length--;
				return this;
			} else if(temp.next===this.tail){
				this.tail = temp;
				temp.next = null;
				this.length--;
				return this;
			} 
			temp = temp.next;
		}
		

	}

	shift(){
		if(!this.head){
			return `Nothing to shift`;
		} else if(!this.head.next) {
			this.head = null;
			this.tail = null;
			this.length --;
			return this;
		} else {
			let temp = this.head.next;
			this.head = null;
			this.head = temp;
			this.length --;
			return this;

		}
	}

	unshift(val){

		val = new Node(val);
		val.next = this.head;
		this.head = val;
		this.length++;
		if(!this.tail){
			this.tail = this.head;
		}
		return this;
	}

	get(ind){
		if(ind > this.length-1) return 'we dont have that much elements; undefined';
		let count = 0;
		let cur = this.head;
		if(!cur) return 'there is no current it is null';
		
		function traverse(el){
			if(count === ind) {return el};
			count++;

			return traverse(el.next);

			
		}
		
		return traverse(cur);
		

	}

	set(ind, value){
		if(ind > this.length-1) return 'we dont have that much elements; undefined';
		let count = 0;
		let cur = this.head;
		if(!cur) return 'there is no current it is null';
		
		function traverse(el, value){
			
			if(count === ind) {el.val = value; return el};
			count++;
			
			return traverse(el.next, value);

			
		}
		
		return traverse(cur, value);
		

	}

	insert(ind, value){
		let instance = this;
		if(ind > this.length) return 'we dont have that much elements; undefined';
		let count = 0;
		let cur = this.head;
		if(ind === this.length){
			value = new Node(value);
			this.tail.next = value;
			this.tail = value;
			
			this.length++;
			return this;
		}
		if(ind === 0){
			value = new Node(value);
			value.next = this.head;
			this.head = value;
			this.length++;
			return this;
		}
		
		function traverse(el, value){
			if(count === ind -1){
				value = new Node(value);
				value.next = el.next;
				el.next = value;
				instance.length++;
				return value;
			}
			
			
			count++;
			
			return traverse(el.next, value);

			
		}
		
		return traverse(cur, value);
	}

	remove(ind){
		let instance = this;
		if(ind > this.length-1) return 'we dont have that much elements; undefined';
		let count = 0;
		let cur = this.head;
		if(!cur) return 'there is no current it is null';
		if(ind === this.length-1){
			return this.pop();
		}
		if(cur === instance.head){
			return this.shift();
		}
		function traverse(el){
			
			if(count === ind -1) {
				 
				let temp = el.next;
				el.next = null;
				el.next = temp.next;
				el.next.next = null;
				instance.length--;
				return instance;
				
			}
			count++;
			
			

			return traverse(el.next);

			
		}
		
		return traverse(cur);
	}

	reverse(){
		//take the tail 
		for(let i = this.length; i > 0; i--){
			this.insert(i,this.head.val);
			this.shift();
		}
		return this;
	}
}



let topitops = new SinglyLinkedList();


topitops.push('Areliko');

console.log(topitops.push('Ozgis Beybi'));

console.log(topitops.unshift('Armi'));

console.log('getting index:', topitops.get(2));
console.log('setting index:', topitops.set(0, 'Arman'));

console.log('inserting new node:', topitops.insert(3, 'Alp'));
console.log('inserting new node:', topitops.insert(4, 'Ora'));
console.log('inserting new node:', topitops.insert(0, 'finksi'));

console.log('removing node:', topitops.remove(0));
// console.log(topitops);
// console.log(topitops.reverse());
// console.log(topitops);
let validation = (obj) => {
	let temp = obj.head;
	for(let i = 0; i<obj.length; i++){
		
		console.log(`element ${i}:`,temp);
		temp = temp.next;
	}
}

validation(topitops);


console.log(topitops.reverse());
validation(topitops);
