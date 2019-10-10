// class Vertex{
// 	constructor(){
// 		this.connections = [];
// 	}
// }

class Graph{
	constructor(){
		this.adjacencyList={};
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]){
			this.adjacencyList[vertex] = [];	
		} else {
			return `${vertex} is already added.`
		}
		return this.adjacencyList;	
	}
	addEdge(vertex1, vertex2){
		if(!this.adjacencyList[vertex2]) return `${vertex2} is not in the List`
		if(!this.adjacencyList[vertex1]) return `${vertex1} is not in the List`
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
		return this.adjacencyList;
	}
	removeEdge(v1, v2){
		this.adjacencyList[v2] && `${v2} is not defined`
		this.adjacencyList[v1] && `${v1} is not defined`
		let v1A = this.adjacencyList[v1];
		let v2A = this.adjacencyList[v2];
		let search = (vList, i)=> {
			let count = 0;
			for(let el of vList){				
				if(el === i){
					return count;
				}
				count ++;
			}
			return false;
		}
		let rmvEls = (arr, ind)=> {
			if(ind != arr.length-1){
				[arr[ind], arr[arr.length-1]] = [arr[arr.length-1], arr[ind]]
			}
			arr.pop();
		}
		rmvEls(v1A, search(v1A,v2));
		rmvEls(v2A, search(v2A,v1));
		return this.adjacencyList;
	}
	removeVertex(v){
		let list = this.adjacencyList;
		if(!list[v]) return `${v} is not in the list.`;
		delete list[v];
		for(let ver of Object.keys(list)){
			let tempList = list[ver];
			if(tempList.indexOf(v) !== tempList.length-1){
				[tempList[tempList.indexOf(v)], tempList[tempList.length-1]] = [tempList[tempList.length-1], tempList[tempList.indexOf(v)]]
			}
			list[ver].pop();
		}
		return list;
	}
	dfsR(v){
		let list = this.adjacencyList;
		let visited = new Visited();
		let allPlaces = Object.keys(list);
		let vertex;
		let count = 0;
		let addVisited = (vV) => {
			vertex = new Vertex();
			vertex.val = vV;
			visited.elements.push(vV);
			allPlaces = allPlaces.filter(e=> e !==vV);
			if(!visited.root){
				visited.root = vertex;
				return vV;
			}
			if(checkVisited(vV)) return;
			let parent = visited.root;
			let insert = ()=>{
				if(vertex.val<parent.val && !parent.left) return parent.left = vertex;	
				if(vertex.val>parent.val && !parent.right) return parent.right = vertex;		
				parent = vertex.val<parent.val? parent.left : parent.right;
				return insert();
			}
			insert();
		}
		let checkVisited = (value)=> {
			let parent = visited.root;
			let search = (va, p) => {
				if(va === p.val)return true;	
				// if(va < p.val && !p.left) return false;
				// if(va > p.val && !p.right) return false;
				if(va < p.val && p.left) return search(va, p.left);
				if(va > p.val && p.right) return search(va, p.right);
				return false;
			}
			let result = search(value, parent);
			return result;
		}
		
		if(!list[v]) return `${v} is not in the list can not start from there.`;
		
		let traverse = (v)=> {
			addVisited(v);
			list[v].forEach(el=> {
				count++;
				console.log(count);
				if(!checkVisited(el)){
					return traverse(el);
				}
			})

			//ALTERNATIVE SOLUTION
			// let list2 = list[v].filter(el => !checkVisited(el));
			// if(allPlaces.length === 0) return visited;
			// if(list2.length === 0 ) {
			// 	traverse(list[v][0]);
			// }else{
			// 	return traverse(list2[0]);
			// }
		}
		traverse(v);
		return visited.elements;
	}
	dfsRModified(start){
		let list = this.adjacencyList;
		let length = Object.keys(list);
		let results = [];
		let count = 0;
		let traverse = (v) => {
			list[v].val =v;
			v = list[v];
			results.push(v.val);
			if(results.length === length) return results;
			v.visited = true;

			v.forEach(el => {
				count++;
				console.log(count);
				if(!list[el].visited) return traverse(el);
			});
			
		}
		traverse(start);
		return results;
	}

	//Colt's solution
	depthfirstsearchrecursive(start){
		const adjacencyList = this.adjacencyList;
		const visited = {};
		const results = [];
		let count = 0;

		(function dfs(vertex){
			
			if(!vertex) return null;
			visited[vertex] = true;
			results.push(vertex);
			adjacencyList[vertex].forEach((el)=> {
				count++;
				console.log(count);
				if(!visited[el]) return dfs(el);
			});
		})(start);

		return results;

	}

	depthfirstsearchiterative(start){
		const adjacencyList = this.adjacencyList;
		const visited = {};
		const results = [];
		results.push(start);
		const length = Object.keys(adjacencyList).length;
		let count =0;
		while(results.length !== length){
			adjacencyList[start].forEach((el)=>{
				count++;
				console.log(count);
				if(!visited[el]){
					if(!el) return null;
					visited[el] = true;
					results.push(el);
				}
			});
		}
		return results;
	}

	//Colt's solution to depth first search iterative
	depthFirstIterative(start){
		const stack = [start];
		const visited = {};
		const results = [];
		let currentVertex;

		visited[start]=true;
		let count =0;
		while(stack.length){
			console.log(stack);
			currentVertex = stack.pop();
			results.push(currentVertex);
			this.adjacencyList[currentVertex].forEach(el => {
				count++;
				console.log(count);
				if(!visited[el]){
					visited[el] = true;
					stack.push(el);
				}
			});
		}
		return results;
	}

	bredthfirstsearch(s){
		let list = this.adjacencyList;
		let queue = [];
		let results =[];
		let visited = {};
		let count = 0;
		(function traverse(v){
			console.log(v);
			visited[v] = true;
			results.push(v);
			console.log('THIS IS QUE',queue);
			list[v] = list[v].filter(el=>(visited[el] === undefined));

			console.log('this is visited:', visited)

			queue = queue.concat(list[v]);
			console.log('THIS IS QUE',queue);

			queue.forEach(e=>{
				queue.shift();
				count++;
				// console.log(count,queue);
				if(visited[e] === undefined) return traverse(e);
			})
		})(s);
		return results;

	}

	//Colt's Solution
	breadthFirst(start){
		const l = this.adjacencyList;
		const q = [start];
		const r = [];
		const viz = {};
		let c = 0;
		while(q.length){
			let curVer = q.shift();
			r.push(curVer);
			viz[curVer]= true;
			l[curVer].forEach(el => {
				c++;
				console.log(c,q);
				if(!viz[el]){
					q.push(el);
					viz[el] = true;
				}
			});
		}
		return r;
	}



}


