import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';
import ExpensifyApp from './components/ExpensifyApp';
import registerServiceWorker from './registerServiceWorker';

const ExpenseDashboardPage = () => {
  return(
    <div>
      <p>This is expense dashboard component</p>
    </div>
  );
}

const AddExpensePage = () => {
  return(
    <div>
      <p>This is add expense component</p>
    </div>
  );
}

const EditExpensePage = () => {
  return(
    <div>
      <p>This is edit expense component</p>
    </div>
  );
}

const helpPage = () => {
  return(
    <div>
      <p>This is add expense component</p>
    </div>
  );
}

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={helpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
registerServiceWorker();
