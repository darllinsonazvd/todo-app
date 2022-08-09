import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { TodoDeleteAllButtonComponent } from './components/todo-delete-all-button/todo-delete-all-button.component';
import { TodoAddTaskInputComponent } from './components/todo-add-task-input/todo-add-task-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoDeleteAllButtonComponent,
    TodoAddTaskInputComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
