import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Global/Navbar';
import Body from './Components/HomePage/Body';
import Footer from './Components/Global/Footer';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import BookingsMadeEasyDetail from './Components/WorkExperience/BookingsMadeEasyDetail';
import TutoringDetail from './Components/WorkExperience/TutoringDetail';
import Projects from './Components/Projects/Projects';
import PebbleTaskDetail from './Components/Projects/PebbleTaskDetail';
import MindBackDetail from './Components/Projects/MindBackDetail';
import LunarlyDetail from './Components/Projects/LunarlyDetail';
import OverGrownDetail from './Components/Projects/OverGrownDetail';
import ContactMePopup from './Components/Global/ContactMePopup';
import ScrollToTop from './Components/Utilities/ScrollToTop';
import { useState } from 'react';

function App() {
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
    <HashRouter>
      <ScrollToTop />
      <Navbar onContactClick={handleOpenPopup} />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/PebbleTask" element={<PebbleTaskDetail />} />
          <Route path="/projects/MindBack" element={<MindBackDetail />} />
          <Route path="/projects/Lunarly" element={<LunarlyDetail />} />
          <Route path="/projects/OverGrown" element={<OverGrownDetail />} />
          <Route path="/work-experience/Bookings-Made-Easy" element={<BookingsMadeEasyDetail />} />
          <Route path="/work-experience/Iden-McElhone-(Freelance)" element={<TutoringDetail />} />
        </Routes>
      </main>
      <Footer />
      <ContactMePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    <ToastContainer />
    </HashRouter>
  );
}

export default App;
