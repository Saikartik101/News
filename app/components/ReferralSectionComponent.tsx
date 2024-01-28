import React , {useState} from 'react';
import { List, Divider,Layout,Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const { Paragraph, Title, Text } = Typography;

const ReferralSectionComponent = () => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [expandedItemIndex, setExpandedItemIndex] = useState(null);
      const details = [
        {
          title: 'Pushing Limits in Tech',
          resume: '/path/to/resume.pdf',
          description: 'Excellent Software Engineer Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystcvExcellent Business AnalystExcellent Business AnalystExcellent Business AnalystvvExcellent Business AnalystvExcellent Business AnalystExcellent Business Analyst',
          time: '5 mins ago',
          Position: 'Software Engineer',
        },
        {
          title: 'Creating History in Business Intelligence',
          resume: '/path/to/resume.pdf',
          description: 'Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst Excellent Business Analyst',
          time: '1 day ago',
          Position: 'Business Analyst',
        },
      ];

      const handleReadMoreClick = (index) => {
        setExpandedItemIndex(index);
      };
      const handleToggleDescription = (index) => {
        setExpandedItemIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      return (
        <div>
           <Title style={{color: '#494A7D', margin: 0, marginTop: '8px', marginBottom: '32px'}} className='text-center' level={2}>Referrals</Title>
        <List
          itemLayout="horizontal"
          dataSource={details}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <span>
                    {item.title} <Divider type="vertical" className="border-l border-black" />{' '}
                    <a href={item.resume} target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
                    <Divider type="vertical" className="border-l border-black" /> {item.Position}
                  </span>
                }
                description={
                  <span>
                    {item.description.slice(0, expandedItemIndex === index ? item.description.length : 100)}
                    {item.description.length > 100 && !expandedItemIndex && '... '}
                    {expandedItemIndex !== index && item.description.length > 100 && (
                      <a onClick={() => handleToggleDescription(index)} style={{ cursor: 'pointer' }}>
                        Read more
                      </a>
                    )}
                    {expandedItemIndex === index && (
                      <span>
                        {' '}
                        <a onClick={() => handleToggleDescription(null)} style={{ cursor: 'pointer' }}>
                          Read less
                        </a>
                      </span>
                    )}
                  </span>
                }
              />
              <div>
                {item.time} 

              </div>
            </List.Item>
          )}
        />
        </div>
      );
    };
    
    export default ReferralSectionComponent;