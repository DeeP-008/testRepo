import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  
//statement renders a content we pass through the statement at a certain element i.e root 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


