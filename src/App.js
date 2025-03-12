import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Navbar from './Navbar';
import Footer from './Footer';
import { Hacking } from './AllCourses/Hacking';
function App() {
  return (
    <BrowserRouter> 
     <main className="flex flex-col pb-16 overflow-hidden bg-black">
          <Navbar/>
          
          <Hacking />
          
          
          
          <Footer />
     </main>
    </BrowserRouter>
    
  );
}

export default App;
