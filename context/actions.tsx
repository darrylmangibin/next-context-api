import { GetTodosActionTypes } from './types';
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
