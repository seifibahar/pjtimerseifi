import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PresentDayTimeTimer from './PresentDayTimeTimer';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<PresentDayTimeTimer/>,document.getElementById("root"));

