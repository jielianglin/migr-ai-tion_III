import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { RequireToken } from "./components/Auth";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={
            <RequireToken>
              <Profile />
            </RequireToken>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
