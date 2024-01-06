// import { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss'
// import Typed from 'typed.js';
import SiteNav from './layout/SiteNav';
import { Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage';
import About from "./views/About";
import Contact from "./views/Contact";
import Error from './views/Error';
import Products from './views/Products';
import Header from './layout/Header';
import { useTranslation } from "react-i18next";
import ProductDetails from './components/products/ProductDetails';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Counter from './views/Counter';
import EditProduct from './components/products/EditProduct';
import Profile from './views/Profile';
import Footer from './layout/Footer';
import CartProvider from './context/CartContext';

function App() {

  const { i18n } = useTranslation()

  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['Mohamed Ahmed ', 'Frontend developer.'],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  let theme = useContext(ThemeContext)
  return (
    <div className={`${i18n.language === 'ar' ? "rtl" : ""} ${theme.theme}`}>
      <CartProvider>

        <SiteNav />
        <Header />
        {/* <span ref={el} /> */}

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/products" Component={Products} />
          <Route path="/products" Component={Products} />
          <Route path="/products/:productID" Component={ProductDetails} />
          <Route path="/edit/:productID" Component={EditProduct} />
          <Route path="/profile" Component={Profile} />
          <Route path="/counter" Component={Counter} />
          <Route path="/*" Component={Error} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>)
}

export default App
