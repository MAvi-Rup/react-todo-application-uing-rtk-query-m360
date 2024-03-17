import { Button, List } from "antd";
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
      <h2>All Tasks</h2>
      <List
        dataSource={tasks}
        renderItem={(task, index) => (
          <List.Item
            actions={[
              <Button
                key={task.id}
                type="primary"
                onClick={() => handleComplete(task.id)}
                disabled={task.completed}
              >
                Complete
              </Button>,
              <Button
                key={task.id}
                danger
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>,
              <Button key={task.id}>Edit</Button>,
            ]}
          >
            <div>
              <strong>
                {index + 1}. {task.taskTitle}
              </strong>
              <div>Task Details: {task.taskDescription}</div>
            </div>

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
