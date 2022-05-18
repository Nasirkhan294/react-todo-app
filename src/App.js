import * as React from 'react';
import { TodoForm } from './Components/todo-form/TodoForm';
import { TodoList } from './Components/todo-list/TodoList';
import { TodoResults } from './Components/todo-results/TodoResults';
import { TodosContext } from './TodosContext';
import './index.scss';

const todosTemplate = [
  {
    id: 0,
    label: 'Fix an ability to display all tasks',
    checked: false,
  },
  {
    id: 1,
    label: 'Fix a layout, checkboxes should be listed in a column',
    checked: false,
  },
  {
    id: 2,
    label: 'Fix an ability to add a new task',
    checked: false,
  },
  {
    id: 3,
    label: 'Fix an ability to toggle a task',
    checked: false,
  },
  {
    id: 4,
    label: 'Fix an ability to delete a task',
    checked: false,
  },
  {
    id: 5,
    label: 'Fix an ability to count completed tasks',
    checked: false,
  },
];

const App = () => {
  const [todos, setTodos] = React.useState(todosTemplate);

  return (
    <div className="root">
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};


export default App