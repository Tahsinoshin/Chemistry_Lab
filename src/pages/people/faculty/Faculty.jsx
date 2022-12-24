import React from 'react'
import { Col, Row } from 'antd';
import './Faculty.css'
import Topbar from '../../../components/topbar/Topbar';

const studentCategories = [
  {
    key: '1',
    image: '/assets/faculty1.jpg',
    title: 'faculty 1',
    detail: 'taking course on natural resource project'
    
  },
  {
    key: '2',
    image: '/assets/faculty2.jpg',
    title:  'faculty 2',
    detail: 'taking course on natural resource project'
  },
  {
    key: '3',
    image: '/assets/faculty3.jpg',
    title:  'faculty 3',
    detail: 'taking course on natural resource project'
  },
  {
    key: '4',
    image:'/assets/faculty4.jpg',
    title:  'faculty 4',
    detail: 'taking course on natural resource project'
  },
  {
    key: '5',
    image: '/assets/faculty5.jpg',
    title:  'faculty 5',
    detail: 'taking course on natural resource project'
  },
  {
    key: '6',
    image: '/assets/faculty6.jpg',
    title:  'faculty 6',
    detail: 'taking course on natural resource project'
  }
]

function showStudent(){
  studentCategories.map(studentCategory =>{console.log(studentCategory.image)});
}

export default function UnderGraduate() {
  return (
    <>
    
    <Topbar/> 
    showStudent()
    <div className="block-studentCategories">
      <h2>Allocated Faculties</h2>
        <div className="grids">
          <Row gutter={[24, 24]}>
            {studentCategories.map(studentCategory => {
              return (
                <Col xs={{ span: 8 }} sm={{ span: 6 }} lg={{ span: 8 }} key={studentCategory.key}>
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
      </div>
    </>
  );
  
}
