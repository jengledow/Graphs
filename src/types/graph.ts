import { Vertex } from "./vertex";
import { Stack } from "./stack";
import { Queue } from "./queue";
import { Edge } from "./edge";

export class Graph {
    vertices: any;

    constructor(){
        this.vertices = {};
    }

    dfsTraversal(startVertex: string): void {
        let nextToVisit: Stack = new Stack();
		
		let currV: Vertex = this.vertices[startVertex];
        currV.visited = true;

		for(let e of currV.getEdges()) {
			nextToVisit.push(e);
		}
		
		while(!nextToVisit.isEmpty()) {
			nextToVisit.print();
			let currEdge: Edge = nextToVisit.pop() as Edge;
			let nextV: Vertex = this.vertices[currEdge.v.name];
			nextV.visited = true;
			
			//res += "(" + currV.getName() + "," + currEdge.getWeight() + "," + nextV.getName() + ") ";
			
			for(let edge of nextV.getEdges()) {
				if(!this.vertices[edge.v.name].visited) {
					nextToVisit.push(edge);
				}
			}
			currV = nextV;
		}
    }

    bfsTraversal(startIndex: Number): void {
    }

    addVertex(v: Vertex){
        if(v.name in this.vertices){
            console.log("vertex already exists");
            return;
        }

        this.vertices[v.name] = v;
    }

    printVertices(): void {
        let res: string = "";

        for(let k in this.vertices){
            res += k + " -> ";

            for(let e of this.vertices[k].getEdges()){
                res += e.toString() + "\t";
            }

            console.log(res);
            res = "";
        }
    }

    printVisited(){
        let res: string = "";

        for(let k in this.vertices){
            if(this.vertices[k].visited){
                res += k + "\t";
            }
        }

        console.log("Visited: " + res);
    }
}