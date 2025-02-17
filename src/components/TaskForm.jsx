import { useState } from "react";
import axios from "axios";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await axios.post("http://localhost:3001/tasks", { title, status: "Chưa làm" });
    setTitle("");
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Nhập công việc..."
        className="border p-2 flex-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Thêm</button>
    </form>
  );
};

export default TaskForm;
