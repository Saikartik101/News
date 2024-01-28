import React from 'react';
import { Form, Input, Upload, Button,Card,Layout,Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title,Text } = Typography;
const { TextArea } = Input;

const MyForm = () => {
    const onFinish = (values) => {
      // Handle form submission logic here
      console.log('Received values:', values);
    };
  
    return (
        <Layout>
         <Content>
                <div className='mx-auto max-w-2xl w-1/3'>
                    <Card>
                        <div className='flex flex-col'>
                        <Title style={{color: '#494A7D', margin: 0, marginTop: '8px', marginBottom: '32px'}} className='text-center' level={2}>Candidate Details</Title>
       
        <Form onFinish={onFinish}>
            <Text>Title:</Text>
          <Form.Item name="title" rules={[{ required: false, message: 'Please enter title' }]}>
            <Input />
          </Form.Item>
          <Text>URL:</Text>
          <Form.Item name="url" rules={[{ required: false, message: 'Please enter URL' }]}>
            <Input />
          </Form.Item>
          <Text>Description (Max 500 Characters):</Text>
          <Form.Item
            name="description"
            rules={[
              {
                required: false,
                message: 'Please enter description',
                max: 500, // Maximum 500 characters
              },
            ]}
          >
            <TextArea maxLength={500} />
          </Form.Item>
          <Text>Resume:</Text>
          <Form.Item name="resume" rules={[{ required: false, message: 'Please upload your resume' }]}>
            {/* Add your resume upload component here */}
            <Input type="file" />
          </Form.Item>
          <Form.Item>
          <Text>Position:</Text>
          <Form.Item name="title" rules={[{ required: false, message: 'Please enter your position' }]}>
            <Input />
          </Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} className="bg-blue-500 text-white">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      </Card>
      </div>
      </Content>
      </Layout>
    );
  };
  
  export default MyForm;
  