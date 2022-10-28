import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserPage from './UserPage';
import LoginPage from './LoginPage';
import UserMe from './UserMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/users" element={<UserPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/user_me" element={<UserMe />}></Route>
   </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
