    import React from "react";
    import Image from "../../Assets/B2BPage.jpg";
    import "./Enrichment.css";
    const Enrichment = () => {
    return (
        <div className="container my-5">
        <div className="row my-5">
            <h3 className="text text-center">Data Enrichment & ABM</h3>
        </div>
        <div className="row">
            <div className="col-lg-8 main_image my-3">
            <img src={Image} alt="first" className="img img-fluid" />
            </div>

            <p className="text mt-3" style={{ lineHeight: "35px" }}>
            Upon signing a NDA, Prospecting Leads can enhance your existing
            in-house database with missing and / or outdated information of your
            ideal prospects and customers. Having successfully executed over 800
            individual service requests, our data appending service offering has
            helped companies increase customer retention, sales opportunities
            while also providing access to current contact and business
            information to well informed business decisions. Our validation
            process reassures accuracy of information added to your existing file
            which as always comes with promise of 90%.
            </p>
            <p className="text mt-3" style={{ lineHeight: "35px" }}>
            Plan and execute account based marketing programs with the most
            accurate segmentation available in the market. Our discovery team not
            only appends desired contact information but also details
            comprehensive business information (over 25 specific data points),
            including technology usage of named accounts which your sales gurus
            may find useful for more focused targeting. Save time and recurring
            costs to scrub and research what is already available in our robust
            system which Prospecting Leads will thoroughly validate for the most
            effective outreach campaigns. Our experts will include desired and
            customized data points if your sales force is looking for a specific
            list of accounts to market to.
            </p>
        </div>
        </div>
    );
    };

    export default Enrichment;
