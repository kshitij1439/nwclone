import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import Signup from '../src/landing_page/signup/Signup';
import PricingPage from '../src/landing_page/pricing/PricingPage'
import SupportPage from '../src/landing_page/support/SupportPage'
import ProductPage from '../src/landing_page/products/ProductPage'
import AboutPage from '../src/landing_page/about/AboutPage'
import NavBar from '../src/landing_page/NavBar';
import Footer from '../src/landing_page/Footer';
import NotFound from '../src/landing_page/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/product' element={<ProductPage/>}/>
                <Route path='/pricing' element={<PricingPage/>}/>
                <Route path='/support' element={<SupportPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
  <Footer/>
        </BrowserRouter>
);

