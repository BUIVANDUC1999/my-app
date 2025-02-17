// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.status}</p>
      <button onClick={() => editTodo(todo.id)}>Sửa</button>
      <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
    </div>
  );
};

export default TodoItem;
