import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="movie/:id" element={<Detail />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  </Router>
  );
}

export default App;



// <Switch> -> <Routes> 
//path="/" 홈으로.