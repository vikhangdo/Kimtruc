
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
