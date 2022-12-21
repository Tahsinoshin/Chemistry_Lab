import React from 'react'
import { Col, Row } from 'antd';
import './UnderGraduate.css'
import Topbar from '../../../components/topbar/Topbar';

const studentCategories = [
  {
    key: '1',
    image: 'assets/undergrad1.jpg',
    title: 'student 1',
    detail: 'taking course on natural resource project'
  },
  {
    key: '2',
    image: 'assets/undergrad2.jpg',
    title:  'student 2',
    detail: 'taking course on natural resource project'
  },
  {
    key: '3',
    image: 'assets/undergrad3.jpg',
    title:  'student 3',
    detail: 'taking course on natural resource project'
  },
  {
    key: '4',
    image:'assets/undergrad4.jpg',
    title:  'student 4',
    detail: 'taking course on natural resource project'
  },
  {
    key: '5',
    image: 'assets/undergrad5.jpg',
    title:  'student 5',
    detail: 'taking course on natural resource project'
  },
  {
    key: '6',
    image: 'assets/undergrad6.jpg',
    title:  'student 6',
    detail: 'taking course on natural resource project'
  }
]

export default function UnderGraduate() {
  return (
    <>
    <Topbar/>
    <div className="block studentCategories">
      <h2>Student Categories</h2>
      <Row gutter={[24, 24]}>
        {studentCategories.map(studentCategory => {
          return (
            
            <Col xs={{ span: 12 }} sm={{ span: 6 }} lg={{ span: 4 }} key={studentCategory.key}>
              <div className="content">
                <div className="image">
                  <img src={studentCategory.image} alt="student" />
                </div>
                <h3>{studentCategory.title}</h3>
                <h5>{studentCategory.detail}</h5>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  </>
  );
  
}
