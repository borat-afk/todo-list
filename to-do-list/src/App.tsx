import * as React from 'react';
import Form from './components/Form';
import List from './components/List';
import { observe, toJS, makeAutoObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import appState from './store/ToDoList'
import { todos } from './store/ToDoList';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
const ToDo = observer(() => {
  observable(todos)
  return(
    <div>
      <h1>The Wall</h1>
      <button onClick={appState.getTodos}>GET</button>
      <Form addNewBrick={appState.addTodos} name={'Form'}/>
      <List bricks={toJS(todos)}/>
    </div>)
})

const App = () => {
  return(
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/signIn'}>Sign in</Link>
            </li>
            <li>
              <Link to={'/registration'}>Registration</Link>
            </li>
            <li>
              <Link to={'/todos'}>ToDos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={'/signIn'}>
            <h1>SIGN IN</h1>
          </Route>
          <Route path={'/registration'}>
            <h1>REGISTRATION</h1>
          </Route>
          <Route path={'/todos'}>
            <ToDo/>
          </Route>
        </Switch>
      </div>
  )
}

export default observer(App);
