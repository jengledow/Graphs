import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edge-adder',
  templateUrl: './edge-adder.component.html',
  styleUrls: ['./edge-adder.component.scss']
})
export class EdgeAdderComponent {
  constructor(
    public dialog: MatDialogRef<EdgeAdderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  close(){
    this.dialog.close();
  }
}
