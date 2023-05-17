import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/Home";
import Login from './pages/auth/Login';
import Success from './pages/auth/Success';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://gcvjinwkvnwvfzrrtvti.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjdmppbndrdm53dmZ6cnJ0dnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzM0OTMsImV4cCI6MTk5Mzk0OTQ5M30.6f3PL6nchUfFG-11-ZRFbZFt8q_VUdIKPuBsGdFpxtc"
);

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home supabase={supabase}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success supabase={supabase}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
