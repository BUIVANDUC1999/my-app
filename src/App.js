// src/App.js
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('Tất cả');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id) => {
    const newTitle = prompt('Nhập tiêu đề mới:');
    const newDescription = prompt('Nhập mô tả mới:');
    const newStatus = prompt('Nhập trạng thái mới (Chưa làm, Đang làm, Hoàn thành):');
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle, description: newDescription, status: newStatus }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>Chuyển đổi chế độ {theme === 'light' ? 'Dark' : 'Light'}</button>
      <TodoForm addTodo={addTodo} />
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="Tất cả">Tất cả</option>
        <option value="Chưa làm">Chưa làm</option>
        <option value="Đang làm">Đang làm</option>
        <option value="Hoàn thành">Hoàn thành</option>
      </select>
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  );
};

export default App;
