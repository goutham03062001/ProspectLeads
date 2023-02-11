import React,{useEffect} from "react";
import "./TechnologyUserData.css";
import Image from "../../Assets/Technology.png";
import Aos from "aos";
import 'aos/dist/aos.css';
const TechnologyUserData = () => {
  useEffect(()=>{
    Aos.init({
      offset:200,
      duration:2000
    })
  })
    const data = [
        "Applicant Tracking Systems",
        "Analytics/Big Data/Business Intelligence (BI)",
        "Blockchain",
        "Business Analytics (BA)",
        "Business Phone",
        "Call Center",
        "Compensation Management",
        "Construction Bidding",
        "Construction ERP",
        "Construction Estimating",
        "Construction Management",
        "Construction Scheduling",
        "Container Platforms",
        "CPQ",
        "Database / Data Warehousing Software",
        "Dental",
        "Distribution",
        "Ecommerce",	"Infrastructure - Software","PLM",
        "EDI"	,"Intelligent Automation",	"Property Management",
        "EHR",	"Internet Of Things (IOT)"	,"Project Management",
        "EMR"	,"Inventory Management"	,"PPM",
        "Employee Scheduling"	,"Insurance"	,"PSA",
        "Embedded" ,"Analytics	Legal"	,"Recruitment & Staffing",
        "Enterprise Accounting",	"Live Chat,",	"Risk Management",
        "EAM",	"LMS"	,"Sales Force Automation","Talent Management"

    ]
  return (
    <div className="container my-5">
      <div className="row my-5">
      <div className=" d-flex justify-content-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
        <p  className = "technology_page_heading" style = {{textAlign:"center", marginTop:"10px",fontWeight : "bold", color:"black", padding:'5px'}}>Technology User Data and Insights</p>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-12 main_image technology_page_image my-3">
          <img src={Image} alt="first" className="img img-fluid main_image " />
        </div>
        <div className="testimonails_bottom_style">
          <div className="testimonials_line"></div>
          <div className="mx-3 technology_page_sub_heading" style = {{fontWeight:"bold"}}>Technology User Data and Insights</div>
        </div>
        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          PROSPECT LEADS captures technology installation details under
          various categories to provide B2B companies with insights on
          competitor or partner product users. Our clients accomplish successful
          outcomes in their marketing programs thanks to the most accurate and
          reliable technographics available. Our robust repository of over ten
          thousand unique technology environments are constantly updated with
          new installation intelligence compiled and verified by our research
          analysts and telemarketing team. With an accuracy guarantee of 95%, we
          pride ourselves on delivering fresh insights to global technology
          giants as well as mid-market and start-ups who rely on our data to
          market their products in the most efficient, time-saving and cost
          effective manner.
        </p>
        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          A key differentiator is our manual verification process that not only
          guarantees accuracy of technology environments captured but also
          confirms access to decision making profiles of key executives. Gain
          access to comprehensive business and contact information to execute
          your marketing campaigns by contacting our expert today at +1 (609)
          566-9944
        </p>
      </div>

      <div className="row mt-5">
        <h4 className="text-center">Software, Cloud & Technology Categories</h4>
        {
            data.map( item=>{
                return(<>
                    <div className="col-lg-4 item_card col-12">
            <div className="card categories_style" >
                <div className="card-body">{item}</div>
            </div>
        </div>
                </>)
            })
        }
      </div>
    </div>
  );
};

export default TechnologyUserData;
