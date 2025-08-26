import { useState, createContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router';
import './App.css';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Home from './pages/Home.jsx';
import Cleansers from './pages/Cleansers.jsx';
import Creams from './pages/Creams.jsx';
import Moisturizers from './pages/Moisturizers.jsx';
import Serums from './pages/Serums.jsx';
import Guide from './pages/Guide.jsx'
import ErrorPage from './pages/ErrorPage.jsx';

export const RoutineContext = createContext(null);

function App() {
  const [ routine, setRoutine ] = useState({cleanser: null, cream: null, moisturizer: null, serum: null});
  console.log(routine);
  return (
    <BrowserRouter>
      <RoutineContext value={[ routine, setRoutine ]}>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cleansers' element={<Cleansers />} />
          <Route path='moisturizers' element={<Moisturizers />} />
          <Route path='serums' element={<Serums />} />
          <Route path='creams' element={<Creams />} />
          <Route path='guide' element={<Guide />} />
          <Route path='*' element={<ErrorPage />} /> 
        </Routes>
        <Footer />
      </RoutineContext>
    </BrowserRouter>
  );
}

export default App;
