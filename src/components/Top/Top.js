import React from "react";
import "./Top.css";
import FirstImage from "../../Assets/Technology.png";
import SecondImage from "../../Assets/B2B (2).png";
import ThirdImage from "../../Assets/HealthCare.png";
import { Carousel } from "antd";
const Top = () => {
  return (
    <div className="container-fluid mt-1" style={{ backgroundColor: "black" }}>
      <div className="row">
        <Carousel autoplay className="carousel_container">
          <div className="carouselInner  d-flex my-3 p-2">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <img
                src={FirstImage}
                className="img img-fluid  first_slide_image slide_image"
                alt="first"
              />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 my-3">
              <p className="text text-white">Grow your business with </p>
              <h4 className="text text-white">Technology Sales Intelligence</h4>
              <p style={{ lineHeight: "30px" ,fontSize:"20px"}} className="text text-white mt-4">
                Prospect Leads captures technology installation details under
                various categories to provide B2B companies with insights on
                competitor or partner product users. Our clients accomplish
                successful outcomes in their marketing programs thanks to the
                most accurate and reliable technographics available.{" "}
              </p>
              <button style = {{backgroundColor:"white", padding:"10px"}}>
                <a href = "/Technology-user-data" style = {{color:"black"}}>Learn More</a>
              </button>
            </div>
          </div>
          <div className="carouselInner d-flex my-5 p-2">
            <div className="col-lg-6 col-sm-12 second_image_container">
              <img
                src={SecondImage}
                className="img img-fluid slide_image second_slid_image"
                alt="first"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="text text-white">Data Services</p>
              <h4 className="text text-white">B2B Data Services</h4>
              <p style={{ lineHeight: "30px" , fontSize:"20px"}} className="text text-white mt-4">
                Any industry, any market, any niche segment --we have it all
                with unique data customization capabilities to narrow in on your
                ideal target market
              </p>
              <button style = {{backgroundColor:"white", padding:"10px"}}>
                <a href = "/B2B" style = {{color:"black"}}>Learn More</a>
              </button>
            </div>
          </div>

          <div className="carouselInner d-flex my-3 p-2">
            <div className="col-lg-6 col-sm-12 mb-5 mr-5">
              <img
                src={ThirdImage}
                className="img img-fluid  slide_image"
                alt="first"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="text text-white">Digital Marketing</p>
              <h4 className="text text-white">HealthCare Intelligence</h4>
              <p
                style={{ lineHeight: "30px", fontSize: "20px" }}
                className="text text-white mt-4"
              >
                Gain access to our trusted network of over 62 different types of
                doctors and Medical Specialists with direct contact and
                business information
              </p>
              <button style = {{backgroundColor:"white", padding:"10px"}}>
                <a href = "/HealthCare" style = {{color:"black"}}>Learn More</a>
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Top;
