import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';
import PebbleTaskDetail from './Components/PebbleTaskDetail';
import MindBackDetail from './Components/MindBackDetail';
import LunarlyDetail from './Components/LunarlyDetail';
import OverGrownDetail from './Components/OverGrownDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
