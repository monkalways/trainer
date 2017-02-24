import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkoutService } from './shared/workout.service';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WorkoutRunnerModule
  ],
  providers: [ 
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
