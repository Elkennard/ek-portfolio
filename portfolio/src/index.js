import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./routes/Home/Home";
import Portfolio from './routes/Portfolio/Portfolio';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='/Portfolio' element={<Portfolio />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p className="linkError">Oops, a bit of an error! Try one of the links above instead.</p>
        </main>
      }
    />
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

