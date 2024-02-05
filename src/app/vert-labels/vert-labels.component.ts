import { Component } from '@angular/core';
import { GraphService } from 'src/services/graph.service';

@Component({
  selector: 'app-vert-labels',
  templateUrl: './vert-labels.component.html',
  styleUrls: ['./vert-labels.component.scss']
})
export class VertLabelsComponent {
  vertLabels: string = "";

  constructor(
    private g: GraphService
  ){}

  setLabels(){
    let labels = this.vertLabels.split(",");
    this.g.setLabels(labels);
  }
}
