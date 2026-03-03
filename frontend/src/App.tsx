import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UsersPage from './modules/Users/UsersPage';
import ProductsPage from './modules/Products/ProductsPage';
import OrdersPage from './modules/Orders/OrdersPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/users" component={UsersPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/orders" component={OrdersPage} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;