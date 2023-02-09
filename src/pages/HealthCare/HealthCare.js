import React from 'react'
import Image from "../../Assets/B2BPage.jpg";
const HealthCare = () => {
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
        <h3 className="text text-center">Health Care Data</h3>
      </div>
      <div className="row">
        <div className="col-lg-8 main_image my-3">
          <img src={Image} alt="first" className="img img-fluid" />
        </div>
        
      </div>

      <div className="row mt-5">
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
  )
}

export default HealthCare