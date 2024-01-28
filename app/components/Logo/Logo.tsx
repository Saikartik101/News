import Image from 'next/image';
import Link from 'next/link';
import { Card, Layout, Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const { Paragraph, Title, Text } = Typography;

interface Props {
    name?: string;
    className?: string;
}

export default function Logo(props: Props) {
    return (
        <div className={`flex items-center ${props.className ?? ''}`}>
            <Link href={'/'} aria-label="Hiring" passHref>
                <img
                    className='block object-contain'
                    src={`https://hiringx-companies.s3.amazonaws.com/company_logos/${props.name ?? 'hiringx'}.png`}
                    alt={props.name}
                    style={{ height: props.name ? 48 : 24 }}
                />
            </Link>
            <span className="ml-2 font-bold" style={{ marginTop: '-7px', fontSize: '24px' }}>News</span>
        </div>
    );
}
