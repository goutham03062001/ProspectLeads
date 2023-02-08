import React from "react";
import Testimonial from "../../Assets/testimonials-group.png";
import "./Testimonials.css";
import FistImage from "../../Assets/Contact.png"
const Testimonials = ({ isFromHomePage }) => {
  return (
    <>
      {isFromHomePage ? (
        <>
          <div className="container my-5">
            <div className="row my-3">
              <div>
                <p className="text text-center my-3 testimonails_header">
                  Testimonials
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="testimonails_style">
                  <div className="testimonials_line"></div>
                  <div className="mx-3">Testimonials</div>
                </div>

                <p className="testimonials_left_heading">
                  What Our Customers Are Saying
                </p>
                <p className="testimonials_comments">
                  My experience has been extremely pleasant. I work with Steve
                  Blaine and have found him to be very knowledgeable and
                  responsive. I am indeed very satisfied with Prospecting Leads
                  and their superior level of service.
                </p>

                <div className="testimonails_bottom_style">
                  <div className="testimonials_line"></div>
                  <div className="mx-3">Jackob, Marketing manager</div>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <img
                  src={Testimonial}
                  className="img img-fluid"
                  alt="testimonials"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container my-5">
            <div className="row mt-5">
              <div className="col-lg-4 my-3">
                <div className="card card_style">
                <div className="img_container mb-3">
                <p className="ml-2 p-1">Jackob</p>
                <p className="ml-2 p-1">HR Manager</p>
                  <img src = {FistImage} className="img img-fluid testimonials_img" alt="first"/>
                </div>
                  <div className="card-body mt-5">
                    <p className="card_desc_testimonials">
                      While I have only used Prospecting Leads over a short
                      period of time, it’s quite clear that our money was well
                      invested. I was naturally skeptical at first but the
                      results are evidently great so far. I would strongly
                      recommend learning more about Prospecting Leads and their
                      services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card card_style">
                <div className="img_container mb-3">
                <p className="ml-2 p-1">Jackob</p>
                <p className="ml-2 p-1">HR Manager</p>
                  <img src = {FistImage} className="img img-fluid testimonials_img" alt="first"/>
                </div>
                  <div className="card-body">
                    <p className="card_desc_testimonials">
                      Commendable service from all team members I communicated
                      with. Highly professional, prompt and efficient. I am
                      particularly pleased with timely response, commitment to
                      delivering accurate data and customer satisfaction goals.
                      I have no hesitation in recommending Prospecting Leads
                      services to companies...
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card card_style">
                <div className="img_container mb-3">
                <p className="ml-2 p-1">Jackob</p>
                <p className="ml-2 p-1">HR Manager</p>
                  <img src = {FistImage} className="img img-fluid testimonials_img" alt="first"/>
                </div>
                  <div className="card-body">
                    <p className="card_desc_testimonials">
                      While I have only used Prospecting Leads over a short
                      period of time, it’s quite clear that our money was well
                      invested. I was naturally skeptical at first but the
                      results are evidently great so far. I would strongly
                      recommend learning more about Prospecting Leads and their
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Testimonials;