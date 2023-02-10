import React, {useEffect} from "react";
import Image from "../../Assets/MSPData.png";
import Aos from "aos";
import 'aos/dist/aos.css';
const MSPDatabase = () => {
  useEffect(()=>{
    Aos.init({
      offset:200,
      duration:2000
    })
  })
    const data = [
        "Accounting Software Consulting"	,"IaaS providers"	,"Resellers and Technology Partners",
        "Application Consulting"	,"Independent Software Vendors (ISVs)"	,"RMM Providers",
        "Automation and Industrial Automation Partners","Integration Partners"	,"SaaS Providers",
        "Backup and Recovery Resellers/Partners"	,"IOT Providers"	,"Software Implementation and Training companies",
        "BI Consulting"	,"ISPs (Internet Service Providers)",	"Software Resellers",
        "Blockchain Providers",	"Managed Cloud Infrastructure",	"Storage Resellers/Partners",
        "Cloud Communication Service Providers (CCaaS)"	,"Managed Communication Services"	,"Surveillance Technology Providers",
        "CRM Consulting Companies",	"Managed Hosting Providers"	,"System Integrators",
        "CSPs (Cloud Service Providers)",	"Managed IT Support",	"TSPs (Telecom Service Providers)",
        "Cyber Security Resellers/Partners",	"Managed Printing Service Providers",	"UCaaS Providers",
        "Data Analytics","Managed Wireless and Mobile Computing","VADs (Value Added Distributors)",
        "Data Integration and Cloud Data Integration companies",	"MSSPs (Managed Security Service Providers)",	"VARS (Value Added Resellers)",
        "eCommerce Service Providers",	"NSPs (Networking Service Providers)"	,"Virtualization Consulting",
        "Endpoint Consulting"	,"OEM Partners",	"Web Development Companies",
        "HR Software Consulting","PaaS Providers",	"WSPs (Wireless Service Providers)",
        
    ]
  return (
    <div className="container my-5">
      <div className="row my-5">
      <div className=" d-flex justify-content-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
        <p style = {{fontSize : "40px", textAlign:"center", marginTop:"10px",fontWeight : "bold",color:"black", padding:'5px'}}>MSP DATABASE</p>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-12 main_image my-3">
          <img src={Image} alt="first" className="img img-fluid main_image" />
        </div>
        <div className="testimonails_bottom_style">
          <div className="testimonials_line"></div>
          <div className="mx-3" style = {{fontWeight:"bold", fontSize:"24px"}}>MSP Database</div>
        </div>
        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          A managed service provider (MSP) delivers services such as network,
          application, infrastructure and security via ongoing support and
          active administration on customer’s premises, in their MSP’s data
          center or in a third-party data center. Services ranging from
          monitoring to centralized IT management, scheduled maintenance, remote
          support, billing and contract management to cybersecurity, Prospecting
          Leads has access to required MSP accounts that you may want to target
          right away. Doesn’t matter if your company is looking for Pure-play,
          Staffing Legacy or High level MSPs – we have it all!
        </p>
        <p className="text mt-3" style={{ lineHeight: "35px" }}>
          We have segregated these MSP companies under various categories as per
          service offerings which also contain business and contact information
          to key executives including C-Suite profiles. These lead files can be
          further customized based on your specific needs. Are you looking to
          target managed service providers with specific filtration
          requirements? Call us today for samples of our extensive database on
          +1 (609) 566-9944
        </p>
      </div>

      <div className="row mt-5">
        <h4 className="text-center">MSP DATABASE</h4>
        {
            data.map( item=>{
                return(<>
                    <div className="col-lg-4 col-12">
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

export default MSPDatabase;
