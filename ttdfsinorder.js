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

	bfs(){
		if(!this.root) return false;
		let result =[this.root.val];
		let que = [];

		let helper = (start = this.root) =>{
			if(start.left) {que.unshift(start.left);}
			if(start.right) {que.unshift(start.right);}
			if(que.length === 0) return result;
			
			start = que.pop();
			console.log('que pop',start.val);
			// if(start.right && start.left) que.push(start.left.val,start.right.val);
			result.push(start.val) //!start.right &&  //!start.left && 
			// console.log('this is the que:',result,'and this is the start:',(start)? start.val : null);
			return result.concat(helper(start));
		}
		helper();
		return result;

	}
	dfsPO(start = this.root, result= []){
		if(!this.root) return false;
		result.push(start.val);
		if(start.left) this.dfsPO(start.left,result);
		if(start.right) this.dfsPO(start.right,result);
		
		// if(start.right && start.left) que.push(start.left.val,start.right.val);
		//!start.right &&  //!start.left && 
		// console.log('this is the que:',result,'and this is the start:',(start)? start.val : null);
		return result;
	}
	dfsPostO(){
		let result = [];
		if(!this.root) return false;
		let helper = (start) => {
		
		// let result =[this.root.val];
		// if(start !== this.root){
		// 	result = [];		
		// }

		
			if(start.left) helper(start.left);
			if(start.right) helper(start.right);
			
			result.push(start.val);
			
		
		}
		helper(this.root);
		
		// if(start.right && start.left) que.push(start.left.val,start.right.val);
		//!start.right &&  //!start.left && 
		// console.log('this is the que:',result,'and this is the start:',(start)? start.val : null);
		return result;
	}
	dfsPostO2(start = this.root, result=[]){
		if(!this.root) return false;
		result.unshift(start.val);
		// console.log('this is start', start.val, 'this is result', result);
		if(start.right) this.dfsPostO2(start.right,result);
		if(start.left) this.dfsPostO2(start.left,result);
		
		return result;
	}
	dfsIO(start = this.root, result =[]){
		if(!this.root) return false;
		// console.log('this is start', start.val, 'this is result', result);
		start.left && this.dfsIO(start.left, result);
		result.push(start.val);
		start.right && this.dfsIO(start.right, result);
		
		
		
		return result;
	}
}



let mapple = new BST();

mapple.insert(5);
mapple.insert(7);
mapple.insert(8);
mapple.insert(3);
mapple.insert(2);
mapple.insert(1);
mapple.insert(19);
mapple.insert(20);
mapple.insert(4);
mapple.insert(6);
mapple.insert(9);
//			5
//		3		7
//	   2 4	   6 8
//    1			  19
//				  9	20


// console.log(mapple);
// console.log(mapple.root.left);
// console.log(mapple.root.right);

// console.log(mapple.dfsPO());
console.log(mapple.dfsPostO());
console.log(mapple.dfsPostO2());
console.log(mapple.dfsIO());



