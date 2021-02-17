import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-stop-training',
  templateUrl: './dialog-stop-training.component.html',
  styleUrls: ['./dialog-stop-training.component.scss']
})
export class DialogStopTrainingComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  ngOnInit(): void {
  }

}
