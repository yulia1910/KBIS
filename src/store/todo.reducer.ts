
import { createReducer, on, State } from '@ngrx/store';
import { TodoItem } from './../app/model/todo-item.model';
import * as fromActions from './todo.actions';

export interface TodoAppState {
    data: { [id: number]: TodoItem };
    loaded: boolean;
    loading: boolean;
}

const initialState: TodoAppState = {
    data: {},
    loading: false,
    loaded: false
};

export const reducer = createReducer(initialState,
    on(fromActions.loadTodoItemsAction, (state) => ({ ...state, loading: true, loaded: false })),

    on(fromActions.loadTodoItemsSuccessAction, (state, action) => ({
        ...state,
        data: action.data.reduce((result, todoItem) => ({ ...result, [todoItem.id]: todoItem }), {}),
        loaded: true,
        loading: true
    })),
    on(fromActions.loadTodoItemsFailedAction, (state, action) => ({
        ...state,
        data: {},
        loaded: false,
        loading: false
    })),
    on(fromActions.saveItemAction, (state, action) => ({
        ...state,
        data: {
            ...state.data,
            [action.item.id]: action.item
        }
    }))
);


