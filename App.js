import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import Error404 from './components/Error404';  

function App() {
  return (
    <Router>
      <div className="App">
        
        <h1>😟 </h1>
        
        
        <Routes>
          
          <Route path="/" element={<Home />} />  
          
          
          <Route path="*" element={<Error404 />} />
        </Routes>

        
        <WhatsappButton />

        
        <Footer />
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      
    </div>
  );
}

export default App;
