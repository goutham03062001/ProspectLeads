import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Instagram } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="container-fluid bg-image">
      <div className="container mt-5 mb-2">
        <div className="row  py-5">
          <div className="col-lg-3 col-6 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Follow Us On</p>
            <div className="d-flex justify-content-start p-1">
              <FacebookIcon className="" />
              <InstagramIcon className="mx-1" />
              <LinkedInIcon className="mx-1" />
            </div>
          </div>
          <div className="col-lg-3 col-6 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Location</p>
            <p>
              3705 W Pico Blvd
              <br />
              #40 Los Angeles
              <br />
              CA, 90019-3451
            </p>
          </div>
          <div className="col-lg-3 col-12 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Call Us</p>
            <p>
              +1 (972)-232-9280
              <br />
            </p>
          </div>

          <div className="col-lg-3 col-6 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Email Us </p>
            <p>info@prospect-leads.com</p>
          </div>

          <h4 style = {{color:"white"}}>Copyright © 2023 <span>ProspectLeads</span></h4>

        </div>
      </div>
    </div>
  );
};

export default Footer;
