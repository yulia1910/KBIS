import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TodoActions from '../actions/todo.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoItem } from '../../model';
//import { TodoListService } from '../../todo-list.service'
import { InMemoryTodoService } from './../../test-data/in-memory-service';

 @Injectable()
export class TodoEffects {

    constructor(private actions$: Actions,
         private dbService: InMemoryTodoService){}


    @Effect() LoadTodoList$ = this.actions$
    .pipe(
        ofType<TodoActions.LoadListAction>(TodoActions.LOAD_TODO_LIST),
        mergeMap(
            () => of(this.dbService.createDb()).pipe(
                    map((data: Array<TodoItem>) => new TodoActions.LoadSuccessAction(data)),
                    catchError( error => of(new TodoActions.LoadFailureAction(error)))
                )
        )
    )  
}