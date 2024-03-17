import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import CounterTask from "./components/CounterTask";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div
      style={{
        height: "90vh",
        maxWidth: "100%",
        padding: "15px",
        marginTop: "2rem",
      }}
    >
      <div className="app-class">
        <div>
          <h1>Task Manager</h1>
          <AddTaskForm />
          <Filter />
          <TaskList />
          <CounterTask />
        </div>
      </div>
    </div>
  );
}

export default App;
