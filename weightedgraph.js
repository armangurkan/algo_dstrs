class WeightedGraph{
	constructor(){
		this.adjacencyList = {}
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]){
			this.adjacencyList[vertex] = [];
		}
		if(this.adjacencyList[vertex]) return `vertex of ${vertex} has already been added.`
		return this.adjacencyList;
	}
	addEdge(v1, v2, weight){
		//add an object of adge with a weight in both vertices
			//v1 or v2 might not be added; add it addVertex
		if(!this.adjacencyList[v1]) addVertex(v1);
		if(!this.adjacencyList[v2]) addVertex(v2);
		// console.log('before',this.adjacencyList[v2]);
		this.adjacencyList[v1].push({node:v2, weight})
		this.adjacencyList[v2].push({node:v1, weight})
			//are there more than one edge between two vertices: YES
		
		// this.adjacencyList[v2].push({v1: weight});
		return this.adjacencyList;
	}

	removeEdge(v1, v2){
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(e => e !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(e => e !== v1);
	}

	removeVertex(v){
		if(this.adjacencyList[v]){
			const list = this.adjacencyList;
			//for each vertex that has a connection with vertex v remove object by deleting
			for(let el in list){
				if(list[el][v]) delete list[el][v];
			}
			delete list[v]
			this.adjacencyList = list;
			return this.adjacencyList;

		} else {
			return undefined;
		}
	}
	//this was depth first search approach
	findShortestPath(v1, v2){
		let visited = {};
		let distances = {};
		let camefrom = {};
		let list = this.adjacencyList;
		distances[v1] = 0;
		camefrom[v1] =null;
		visited[v1] = true;
		let traverse = (el) =>{	
			list = this.adjacencyList;
			visited[el] = true;
			list[el].forEach((e)=> {
				if(e.node !==v1){
					if(distances[e.node]){
					if(e.weight + distances[el]<distances[e.node]){
						distances[e.node] = distances[el]+ e.weight;
						camefrom[e.node] = el;
					}	
					}
					if(!distances[e.node]){
						distances[e.node] = distances[el] + e.weight;
						camefrom[e.node] = el;
					}	
				}
				if(!visited[e.node]) return traverse(e.node);
			});
		}
		traverse(v1);
		return distances;	
	}

	//this is depth first search approach
	fspBF(v1, v2){
		let visited = {};
		let distances = {};
		let camefrom = {};
		let list = this.adjacencyList;
		let que = new PQ();
		distances[v1] = 0;
		camefrom[v1] = null;
		visited[v1] = true;
		// que.insert(v1, 0);
		let traverse = (v) =>{
			visited[v] = true; 
			for(let el of list[v]){
				if(el.node === v1) continue;
				let nWeight = distances[v] + el.weight;
				if((!distances[el.node] && !camefrom[el.node])|| (distances[el.node] && distances[el.node] > nWeight)){
					camefrom[el.node] = v;
					distances[el.node] = nWeight;
					que.insert(el.node, distances[el.node]);
				}  
			}
			// console.log('_____________________________________________')
			// console.log('THIS IS THE QUE', que)
			// console.log('_____________________________________________')
			let next = que.remove();
			if(!next) return distances;
			if(next.node !== v2) return traverse(next.node);
			console.log(!visited[next.node])

		}
		traverse(v1);
		console.log(distances);
		console.log(camefrom);
		console.log(visited);
		console.log(que);
	}
}

class PQ{
	constructor(){
		this.queue = [];
	}
	insert(node, weight){
		let list = this.queue;
		node = node;
		weight = weight;
		let cur = list.length-1;
		let parent = Math.floor((cur-1)/2);
		if(list.length>1 && list[cur].node === node && list[cur].weight < weight){
			return list;	
		}
		
		// if(list[cur] !== node)
		list.push({node, weight});
		
		if(this.queue.length ===1) return list;
		console.log(cur, 'is the current and ',parent, 'is the parent');
		console.log(list[cur], 'is the current and ',list[parent], 'is the parent');
		while(parent>=0 && list[cur].weight < list[parent].weight){
			
			[list[parent],list[cur]] = [list[cur],list[parent]];
			cur = parent;
			parent = Math.floor((cur-1)/2);
		}
	}
	remove(){
		let list = this.queue;
		let cur = 0;
		let leftC = (2*cur)+1;
		let rightC = (2*cur)+2;
		[list[cur], list[list.length-1]] = [list[list.length-1], list[cur]];
		let removed = list.pop();
		let child = (rightC, leftC) => {
			if(list[rightC] && list[leftC] && list[rightC].weight > list[leftC].weight){
				return rightC;
			} else {
				return leftC;
			}
		}
		let childE = child(rightC, leftC);
		while(list[childE] && list[cur].weight > list[childE].weight){
			console.log('this is being swapped',[list[cur],list[childE]]);
			[list[cur],list[childE]] = [list[childE],list[cur]];
			cur = childE;
			leftC = (2*cur)+1;
			rightC = (2*cur)+2;
			childE = child(rightC, leftC);
		}
		
		return removed;
	}

}




let flights = new WeightedGraph();

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


// console.log(graph.adjacencyList);
// console.log(graph.findShortestPath('A','E'));
console.log(graph.fspBF('A','E'));