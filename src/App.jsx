import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Global/Navbar';
import Body from './Components/HomePage/Body';
import Footer from './Components/Global/Footer';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import WorkExperienceDetailPage from './Components/WorkExperience/WorkExperienceDetailPage';
import Projects from './Components/Projects/Projects';
import ProjectDetail from './Components/Projects/ProjectDetail';
import ContactMePopup from './Components/Global/ContactMePopup';
import ContactMePage from './Components/Global/ContactMePage';
import NotFound from './Components/Global/NotFound';
import ScrollToTop from './Components/Utilities/ScrollToTop';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    if (!document.body.classList.contains('aos-initialized')) {
      AOS.init({
        offset: -150,
        duration: 700,
        easing: 'ease-out',
        once: true,
      });
    }
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && isPopupOpen) handleClosePopup();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isPopupOpen]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar onContactClick={handleOpenPopup} />
      <div className="app-container">
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/work-experience/:slug" element={<WorkExperienceDetailPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactMePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ContactMePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
