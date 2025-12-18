import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Global/Navbar';
import Body from './Components/HomePage/Body';
import Footer from './Components/Global/Footer';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import BookingsMadeEasyDetail from './Components/WorkExperience/BookingsMadeEasyDetail';
import TutoringDetail from './Components/WorkExperience/TutoringDetail';
import UMGMCDetail from './Components/WorkExperience/UMGMCDetail';
import MomuDetail from './Components/WorkExperience/MomuDetail';
import KewPumpDetail from './Components/WorkExperience/KewPumpDetail';
import Projects from './Components/Projects/Projects';
import PebbleTaskDetail from './Components/Projects/PebbleTaskDetail';
import MindBackDetail from './Components/Projects/MindBackDetail';
import LunarlyDetail from './Components/Projects/LunarlyDetail';
import OverGrownDetail from './Components/Projects/OverGrownDetail';
import AcademicPerformanceDetail from './Components/Projects/AcademicPerformanceDetail';
import EchoAIDetail from './Components/Projects/EchoAIDetail';
import ContactMePopup from './Components/Global/ContactMePopup';
import ScrollToTop from './Components/Utilities/ScrollToTop';
import { useState } from 'react';

function App() {
  // disable browser's default scroll restoration
  window.history.scrollRestoration = 'manual';

  // state to manage the contact me popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // function to open the popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // this is the main app structure with routing
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar onContactClick={handleOpenPopup} />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pebbletask" element={<PebbleTaskDetail />} />
          <Route path="/projects/mindback" element={<MindBackDetail />} />
          <Route path="/projects/lunarly" element={<LunarlyDetail />} />
          <Route path="/projects/overgrown" element={<OverGrownDetail />} />
          <Route path="/work-experience/bookings-made-easy" element={<BookingsMadeEasyDetail />} />
          <Route path="/work-experience/iden-mcelhone-freelance" element={<TutoringDetail />} />
          <Route path="/work-experience/umgmc" element={<UMGMCDetail />} />
          <Route path="/work-experience/momu" element={<MomuDetail />} />
          <Route path="/work-experience/kewpump" element={<KewPumpDetail />} />
          <Route path="/projects/academic-predictive-models" element={<AcademicPerformanceDetail />} />
          <Route path="/projects/echoai" element={<EchoAIDetail />} />
        </Routes>
      </main>
      <Footer />
      <ContactMePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
