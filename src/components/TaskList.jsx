import { Button, Input, List, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTask,
  deleteTask,
  editTask,
} from "../redux/features/TaskFeatures/taskSlice";

const { Option } = Select;

const TaskList = () => {
  const tasks = useSelector((state) => state.task.taskList);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [editedTaskDescription, setEditedTaskDescription] = useState("");
  const [editedTaskPriority, setEditedTaskPriority] = useState("Low");

  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, title, description, priority) => {
    setEditId(id);
    setEditedTaskTitle(title);
    setEditedTaskDescription(description);
    setEditedTaskPriority(priority);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setEditedTaskTitle(value);
    } else if (name === "description") {
      setEditedTaskDescription(value);
    }
  };

  const handlePriorityChange = (value) => {
    setEditedTaskPriority(value);
  };

  const handleEditSubmit = () => {
    dispatch(
      editTask({
        id: editId,
        updatedTask: {
          taskTitle: editedTaskTitle,
          taskDescription: editedTaskDescription,
          taskPriority: editedTaskPriority,
        },
      })
    );
    setEditId(null);
    setEditedTaskTitle("");
    setEditedTaskDescription("");
    setEditedTaskPriority("Low");
  };

  return (
    <div>
      <h2>All Tasks</h2>
      <List
        dataSource={tasks}
        renderItem={(task, index) => (
          <List.Item
            actions={[
              <Button
                key={`complete-${task.id}`}
                type="primary"
                onClick={() => handleComplete(task.id)}
                disabled={task.completed}
              >
                Complete
              </Button>,
              <Button
                key={`delete-${task.id}`}
                danger
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>,
              editId === task.id ? (
                <Button
                  key={`submit-${task.id}`}
                  type="primary"
                  onClick={handleEditSubmit}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  key={`edit-${task.id}`}
                  onClick={() =>
                    handleEdit(
                      task.id,
                      task.taskTitle,
                      task.taskDescription,
                      task.taskPriority
                    )
                  }
                >
                  Edit
                </Button>
              ),
            ]}
          >
            {editId === task.id ? (
              <div>
                <Input
                  name="title"
                  value={editedTaskTitle}
                  onChange={handleEditChange}
                  placeholder="Task Title"
                  style={{ marginBottom: 8 }}
                />
                <Input.TextArea
                  name="description"
                  value={editedTaskDescription}
                  onChange={handleEditChange}
                  placeholder="Task Description"
                />
                <Select
                  defaultValue={editedTaskPriority}
                  style={{ width: 120, marginTop: 8 }}
                  onChange={handlePriorityChange}
                >
                  <Option value="Low">Low</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="High">High</Option>
                </Select>
              </div>
            ) : (
              <div>
                <strong>
                  {index + 1}. {task.taskTitle}
                </strong>
                <div>Task Details: {task.taskDescription}</div>
              </div>
            )}

            <div style={{ marginLeft: "auto" }}>
              <div>
                <span style={{ color: task.completed ? "green" : "red" }}>
                  <b>Status: </b>
                  {task.completed ? "Task Completed" : "Task Incomplete"}
                </span>
              </div>
              <span style={{ marginRight: 8 }}>
                <b>Priority: </b> {task.taskPriority}
              </span>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskList;
