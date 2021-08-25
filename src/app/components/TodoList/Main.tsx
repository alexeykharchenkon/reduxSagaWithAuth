import { useEffect } from 'react';
import { connect } from 'react-redux';
import '@styles/main.css';
import { Todo, User } from '@common/types/types';
import { AddTodo } from '@components/TodoList/AddTodo';
import { TodoList } from '@components/TodoList/TodoList';
import { mapStateToProps, mapDispatchToProps } from '@services/initAppProps';
import { Navbar } from '@common/components/Navbar';
import { useStyles } from '@styles/material';
import { Card } from '@material-ui/core';


interface MainProps {
    todos: Todo[];
    filter: any;
    todosActions: any;
    filterActions: any;
    authActions: any;
    isLoading: boolean;
    user: User;
    isLogged: boolean;
}

const Main = ({todos, todosActions, filterActions, filter, isLoading, user, isLogged, authActions} : MainProps) => {
  const { addTodo, toggleTodo, deleteTodo, loadTodos, deleteAllTodos } = todosActions;
  const { setFilter } = filterActions;
  const { login, logout, register } = authActions;
  const classes = useStyles();

  useEffect(() => { 
    setTimeout(() => { loadTodos(0, 7)  }, 2000);
  }, [loadTodos]);

  return (
    <div className="main_container">
      <Navbar
        logout={logout}
        login={login}
        register={register}
        user={user}
        isLogged={isLogged}
      />
      <div className="main">   
        <Card className={classes.todoList}>
          <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}
            setFilter={setFilter}
            isLoading={isLoading}
            filter={filter}
          />
          </Card>
          <Card className={classes.rigthSide}>
            {isLogged &&
            <AddTodo 
              addTodo={addTodo} 
              loadTodos={loadTodos}
              deleteAllTodos={deleteAllTodos}
              todosCount={todos.length}
            />}
        </Card>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)