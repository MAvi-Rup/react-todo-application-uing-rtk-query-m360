import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { Button } from "antd/es/radio";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/TaskFeatures/taskSlice";

const AddTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const dispatch = useDispatch();

  const handleReset = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("");
  };

  const handleTaskAdded = (e) => {
    e.preventDefault();
    dispatch(
      addTask({ taskTitle, taskDescription, taskPriority, completed: false })
    );
    handleReset();
  };

  return (
    <div>
      <Form layout="inline" onSubmit={handleTaskAdded}>
        <Form.Item>
          <Input
            placeholder="Add Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Description"
            style={{ width: 320 }}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Select
            defaultValue={taskPriority}
            onChange={(value) => setTaskPriority(value)}
            style={{ width: 120 }}
          >
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="high">High</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTaskForm;
