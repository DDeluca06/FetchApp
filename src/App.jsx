// Imports for our pages and navbar
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter is used to wrap the entire application */}
      <NavBar /> {/* NavBar is our navigation bar */}   
      <Routes> {/* Routes is used to define the routes for our application */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;