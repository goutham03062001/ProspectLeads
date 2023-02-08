import React from "react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Instagram } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="row">
        <div className="fist_item_footer  p-2 col-lg-3">
          <div className="row p-2 ">
            <p className="text">ProspectLeads</p>
            </div>
          <div className="row">
            <div className="icon_container">
              <div><FacebookIcon/></div>
              <div><InstagramIcon/></div>
              <div><LinkedInIcon/></div>
            </div>
          </div>
          </div>
        
        <div className="col-lg-1"> </div>
        <div className="fist_item_footer my-1 p-5 col-lg-4">
          <div className="row">
            <div className="col-lg-2 ">
              <LocationOnSharpIcon
                className="icon"
                style={{ fontSize: "40px" }}
              />
            </div>

            <div className="col-lg-8 mt-3">
              <h4>Office</h4>
              <p>
                3705 W Pico Blvd
                <br />
                #40 Los Angeles
                <br />
                CA, 90019-3451
              </p>
            </div>
          </div>

         
        </div>

        <div className="fist_item_footer my-1 p-5 col-lg-4">
          <div className="row">
            <div className="row ">
              <div className="col-lg-2 ">
                <CallIcon className="icon" style={{ fontSize: "40px" }} />
              </div>

              <div className="col-lg-8 ">
                <h5>Call Us</h5>
                <p>
                  +1 (609) 566-9944 <br />
                  +1 (302) 250-4336
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <MailOutlineIcon className="icon" style={{ fontSize: "40px" }} />
            </div>

            <div className="col-lg-8 mt-3">
              <h5>Email Us</h5>
              <p>info@prospectingleads.net</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Footer;
