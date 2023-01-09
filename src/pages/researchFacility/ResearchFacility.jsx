import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./ResearchFacility.css";

export default function ResearchFacility() {
  return (
    <div className="main-content">
      {/* <Topbar /> */}

      <div class="sidebar">
        <a class="active" href="#home">
          Reseach Fields
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <div class="content">
        <div className="research-container ">
          <div class="shadow-lg p-3 mb-5 bg-body rounded justify-content-center">
            <h1
              style={{
                color: "#696b6e",
                fontFamily: "sans-serif",
                lineHeight: 3,
                padding: 5,
              }}
            >
              Research Facility and Funding
            </h1>
            <hr class="page-header" />
            <span
              style={{
                color: "#363738",
                fontSize: "18px",
                fontFamily: "sans-serif",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
