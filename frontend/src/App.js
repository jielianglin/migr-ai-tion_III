import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
// import BoardUser from "./pages/auth/BoardUser";
// import BoardAdmin from "./pages/auth/BoardAdmin";

const App = () => {

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
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/user" element={<BoardUser />} />
          <Route exact path="/admin" element={<BoardAdmin />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
