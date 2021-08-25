import { Todo } from '@common/types/types';
import { TodoItem } from './TodoItem';
import { Typography } from '@material-ui/core';
import { TodosFilter } from './TodosFilter';
import { Loader } from './Loader';

interface TodoListProps {
    todos: Todo[];
    toggleTodo: any;
    deleteTodo: any;
    isLoading: boolean;
    setFilter: any;
    filter: any;
}

export const TodoList = ({todos, toggleTodo, deleteTodo, isLoading, setFilter, filter} : TodoListProps) => {
  return (
    <div className="listMain">
      <Typography variant="h4">Todo List</Typography>
      <TodosFilter setFilter={setFilter} filter={filter} />
      {isLoading && <Loader />}
      <ul className="list">
          {todos?.map((todo, index) => (
              <li key={todo.id}>
                  <TodoItem 
                    index={index}
                    todo={todo} 
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                  />
              </li>
          ))}
      </ul>
    </div>
  );
}