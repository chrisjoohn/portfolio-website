import './App.css';

import { Route, Switch } from 'react-router-dom';

import { Error404 } from './pages/Error';

import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path={'/experiences'}
          component={Experiences}
        />
        <Route
          exact
          path={'/'}
          component={Home}
        />
        <Route
          path={'*'}
          component={Error404}
        />
      </Switch>
    </>
  );
}

export default App;
