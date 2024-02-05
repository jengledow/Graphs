import { Vertex } from "./vertex";

export class Edge {
    v: Vertex;
    weight: number;

    constructor(end: Vertex, w: number){
        this.v = end;
        this.weight = w;
    }

    toString(): string {
        return "(" + this.v.name + "," + this.weight + ")";
    }
}