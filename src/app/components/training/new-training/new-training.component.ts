import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Exercise } from '../models/exercise.model';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[];

  @Output() trainingStart = new EventEmitter<void>();

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(): void {
    this.trainingStart.emit();
  }
}
