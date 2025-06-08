import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

const About = lazy(() => import('./pages/About'));
const Store = lazy(() => import('./pages/Store'));
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const LoginForm = lazy(() => import('./pages/LoginForm'));
const SignupForm = lazy(() => import('./pages/SignupForm'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
