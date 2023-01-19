import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/xo.css';
import Game from './component/Game';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import History from "./component/History";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Game />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


