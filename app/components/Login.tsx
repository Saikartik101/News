"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { Form, Input, Button, Space,Card,Layout,Typography } from 'antd';
import Logo from '../components/Logo/Logo';
import Header2 from '../components/Header';

const { Header, Content, Footer } = Layout;
const { Paragraph, Title, Text } = Typography;

const RegistrationComponent = () => {
  const [form] = Form.useForm();
 
  const onFinish = (values) => {
    // Handle registration logic here
    console.log('Received values:', values);
  };

  return (
    <Layout style={{backgroundColor: 'white'}}>
    <Head>
        <title>HiringX - Login</title>
        <meta name="description" content="HiringX is an online marketplace for Job-Seekers and Recruiters. We are removing the “search” from Job search and are connecting both the parties based on their requirements." />
        <link rel="icon" href="/favicon.ico" />
    </Head>

   <Header2/>

    <Content>
        <div className='mx-auto max-w-2xl w-1/3'>
            <Card>
                <div className='flex flex-col'>
                    <Title style={{color: '#494A7D', margin: 0, marginTop: '8px', marginBottom: '32px'}} className='text-center' level={2}>Login for HiringX News</Title>
    <Form form={form} name="registration" onFinish={onFinish} layout="vertical">
      <Form.Item
        name="username"
        label="Username"
        rules={[
          { required: true, message: 'Please enter your username!' },
          { max: 25, message: 'Username must be less than 25 characters!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter your password!' }, { min: 8, message: 'Password must be at least 8 characters!' }]}
      >
        <Input.Password />
      </Form.Item>
     
      <Form.Item>
        <Space>
        <Button type="primary" htmlType="submit" style={{ width: '400px' }} className="bg-blue-500 text-white">
  Login
</Button>


      

        </Space>
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <span>Not Registered? </span>
          <a href="/">Register here</a>
        </div>
      </Form.Item>
    </Form>
    </div>
                    </Card>
                </div>
            </Content>
        </Layout>
    );
}

export default RegistrationComponent;
