// src/components/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const items = useSelector((state) => state.todos.items);

  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
