import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import TeamPicker from './components/TeamPicker/TeamPicker';
import App from './App';
import NotFound from './components/NotFound/NotFound';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TeamPicker />}/>
      <Route path="/team/:teamName" element={<App />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Rout />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
