import { Injectable } from '@angular/core';
import { Graph } from 'src/types/graph';
import { Vertex } from 'src/types/vertex';
import { Edge } from 'src/types/edge';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  vertLabels: string[] = [];
  g: Graph = new Graph();

  constructor() {}

  setLabels(l: string[]): void {
    this.vertLabels = l;
    this.createVertices();
  }

  createVertices(): void {
    for(let v of this.vertLabels){
      let vertex: Vertex = new Vertex(v);
      this.g.addVertex(vertex);
    }
  }

  addEdge(start: string, end: string, weight: number): void {
    let startingVertex: Vertex = this.g.vertices[start];
    let endingVertex: Vertex = this.g.vertices[end];
    let edge: Edge = new Edge(endingVertex, weight);

    startingVertex.addEdge(edge);
  }

  dfsTraversal(start: string = "a"){
    this.g.dfsTraversal(start);
  }
}
