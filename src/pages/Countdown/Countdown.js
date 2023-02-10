import React from 'react'
import "./Countdown.css";
import EmployeeImage from "../../Assets/Employee.png";
import AwardImage from "../../Assets/award.png";
import HandShakeImage from "../../Assets/hand-shake.png";
import RatingImage from "../../Assets/CustomerReviews.png";
const Countdown = () => {
  return (
    <>
        <p className='count_down_heading'>Our Achievements</p>
    <div className="container my-3">
        <div className='row my-3 py-5'>
               
            <div className='col-lg-3 count_down_container'>
                <div className='row'>
                    <div className='col-lg-11'>
                    <div className="count_down_icon">
                    <img src = {EmployeeImage} alt = "employee" className="img img-fluid"
                    style = {{width:"150px", height:"150px"}}/>
                </div>
                <div><br/>
                <p className="bg-dark text-white p-2 text-center text-bold">240 + Employee</p>
                </div>
                
                 </div>
                    <div className='col-lg-1 count_down_style'></div>
                </div>
            </div>

            <div className='col-lg-3 count_down_container bg-white'>
                <div>
                <img src = {AwardImage} alt = "employee" className="img img-fluid"
                    style = {{width:"150px", height:"150px"}}/>
                </div>
                <div>
                <br/>
                <p className="bg-dark text-white p-2 text-center text-bold">15 + Awards</p>
                </div>
            </div>


            <div className='col-lg-3 count_down_container'>
            <div>
            <img src = {HandShakeImage} alt = "employee" className="img img-fluid"
                    style = {{width:"150px", height:"150px"}}/>
                </div>
                <div><br/>
                <p className="bg-dark text-white p-2 text-center text-bold">6K + Projects Completed</p>
                </div>
            </div>

            <div className='col-lg-3 count_down_container'>
            <div>
            <img src = {RatingImage} alt = "employee" className="img img-fluid"
                    style = {{width:"150px", height:"150px", backgroundColor:"#C3DDDD"}}/>
                </div>
                <div><br/>
                <p className="bg-dark text-white p-2 text-center text-bold">850 + Customer Reviews</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Countdown