import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import "./server";


export default function App() {
    return (
        <BrowserRouter>
          <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <Link to="/about"></Link>
            </nav>
          </header>
            <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/> 
            </Routes>
        
        </BrowserRouter>
    )
}

