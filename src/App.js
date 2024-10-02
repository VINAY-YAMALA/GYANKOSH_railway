import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import StandingOrders from './standingOrder';
import WorkingTimeTable from './workingTimeTable';
import PreventionOfSPAD from './PreventionOfSpad';
import TroubleShooting from './TroubleShooting';
import SafetyDrives from './SafetyDrivers';
import GradientCharts from './GradientCharts.js';
import SignalHandbook from './SignalHandbook.js';
import Manuals from './Manuals.js';
import StudyMaterials from './StudyMaterials.js';
import MayIHelpYou from './MayIHelpYou.js';
import './App.css';
import img from "./images/1.jpg";
import HQInstructions from './hqInstructions';
import Year2024 from './2024';
import Year2023 from './2023';
import Year2022 from './2022';
import Year2021 from './2021';
import UBLWTT18 from './UBLWTT18';
import SBCWTT18 from './SBCWTT18';
import GTLWTT20 from './GTLWTT20';
import MYSWTT19 from './MYSWTT19';
import RDSORecommendations from './RDSORecommendations';
import PointsToAvoidSPAD from './PointsToAvoidSPAD';
import DieselLocoTSD from './DieselLocoTSD';
import CarriageWagonTSD from './CarriageWagonTSD';
import ACConventionLocoTSD from './ACConventionLocoTSD';
import PhaseLocoTSD from './PhaseLocoTSD';
import SwrHqSafetyDrives from './SwrHqSafetyDrives';
import RailwayBoardSafetyDrives from './RailwayBoardSafetyDrives';
import DivisionSafetyDrives from './DivisionSafetyDrives.js';
import SwrHqSafetyCirculars from './SwrHqSafetyCirculars.js';
import SafetyBulletin from './SafetyBulletin.js';
import DivisionSafetyCirculars from './DivisionSafetyCirculars.js';
import GradientChartsData from './GradientChartsData.js';
import StationWorkingRules from './StationWorkingRules.js';
import RightHandSideSignals from './RightHandSideSignals.js';
import NeutralSectionLocations from './NeutralSectionLocations.js';
import MajorYardRollDiagram from './MajorYardRollDiagram.js';
import AllSignalLocations from './AllSignalLocations.js';
import OperatingManual from './OperatingManual.js';
import GSRCorrections from './GSRCorrections.js';
import GSRComparisonSwrSrScr from './GSRComparisonSwrSrScr.js';
import DisasterManagement from './DisasterManagement.js';
import AccidentManual from './AccidentManual.js';
import ACCManualCorrections from './ACCManualCorrections.js';
import SPARTSPICTOWERCARHandbook from './SPARTSPICTOWERCARHandbook.js';
import OtherInformation from './OtherInformation.js';
import NewLocoMaterials from './NewLocoMaterials.js';
import JointProcedureOrders from './JointProcedureOrders.js';
import EbdOheLoadTable from './EbdOheLoadTable.js';
import ACDieselLOCOHandbook from './ACDieselLOCOHandbook.js';
import ContactUs from './ContactUs.js';
import CMS from './CMS.js';
import GSR from './GSR.js';
import img2 from "./images/2.jpg";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.jpeg";
import img7 from "./images/7.png";
import img8 from "./images/8.jpeg";
import img9 from "./images/9.png";
import img10 from "./images/10.png";
import img11 from "./images/11.png";
import SafetyCircularsBulletin from './SafetyCircularsBulletin.js';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/standing-orders" element={<StandingOrders />} />
        <Route path="/working-time-table" element={<WorkingTimeTable />} />
        <Route path="/prevention-of-spad" element={<PreventionOfSPAD />} />
        <Route path="/trouble-shooting" element={<TroubleShooting />} />
        <Route path="/safety-drives" element={<SafetyDrives />} />
        <Route path="/safety-circulars" element={<SafetyCircularsBulletin />} />
        <Route path="/gradient-charts" element={<GradientCharts />} />
        <Route path="/signal-handbook" element={<SignalHandbook />} />
        <Route path="/manuals" element={<Manuals />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/may-i-help-you" element={<MayIHelpYou />} />
        <Route path="/hq-instructions" element={<HQInstructions />} />
        <Route path="/2024" element={<Year2024 />} />
        <Route path="/2023" element={<Year2023 />} />
        <Route path="/2022" element={<Year2022 />} />
        <Route path="/2021" element={<Year2021 />} />
        <Route path="/ubl-wtt-18" element={<UBLWTT18 />} />
        <Route path="/sbc-wtt-18" element={<SBCWTT18 />} />   
        <Route path="/gtl-wtt-20" element={<GTLWTT20 />} />       
        <Route path="/mys-wtt-19" element={<MYSWTT19 />} />
        <Route path="/rdso-recommendations" element={<RDSORecommendations />} />
        <Route path="/points-to-avoid-spad" element={<PointsToAvoidSPAD/>} />
        <Route path="/disel-loco-tsd" element={<DieselLocoTSD />} />
        <Route path="/carriage-wagon-tsd" element={<CarriageWagonTSD />} />
        <Route path="/ac-convention-loco-tsd" element={<ACConventionLocoTSD/>} />
        <Route path="/phase-loco-tsd" element={<PhaseLocoTSD/>} />
        <Route path="/swr-hq-safety-drives" element={<SwrHqSafetyDrives/>} />
        <Route path="/railway-board-safety-drives" element={<RailwayBoardSafetyDrives/>} />
        <Route path="/division-safety-drives" element={<DivisionSafetyDrives/>} />
        <Route path="/swr-hq-safety-circulars" element={<SwrHqSafetyCirculars/>} />
        <Route path="/safety-bulletin" element={<SafetyBulletin/>} />
        <Route path="/division-safety-circulars" element={<DivisionSafetyCirculars/>} />
        <Route path="/gradient-charts-data" element={<GradientChartsData/>} />
        <Route path="/station-working-rules" element={<StationWorkingRules/>} />
        <Route path="/right-hand-side-signals" element={<RightHandSideSignals/>} />
        <Route path="/neutral-section-locations" element={<NeutralSectionLocations/>} />
        <Route path="/major-yard-roll-diagram" element={<MajorYardRollDiagram/>} />
        <Route path="/all-signal-loactions" element={<AllSignalLocations/>} />
        <Route path="/operating-manual" element={<OperatingManual/>} />
        <Route path="/g-sr-corrections" element={<GSRCorrections/>} />
        <Route path="/g-sr-comparison-swr-sr-scr" element={<GSRComparisonSwrSrScr/>} />
        <Route path="/g-sr" element={<GSR/>} />
        <Route path="/disaster-management" element={<DisasterManagement />} />
        <Route path="/accident-manual" element={<AccidentManual />} />
        <Route path="/acc-manual-corrections" element={<ACCManualCorrections  />} />
        <Route path="/spart-spic-tower-car-handbook" element={<SPARTSPICTOWERCARHandbook />} />
        <Route path="/other-information" element={<OtherInformation />} />
        <Route path="/new-loco-materials" element={<NewLocoMaterials />} />
        <Route path="/joint-procedure-orders" element={<JointProcedureOrders/>} />
        <Route path="/ebd-ohe-load-table" element={<EbdOheLoadTable/>} />
        <Route path="/cms" element={<CMS/>} />
        <Route path="/ac-diesel-loco-handbook" element={<ACDieselLOCOHandbook/>} />
        <Route path="/contact-us" element={<ContactUs/>} />


        
        



        


      </Routes>
    </Router>
  );
}

