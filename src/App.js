import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import { Flutter } from './AllCourses/Flutter';
import Courses from './Courses';
function App() {
  return (
    
      <main className="flex flex-col pb-16 overflow-hidden bg-stone-950">
      <Navbar/>
      
      {/* <Flutter /> */}
      <Courses />
      
      <Footer />
    </main>
    
  );
}

export default App;
