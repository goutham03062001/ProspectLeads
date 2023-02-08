import React from "react";
import ComplianceImage from "../../Assets/compliance.jpg";
import "./Compliance.css";
const Compliance = () => {
  return (
    <div className="container my-5">
        <div className="row mt-5">
            <div className="compliance_flex">
            <div className="compliance_line"></div>
            <p className="text compliance_heading">Compliance</p>

            </div>
        </div>
      <div className="row">

        <div className="col-lg-6 pr-3 my-5" style = {{lineHeight:"40px", textAlign:"justify"}}>
          <p>
            Our digital assets are compiled using continuous telemarketing
            campaigns, card collectors at exhibitions/conferences, industry
            specific survey campaigns, user groups, trade associations, state
            licensing boards, leading business magazines, company newsletters,
            federal, state, city & county government data, bankruptcy records
            and legal filings, annual reports, 10Ks and other SEC filings, new
            business registration and incorporations, postal service information
            including national change of address, ZIP+4 carrier route and
            delivery sequence files.
          </p>
        </div>
        <div className="col-lg-6 my-3 p-5">
            <img src = {ComplianceImage} className="img img-thumbnail" alt="compliance"/>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
