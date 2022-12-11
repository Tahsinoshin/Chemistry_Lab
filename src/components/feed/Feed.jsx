import React from 'react'
import "./Feed.css";

export default function Feed() {
  return (
    <div className="wrapper">
      <div classname="container">
        <div className="about-feed">
            <div className="description">
              <h1>About the Lab</h1>
              <div className="about-des">
              <p>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.May 20, 2020</p>
              </div> 
            </div>
            <div className="des-img">
              <img id="image1" src="/assets/image1.jpg" alt="img1" />
            </div>
        </div>
        <div className="contact">
          <div className="info">
            <h1>contact info</h1>
            <p>The lorem ipsum is a placeholder text used in publishing</p>
          </div>
        </div>
      </div>
    </div>
  )
}
