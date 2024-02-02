import './App.css';

import { Route, Switch } from 'react-router-dom';

import { Home, Experiences } from './pages';

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
          path={'/'}
          component={Home}
        />
      </Switch>
    </>
  );
}

export default App;
