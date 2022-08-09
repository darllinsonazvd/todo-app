import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddTaskInputComponent } from './todo-add-task-input.component';

describe('TodoAddTaskInputComponent', () => {
  let component: TodoAddTaskInputComponent;
  let fixture: ComponentFixture<TodoAddTaskInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddTaskInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAddTaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
