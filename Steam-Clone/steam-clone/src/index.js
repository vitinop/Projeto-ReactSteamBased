import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/Header.js";
import Footer from "../src/components/foooter/Footer";
import Home from "./pages/Home/Home.js";
import GameView from "./pages/GameView/GameView";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MyProfile from"./pages/Profile/MyProfile"
import WishList from"./pages/WishList/WishList"
import axios from 'axios';

axios.defaults.baseURL ='https://nintendo-shop.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<GameView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
