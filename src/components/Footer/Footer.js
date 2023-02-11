import React from "react";
import "./Footer.css";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Footer = () => {
  return (
    <div className="container-fluid bg-image">
      <div className="container mt-5 mb-2">
        <div className="row  footer_row py-5">
          <div className="col-lg-3 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              About Company
            </p>
            For more than 15 years we have been delivering end-to-end sales and
            marketing solutions to clients across different business verticals.
            We provide data insights, market reports, compliance and credit
            check, customs data acquisition and validation support services.
          </div>
          <div className="col-lg-4 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Quick Links</p>
            <p>
              <a href = "/B2B"> <KeyboardDoubleArrowRightIcon /> B2B Email List</a>
            </p>
            <p>
              {" "}
              <a href ="/DataEnrichment"> <KeyboardDoubleArrowRightIcon /> Data Enrichment & ABM</a>
            </p>
            <p>
              <a href ="/Technology-user-data"> <KeyboardDoubleArrowRightIcon /> Technology User Data and Insights</a>
            </p>

            <p>
              <a href ="/MSP"> <KeyboardDoubleArrowRightIcon /> MSP Database</a>
            </p>
            <p>
              {" "}
              <a href ="/HealthCare"> <KeyboardDoubleArrowRightIcon /> Health Care Specialties</a>
            </p>
            <p>
              <a href="/EmailCampagin"> <KeyboardDoubleArrowRightIcon /> Email Campaigns</a>
            </p>
          </div>
          <div className="col-lg-2 col-12 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Location</p>
            <p>
            3705 W Pico Blvd<br/>
            #40 Los Angeles<br/>
            CA, 90019-3451
              <br />
            </p>
          </div>

          <div className="col-lg-3 mt-3">
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>News Letter</p>
            <p>Sign up today for hints, tips and the latest product news</p>
            <div className = "d-flex  email_input">
            <input type = "text" className = "email_field" style = {{backgroundColor:"#1e1e1e", border:"none",width:"80%"}} />
            <button className = "btn btn-dark">Submit</button>
            </div>
          </div>
        </div>

        <div className="footer_second_row" id = "footer_second_row">
          <div className=" second_row_copy_right">
            <p style={{ textAlign: "center" }}>
              <span className="text text-secondary copy_right">Copyright © 2023</span>{" "}
              <span style={{ color: "white" }}> &nbsp;Prospect Leads</span>
            </p>
          </div>

          <div className="footer_extra_options">
            <p>
              <a href="/" style={{ fontSize: "14px" }}>
                Site Maps
              </a>{" "}
              |&nbsp;{" "}
            </p>

            <p>
              {" "}
              <a href="/" style={{ fontSize: "14px" }}>
                Terms Of Use
              </a>{" "}
              |&nbsp;{" "}
            </p>

            <p>
              {" "}
              <a href="/" style={{ fontSize: "14px" }}>
                Privacy
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
