import {
  GetTodosActionTypes,
  GetTodoActionTypes,
  CreateTodoActionTypes,
  DeleteTodoActionTypes,
  UpdateTodoActionTypes
} from './types';
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

export type CreateTodoRequestAction = {
  type: CreateTodoActionTypes.CREATE_TODO_REQUEST;
};

export type CreateTodoSuccessAction = {
  type: CreateTodoActionTypes.CREATE_TODO_SUCCESS;
  payload: Todo;
};

export type CreateTodoFailAction = {
  type: CreateTodoActionTypes.CREATE_TODO_FAIL;
  payload: { message: string };
};

export type CreateTodoResettAction = {
  type: CreateTodoActionTypes.CREATE_TODO_RESET;
};

export type CreateTodoActions =
  | CreateTodoRequestAction
  | CreateTodoSuccessAction
  | CreateTodoFailAction
  | CreateTodoResettAction;

export type DeleteTodoRequestAction = {
  type: DeleteTodoActionTypes.DELETE_TODO_REQUEST;
};

export type DeleteTodoSuccessAction = {
  type: DeleteTodoActionTypes.DELETE_TODO_SUCCESS;
  payload: string;
};

export type DeleteTodoFailAction = {
  type: DeleteTodoActionTypes.DELETE_TODO_FAIL;
  payload: { message: string };
};

export type DeleteTodoResettAction = {
  type: DeleteTodoActionTypes.DELETE_TODO_RESET;
};

export type DeleteTodoActions =
  | DeleteTodoRequestAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailAction
  | DeleteTodoResettAction;

export type UpdateTodoRequestAction = {
  type: UpdateTodoActionTypes.UPDATE_TODO_REQUEST;
};

export type UpdateTodoSuccessAction = {
  type: UpdateTodoActionTypes.UPDATE_TODO_SUCCESS;
};

export type UpdateTodoFailAction = {
  type: UpdateTodoActionTypes.UPDATE_TODO_FAIL;
  payload: { message: string };
};

export type UpdateTodoResettAction = {
  type: UpdateTodoActionTypes.UPDATE_TODO_RESET;
};

export type UpdateTodoActions =
  | UpdateTodoRequestAction
  | UpdateTodoSuccessAction
  | UpdateTodoFailAction
  | UpdateTodoResettAction;
