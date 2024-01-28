"use client";
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  LockOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button,Popover, message, Typography } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import AboutComponent from '../components/AboutComponent';
import AddCandidateComponent from '../components/AddCandidateComponent';
import HighlightsComponent from '../components/HighlightsComponent';
import ReferralSectionComponent from '../components/ReferralSectionComponent';
import Logo from '../components/Logo/Logo';

const { Header, Content } = Layout;

const App = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('about');
  const router = useRouter();
  function logout(){
    return "";
  }
  const isLogin = true;
  const renderContent = () => {
    switch (selectedNavItem) {
      case 'about':
        return <AboutComponent />;
      case 'addCandidate':
        return <AddCandidateComponent />;
      case 'highlights':
        return <HighlightsComponent />;
      case 'referralSection':
        return <ReferralSectionComponent />;
      default:
        return null;
    }
  };
  const navItems = [
    { key: 'about', label: 'Welcome' },
    { key: 'referralSection', label: 'Referrals' },
    { key: 'addCandidate', label: 'Add Candidate' },
    { key: 'highlights', label: 'Highlights' }
  ];

  return (
    <Layout className='h-screen'>
    <Head>
      <title>HiringX - Offers</title>
      <meta name='description' content='HiringX' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
    <Header className='w-full flex justify-between items-center' style={{ height: '64px', backgroundColor: 'white' }}>
      <Logo />
      <Menu
  theme="light"
  mode="horizontal"
  defaultSelectedKeys={['about']} // Set the default selected key based on the initial active item
  items={navItems
    .filter(item => item.key !== 'addCandidate' || isLogin) // Show 'Add Candidate' only if isLogin is true
    .map(item => ({ key: item.key, label: item.label }))
  }
  onSelect={({ key }) => setSelectedNavItem(key)} // Handle menu item selection
/>

        {isLogin?<Popover
              placement='bottomLeft'
              trigger='click'
              content={
                <div className='flex flex-col'>
                 <Button icon={<LockOutlined />} type='link' onClick={() => router.push('/auth/password/update')}>Update password</Button>
                  <Button icon={<LogoutOutlined />} danger type='link' onClick={() => logout()}>Logout</Button>
                </div>
              }>
              <Avatar size='default' icon={<UserOutlined />} className='cursor-pointer select-none'></Avatar>
            </Popover>:
              <Button icon={<LockOutlined />} type='link' onClick={() => router.push('/login')}>Login</Button>
          }
      </Header>
      <Content style={{ padding: '50px' }}>{renderContent()}</Content>
    </Layout>
    </Layout>
  );
};

export default App;
