import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { TOKEN_STORE_KEY } from '#commons/defines';
import handleError from '#utils/handleError';

interface LoginData {
  login: {
    accessToken: string;
    refreshToken: string;
  };
}

interface LoginVariables {
  username: string;
  password: string;
}

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

function Login(): React.ReactElement {
  const [login] = useMutation<LoginData, LoginVariables>(LOGIN);

  const handleFinish = React.useCallback(async ({ username, password }: LoginVariables): Promise<void> => {
    try {
      const { data, errors } = await login({ variables: { username, password } });
      if (data?.login) {
        localStorage.setItem(TOKEN_STORE_KEY, data.login.accessToken);
      }
      if (errors) {
        errors.forEach(handleError);
      }
    } catch (error) {
      handleError(error);
    }
  }, []);

  const handleFinishFailed = React.useCallback(() => {}, []);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
