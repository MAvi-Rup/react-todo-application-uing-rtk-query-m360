import { Form, Input } from "antd";
import { Button } from "antd/es/radio";
import React from "react";

const AddTaskForm = () => {
  return (
    <div>
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Description" />
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
