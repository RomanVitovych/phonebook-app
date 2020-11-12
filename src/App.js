import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import BookContainer from './Components/Book/BookContainer';
import routes from './views/routes';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={routes.book} exact component={BookContainer} />
      </Switch>
    </Layout>
  );
};

export default App;
