import Logo from './Logo/Logo';
import { Avatar, Button, Layout, Popover, message } from 'antd';
import { LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';


interface Props {
    userType?: 'company' | 'candidate';
}

export default function Header(props: Props) {

    const router = useRouter();

    const logout = async () => {
        
    }

    return (
        <Layout.Header className='w-full flex justify-between items-center' style={{height: '64px', backgroundColor: 'white'}}>
            <Logo />
            {props.userType && 
            <Popover
                placement='bottomLeft' 
                trigger='click'
                content={
                    <div className='flex flex-col'>
                        {props.userType === 'company' && <Button icon={<LockOutlined rev />} type='link' onClick={() => router.push('/auth/password/update')}>Update password</Button>}
                        <Button icon={<LogoutOutlined rev />}  danger type='link' onClick={() => logout()}>Logout</Button>
                    </div>
                }>
                <Avatar size='default' icon={<UserOutlined rev />} className='cursor-pointer select-none'></Avatar>
            </Popover>}
        </Layout.Header>
    );
}