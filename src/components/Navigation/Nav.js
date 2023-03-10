import React from 'react'
import {Dropdown,Space} from "antd";
import { DownOutlined} from '@ant-design/icons';
import Logo from "../../Assets/secondLogo.png"
import "./Nav.css";
import IconButton from '@mui/material/IconButton';
const Nav = () => {
    const items = [
        {
          key: '1',
          label: (
            <a target="" rel="noopener noreferrer" href="/B2B">
              B2B Email List
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="" rel="noopener noreferrer" href="/DataEnrichment" className="my-2">
              Data Enrichment & ABM
            </a>
          ),
        
        
        },
        {
            key: '3',
            label: (
              <a target="" rel="noopener noreferrer" href="/Technology-user-data" className="my-2">
                Technology User Data and Insights
              </a>
            ),
            
        
        
          },
          {
            key: '4',
            label: (
              <a target="" rel="noopener noreferrer" href="/MSP" className="my-2">
                MSP Database
              </a>
            ),
          },
          {
            key: '5',
            label: (
              <a target="" rel="noopener noreferrer" href="/HealthCare" className="my-2">
                HealthCare Specialities
              </a>
            ),
          },
          {
            key: '6',
            label: (
              <a target="" rel="noopener noreferrer" href="/EmailCampagin" className="my-2">
               Email Campaigns
              </a>
            ),
          },
    ]
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style = {{backgroundColor:"black"}}>
    <ul className="logo_container">
    <img src = {Logo} className="img logo_image" alt="logo"/>
  <a class="navbar-brand company_name mt-3" href="/" style = {{color : "white", fontWeight:"bold", fontSize:"24px"}}>PROSPECT LEADS</a>
    </ul>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <IconButton class="navbar-toggler-icon" style = {{backgroundColor:"white", color:"white",padding:"10px"}}/>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto navigation_right">
      <li class="nav-item active">
        <a class="nav-link" href="/" style = {{color : "white", fontWeight:"bold"}}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/WhoWeAre" style = {{color : "white", fontWeight:"bold"}}>Who We Are</a>
      </li>

      <Dropdown
    menu={{
      items,
    }}
    style = {{padding:"10px"}}
  >
    <a onClick={(e) => e.preventDefault()} href="#!">
      <Space style = {{color:"white", marginTop:"10px", fontSize:"16px",fontWeight:"bold" }}>
        What We Offers
        <DownOutlined style = {{marginTop:"-5px"}}/>
      </Space>
    </a>
  </Dropdown>
      <li class="nav-item">
        <a class="nav-link" href="/Compliance" style = {{color : "white", fontWeight:"bold"}}>Compliance</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/Contact" style = {{color : "white", fontWeight:"bold"}}>Contact Us</a>
      </li>
    </ul>
    
  </div>
</nav>
  )
}

export default Nav