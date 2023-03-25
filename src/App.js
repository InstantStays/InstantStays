// import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import SearchBar from "./Components/SearchBar";
import Register from "./Components/Register";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import MUD from "./Components/Places/MUD";
import SVVSB from "./Components/Places/SVVSB";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/searchbar" element={<SearchBar />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/mud" element={<MUD />}></Route>
          <Route path="/svvsb" element={<SVVSB />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
