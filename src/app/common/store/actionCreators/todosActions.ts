import { Todo } from "@common/types/types";
import { ADD_TODO_FAILURE, ADD_TODO_STARTED, ADD_TODO_SUCCESS, 
  DELETE_ALL_TODOS, DELETE_TODO, LOAD_TODOS_FAILURE, LOAD_TODOS_STARTED, 
  LOAD_TODOS_SUCCESS, TOGGLE_TODO } from "@store/actions/actionTodoTypes";

export const addTodo = (todo: Todo) => {
    return { type: 'ADD_TODO', payload: { todo }}
}
export const addTodoSuccess = (todo: Todo) => ({ type: ADD_TODO_SUCCESS, todo });
export const addTodoStarted = () => ({ type: ADD_TODO_STARTED });
export const addTodoFailure = (error: any) => ({ type: ADD_TODO_FAILURE, error });

export const toggleTodo = (id: string) => ({ type: TOGGLE_TODO, id });
export const deleteTodo = (id: string) => ({ type: DELETE_TODO, id });
export const deleteAllTodos = () => ({ type: DELETE_ALL_TODOS });

export const loadTodos = (from: number, limit: number) => {
  return { type: 'LOAD_TODOS', payload: { from, limit }}
}
export const loadTodosSuccess = (todos: Todo[]) => ({ type: LOAD_TODOS_SUCCESS, todos });
export const loadTodosStarted = () => ({ type: LOAD_TODOS_STARTED });
export const loadTodosFailure = (error: any) => ({ type: LOAD_TODOS_FAILURE, error });