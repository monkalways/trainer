import { Component, OnInit } from '@angular/core';
import { WorkoutPlan, ExercisePlan, Exercise } from '../shared/model';
import { WorkoutService } from '../shared/workout.service';

@Component({
  selector: 'app-workout-runner',
  templateUrl: './workout-runner.component.html',
  styleUrls: ['./workout-runner.component.css']
})
export class WorkoutRunnerComponent implements OnInit {

  workoutPlan: WorkoutPlan;
  restExercise: ExercisePlan;
  workoutTimeRemaining: number;
  currentExerciseIndex: number;
  currentExercisePlan: ExercisePlan;
  exerciseRunningDuration: number;

  constructor(private workoutService: WorkoutService) { 
    this.workoutPlan = workoutService.data;
    this.restExercise = new ExercisePlan(
      new Exercise('rest', 'Relax!', 'Relax a bit', 'rest.png'), 
      this.workoutPlan.restBetweenExercise);
  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
    this.currentExerciseIndex = 0;

    this.startExercisePlan(this.workoutPlan.exercises[this.currentExerciseIndex]);
  }

  startExercisePlan(exercisePlan: ExercisePlan) {
    this.currentExercisePlan = exercisePlan;
    this.exerciseRunningDuration = 0;

    let intervalId = setInterval( () => {
      if(this.exerciseRunningDuration >= this.currentExercisePlan.duration) {
        clearInterval(intervalId);

        let next: ExercisePlan = this.getNextExercise();
        if(next) {
          if(next !== this.restExercise) {
            this.currentExerciseIndex++;
          }
          this.startExercisePlan(next);
        }
      } else {
        this.exerciseRunningDuration++;
      }
    }, 1000);
  }

  getNextExercise(): ExercisePlan {
    let nextExercise: ExercisePlan = null;
    if(this.currentExercisePlan === this.restExercise) {
      nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1];
    } else if(this.currentExerciseIndex < this.workoutPlan.exercises.length - 1) {
      nextExercise = this.restExercise;
    }
    return nextExercise;
  }

}
