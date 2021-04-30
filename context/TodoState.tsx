import React, { createContext, useReducer } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { Todo } from '../interface/todo';
import {
  GetTodosActions,
  GetTodoActions,
  CreateTodoActions,
  DeleteTodoActions,
  UpdateTodoActions,
} from './actions';
import {
  GetTodoActionTypes,
  GetTodosActionTypes,
  CreateTodoActionTypes,
  DeleteTodoActionTypes,
  UpdateTodoActionTypes,
} from './types';

type Action =
  | GetTodosActions
  | GetTodoActions
  | CreateTodoActions
  | DeleteTodoActions
  | UpdateTodoActions;

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
  dispatch?: React.Dispatch<Action>;
  createTodo?: (todoData: Partial<Todo>) => Promise<void>;
  deleteTodo?: (id: string) => Promise<void>;
  updateTodo?: (id: string, todoData: Partial<Todo>) => Promise<void>;
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
    case CreateTodoActionTypes.CREATE_TODO_REQUEST:
    case DeleteTodoActionTypes.DELETE_TODO_REQUEST:
    case UpdateTodoActionTypes.UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GetTodosActionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case GetTodosActionTypes.GET_TODOS_FAIL:
    case GetTodoActionTypes.GET_TODO_FAIL:
    case CreateTodoActionTypes.CREATE_TODO_FAIL:
    case DeleteTodoActionTypes.DELETE_TODO_FAIL:
    case UpdateTodoActionTypes.UPDATE_TODO_FAIL:
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
    case CreateTodoActionTypes.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case DeleteTodoActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case UpdateTodoActionTypes.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case GetTodosActionTypes.GET_TODOS_RESET:
    case GetTodoActionTypes.GET_TODO_RESET:
    case CreateTodoActionTypes.CREATE_TODO_RESET:
    case DeleteTodoActionTypes.DELETE_TODO_RESET:
    case UpdateTodoActionTypes.UPDATE_TODO_RESET:
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

  const createTodo = async (todoData: Partial<Todo>) => {
    dispatch({ type: CreateTodoActionTypes.CREATE_TODO_REQUEST });

    try {
      const { data } = await axios.post<Todo>(
        'http://localhost:5000/todos',
        todoData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        } as AxiosRequestConfig
      );

      dispatch({
        type: CreateTodoActionTypes.CREATE_TODO_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CreateTodoActionTypes.CREATE_TODO_FAIL,
        payload: { message: 'Something went wrong' },
      });
    }
  };

  const deleteTodo = async (id: string) => {
    dispatch({ type: DeleteTodoActionTypes.DELETE_TODO_REQUEST });
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);

      dispatch({
        type: DeleteTodoActionTypes.DELETE_TODO_SUCCESS,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: DeleteTodoActionTypes.DELETE_TODO_FAIL,
        payload: { message: 'Something went wrong' },
      });
    }
  };

  const updateTodo = async (id: string, todoData: Partial<Todo>) => {
    dispatch({ type: UpdateTodoActionTypes.UPDATE_TODO_REQUEST });
    try {
      await axios.put(`http://localhost:5000/todos/${id}`, todoData);
      dispatch({ type: UpdateTodoActionTypes.UPDATE_TODO_SUCCESS });
    } catch (err) {
      dispatch({
        type: UpdateTodoActionTypes.UPDATE_TODO_FAIL,
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
        dispatch,
        createTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
