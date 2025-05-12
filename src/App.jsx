import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Body from './Components/HomePage/Body';
import Footer from './Components/Global/Footer';
import WorkExperience from './Components/Workexperience/WorkExperience';
import Projects from './Components/Projects/Projects';
import PebbleTaskDetail from './Components/Projects/PebbleTaskDetail';
import MindBackDetail from './Components/Projects/MindBackDetail';
import LunarlyDetail from './Components/Projects/LunarlyDetail';
import OverGrownDetail from './Components/Projects/OverGrownDetail';
import ContactMePopup from './Components/Global/ContactMePopup'; // Import the new component
import ScrollToTop from './Components/Utilities/ScrollToTop'; // Import ScrollToTop
import { useState } from 'react'; // Import useState

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Navbar onContactClick={handleOpenPopup} /> {/* Pass the handler to Navbar */}
      <main className="page-content">
        <Routes>
          <Route path="/home" element={<Body />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/PebbleTask" element={<PebbleTaskDetail />} />
          <Route path="/projects/MindBack" element={<MindBackDetail />} />
          <Route path="/projects/Lunarly" element={<LunarlyDetail />} />
          <Route path="/projects/OverGrown" element={<OverGrownDetail />} />
        </Routes>
      </main>
      <Footer />
      <ContactMePopup isOpen={isPopupOpen} onClose={handleClosePopup} /> {/* Include the popup component */}
    </BrowserRouter>
  );
}

export default App;
