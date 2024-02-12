import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteChangeTracker from './RouteChangeTracker';
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
        <RouteChangeTracker />
        <Routes>
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

export default App;
