import React from "react";
import "./Navigation.css";
import { Menu } from 'antd';
const Navigation = () => {


  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
  <div className="container">
    <a className="navbar-brand" href="/">Prospect Leads</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar_right" >
      <li className="nav nav-item">
          <a className="nav-link " href="/" tabIndex="-1" aria-disabled="true">Home</a>
        </li>
        <li className="nav nav-item">
          <a className="nav-link " href="/WhatWeOffer" tabIndex="-1" aria-disabled="true">What We Offer</a>
        </li>
        <li className="nav nav-item">
          <a className="nav-link" href="/testimonials" tabIndex="-1" aria-disabled="true">Testimonials</a>
        </li>
        <li className="nav nav-item">
          <a className="nav-link " href="/Contact" tabIndex="-1" aria-disabled="true">Contact US</a>
        </li>
        <li className="nav nav-item">
          <a className="nav-link" href="/Compliance" tabIndex="-1" aria-disabled="true">Compliance</a>
        </li>
      </ul>
      
     
    
    </div>
  </div>
</nav>    </>
  );
};

export default Navigation;
