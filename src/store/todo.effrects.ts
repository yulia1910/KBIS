import { DataService } from './../app/services/data.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';


import * as fromActions from './todo.actions';


@Injectable()
export class TodoEffects {


    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }



    @Effect()
    loadTableEffect$ = this.actions$.pipe(
        ofType(fromActions.loadTodoItemsAction),
        exhaustMap(() => this.dataService.getAllTodoItems()
            .pipe(
                map((response) => fromActions.loadTodoItemsSuccessAction({ data: response })),
                catchError((error) => of(fromActions.loadTodoItemsFailedAction({ error })))
            )
        )
    );

}
