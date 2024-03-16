import { Button, List } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTask,
  deleteTask,
} from "../redux/features/TaskFeatures/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.taskList);
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <List
        dataSource={tasks}
        renderItem={(task, index) => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => handleComplete(task.id)}>
                Complete
              </Button>,
              <Button danger onClick={() => handleDelete(task.id)}>
                Delete
              </Button>,
              <Button>Edit</Button>,
            ]}
          >
            <div>
              <strong>
                {index + 1}. {task.taskTitle}
              </strong>
              <div>Task Body: {task.taskDescription}</div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <span style={{ marginRight: 8 }}>{task.taskPriority}</span>{" "}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskList;
