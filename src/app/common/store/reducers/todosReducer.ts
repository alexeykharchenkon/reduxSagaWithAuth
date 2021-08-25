import { Todo } from "@common/types/types";
import { initialState } from "@store/initialState";
import { ADD_TODO_SUCCESS, TOGGLE_TODO, DELETE_TODO, ADD_TODO_STARTED, 
  ADD_TODO_FAILURE, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE, 
  LOAD_TODOS_STARTED, DELETE_ALL_TODOS} from "@store/actions/actionTodoTypes";

export const todosReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      case ADD_TODO_STARTED:
        return state;
      case ADD_TODO_FAILURE:
        return state;
      case ADD_TODO_SUCCESS:
        return {
          ...state,
         todos: [...state.todos, {
            id: action.todo.id,
            title: action.todo.title,
            completed: false
          }]
        }
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo: any) => {
            if (todo.id === action.id) { return { ...todo, completed: !todo.completed }}
            return todo;
        })
      }
      case DELETE_TODO:
        return {...state, todos: state.todos.filter((t:Todo) => t.id !== action.id)}
      case DELETE_ALL_TODOS: 
        return { ...state, todos: [] }   
      case LOAD_TODOS_SUCCESS:
        return {
          ...state,
          todos: [...state.todos, ...action.todos.map((todo: any) => ({ ...todo }))],
          isLoading: false
        }
      case LOAD_TODOS_FAILURE:
        return state;
      case LOAD_TODOS_STARTED:
        return {
          ...state,
          isLoading: true
        }
      default:
        return state;
    }
  }