class Visited{
	constructor(){
		this.root = null;
		this.elements = [];
		
	}
}
class Vertex{
	constructor(){
		this.val = null;
		this.left = null;
		this.right = null;
		this.back = null;
	}
}


let flights = new Graph();

console.log(flights.addVertex('Istanbul'));
console.log(flights.addVertex('Ankara'));
console.log(flights.addVertex('Izmir'));
console.log(flights.addEdge('Istanbul','Izmir'));
console.log(flights.addEdge('Ankara','Izmir'));
console.log(flights.addEdge('Istanbul','Ankara'));

flights.addVertex("Dallas");
flights.addVertex("Tokyo");
flights.addVertex("Aspen");
flights.addVertex("Los Angeles");
flights.addVertex("Hong Kong")
flights.addEdge("Dallas", "Tokyo");
flights.addEdge("Dallas", "Aspen");
flights.addEdge("Hong Kong", "Tokyo");
flights.addEdge("Hong Kong", "Dallas");
flights.addEdge("Los Angeles", "Hong Kong");
flights.addEdge('Istanbul','Hong Kong');
flights.addEdge("Los Angeles", "Izmir");
flights.addEdge("Los Angeles", "Istanbul");
flights.addEdge("Dallas", "Istanbul");
flights.addEdge("Dallas", "Ankara");
flights.addEdge("Dallas", "Izmir");
flights.addEdge("Tokyo", "Izmir");
flights.addEdge("Tokyo", "Istanbul");
flights.addEdge("Aspen", "Istanbul");
flights.addEdge("Aspen", "Izmir");
// console.log('dfsR',flights.dfsR('Istanbul'));
// console.log('depthfirstsearchrecursive',flights.depthfirstsearchrecursive('Istanbul'));
// console.log('depthfirstsearchiterative',flights.depthfirstsearchiterative('Istanbul'));
// console.log('depthFirstIterative',flights.depthFirstIterative('Istanbul'));
// console.log('dfsRModified',flights.dfsRModified('Istanbul'));
console.log('bredthfirstsearch',flights.bredthfirstsearch('Istanbul'));
// console.log('breadthFirst',flights.breadthFirst('Istanbul'));