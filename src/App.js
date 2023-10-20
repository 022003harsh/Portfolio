import './App.css';
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import { Route,Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';


function App() {
  return (
    <div className="App bg-black">
      <div className='max-w-[1257px] mx-auto'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      </div>
    </div>
  );
}

export default App;
