import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add-task-input',
  templateUrl: './todo-add-task-input.component.html',
  styleUrls: ['./todo-add-task-input.component.scss'],
})
export class TodoAddTaskInputComponent implements OnInit {
  @Output() public emitTask = new EventEmitter();

  public task: string = '';

  public submitTask() {
    this.task = this.task.trim();

    if (this.task) {
      this.emitTask.emit(this.task);
      this.task = '';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
