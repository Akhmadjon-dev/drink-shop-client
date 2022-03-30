import React from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authSignIn } from '../../store/authReducer';

import "./style.css";

function SignIn() {
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(authSignIn(values))
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  }

  return (
    <div className='sign'>
       <h2 className='sign__title'>Sign In</h2>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          email: '',
          password: '',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
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
      <p>
        If you don't have an account, <Link to="/sign-up">sign up</Link>
      </p>
    </div>
  )
}

export default SignIn