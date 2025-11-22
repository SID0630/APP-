import React from 'react';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ConceptIllustration from './components/ConceptIllustration';
import Reminder from './components/Reminder';
import FooterWithAction from './components/FooterWithAction';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <FeatureSection />
      <ConceptIllustration />
      <Reminder />
      <FooterWithAction />
    </main>
  );
};

export default App;