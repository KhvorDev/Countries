import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {

  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path='/countries' element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
