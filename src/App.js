import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
let name = 'Muheb Riaz';

function App() {
  return (
    <Navbar title="ReactApp" 
                  home="Home"
                  about="About" 
                  services="Services" 
                  contact="Contact"
                  />
  );
}

export default App;
