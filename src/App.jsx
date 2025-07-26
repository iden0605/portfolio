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
import Projects from './Components/projects/Projects';
import PebbleTaskDetail from './Components/Projects/PebbleTaskDetail';
import MindBackDetail from './Components/Projects/MindBackDetail';
import LunarlyDetail from './Components/Projects/LunarlyDetail';
import OverGrownDetail from './Components/Projects/OverGrownDetail';
import AcademicPerformanceDetail from './Components/Projects/AcademicPerformanceDetail';
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
          <Route path="/work-experience/Bookings-Made-Easy" element={<BookingsMadeEasyDetail />} />
          <Route path="/work-experience/Iden-McElhone-(Freelance)" element={<TutoringDetail />} />
          <Route path="/projects/academic-predictive-models" element={<AcademicPerformanceDetail />} />
        </Routes>
      </main>
      <Footer />
      <ContactMePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
