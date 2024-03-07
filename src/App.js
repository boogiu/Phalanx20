import React, {useEffect} from 'react';
import './App.css';
import { AppProvider } from './AppContext';
import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom';
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
import TestPreMessage from './Pages/TestPreMessage'
import ScrollToSection from './components/common/ScrollToSection';
import NewHeader from './components/common/NewHeader';
import CommonFooter from './components/common/CommonFooter'
import LinkTree from './Pages/LinkTree'
import TestIntro from './Pages/TestIntro';

function RenderNewHeader() {
  const location = useLocation();
  const isIntroPage = location.pathname === '/';
  return (
    !isIntroPage && (
      <>
        <NewHeader />
        <CommonFooter />
      </>
    )
  );
}

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <AppProvider>
        <RenderNewHeader/>
        <RouteChangeTracker />
        <ScrollToSection/>
        
          <Routes >
            <Route path="/" element={<TestIntro />} />
            <Route path="/DefaultPage" element={<DefaultPage />}/>
            <Route  path="/CenturionPage" element={<CenturionPage />} />
            <Route path="/DetailPage" element={<DetailPage />} />
            <Route path="/DirectingPage" element={<DirectingPage />} />
            <Route path="/SpecialPage" element={<SpecialPage />} />
            <Route path="/ETCPage" element={<ETCPage />} />
            <Route path="/DocuPass" element={<DocuPassPage />}/>
            <Route path="/cal" element={<PassCalender />}/>
            <Route path="/PreGuide" element={<PreGuide />} />
            <Route path="/ClubDetail" element={<ClubDetail />} />
            <Route path="/AboutInterview" element={<AboutInterview />} />
            <Route path="/LinkTree" element={<LinkTree />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


