import { useState, useEffect } from "react";
import "./App.css";
import { useTheme } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  
  // نقرأ المهام من Local Storage عند فتح التطبيق أول مرة
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [input, setInput] = useState("");

  // نقوم بحفظ المهام في Local Storage في كل مرة تتغير فيها المصفوفة
  useEffect(() => {
    localStorage.setItem("my-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };
const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};
  return (
    <div className={`app-wrapper ${theme}`}>
      <div className="dashboard-container">
        <header className="header">
          <h1>🚀 Dev Dashboard</h1>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </header>

        <div style={{ marginTop: "20px" }}>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className="theme-btn" style={{marginLeft: "10px"}} onClick={addTask}>Add</button>
        </div>

       <ul>
  {tasks.map((task) => (
    <li key={task.id} style={{ opacity: task.completed ? 0.5 : 1 }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}

export default App;