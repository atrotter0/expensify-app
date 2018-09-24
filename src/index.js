import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpensifyApp from './components/ExpensifyApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ExpensifyApp />,
  document.getElementById('root')
);
registerServiceWorker();
