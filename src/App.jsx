// Imports for our pages and navbar
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PuppyProvider } from "./components/context/PuppyContext";
import { useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import Footer from "./components/Footer";
import "./App.css";

/* ----------------------------------- App! ---------------------------------- */

function App() {
  useEffect(() => {
    // Set initial theme
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      const { theme } = JSON.parse(savedSettings);
      document.documentElement.setAttribute('data-theme', theme || 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <BrowserRouter>
      <PuppyProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </PuppyProvider>
      <Footer />
    </BrowserRouter>
  );
}

/* ----------------------------------- App! ---------------------------------- */
export default App;
