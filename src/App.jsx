import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Admin from './components/Admin';
import AdminContext from './context/AdminContext';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </AdminContext.Provider>
  );
};

export default App;
