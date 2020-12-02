import { TodoAppState } from './todo.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const featureSelector = createFeatureSelector('todo');

export const getTodoItems = createSelector(featureSelector, (state: TodoAppState) => state.data);
export const getTodoItemsArray = createSelector(featureSelector, (state: TodoAppState) => Object.values(state.data));
export const getTodoLoaded = createSelector(featureSelector, (state: TodoAppState) => state.loaded);
export const getTodoLoading = createSelector(featureSelector, (state: TodoAppState) => state.loading);
export const getSelectedItem = createSelector(getTodoItems, (data, props) => data[props.id]);

