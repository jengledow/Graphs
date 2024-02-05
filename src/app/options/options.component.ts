import { Component, Input } from '@angular/core';
import { GraphService } from 'src/services/graph.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  @Input({ alias: "disabled", required: true }) disabled: boolean = true;
  weighted: boolean = true;
  directed: boolean = true;
  list: boolean = false;

  constructor(
    private g: GraphService
  ){}

  setWeighted(e: any): void {
    this.weighted = !this.weighted;
  }

  setDirected(e: any): void {
    this.directed = !this.directed;
  }

  setList(e: any): void {
    this.list = !this.list;
  }
}
