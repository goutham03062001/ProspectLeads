import React from "react";
import "./Contact.css";
import ContactImage from "../../Assets/contactUs.png";
import LocationImage from "../../Assets/location.png";
import CallImage from "../../Assets/telephone.png";
import EmailImage from "../../Assets/email.png";

const Contact = ({ isFromHomePage }) => {
  return (
    <div className="container my-5">
      <div className="row my-3">
        <div className="text text-center contact_heading">Contact Us</div>
      </div>

      <div className="row">
        <div className="col-lg-6 ">
          <input
            type="text"
            className="form-control my-5 py-3"
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control my-5 py-3"
            placeholder="email"
          />
          <textarea className="form-control p-3" placeholder="Message" />
          <button className="btn btn-dark btn-md  my-5 submit_btn">
            Submit
          </button>
        </div>

        <div className="col-lg-5 col-6 contact_img_container">
          {isFromHomePage ? (
            <>
              <img
                src={ContactImage}
                className="img img-fluid contact_img mt-1"
                alt="ContactImg"
              />
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-lg-6 col-12">
                  
                    <img
                      src={LocationImage}
                      className="img img-fluid img_icon mt-4 "
                      alt="location"
                    />
                    <p className="mt-4">
                      3705 W Pico Blvd
                      <br />
                      #40 Los Angeles
                      <br /> CA, 90019-3451
                    </p>
                
                </div>
                <div className="col-lg-6 ">
                  <img
                    src={LocationImage}
                    className="img img-fluid img_icon mt-4 "
                    alt="location"
                  />
                  <p className="mt-4">
                    35B The Commons
                    <br />
                    3524 Silverside Road
                    <br /> Wilmington, DE 19810-4929
                  </p>
                </div>

                <div className="col-lg-6">
                  <img
                    src={EmailImage}
                    className="img img-fluid img_icon mt-4 "
                    alt="location"
                  />
                  <p>info@prospect-leads.com</p>
                </div>

                <div className="col-lg-6">
                  <img
                    src={CallImage}
                    className="img img-fluid img_icon mt-4 "
                    alt="location"
                  />
                  <p className="mt-4">
                  +1 (972)-232-9280
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
