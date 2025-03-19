
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contacts";
import Herder from "./components/Header/Header";
import Gallerys from "./Pages/Gallerys";
import Blogs from "./Pages/Blogs";
import HeaderTop from "./components/Header/herdertop/HeaderTop";
import Footer from "./components/Footer/Footer";
import Donates from "./Pages/Donate";
// import Cadwd from "./components/cadwd";

function App() {
  return (
    <Router>
      <HeaderTop/>
      <Herder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gellary" element={<Gallerys/>} />
        <Route path="/Blog" element={<Blogs/>} />
        <Route path="/Donates" element={<Donates/>} />
      </Routes>
      {/* <Cadwd/> */}
<Footer/>
    </Router>
  );
}

export default App;
