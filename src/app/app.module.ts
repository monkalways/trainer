import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component';
import { WorkoutService } from './shared/workout.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutRunnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ 
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
