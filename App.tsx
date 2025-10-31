
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Principles from './components/Principles';
import Onboarding from './components/Onboarding';
import Profile from './components/Profile';
import Methodology from './components/Methodology';
import Team from './components/Team';
import Risks from './components/Risks';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <Principles />
        <Onboarding />
        <Profile />
        <Methodology />
        <Team />
        <Risks />
        <Timeline />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;