import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Movie from "./pages/MoviePage/MoviePage";

function App() {

  //const [items, setItems] = useState([]);
  //const [message, setMessage] = useState('')

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/MoviePage" element={<Movie />} />
      </Routes>
      <Footer/>
    </BrowserRouter >
  );
}

export default App;