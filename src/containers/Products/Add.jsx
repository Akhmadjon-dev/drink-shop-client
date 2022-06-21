import React from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

function Add() {
  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h3>Create product</h3>
      <div className="add__content">
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            name: "",
            category: "",
            quantity: "",
            volume: "",
            volumeType: "",
            price: "",
            salePrice: "",
            description: "",
            image: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input your category!",
              },
            ]}
          >
            <Select>
              <Option value="drink">Drink</Option>
              <Option value="fruits">Fruits</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[
              {
                required: true,
                message: "Please input your quantity!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Volume"
            name="volume"
            rules={[
              {
                required: true,
                message: "Please input your volume!",
              },
            ]}
          >
            <Input type={"number"} />
          </Form.Item>
          <Form.Item
            label="Volume Type"
            name="volumeType"
            rules={[
              {
                required: true,
                message: "Please input your volume type!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your price!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sale price"
            name="salePrice"
            rules={[
              {
                required: true,
                message: "Please input your sale price!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Add;
