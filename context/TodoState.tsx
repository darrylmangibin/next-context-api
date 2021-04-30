import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import { Todo } from '../interface/todo';
import { GetTodosActions } from './actions';
import { GetTodosActionTypes } from './types';

interface State {
  loading: boolean;
  success?: boolean;
  todo: Partial<Todo>;
  todos: Todo[];
  error?: Partial<{ message: string }>;
}

interface InitialSate extends State {
  getTodos?: () => Promise<void>
}

const initialState: InitialSate = {
  todo: {},
  todos: [],
  loading: false,
};

type Action = GetTodosActions;

const reducer: React.Reducer<InitialSate, Action> = (
  state = initialState,
  action
): InitialSate => {
  switch (action.type) {
    case GetTodosActionTypes.GET_TODOS_REQUEST:
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
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GetTodosActionTypes.GET_TODOS_RESET:
      return initialState;
    default:
      return state;
  }
};

export const TodoContext = createContext<InitialSate>(initialState);

const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTodos = async () => {
    dispatch({ type: GetTodosActionTypes.GET_TODOS_REQUEST })
    try {
      const { data } = await axios.get<Todo[]>('http://localhost:5000/todos');
      dispatch({ type: GetTodosActionTypes.GET_TODOS_SUCCESS, payload: data })
    } catch (err) {
      dispatch({ type: GetTodosActionTypes.GET_TODOS_FAIL, payload: { message: 'Something went wrong' } })
    }
  }

  return (
    <TodoContext.Provider
      value={{
        ...state,
        getTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
