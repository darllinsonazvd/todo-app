import { Component, DoCheck } from '@angular/core';

import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('taskList') || '[]'
  );

  public deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAllTasks() {
    const confirm = window.confirm(
      'Do you really want to clear all your tasks?'
    );

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTask(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public setLocalStorage() {
    if (this.taskList) {
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  constructor() {}
}
