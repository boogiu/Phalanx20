import React from 'react';
import './App.css';
import { AppProvider } from './AppContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteChangeTracker from './RouteChangeTracker';
import IntroPage from './Pages/IntroPage';
import DefaultPage from './Pages/DefaultPage';
import CenturionPage from './Pages/CenturionPage';
import DetailPage from './Pages/DetailPage';
import DirectingPage from './Pages/DirectingPage';
import SpecialPage from './Pages/SpecialPage';
import ETCPage from './Pages/ETCPage';
import DocuPassPage from './Pages/DocuPassPage';
import PassCalender from './Pages/PassCalender';
import AboutInterview from './Pages/AboutInterview';
import PreGuide from './Pages/PreGuide';
import ClubDetail from './Pages/ClubDetail'

import ScrollToSection from './components/common/ScrollToSection';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <RouteChangeTracker />
        <ScrollToSection/>
        <AppProvider>
          <Routes >
            <Route path="/" element={<IntroPage />} />
            <Route path="/DefaultPage" element={<DefaultPage />}/>
            <Route  path="/CenturionPage" element={<CenturionPage />} />
            <Route path="/DetailPage" element={<DetailPage />} />
            <Route path="/DirectingPage" element={<DirectingPage />} />
            <Route path="/SpecialPage" element={<SpecialPage />} />
            <Route path="/ETCPage" element={<ETCPage />} />
            <Route path="/DocuPass" element={<DocuPassPage />} />

            <Route path="/DocuPass/cal" element={<PassCalender />}/>
            <Route path="/DocuPass/PreGuide" element={<PreGuide />} />
            <Route path="/DocuPass/ClubDetail" element={<ClubDetail />} />
            <Route path="/DocuPass/AboutInterview" element={<AboutInterview />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
