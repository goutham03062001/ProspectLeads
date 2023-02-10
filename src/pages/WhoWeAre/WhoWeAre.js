import React from "react";
import TechnologyImage from "../../Assets/B2BPage.jpeg";
import Sources from "../../Assets/sources.jpeg";
import Insight from "../../Assets/Insights.jpeg";
import Mining from "../../Assets/mining3.jpeg";
import Research from "../../Assets/research.jpeg";
import "./WhoWeAre.css";
const WhoWeAre = () => {
  return (
    <>
    <div className="container my-5">
      <div className="row mt-5">
        <div className="col-lg-7 mt-5">
          <p className="text" style = {{textAlign:"justify", lineHeight:'35px'}}>
            For over a decade now, PROSPECT LEADS has been at the forefront
            of B2B technology research and business database services. Our
            industry experts leverage the collective power of discovery
            analysts, data scientists, technology and market research experts to
            constantly upgrade and granularize our digital assets which
            primarily encompass business leads consisting of direct contact
            information along with confirmed captures of current technology use.
            PROSPECT LEADS has compiled technographics of several thousand
            different hardware, legacy, on-premise, cloud and networking
            deployments under various categories and sub-categories. Gain access
            to actionable marketing insights by speaking to one of our many data
            research ninjas today! Our global coverage enables quick access to
            key executives across all verticals, markets, sectors and
            geographies.
          </p>
        </div>

        <div className="col-lg-5">
            <img src = {TechnologyImage} className="img img-fluid tech_img_who_we_are"
            alt="tech"
            />
        </div>
      </div>
    </div>

        <div className="container my-5">
            <div className="row my-3">
                <h3 className="my-2" style = {{fontWeight : "bold"}}> Our Process</h3>

                
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <div className = "who_we_are_image_container">
                    <img src = {Sources} className="who_we_are_image" alt="source"/>
                    <h3 classNames = "my-3" style = {{ fontWeight : "bold"}}>Sources</h3>
                    </div>
                </div>

                <div className="col-lg-3">
                <div className = "who_we_are_image_container">
                    <img src = {Insight} className="who_we_are_image" alt="source"/>
                    <h3 classNames = "my-3" style = {{fontWeight : "bold"}}>Insights</h3>
                    </div>
                </div>

                <div className="col-lg-3">
                <div className = "who_we_are_image_container">
                    <img src = {Mining} className="who_we_are_image" alt="source"/>
                    <h3 classNames = "my-3" style = {{fontWeight : "bold"}}>Mining</h3>
                    </div>
                </div>

                <div className="col-lg-3">
                <div className = "who_we_are_image_container">
                    <img src = {Research} className="who_we_are_image" alt="source"/>
                    <h3 classNames = "my-3" style = {{fontWeight : "bold"}}>Research</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default WhoWeAre;
