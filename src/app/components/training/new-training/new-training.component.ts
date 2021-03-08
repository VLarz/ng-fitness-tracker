import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Exercise } from '../models/exercise.model';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[];

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm): void {
    this.trainingService.startExercise(form.value.exercise);
  }
}
