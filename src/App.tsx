import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuizCom from './Component/QuizCom';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quiz" element={<QuizCom />}/>
        <Route path="*" element={<Home />} />
     </Routes>
    </BrowserRouter>

      
    ravisachin36@gmail.com
    </div>
  );
}

export default App;
