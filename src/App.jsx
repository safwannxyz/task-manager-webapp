import { useState, useEffect } from "react";
import TaskForm from "./components/Taskform";
import TaskList from "./components/Tasklist";
import TaskFilter from "./components/Taskfilter";

function App() {
  // Load from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  // Save to localStorage 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (data) => {
    const newTask = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (data) => {
    setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...data } : t));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const startEdit = (task) => {
    setEditingTask(task);
  };

  const cancelEdit = () => setEditingTask(null);

  // Filter 
  const filteredTasks = filter === "All"
    ? tasks
    : tasks.filter(t => t.status === filter);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Task Manager</h1>

      <TaskForm
        onSubmit={editingTask ? updateTask : addTask}
        editingTask={editingTask}
        onCancel={cancelEdit}
      />

      <TaskFilter
        filter={filter}
        onFilterChange={setFilter}
        total={tasks.length}
        showing={filteredTasks.length}
      />

      <TaskList
        tasks={filteredTasks}
        onEdit={startEdit}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;