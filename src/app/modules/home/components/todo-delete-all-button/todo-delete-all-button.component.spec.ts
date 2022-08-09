import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteAllButtonComponent } from './todo-delete-all-button.component';

describe('TodoDeleteAllButtonComponent', () => {
  let component: TodoDeleteAllButtonComponent;
  let fixture: ComponentFixture<TodoDeleteAllButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeleteAllButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDeleteAllButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
