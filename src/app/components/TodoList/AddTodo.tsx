import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface AddTodoProps {
    addTodo: any;
    loadTodos: any;
    todosCount: number;
    deleteAllTodos: any;
}

export const AddTodo = ({addTodo, loadTodos, todosCount, deleteAllTodos} : AddTodoProps) => {
  const [title, setTitle] = useState<string>("");

  return (
      <div className="addTodoMain">
        <Typography variant="h5">
            Todo Actions
          </Typography>
        <div className="form">
          <TextField 
              value={title}
              name="title" 
              label="Enter Todo" 
              onChange={e => setTitle(e.target.value)}
          />
          <Button 
              onClick={() => {
                addTodo({id: uuidv4(), title});
                setTitle("");
              }}
              variant="contained" color="primary"
              style={{marginLeft: '10px'}}
          >
              Add
          </Button>
        </div>
        <div>
            <Button 
                onClick={() => loadTodos(todosCount, 7)}
                variant="contained" color="primary"
            >
                Load More
            </Button>
            <Button 
                onClick={() => deleteAllTodos()}
                variant="contained" color="secondary"
                style={{marginLeft: '10px'}}
            >
                Clear
            </Button>
          </div>
      </div>
  );
}