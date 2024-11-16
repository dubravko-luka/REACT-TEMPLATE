import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
import reportWebVitals from './reportWebVitals';
import 'assets/styles/global.css';
import 'assets/styles/variable.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AdminLayout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
