import { TodoItem } from './../../model';
import * as TodoActions from  '../actions/todo.actions';


export interface TodoState {
    TodoItemsList: Array<TodoItem>,
    
}

const initinalState: TodoState = {
    TodoItemsList: [],
}

export function TodoReducer( state: TodoState = initinalState, action: TodoActions.TodoAction ): TodoState{
    switch( action.type ) {
        case TodoActions.LOAD_TODO_LIST: {
            return {
                ...state,
            }
        }
        case TodoActions.LOAD_SUCCESS: {
            return {
                ...state,
                TodoItemsList: action.payload
            }
        }
        case TodoActions.LOAD_FAILURE: {
            return {
                ...state,
            }
        }
        case TodoActions.UPDATE_LIST: {
            return {
                ...state,
                TodoItemsList: action.payload
            }
        }
       
    default:
        return state
    }
}