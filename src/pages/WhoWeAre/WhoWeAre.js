import React from "react";
import TechnologyImage from "../../Assets/TechnologyPage.jpg";
import Sources from "../../Assets/sources.png";
import Insight from "../../Assets/insights.png";
import Mining from "../../Assets/mining.png";
import Research from "../../Assets/research.png";
const WhoWeAre = () => {
  return (
    <>
    <div className="container my-5">
      <div className="row mt-5">
        <div className="col-lg-7 mt-5">
          <p className="text" style = {{textAlign:"justify", lineHeight:'35px'}}>
            For over a decade now, Prospecting Leads has been at the forefront
            of B2B technology research and business database services. Our
            industry experts leverage the collective power of discovery
            analysts, data scientists, technology and market research experts to
            constantly upgrade and granularize our digital assets which
            primarily encompass business leads consisting of direct contact
            information along with confirmed captures of current technology use.
            Prospecting Leads has compiled technographics of several thousand
            different hardware, legacy, on-premise, cloud and networking
            deployments under various categories and sub-categories. Gain access
            to actionable marketing insights by speaking to one of our many data
            research ninjas today! Our global coverage enables quick access to
            key executives across all verticals, markets, sectors and
            geographies.
          </p>
        </div>

        <div className="col-lg-5">
            <img src = {TechnologyImage} className="img img-fluid"
            alt="tech"
            />
        </div>
      </div>
    </div>

        <div className="container my-5">
            <div className="row my-3">
                <h3 className="my-2"> Our Process</h3>

                
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <img src = {Sources} className="img img-fluid" alt="source"/>
                </div>

                <div className="col-lg-3">
                <img src = {Insight} className="img img-fluid" alt="source"/>
                </div>

                <div className="col-lg-3">
                <img src = {Mining} className="img img-fluid" alt="source"/>
                </div>

                <div className="col-lg-3">
                <img src = {Research} className="img img-fluid" alt="source"/>
                </div>
            </div>
        </div>
    </>
  );
};

export default WhoWeAre;
