import React,{useEffect} from "react";
import Image from "../../Assets/B2B.png";
import "./EmailCampagin";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./EmailCampaign.css";
const EmailCampagin = () => {
  useEffect(()=>{
    Aos.init({
      offset:200,
      duration:2000
    })
  })
  return (
    <div className="container my-5">
      <div className="row my-5">
      <div className=" d-flex justify-content-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
        <p className = "email_campagin_heading" style = {{ textAlign:"center", marginTop:"10px",fontWeight : "bold", color:"black", padding:'5px'}}>Email Campaigns</p>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-12 my-3 main_image_container">
          <img src={Image} alt="first" className="main_image" />
        </div>
        <div className="testimonails_bottom_style">
          <div className="testimonials_line"></div>
          <div className="mx-3" style = {{fontWeight:"bold", fontSize:"24px"}}>Email Campaigns</div>
        </div>
        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          PROSPECT LEADS has partnered with HyperMail, a reputed email
          campaign service provider that can program mass email marketing
          campaigns for your organization. HyperMail’s platform can assist with
          driving brand awareness, periodic newsletters, demand generation,
          offers and other marketing initiatives. A few key notes as are
          follows:
        </p>
        <ul className = "email_campaign_list" style ={{listStyleType:"dot"}}>
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
