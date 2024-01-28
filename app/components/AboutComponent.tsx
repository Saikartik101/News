import React from 'react';
import { Card,Layout,Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const { Paragraph, Title, Text } = Typography;
const App: React.FC = () => (
 
  <div>
    
              <Title style={{color: '#494A7D', margin: 0, marginTop: '8px', marginBottom: '32px'}} className='text-center' level={2}>Welcome</Title>
  <Card title="About HiringX News">
    <Card type="inner" title="HiringX: Transforming the Future of Recruitment" extra={<a href="#">More</a>}>
      




In the ever-evolving landscape of employment, HiringX stands as the beacon of innovation, revolutionizing the way recruiters connect with talent and candidates find their dream jobs. Our platform is not just a recruitment tool; it’s a dynamic ecosystem where possibilities meet opportunities, and ambitions are nurtured to fruition.
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Innovative Features Redefining Recruitment"
      extra={<a href="#">More</a>}
    >
      HiringX pioneers a plethora of innovative features that set new benchmarks in the recruitment industry. Our AI-driven chatbots conduct preliminary assessments, ensuring that candidates meet the basic requirements before proceeding further. Virtual job fairs and interactive webinars create a dynamic space for networking, fostering meaningful connections between recruiters and candidates. Additionally, our gamified learning modules empower candidates to upskill, making them more marketable in their respective fields.
    </Card>
  </Card>
  </div>


  
);

export default App;