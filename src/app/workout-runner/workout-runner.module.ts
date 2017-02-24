import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    WorkoutRunnerComponent,
    ExerciseDescriptionComponent,
    VideoPlayerComponent
  ],
  exports: [
    WorkoutRunnerComponent
  ]
})
export class WorkoutRunnerModule { }
