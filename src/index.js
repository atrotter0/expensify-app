import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import ExpensifyApp from './components/ExpensifyApp';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
