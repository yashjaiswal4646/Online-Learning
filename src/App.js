import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CourseHero } from './Nodejscourse/CourseHero';
import { CourseDetails } from './Nodejscourse/CourseDetails';
import { CourseSyllabus } from './Nodejscourse/CourseSyllabus';
import { ValueProposition } from './Nodejscourse/ValueProposition';
function App() {
  return (
    
      <main className="flex flex-col pb-16 overflow-hidden bg-stone-950">
      <Navbar/>
      
      <CourseHero />
      <CourseDetails />
      <CourseSyllabus />
      <ValueProposition />
                
      <Footer />
    </main>
    
  );
}

export default App;
