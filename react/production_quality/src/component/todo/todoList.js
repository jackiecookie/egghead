import React from 'react'
import { PropTypes } from 'prop-types';
import {TodoItem} from './todoItem'


export function TodoList(props) {
    return (
         <div className="Todo-App">
            <ul>
              {props.todos.map(todo=>
               <TodoItem key={todo.id} {...todo} />
              )}
            </ul>
          </div>
    );
}

TodoList.PropTypes = {
  todos: PropTypes.array.isRequired,
}





