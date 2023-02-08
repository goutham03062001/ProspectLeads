import React from "react";
import B2B from "../../Assets/B2B.jpg";
import Technology from "../../Assets/Technology.jpg";
import MSPData from "../../Assets/MSPDatabase.jpg";
import DataEnrichment from "../../Assets/DataEnrichment.jpg";
import HealthCare from "../../Assets/HealthCare.jpg";
import EmailCampaign from "../../Assets/EmailCampagin.jpg";
import "./Services.css"
const Services = () => {
  const data = [
    {
      id: 1,
      title: "B2B Email Lists",
      image: B2B,
    },
    {
      id: 1,
      title: "Technology User Data & Insights",
      image: Technology,
    },
    {
      id: 1,
      title: "MSP Database",
      image: MSPData,
    },
    {
      id: 1,
      title: "Data Enrichment & ABM",
      image: DataEnrichment,
    },
    {
      id: 1,
      title: "Data Enrichment & ABM",
      image: HealthCare,
    },
    {
      id: 1,
      title: "Data Enrichment & ABM",
      image: EmailCampaign,
    },
    
  ];
  return (
    <div className="container">
      <div className="row">
        <p className="text text-center my-3 our_services_heading">Our Services</p>
      </div>
      <div className="row">
        {data.map((item) => {
          return (
            <>
              <div className="col-lg-4">
                <div className="card my-3 service_card">
                  <div className="card_img">
                  <img src={item.image} className="img img-fluid" alt={item.title} />
                  </div>
                  
                  <p className="cards-title">{item.title}</p>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
