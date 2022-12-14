import './App.css';
import Home from './pages/home/Home';
import Faculty from './pages/people/faculty/Faculty';
import Graduate from './pages/people/graduate/Graduate';
import UnderGraduate from './pages/people/undergraduate/UnderGraduate';
import ResearchFacility from './pages/researchFacility/ResearchFacility';
import Book from './pages/publication/book/Book';
import Journal from './pages/publication/journal/Journal';
import Conference from './pages/publication/conference/Conference';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<Home/>}/>
          <Route path="/people/faculty" element={<Faculty/>}/>
          <Route path="/people/graduate" element={<Graduate/>}/>
          <Route path="/people/undergraduate" element={<UnderGraduate/>}/>
          <Route path="/researchfacility" element={<ResearchFacility/>}/>
          <Route path="/publication/book" element={<Book/>}/>
          <Route path="/publication/journal" element={<Journal/>}/>
          <Route path="/publication/conference" element={<Conference/>}/>
        </Routes>
  </Router>
  );
}

export default App;
