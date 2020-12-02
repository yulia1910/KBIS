import { TodoItem } from './../model/todo-item.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TODO_ITEMS } from './todo-items';
import * as moment from 'moment';

// @Injectable({
//     providedIn: 'root',
//   })
export class InMemoryTodoService implements InMemoryDbService {
  createDb(): any {
    // tslint:disable-next-line: prefer-const
    let todoitems = TODO_ITEMS;


    return { todoitems };
  }


  genId(todoitems: TodoItem[]): number {
    return todoitems.length > 0 ? Math.max(...todoitems.map(hero => hero.id)) + 1 : 11;
  }
}