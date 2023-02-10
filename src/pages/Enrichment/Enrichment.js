import React,{useEffect} from "react";
import Image from "../../Assets/DataEnrichment.png";
import "./Enrichment.css";
import Aos from "aos";
import 'aos/dist/aos.css';
const Enrichment = () => {
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
        <p style = {{fontSize : "40px", textAlign:"center", marginTop:"10px",fontWeight : "bold",color:"black", padding:'5px'}}>Data Enrichment & ABM</p>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-12 img main_image_container my-3">
          <img src={Image} alt="first" className="img img-fluid main_image" />
        </div>
        <div className="testimonails_bottom_style">
          <div className="testimonials_line"></div>
          <div
            className="mx-3"
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >
            Data Enrichment & ABM
          </div>
        </div>
        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          Upon signing a NDA, PROSPECT LEADS can enhance your existing
          in-house database with missing and / or outdated information of your
          ideal prospects and customers. Having successfully executed over 800
          individual service requests, our data appending service offering has
          helped companies increase customer retention, sales opportunities
          while also providing access to current contact and business
          information to well informed business decisions. Our validation
          process reassures accuracy of information added to your existing file
          which as always comes with promise of 90%.
        </p>
        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          Plan and execute account based marketing programs with the most
          accurate segmentation available in the market. Our discovery team not
          only appends desired contact information but also details
          comprehensive business information (over 25 specific data points),
          including technology usage of named accounts which your sales gurus
          may find useful for more focused targeting. Save time and recurring
          costs to scrub and research what is already available in our robust
          system which PROSPECT LEADS will thoroughly validate for the most
          effective outreach campaigns. Our experts will include desired and
          customized data points if your sales force is looking for a specific
          list of accounts to market to.
        </p>
      </div>
    </div>
  );
};

export default Enrichment;
