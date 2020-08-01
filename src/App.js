import React from 'react';
import Home from './container/home/Home.jsx';
import About from "./container/about/About.jsx";
import Contact from "./container/contact/Contact.jsx";
import Projects from "./container/projects/Projects.jsx";
import NavBar from "./compnents/navbar/NavBar"
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Router>
    </div>
  )
}

export default App;
