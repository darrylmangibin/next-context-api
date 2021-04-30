import { GetTodosActionTypes, GetTodoActionTypes } from './types';
import { Todo } from '../interface/todo';

export type GetTodosRequestAction = {
  type: GetTodosActionTypes.GET_TODOS_REQUEST;
};

export type GetTodosSuccessAction = {
  type: GetTodosActionTypes.GET_TODOS_SUCCESS;
  payload: Todo[];
};

export type GetTodosFailAction = {
  type: GetTodosActionTypes.GET_TODOS_FAIL;
  payload: { message: string };
};

export type GetTodosResetAction = {
  type: GetTodosActionTypes.GET_TODOS_RESET;
};

export type GetTodosActions =
  | GetTodosRequestAction
  | GetTodosSuccessAction
  | GetTodosFailAction
  | GetTodosResetAction;

export type GetTodoRequestAction = {
  type: GetTodoActionTypes.GET_TODO_REQUEST;
};

export type GetTodoSuccessAction = {
  type: GetTodoActionTypes.GET_TODO_SUCCESS;
  payload: Todo;
};

export type GetTodoFailAction = {
  type: GetTodoActionTypes.GET_TODO_FAIL;
  payload: { message: string };
};

export type GetTodoResettAction = {
  type: GetTodoActionTypes.GET_TODO_RESET;
};

export type GetTodoActions =
  | GetTodoRequestAction
  | GetTodoSuccessAction
  | GetTodoFailAction
  | GetTodoResettAction;
