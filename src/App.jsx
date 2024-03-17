import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import CounterTask from "./components/CounterTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{ height: "90vh", maxWidth: "100%", padding: "15px" }}>
      <div className="app-class">
        <div>
          <h1>Task Manager</h1>
          <AddTaskForm />
          <TaskList />
          <CounterTask />
        </div>
      </div>
    </div>
  );
}

export default App;
