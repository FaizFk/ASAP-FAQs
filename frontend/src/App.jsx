import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQPage from './FAQPage';
import FAQDetails from './FAQDetails';
import AskQuestion from './AskQuestion';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<FAQPage />} />
        <Route path="/faq/:id" element={<FAQDetails />} />
        <Route path="/ask" element={<AskQuestion/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;