import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  trainings = [
    { id: 1, value: 'Crunches' },
    { id: 2, value: 'Touch Toes' },
    { id: 3, value: 'Side Lunges' },
    { id: 4, value: 'Burpees' },
  ];

  @Output() trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartTraining(): void {
    this.trainingStart.emit();
  }
}
