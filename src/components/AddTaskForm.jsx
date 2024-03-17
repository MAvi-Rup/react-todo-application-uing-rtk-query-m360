import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/TaskFeatures/taskSlice";

const { Option } = Select;

const AddTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const dispatch = useDispatch();
  const [lastId, setLastId] = useState(0);

  const handleReset = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("");
  };

  const handleTaskAdded = () => {
    const newId = lastId + 1;
    console.log("New Task added:");
    dispatch(
      addTask({
        id: newId,
        taskTitle,
        taskDescription,
        taskPriority,
        completed: false,
      })
    );
    handleReset();
    setLastId(newId);
  };

  return (
    <div>
      <Form layout="inline" onFinish={handleTaskAdded}>
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
            <Option value="Low">Low</Option>
            <Option value="Medium">Medium</Option>
            <Option value="High">High</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTaskForm;
