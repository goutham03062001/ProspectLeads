import React from "react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { EmailOutlined } from "@mui/icons-material";
// import { Instagram } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="container-fluid bg-image">
      <div className="container mt-5 mb-2">
      <div className="row">
        <div className="col-lg-4 col-6">
          <p>Follow Us On</p>
          <div className="d-flex justify-content-start p-1">
            <FacebookIcon className=""/>
            <InstagramIcon  className="mx-1"/>
            <LinkedInIcon  className="mx-1"/>
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <p>Location</p>
          <p>
          3705 W Pico Blvd<br/>
          #40 Los Angeles<br/>
          CA, 90019-3451
          </p>
        </div>
        <div className="col-lg-4 col-12">
          <div className="row">
            <div className="col-lg-6 col-6">
            <p>Call Us</p>
          <p>
          +1 (609) 566-9944<br/>
          +1 (302) 250-4336
          </p>
            </div>

            <div className="col-lg-6 col-6">
              <p>Email Us </p> 
              <p>info@prospectleads.net</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
