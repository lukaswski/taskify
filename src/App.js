import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SingleTaskPage from './Pages/SingleTaskPage';
import Home from './Pages/HomePage';
import AddTaskForm from './Pages/AddTaskPage';
import TasksPage from './Pages/TasksPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Tasks">
          <TasksPage />
        </Route>
        <Route path="/AddTask">
          <AddTaskForm />
        </Route>
        <Route path="/:id">
          <SingleTaskPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
