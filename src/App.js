import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';
import IntroPage from './Pages/IntroPage';
import DefaultPage from './Pages/DefaultPage';
import CenturionPage from './Pages/CenturionPage';
import DetailPage from './Pages/DetailPage';
import DirectingPage from './Pages/DirectingPage';
import SpecialPage from './Pages/SpecialPage';
import ETCPage from './Pages/ETCPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RouteChangeTracker />} />
          <Route path="/" element={<IntroPage />} />
          <Route path="/DefaultPage" element={<DefaultPage />} />
          <Route path="/CenturionPage" element={<CenturionPage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/DirectingPage" element={<DirectingPage />} />
          <Route path="/SpecialPage" element={<SpecialPage />} />
          <Route path="/ETCPage" element={<ETCPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA4.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);
      ReactGA4.send({ hitType: 'pageview', page: location.pathname });
    }
  }, [location]);

  return null;
}

export default App;
