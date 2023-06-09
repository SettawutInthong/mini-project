import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Register from './Register';
import ProductDetail from './ProductDetail';
import UserDetail from './UserDetail';
import Report from './Report';
import Ureport from './Ureport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/user/:userId" element={<UserDetail />} />
      <Route path="report" element={<Report />} />
      <Route path="ureport" element={<Ureport />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();