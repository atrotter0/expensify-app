import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
      <p>This the help component</p>
    </div>
  );
}

const NotFoundPage = () => {
  return(
    <div>
      <p>404! - <Link to='/'>Go Home</Link></p>
    </div>
  );
}

const Header = () => {
  return(
    <header>
      <h1>Expensify</h1>
      <NavLink to='/' activeClassName='is-active'>Home</NavLink> | 
      <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink> | 
      <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink> | 
      <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
  );
}

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
registerServiceWorker();
