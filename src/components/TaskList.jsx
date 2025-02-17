import axios from "axios";

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    fetchTasks();
  };

  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between bg-gray-100 p-2 mb-2">
          <span>{task.title} - <b>{task.status}</b></span>
          <button onClick={() => handleDelete(task.id)} className="text-red-500">Xóa</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
