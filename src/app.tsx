import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { AuthScreen } from './screens/auth/screen';
import {
  Routes,
  Route,
  Router,
  BrowserRouter,
  HashRouter,
  Link,
} from 'react-router-dom';
import { SignUpForm } from './components/features/sign-up-form/component';

// TODO: debug only, refactor later
const App = () => (
  <div>
    <nav className='p-4'>
      <Link to='/auth'>Auth</Link>
    </nav>
  </div>
);

function render() {
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/auth' element={<AuthScreen />} />
      </Routes>
    </HashRouter>
  );
}

render();
