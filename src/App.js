import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Load from './Components/Load/Load';

import { AuthOperations } from './redux/Auth';
import routes from './views/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Load />} >
            <Switch>
              {routes.map(route => {
                <Route key={route.label} {...route} />
              })}
            </Switch>
          </Suspense>
        </Layout>  
      </BrowserRouter>
    );
  }
};

const mapDispatchToProps = { 
  onGetCurrentUsers: AuthOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
