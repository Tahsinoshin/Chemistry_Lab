import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
          <h3>Chemistry<span>Lab</span></h3>
          <p className="footer-links">
            Department of Chemistry, University of Dhaka
          </p>
          <p className="footer-company-name">Copyright © 2021 <strong>ChemistryLab</strong> All rights reserved</p>
      </div>

      <div className="footer-center">
          <div>
              <i className="fa fa-map-marker"></i>
              <p><span>Curzon Hall</span>
                  University of Dhaka</p>
          </div>

          <div>
              <i className="fa fa-phone"></i>
              <p>+91 74**9**258</p>
          </div>
          <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
          </div>
      </div>
      <div className="footer-right">
          <p className="footer-company-about">
              <span>About the Developers</span>
              This website is Developed by <a href="/">Md. Muktar Hsen Mrihda</a> and <a href="/">Samiha Tahsin Noshin</a>
          </p>
          <div className="footer-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;