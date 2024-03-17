import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";

const CounterTask = () => {
  const tasks = useSelector((state) => state.task.taskList);

  const completedTasksCount = tasks?.filter((task) => task.completed).length;
  const incompleteTasksCount = tasks?.filter((task) => !task.completed).length;

  return (
    <div style={{ marginTop: "5rem" }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card
            title="Completed Tasks"
            bordered={false}
            style={{
              textAlign: "center",
              background: "#A5DD9B",
            }}
          >
            {completedTasksCount}
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card
            title="Incomplete Tasks"
            bordered={false}
            style={{
              textAlign: "center",
              background: "#F2C18D",
            }}
          >
            {incompleteTasksCount}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CounterTask;
