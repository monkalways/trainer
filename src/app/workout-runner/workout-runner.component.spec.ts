/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkoutRunnerComponent } from './workout-runner.component';
import { WorkoutService } from '../shared/workout.service';

describe('WorkoutRunnerComponent', () => {
  let component: WorkoutRunnerComponent;
  let fixture: ComponentFixture<WorkoutRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutRunnerComponent ],
      providers: [ WorkoutService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
