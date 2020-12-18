import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoItemsForView } from './../model';
import { AppState } from './../store/models/app-state.model';
import { Store } from '@ngrx/store';
import * as todoActions from './../store/actions/todo.actions'; 
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { DataService } from './data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems: Array<TodoItem>;
  todoItemsForView: Array<TodoItemsForView>
  taskForEdit: TodoItemsForView;
  task:string;
  dueDate:string;
  done: boolean;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.todoItems = this.activatedRoute.snapshot.data['data'];
    this.todoItemsForView = this.todoItems.map( item => {
      return  {
        id: item.id,
        dueDate:moment(item.dueDate).format('DD/MM/YYYY'),
        done: item.done,
        text: item.text,
        isClicked: false
      }
    });  
  }
  
  editItem( item ){
    if( item.isClicked == false ){
      this.todoItemsForView.forEach( (task) =>{
        if( task.isClicked == true && task.id != item.id ){
          task.isClicked = false;
        }        
      });
      item.isClicked = true;
      this.taskForEdit = item;
      this.task = item.text;
      this.dueDate = item.dueDate;
      this.done = item.done;      
    }    
  }

  onUpdateList(event){
    var todoObj: TodoItem = {
      id: event.id,
      dueDate: moment(event.dueDate, 'DD/MM/YYYY').toDate(),
      done: event.done,
      text: event.text,
    };  
    var temp = this.todoItems.find(u => u.id == todoObj.id);
    temp = todoObj;    
    this.store.dispatch(new todoActions.UpdateAction(this.todoItems));
  }
}
