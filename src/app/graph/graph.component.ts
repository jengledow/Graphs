import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GraphService } from 'src/services/graph.service';
import { EdgeAdderComponent } from '../edge-adder/edge-adder.component';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
  @Input({ required: true, alias: "weighted" }) weighted: boolean = true;
  @Input({ required: true, alias: "directed" }) directed: boolean = false;
  @Input({ required: true, alias: "list" }) list: boolean = true;

  
  newEdge = {
    vname: '',
    weight: -1
  }

  constructor(
    public g: GraphService,
    public d: MatDialog
  ){}

  openEdgeDialog(vertex: string): void {

    const addEdgeDialog = this.d.open(EdgeAdderComponent, {
      width: "40%",
      data: { vname: this.newEdge.vname, weight: this.newEdge.weight }
    });

    addEdgeDialog.afterClosed().subscribe(result => {
      if(!result){
        return;
      }

      this.g.addEdge(vertex, result.vname, result.weight);
      this.g.addEdge(result.vname, vertex, result.weight);
    })
  }

  processChange(e: any){
    let vertices: string[] = e.target.id.split(":");
    let weight: number = e.target.value;

    this.g.addEdge(vertices[0], vertices[1], weight);
    this.g.addEdge(vertices[1], vertices[0], weight);
  }
}
