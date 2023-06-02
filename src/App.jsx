import TaskForm from "./components/TaskForm";
import { useState } from "react";
import TaskInfo from "./components/TaskInfo";
import TasksList from "./components/TasksList";
import data from "./data"
import { ToastContainer } from 'react-toastify';

function App() {
  const [tasks, setTasks] = useState([...data]);
  const addTask = async (task) => setTasks((x) => [...x, task]);
  const toggleTask = (id) =>
    setTasks((tasks) =>
      tasks.map((t) => (t.id === id ? {...t, done: !t.done} : t))
    );
  const removeTask = async (id) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const updateTask = async (id, title) => {
    setTasks(tasks => tasks.map(t => (t.id === id ? {...t, title} : t)))
  }

  return (
    <section className="custom-app-section">
      <div className="custom-header-wrapper">
        <h3 className="custom-header">List of tasks</h3>
        <TaskForm addTask = {addTask}/>
      </div>
      <TaskInfo tasks = {tasks}/>
      <TasksList tasks = {tasks} toggleTask = {toggleTask} removeTask = {removeTask} updateTask = {updateTask}/>
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}

export default App;
