import React, { createContext, useReducer } from 'react';

import { Todo } from '../interface/todo'

interface State {
  loading?: boolean;
  success?: boolean;
  todo: Partial<Todo>
  todos: Todo[]
}

interface InitialSate extends State {}

const initialState: InitialSate = {
  todo: {},
  todos: []
}

const reducer = (state: InitialSate = initialState, action): InitialSate => {
  switch (action.type) {
    default:
      return state
  }
}

export const TodoContext = createContext<InitialSate>(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

const TodoState = ({ children }) => {
  return (
    <TodoContext.Provider value={{
      ...state
    }}>
      {children}
    </TodoContext.Provider>
  )
}

