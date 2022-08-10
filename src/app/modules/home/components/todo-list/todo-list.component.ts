import { Component, OnInit } from '@angular/core';

import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [];

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

  constructor() {}

  ngOnInit(): void {}
}
