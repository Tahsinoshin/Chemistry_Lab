import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

import "./AdminDashboard.css";

export default function adminDashboard() {
  return (
    <div className="page-container">
      <div
        className="sidebar-container"
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar
          textColor="#fff"
          backgroundColor="linear-gradient(150deg,#04324d, #0a9bf0);"
        >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{
                color: "inherit",
                fontSize: "24px",
                fontFamily: "cursive",
              }}
            >
              Chemistry Lab
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/people/faculty" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">
                  Faculty List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/people/graduate" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user menu">
                  Graduate List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/people/undergraduate" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user menu">
                  UnderGraduate List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/publication/book" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="book">Book List</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/publication/journal" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="book">
                  Journal List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/publication/conference" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="book">
                  Conference List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exactto="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  Logout 
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          
        </CDBSidebar>
      </div>
      <div class="vl"></div>
      <div className="dashboard-container">
        <h1 class="w3-center w3-animate-top">dashboard main page</h1>
        <div className="small-divs">
          <div className="first-row">
            <div class="shadow-lg p-3 mb-5 bg-body rounded" className="small-div">
              <h3>Faculty Page</h3>
              <button type="button" class="btn btn-primary">View Page</button>
                
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body rounded" className="small-div">
              <h3>Undergraduate Page</h3>
              <button type="button" class="btn btn-primary">View Page</button>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body rounded" className="small-div">
              <h3>Graduate Page</h3>
              <button type="button" class="btn btn-primary">View Page</button>
            </div>
          </div>
          <div className="second-row">
            <div class="shadow-lg p-3 mb-5 bg-body rounded" className="small-div">
              <h3>Book Page</h3>
              <button type="button" class="btn btn-primary">View Page</button>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body rounded" className="small-div">
              <h3>Journal Page</h3>
              <button type="button" class="btn btn-primary">View Page</button>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body rounded" className="small-div">
            <h3>Conference Page</h3>
            <button type="button" class="btn btn-primary">View Page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
