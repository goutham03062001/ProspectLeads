import React from 'react'
import "./Countdown.css";
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ReviewsIcon from '@mui/icons-material/Reviews';
import EmployeeImage from "../../Assets/teamwork.png";
import AwardImage from "../../Assets/award.png";
import HandShakeImage from "../../Assets/hand-shake.png";
import RatingImage from "../../Assets/rating.png";
const Countdown = () => {
  return (
    <>
        <p className='count_down_heading'>Our Achievements</p>
    <div className="container my-3 bg-light">
        <div className='row my-3 py-5'>
               
            <div className='col-lg-3 count_down_container'>
                <div className='row'>
                    <div className='col-lg-11'>
                    <div className="count_down_icon">
                    <img src = {EmployeeImage} alt = "employee" className="img img-fluid"
                    style = {{width:"100px", height:"100px"}}/>
                </div>
                <div><br/>
                240 + Employee
                </div>
                
                 </div>
                    <div className='col-lg-1 count_down_style'></div>
                </div>
            </div>

            <div className='col-lg-3 count_down_container'>
                <div>
                <img src = {AwardImage} alt = "employee" className="img img-fluid"
                    style = {{width:"100px", height:"100px"}}/>
                </div>
                <div>
                <br/>
                15 + Awards
                </div>
            </div>


            <div className='col-lg-3 count_down_container'>
            <div>
            <img src = {HandShakeImage} alt = "employee" className="img img-fluid"
                    style = {{width:"100px", height:"100px"}}/>
                </div>
                <div><br/>
                6K + Projects Completed
                </div>
            </div>

            <div className='col-lg-3 count_down_container'>
            <div>
            <img src = {RatingImage} alt = "employee" className="img img-fluid"
                    style = {{width:"100px", height:"100px"}}/>
                </div>
                <div><br/>
                850 + Customer Reviews
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Countdown