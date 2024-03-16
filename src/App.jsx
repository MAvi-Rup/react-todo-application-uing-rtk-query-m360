import "./App.css";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  return (
    <div style={{ height: "90vh" }}>
      <div className="app-class">
        <div>
          <h1>Task Manager</h1>
          <AddTaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