// Home component with card layout
function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="header">
        <img src="https://seeklogo.com/images/I/indian-railways-logo-AF2FECA375-seeklogo.com.png" alt="Indian Railways Logo" className="logo" />
        <h1>Proponent of Technological Neologism for Running Staff of MYS Division</h1>
      </header>

      <section className="gyandarshan">
        <h2>GYANKOSH</h2>
        <p>Enriching Knowledge, Integrating Technology</p>
      </section>

      <section className="content">
        <h2>Hubli Division Electrical Department</h2>
        <div className="card-grid">
          {/* Use navigate to programmatically go to the route */}
          <Card img={img} text="Standing Orders" onClick={() => navigate('/standing-orders')} />
          <Card img={img2} text="Working Time Table" onClick={() => navigate('/working-time-table')} />
          <Card img={img3} text="Prevention of SPAD" onClick={() => navigate('/prevention-of-spad')} />
          <Card img={img4} text="Trouble Shooting" onClick={() => navigate('/trouble-shooting')} />
          <Card img={img5} text="Safety Drives" onClick={() => navigate('/safety-drives')} />
          <Card img={img6} text="Safety Circulars & Bulletin" onClick={() => navigate('/safety-circulars')} />
          <Card img={img7} text="Gradient Charts" onClick={() => navigate('/gradient-charts')} />
          <Card img={img8} text="Signal Station HandBook" onClick={() => navigate('/signal-handbook')} />
          <Card img={img9} text="Manuals" onClick={() => navigate('/manuals')} />
          <Card img={img10} text="Study Materials" onClick={() => navigate('/study-materials')} />
          <Card img={img11} text="MAY I HELP YOU" onClick={() => navigate('/may-i-help-you')} />
        </div>
      </section>
    </div>
  );
}

// Card component to navigate to specific pages
function Card({ img, text, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
}









export default App;
