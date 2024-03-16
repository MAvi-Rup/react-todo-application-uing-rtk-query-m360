import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{ height: "90vh" }}>
      <div className="app-class">
        <div>
          <h1>Task Manager</h1>
          <AddTaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
