import React from "react";
import "./Top.css";
import FirstImage from "../../Assets/Computer.png";
import SecondImage from "../../Assets/B2B.jpg";
import ThirdImage from "../../Assets/HealthCare.jpg"
import { Carousel } from "antd";
const Top = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <Carousel autoplay>
          <div className="carouselInner d-flex my-3 p-2">
          <div className="col-lg-6">
          <img
            src={FirstImage}
            className="img img-fluid w-75 h-75"
            alt="first"
          />
        </div>
        <div className="col-lg-6 my-3 p-2">
          <p>Grow your bussiness with </p>
          <h4>Technology Sales Intelligence</h4>
          <p style = {{lineHeight:"30px"}}>
            Prospecting Leads captures technology installation details under
            various categories to provide B2B companies with insights on
            competitor or partner product users. Our clients accomplish
            successful outcomes in their marketing programs thanks to the most
            accurate and reliable technographics available.{" "}
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>

          </div>
          <div className="carouselInner d-flex">
          <div className="col-lg-6">
          <img
            src={SecondImage}
            className="img img-fluid w-75 h-75"
            alt="first"
          />
        </div>
        <div className="col-lg-6">
          <p>Grow your bussiness with </p>
          <h4>B2B Market Sales</h4>
          <p style = {{lineHeight:"30px"}}>
            Prospecting Leads captures technology installation details under
            various categories to provide B2B companies with insights on
            competitor or partner product users. Our clients accomplish
            successful outcomes in their marketing programs thanks to the most
            accurate and reliable technographics available.{" "}
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>

          </div>


          <div className="carouselInner d-flex">
          <div className="col-lg-6">
          <img
            src={ThirdImage}
            className="img img-fluid w-75 h-75"
            alt="first"
          />
        </div>
        <div className="col-lg-6">
          <p>Grow your bussiness with </p>
          <h4>Technology Sales Intelligence</h4>
          <p style = {{lineHeight:"30px"}}>
            Prospecting Leads captures technology installation details under
            various categories to provide B2B companies with insights on
            competitor or partner product users. Our clients accomplish
            successful outcomes in their marketing programs thanks to the most
            accurate and reliable technographics available.{" "}
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>

          </div>
        </Carousel>
      </div>
    </div>
  );    
};

export default Top;
