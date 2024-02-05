import { Edge } from './edge';

export class Vertex {
    name: string;
    edges: Edge[];
    visited: boolean = false;

    constructor(name: string){
        this.name = name;
        this.edges = [];
    }

    addEdge(e: Edge): void {
        this.edges.push(e);
    }

    getEdges(): Edge[] {
        return this.edges;
    }

    toString(): string {
        let res: string = this.name + "\t";

        for(let e of this.edges){
            res += e.toString() + "\t";
        }

        return res;
    }
}