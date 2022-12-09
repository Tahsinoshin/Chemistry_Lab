import './App.css';
import Home from './pages/home/Home';
import People from './pages/people/People';
import ResearchFacility from './pages/researchFacility/ResearchFacility';
import Publication from './pages/publication/Publication';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<Home/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/researchfacility" element={<ResearchFacility/>}/>
          <Route path="/publication" element={<Publication/>}/>
        </Routes>
  </Router>
  );
}

export default App;
