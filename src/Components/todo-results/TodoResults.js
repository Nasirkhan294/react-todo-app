import * as React from 'react';
import { TodosContext } from '../../TodosContext'
import './todoResults.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  
    // Fix an ability to calculate completed tasks
  const calculateChecked = () => todos.filter((el) => el.checked).length;

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
}

