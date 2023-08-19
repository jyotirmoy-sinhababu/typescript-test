import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import FormPage from './pages/formPage/FormPage';

import { Route, Routes } from 'react-router-dom';
import SecondPage from './pages/secondPage/SecondPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<FormPage />} />
          <Route path='second' element={<SecondPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
