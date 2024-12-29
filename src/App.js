import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar
          title="ReactApp"
          home="Home"
          about="About"
          services="Services"
          contact="Contact"
        />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
    </>
  );
}


export default App;
