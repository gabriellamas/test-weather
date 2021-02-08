import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './globalStyle.css';
import { WeatherStorage } from './WeatherContext';

ReactDOM.render(
  <React.StrictMode>
    <WeatherStorage>
      <App />
    </WeatherStorage>
  </React.StrictMode>,
  document.getElementById('root'),
);
