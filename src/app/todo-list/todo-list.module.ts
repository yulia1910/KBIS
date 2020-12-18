import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { InMemoryTodoService } from './../test-data/in-memory-service'
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DataService } from './data.service'

@NgModule({
  declarations: [TodoListComponent, EditTaskComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoService)
  ],
  providers: [DataService],
})
export class TodoListModule { }
