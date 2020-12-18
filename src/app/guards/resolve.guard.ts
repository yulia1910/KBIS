import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoItem } from './../model/todo-item.model';
import { AppState } from './../store/models/app-state.model';
import { Store } from '@ngrx/store';
import * as todoAction from './../store/actions/todo.actions'; 


@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<TodoItem[]> {
  todoItems: TodoItem[];

  constructor(private store: Store<AppState>){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<TodoItem[]> | Promise<TodoItem[]> | TodoItem[] {
    this.store.dispatch(new todoAction.LoadListAction());
    this.store.select(store => store.todo)
      .subscribe(obj => {this.todoItems = obj.TodoItemsList});
    return this.todoItems;
  }
  
}
