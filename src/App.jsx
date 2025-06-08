import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Store from './pages/Store';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import LoginForm from './pages/LoginForm'; 
import SignupForm from './pages/SignupForm';

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
