/* tslint:disable:no-unused-variable */

import { WorkoutPlan, ExercisePlan, Exercise } from './model';

describe('WorkoutPlan', () => {
  
  it('should calculate total duration', () => {
    let workout = new WorkoutPlan("7MinWorkout", "7 Minute Workout", 10, []);
    workout.exercises.push(new ExercisePlan(null, 30));
    workout.exercises.push(new ExercisePlan(null, 30));

    let totalDuration: number = workout.totalWorkoutDuration();
    expect(totalDuration).toBe(60);
  });

  it('should return total duration to be 0 without exercises', () => {
    let workout = new WorkoutPlan("7MinWorkout", "7 Minute Workout", 10, []);

    let totalDuration: number = workout.totalWorkoutDuration();
    expect(totalDuration).toBe(0);
  });

});
