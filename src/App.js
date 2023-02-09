import React from 'react'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/HomePage.js';
import Contact from "./pages/Contact/Contact";
import Testimonials from "./pages/Testimonials/Testimonials";
import Compliance from "./pages/Compliance/Compliance";
import Footer from './components/Footer/Footer';
import WhoWeAre from './pages/WhoWeAre/WhoWeAre';
import B2BEmail from './pages/B2B/B2BEmail';
import Enrichment from './pages/Enrichment/Enrichment';
import EmailCampagin from './pages/EmailCampagin/EmailCampagin';
import TechnologyUserData from "./pages/TechnologyUserData/TechnologyUserData";
import MSPDatabase from './pages/MSP/MSPDatabase';
import HealthCare from './pages/HealthCare/HealthCare';
const App = () => {
  return (
    <>
      <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/testimonials" element={ <Testimonials/> } />
        <Route path="/compliance" element={ <Compliance/> } />
        <Route path="/WhoWeAre" element={ <WhoWeAre/> } />
        <Route path="/Compliance" element={ <Compliance/> } />
        <Route path="/B2B" element={ <B2BEmail/> } />
        <Route path="/DataEnrichment" element={ <Enrichment/> } />
        <Route path="/EmailCampagin" element={ <EmailCampagin/> } />
        <Route path="/Technology-user-data" element={ <TechnologyUserData/> } />
        <Route path="/MSP" element={ <MSPDatabase/> } />
        <Route path="/HealthCare" element={ <HealthCare/> } />
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App