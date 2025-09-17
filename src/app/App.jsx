import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router';
import { useNavigate } from 'react-router-dom';
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
let retrievedData = false;

function App() {
  const [ routine, setRoutine ] = useState({cleanser: null, cream: null, moisturizer: null, serum: null});
  const [ amazonProductData, setAmazonProductData ] = useState({});
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
    async function fetchAmazonData() {
      let response = await fetch(`https://pumpkinbuns.org/products?productName=facial cleanser`);
      const cleanserJSON = await response.json();
      response = await fetch(`https://pumpkinbuns.org/products?productName=moisturizer`);
      const moisturizerJSON = await response.json();
      response = await fetch(`https://pumpkinbuns.org/products?productName=serum`);
      const serumJSON = await response.json();
      response = await fetch(`https://pumpkinbuns.org/products?productName=night cream`);
      const creamJSON = await response.json();
      setAmazonProductData(prev => { 
        return { cleanserJSON, moisturizerJSON, serumJSON, creamJSON };
      });
      setLoading(false);
    }
    if (!retrievedData) {
      fetchAmazonData();
      retrievedData = true;
    }
  }, []);

  const navigate = useNavigate();
  return (
    <RoutineContext value={[ routine, setRoutine, navigate, amazonProductData, loading ]}>
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
  );
}

export default App;
