import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import FormPage from './pages/formPage/FormPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<FormPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
