import '@styles/main.css';
import Main from './components/TodoList/Main';
import { Route, Switch } from "react-router-dom";
import RequireAuth from '@services/RequireAuth';

export const App = () => {
  return (
    <>
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/profile' component={RequireAuth} />
    </Switch>
    </>
  );
}