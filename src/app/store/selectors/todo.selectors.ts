import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './../models/app-state.model'
import { TodoState } from './../reducers/todo.reducer'
//export const selectFeature = (state: AppState) => state.todo;

/* 
export const getAppAllState =
  createFeatureSelector<TodoState>('frontApp');

export const selectTodoList = createSelector(
  getAppAllState,
    (state: TodoState) => state.TodoItemsList
  ); 
 */