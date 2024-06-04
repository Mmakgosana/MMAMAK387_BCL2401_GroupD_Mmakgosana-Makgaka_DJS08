import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"


function App() {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/" element={<About />}/> 
            </Routes>
        
        </BrowserRouter>
    )
}

ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />)