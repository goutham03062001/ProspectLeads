import React from "react";
import Image from "../../Assets/B2BPage.jpg";
import "./EmailCampagin";
const EmailCampagin = () => {
  return (
    <div className="container my-5">
      <div className="row my-5">
        <h3 className="text text-center">Email Campaign</h3>
      </div>
      <div className="row">
        <div className="col-lg-8 main_image my-3">
          <img src={Image} alt="first" className="img img-fluid" />
        </div>

        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          Prospecting Leads has partnered with HyperMail, a reputed email
          campaign service provider that can program mass email marketing
          campaigns for your organization. HyperMail’s platform can assist with
          driving brand awareness, periodic newsletters, demand generation,
          offers and other marketing initiatives. A few key notes as are
          follows:
        </p>
        <ul style ={{listStyleType:"dot"}}>
            <li className="my-4">Dedicated IPs and Domains for each client</li>
            <li className="my-4" >Built in Data Scrub       </li>
            <li className="my-4" >A/B Testing to test effectiveness of subject lines and email copy</li>
            <li className="my-4" >HyperMail has the backend processes and configuration covered</li>
            <li className="my-4" >All the customer has to do is upload list, develop message and launch the campaign</li>
            <li className="my-4" >HyperMail provides support to help you set up as well as system training</li>
            <li className="my-4" >Opt-outs are automatically suppressed from your list</li>
            <li className="my-4" >Can create list of Clickers and/or Openers</li>
            <li className="my-4" >Personalization to populate subject line and email copy with desired fields in your database</li>
            <li className="my-4" >Customer can respond to messages within the system and also forward those responses to your email</li>
            <li className="my-4" >Technical Support Team to provide support</li>
            <li className="my-4" >2 Channels of Support (Ticket and FAQ’s)</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailCampagin;
