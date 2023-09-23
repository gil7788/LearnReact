import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import colors from './components/data/color-data.json';
import ColorProvider from './components/ColorProvider';
import { CheckboxProvider } from './components/CheckboxContext.tsx'; 


const root = ReactDOM.createRoot(document.getElementById('root'));


export const ColorContext = React.createContext();
root.render(

  <React.StrictMode>
    <ColorProvider colors={colors}>
      <CheckboxProvider>
        <App />
      </CheckboxProvider>
    </ColorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
