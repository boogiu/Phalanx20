import './App.css';
import IntroPage from './Pages/IntroPage'
import DefaultPage from './Pages/DefaultPage'
import CenturionPage from './Pages/CenturionPage'
import DetailPage from'./Pages/DetailPage'
import DirectingPage from './Pages/DirectingPage'
import SpecialPage from './Pages/SpecialPage'
import ETCPage from './Pages/ETCPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteChangeTracker from './RouteChangeTracker';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <RouteChangeTracker/>
        <Routes>
          <Route path="*" element={<IntroPage />}></Route>
          <Route path="/DefaultPage" element={<DefaultPage />}></Route>
          <Route path="/CenturionPage" element={<CenturionPage />}></Route>
          <Route path="/DetailPage" element={<DetailPage />}></Route>
          <Route path="/DirectingPage" element={<DirectingPage />}></Route>
          <Route path="/SpecialPage" element={<SpecialPage />}></Route>
          <Route path="/ETCPage" element={<ETCPage />}></Route>
          <Route path="*" element={<DefaultPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
