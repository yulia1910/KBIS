import { Action } from '@ngrx/store';
import { TodoItem } from '../../model';

export const LOAD_TODO_LIST = '[Todo] Load Todo List';
export const LOAD_SUCCESS = '[Todo] Load Success';
export const LOAD_FAILURE = '[Todo] Load Failure';
export const UPDATE_LIST = '[Todo] Update List';

export class LoadListAction implements Action {
    readonly type = LOAD_TODO_LIST;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;
    constructor( public payload: Array<TodoItem> ){}
}

export class LoadFailureAction implements Action {
    readonly type = LOAD_FAILURE;
    constructor( public payload: Error ){}
}

export class UpdateAction implements Action {
    readonly type = UPDATE_LIST;
    constructor( public payload: Array<TodoItem>){}
}
                   
export type TodoAction = 
                | LoadListAction
                | LoadSuccessAction
                | LoadFailureAction
                | UpdateAction;