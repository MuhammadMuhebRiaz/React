import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name = 'Muheb Riaz';

function App() {
  return (
    <>
      <Navbar title="ReactApp" 
                  home="Home"
                  about="About" 
                  services="Services" 
                  contact="Contact"/>
      <TextForm heading="Enter The Text To Analyze"/>
    </>
  );
}

export default App;
