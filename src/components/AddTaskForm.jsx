import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/TaskFeatures/taskSlice";

const { Option } = Select;

const AddTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");
  const dispatch = useDispatch();
  const [lastId, setLastId] = useState(0);

  const handleReset = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("Low");
  };

  const handleTaskAdded = () => {
    const newId = lastId + 1;
    const newTask = {
      id: newId,
      taskTitle,
      taskDescription,
      taskPriority,
      completed: false,
    };
    dispatch(addTask(newTask));
    setLastId(newId);
    handleReset();
  };

  return (
    <div>
      <Form
        layout="inline"
        onFinish={handleTaskAdded}
        style={{ maxWidth: "100%", margin: "0 auto" }}
        className="responsive-form"
      >
        <Form.Item>
          <Input
            placeholder="Add Title"
            required
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <TextArea
            placeholder="Description"
            required
            style={{ width: 320 }}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Select
            value={taskPriority}
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
