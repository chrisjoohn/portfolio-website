import './App.css';

import { Route, Switch } from 'react-router-dom';

import { Home, Experiences, TechStack } from './pages';
import { Error404 } from './pages/Error';

import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path={'/tech-stack'}
          component={TechStack}
        />
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
