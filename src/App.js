import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
// import { Flutter } from './AllCourses/Flutter';
function App() {
  return (
    
      <main className="flex flex-col pb-16 overflow-hidden bg-stone-950">
      <Navbar/>
      
      {/* <Flutter /> */}
      <About />
      
      <Footer />
    </main>
    
  );
}

export default App;
