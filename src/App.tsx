import './App.css';

import { Route, Switch } from 'react-router-dom';

import { Home } from './pages';

function App() {
  return (
    <Switch>
      <Route
        path={'/'}
        component={Home}
      />
    </Switch>
  );
}

export default App;
