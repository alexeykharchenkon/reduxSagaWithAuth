import '@styles/main.css';
import Main from './components/TodoList/Main';
import { Profile } from './components/Profile/Profile';
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <>
        <Route exact path='/' component={Main} />
        <Route path='/profile' component={Profile} />
    </>
  );
}