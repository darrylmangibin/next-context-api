import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import { Todo } from '../interface/todo';
import { GetTodosActions, GetTodoActions } from './actions';
import { GetTodoActionTypes, GetTodosActionTypes } from './types';

type Action = GetTodosActions | GetTodoActions;

interface State {
  loading: boolean;
  success?: boolean;
  todo: Partial<Todo>;
  todos: Todo[];
  error?: Partial<{ message: string }>;
}

interface InitialSate extends State {
  getTodos?: () => Promise<void>;
  getTodo?: (id: string) => Promise<void>;
  dispatch?: React.Dispatch<Action>

}

const initialState: InitialSate = {
  todo: {},
  todos: [],
  loading: false,
};

const reducer: React.Reducer<InitialSate, Action> = (
  state = initialState,
  action
): InitialSate => {
  switch (action.type) {
    case GetTodosActionTypes.GET_TODOS_REQUEST:
    case GetTodoActionTypes.GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GetTodosActionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        success: true,
      };
    case GetTodosActionTypes.GET_TODOS_FAIL:
    case GetTodoActionTypes.GET_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GetTodoActionTypes.GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    case GetTodosActionTypes.GET_TODOS_RESET:
    case GetTodoActionTypes.GET_TODO_RESET:
      return initialState;
    default:
      return state;
  }
};

export const TodoContext = createContext<InitialSate>(initialState);

const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTodos = async () => {
    dispatch({ type: GetTodosActionTypes.GET_TODOS_REQUEST });
    try {
      const { data } = await axios.get<Todo[]>('http://localhost:5000/todos');
      dispatch({ type: GetTodosActionTypes.GET_TODOS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: GetTodosActionTypes.GET_TODOS_FAIL,
        payload: { message: 'Something went wrong' },
      });
    }
  };

  const getTodo = async (id: string) => {
    try {
      dispatch({ type: GetTodoActionTypes.GET_TODO_REQUEST });

      const { data } = await axios.get<Todo>(
        `http://localhost:5000/todos/${id}`
      );

      dispatch({ type: GetTodoActionTypes.GET_TODO_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: GetTodoActionTypes.GET_TODO_FAIL,
        payload: { message: 'Something went wrong' },
      });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,
        getTodos,
        getTodo,
        dispatch
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
