import { useState, useEffect } from "react";
// import { useLocation, Route, Routes } from "react-router-dom";
import { useLocation,Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Authors from "./pages/authors/authors";
import About from "./pages/About/about";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Cart from "./pages/cart/Cart";
import SingleBook from "./pages/singleBook/SingleBook";

import './StatusBanner.css';

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const location = useLocation();
 const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineBanner, setShowOnlineBanner] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOnlineBanner(true);

      // Automatically hide banner after 2s
      const timer = setTimeout(() => {
        setShowOnlineBanner(false);
      }, 2000);

      // Clean up in case the user goes offline quickly again
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOnlineBanner(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Provider store={store}>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/books/:id" element={<SingleBook />} />
      </Routes>
      <Footer />
      {!isOnline && (
  <div className="status-banner offline">
    ⚠️ You are currently offline
  </div>
)}

{showOnlineBanner && (
  <div className="status-banner online">
    ✅ Back to Online
  </div>
)}
    </Provider>
  );
}

export default App;
