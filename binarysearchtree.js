class Node{
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST{
	constructor(){
		this.root = null;
	}
	insert(val){
		val = new Node(val);
		if(!this.root){
			this.root = val;
			return this;
		}
		let parent = this.root;
		let setParent = () => {
			if(val.val<parent.val && !parent.left) {parent.left = val; return;}
			if(val.val>=parent.val && !parent.right) {parent.right = val; return;}
			parent = val.val<parent.val? parent.left : parent.right;
			return setParent();
		}
		setParent();

		return this;
		
	}
	find(el){
		if(!this.root) return !!null;
		if(el === this.root.val) return this.root;
		let cur = this.root;

		let getElement = () => {
			if(cur === null) return cur = null;
			if(el === cur.val) return cur;
			if(el<cur.val) cur = cur.left;
			if(el>cur.val) cur = cur.right;
			return getElement();
		}
		getElement();

		return !!cur, cur;
	}
}


let mapple = new BST();

mapple.insert(5);
console.log(mapple);
mapple.insert(7);
console.log(mapple);
mapple.insert(8);
console.log(mapple);
mapple.insert(2);
mapple.insert(1);
mapple.insert(4);
mapple.insert(6);
mapple.insert(9);
console.log(mapple);
