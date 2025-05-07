import { Routes, Route,useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from '../portfolio-ibm/Navabar';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Templates from '../pages/templates';
import Builder from '../pages/Builder';
import Account from '../pages/Account';
import PreviewPage from '../pages/PreviewPage';
import PortfolioView from '../pages/PortfolioView';
import PortfolioViewPage from '../pages/PortfolioView';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const location = useLocation();

  // List of paths where the navbar should NOT appear
  const hideNavbarRoutes = ['/portfolio-view', '/portfolio-view/:userId'];
  const shouldHideNavbar = location.pathname.startsWith('/portfolio-view');

  return (
    <>
    {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/builder/:templateId" element={<Builder user={user}/>} />
        
        <Route path="/portfolio-view/:userId" element={<PortfolioViewPage />} />

        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
