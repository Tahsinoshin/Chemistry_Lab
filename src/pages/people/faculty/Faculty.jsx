import React, { useState } from "react";
import { Col, Row } from "antd";
import "./Faculty.css";
import Topbar from "../../../components/topbar/Topbar";
import individualFaculty from "./IndividualFaculty";
import IndividualFaculty from "./IndividualFaculty";
import { useNavigate } from "react-router-dom";

const studentCategories = [
  {
    key: "1",
    image: "/assets/faculty1.jpg",
    title: "faculty 1",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "2",
    image: "/assets/faculty2.jpg",
    title: "faculty 2",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "3",
    image: "/assets/faculty3.jpg",
    title: "faculty 3",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "4",
    image: "/assets/faculty4.jpg",
    title: "faculty 4",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "5",
    image: "/assets/faculty5.jpg",
    title: "faculty 5",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "6",
    image: "/assets/faculty6.jpg",
    title: "faculty 6",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
];

function showStudent() {
  studentCategories.map((studentCategory) => {
    console.log(studentCategory.image);
  });
}

export default function Faculty() {
  const navigate = useNavigate();

  function handleShow(key) {
    navigate("/people/details/" + key);
  }
  return (
    <>
      <Topbar />
      showStudent()
      <div className="block-studentCategories">
        <h2>Allocated Faculties</h2>
        <div className="grids">
          <Row gutter={[24, 24]}>
            {studentCategories.map((studentCategory, i) => {
              let text = studentCategory.detail + studentCategory.publication;
              let showText = text.slice(0, 100);
              return (
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 6 }}
                  lg={{ span: 8 }}
                  key={studentCategory.key}
                >
                  <div className="content" key={i}>
                    <div className="image">
                      <img src={studentCategory.image} alt="student" />
                    </div>
                    <h3>{studentCategory.title}</h3>
                    <h5>{showText}...</h5>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handleShow(studentCategory.image)}
                    >
                      View Details
                    </button>
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
