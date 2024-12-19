import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import SubmitPage from './components/SubmitPage';
import Prize from './components/Prize';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/submit" element={<SubmitPage/>}/>
        <Route path="/prize" element={<Prize/>} />


      </Routes>
    </div>
  );
}

export default App;
