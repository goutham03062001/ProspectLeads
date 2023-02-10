import React from "react";
import B2B from "../../Assets/B2B (2).png";
import Technology from "../../Assets/Technology.png";
import MSPData from "../../Assets/MSPData.png";
import DataEnrichment from "../../Assets/DataEnrichment.png";
import HealthCare from "../../Assets/HealthCare.png";
import EmailCampaign from "../../Assets/B2B.png";
import "./Services.css";
const Services = () => {
  
  return (
    <div className="container">
      <div className="row">
        <p className="text text-center my-3 our_services_heading">
          Our Services
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card my-3 service_card">
            <div className="card_img">
              <img src={B2B} className="img img-fluid" alt="title" />
            </div>

            <p className="cards-title">B2B Email Lists</p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card my-3 service_card">
            <div className="card_img">
              <img src={DataEnrichment} className="img img-fluid" alt="title" />
            </div>

            <p className="cards-title">Data Enrichment & ABM</p>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card my-3 service_card">
            <div className="card_img">
              <img src={Technology} className="img img-fluid" alt="title" />
            </div>

            <p className="cards-title">Technology User Data & Insights</p>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card my-3 service_card">
            <div className="card_img">
              <img src={MSPData} className="img img-fluid" alt="title" />
            </div>

            <p className="cards-title">MSP Database</p>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card my-3 service_card">
            <div className="card_img">
              <img src={HealthCare} className="img img-fluid" alt="title" />
            </div>

            <p className="cards-title">HealthCare Specialities</p>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card my-3 service_card">
            <div className="card_img">
              <img src={EmailCampaign} className="img img-fluid" alt="title" />
            </div>

            <p className="cards-title">Email Campaigns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
