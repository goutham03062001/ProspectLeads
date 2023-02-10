import React from "react";
import AboutImage from "../../Assets/AboutUs.png"
import Styles from "./About.module.css";
import "./About.css";
const myStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};
const arrowStyle = {
  width: "60px",
  height: "5px",
  backgroundColor: "black",
};
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <img className="img img-fluid about_us_image" src={AboutImage} alt="about-us"/>
        </div>
        <div className="col-lg-7 mt-5">
          <div className={Styles.about_us_styling} style={myStyle}>
            <div style={arrowStyle}></div>
            <div className="mx-3">
              <h3 style={{fontWeight:"bold"}}>About us</h3>
            </div>
          </div>
          <p className={`${Styles.about_us_desc}`}>
            PROSPECT LEADS has been a trusted service partner delivering
            technology sales intelligence, business contact database,
            competitive analysis and market research services to several hundred
            global organizations for over a decade. Our data-driven insights
            help a wide range of technology vendors across the globe market
            their products and services to desired target groups. These proven
            solutions enable smarter targeting, faster reach and successful
            marketing programs which primarily rely on one critical element
            which has always boiled down to accurate data insights.
          </p>
          <p className={`${Styles.about_us_desc}`}>
          Global organizations have leveraged our long standing expertise to
          accelerate go-to-market strategies and sales campaigns using reliable
          sources. We aim to be a partner not just for one, but all future
          marketing initiatives helping you gain an edge over the competition
          and scale your business to the next level!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
