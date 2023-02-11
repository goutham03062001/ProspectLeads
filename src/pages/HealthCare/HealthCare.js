import React,{useEffect} from 'react'
import Image from "../../Assets/HealthCare.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./HelathCare.css";
const HealthCare = () => {
  useEffect(()=>{
    Aos.init({
      offset:200,
      duration:2000
    })
  })
    const data = [
        "Adolescent medicine",	"Forensic psychiatry",	"Neonatology",	"Pediatric surgery",
        "Aerospace medicine",	"Gastroenterology",	"Nephrology",	"Pediatrics",
        "Allergy and immunology" ,	"General surgery","Neurology"	,"Physical medicine and rehabilitation",
        "Anesthesiology",	"Geriatrics",	"Neuropathology",	"Plastic", "reconstructive and aesthetic surgery",
        "Bariatrics"	,"Gynecologic oncology",	"Neuroradiology",	"Psychiatry",
        "Cardiology"	,"Hematology"	,"Neurosurgery",	"Public health",
        "Cardiothoracic surgery"	,"Infectious disease"	,"Nuclear medicine"	,"Pulmunology or Respiratory medicine",
        "Clinical neurophysiology",	"Intensive care medicine"	,"Obstetrics and gynecology	Radiation", "oncology",
        "Colorectal surgery",	"Internal medicine",	"Occupational medicine",	"Radiology",
        "Dermatology"	,"Interventional radiology",	"Ophthalmology"	,"Rheumatology",
        "Emergency medicine",	"Maternal-fetal medicine",	"Orthopedic surgery",	"Thoracic surgery",
        "Endocrinology",	"Medical", "biochemistry",	"Otorhinolaryngology",	"Toxicology",
        "Family Medicine"	,"Medical genetics",	"Palliative care"	,"Urology",
        "Forensic pathology"	,"Medical oncology"	,"Pathology",	"Vascular surgery",
    ]
  return (
    <div className="container my-5">
      <div className="row my-5">
      <div className=" d-flex justify-content-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
        <p  className = "health_care_heading" style = {{ textAlign:"center", marginTop:"10px",fontWeight : "bold",color:"black", padding:'5px'}}>HealthCare Specialities</p>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-12 main_image my-3 health_care_image">
          <img src={Image} alt="first" className="img img-fluid main_image " />
        </div>
        
      </div>
      <div className="testimonails_bottom_style">
          <div className="testimonials_line"></div>
          <div className="mx-3" style = {{fontWeight:"bold", fontSize:"24px"}}>HealthCare Specialities</div>
        </div>
      <div className="row mt-5">
      {
            data.map( item=>{
                return(<>
                    <div className="col-lg-4 col-12 item_card">
            <div className="card categories_style" >
                <div className="card-body">{item}</div>
            </div>
        </div>
                </>)
            })
        }
      </div>
    </div>
  )
}

export default HealthCare