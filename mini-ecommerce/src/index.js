import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MiniEcommerce from './mini-ecommerce'
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MiniEcommerce />
  </React.StrictMode>
);

