import { TodoItem } from './../app/model/todo-item.model';
import { createAction, props } from '@ngrx/store';

export const loadTodoItemsAction = createAction('[Todo Items] Load all items');
export const loadTodoItemsSuccessAction = createAction('[Todo Items] Load all success', props<{ data: TodoItem[] }>());
export const loadTodoItemsFailedAction = createAction('[Todo Items] Load all failed', props<{ error: any }>());
export const saveItemAction = createAction('[Todo Items] save item', props<{ item: TodoItem }>());
export const saveItemSuccessAction = createAction('[Todo Items] save success', props<{ item: TodoItem }>());
