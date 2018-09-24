import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const HelpPage = () => {
  return(
    <div>
      <p>This is add expense component</p>
    </div>
  );
}

const NotFoundPage = () => {
  return(
    <div>
      <p>404!</p>
    </div>
  );
}

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
registerServiceWorker();
