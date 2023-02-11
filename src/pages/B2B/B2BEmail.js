import React,{ useEffect } from "react";
import Image from "../../Assets/B2B (2).png";
import "./B2B.css";
import Aos from "aos";
import 'aos/dist/aos.css';
const B2BEmail = () => {
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
        <p className = "b2b_page_heading" style = {{fontSize : "40px", textAlign:"center", marginTop:"10px",fontWeight : "bold", color:"black", padding:'5px'}}>B2B Email Lists</p>
      </div>

      </div>
      <div className="row">
        <div className="col-lg-12 main_image b2b_image_container mt-1">
          <img src={Image} alt="first" className="img img-fluid main_image b2b_image" />
        </div>
        <div className="testimonails_bottom_style">
          <div className="testimonials_line"></div>
          <div className="mx-3" style = {{fontWeight:"bold", fontSize:"24px"}}>B2B Email Lists</div>
        </div>
        <p className="text mt-3" style={{lineHeight:"35px"}} >
          At PROSPECT LEADS we can help you reach more than 120 industry
          sectors from agriculture to aerospace to real estate to manufacturing
          and many more. Covering both developed and budding markets on four
          continents is no mean feat, but at prospect Leads we dedicate
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
          prospect Leads can build a customized list of prospects that will
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
