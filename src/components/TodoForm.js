// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Chưa làm');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTodo({
        title,
        description,
        status,
        id: Date.now(),
      });
      setTitle('');
      setDescription('');
      setStatus('Chưa làm');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Mô tả"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Chưa làm">Chưa làm</option>
        <option value="Đang làm">Đang làm</option>
        <option value="Hoàn thành">Hoàn thành</option>
      </select>
      <button type="submit">Thêm công việc</button>
    </form>
  );
};

export default TodoForm;
