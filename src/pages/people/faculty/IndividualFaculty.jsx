import React from "react";
import { useParams } from "react-router-dom";
import Faculty from "./Faculty";

export default function IndividualFaculty() {
  const { facultyKey } = useParams();
  return (
    <div>
      <h1>key for this person is {facultyKey}</h1>
    </div>
  );
}
