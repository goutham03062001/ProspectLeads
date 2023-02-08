import React from "react";
import Image from "../../Assets/B2BPage.jpg";
import "./B2B.css";
const B2BEmail = () => {
  return (
    <div className="container my-5">
      <div className="row my-5">
        <h3 className="text text-center">B2B Email List</h3>
      </div>
      <div className="row">
        <div className="col-lg-8 main_image my-3">
          <img src={Image} alt="first" className="img img-fluid" />
        </div>

        <p className="text mt-3" style={{lineHeight:"35px"}}>
          At Prospecting Leads we can help you reach more than 120 industry
          sectors from agriculture to aerospace to real estate to manufacturing
          and many more. Covering both developed and budding markets on four
          continents is no mean feat, but at Prospecting Leads we dedicate
          ourselves to utmost customer satisfaction. A commitment of that
          magnitude means we leave no stone unturned and no market unexplored.
          With 45 million updated records in our database, we come through with
          for our clients.
        </p>
        <p className="text mt-3" style={{lineHeight:"35px"}}>
          We specialize in generating Industry leads that are uniquely
          responsive to your product or service. How do we do achieve this? Our
          marketing analysts give your campaign a complete review and profile
          your best and most responsive customers. Using this information,
          Prospecting Leads can build a customized list of prospects that will
          enable a more focus and targeted approach to your audience. Industry
          Lists are updated every 90 -120 days to ensure 90% deliverability. All
          leads come with critical marketing information that includes Contact
          Name, Business Title, Business Email, Phone Number, Fax Number, SIC
          code, Complete Mailing Address and over 20 data points related to
          Business Information.
        </p>
      </div>
    </div>
  );
};

export default B2BEmail;
