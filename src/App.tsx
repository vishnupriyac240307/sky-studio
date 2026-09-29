import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { Pricing } from './components/sections/Pricing';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Website');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-lightBg text-brand-navy selection:bg-brand-pink/20 selection:text-brand-pink">
      {/* Sticky Responsive Header */}
      <Navbar onStartProject={() => setSelectedService('Complete Branding')} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onStartProject={() => setSelectedService('Complete Branding')}
          onViewWork={() => {
            const el = document.getElementById('portfolio');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Trust & Core Features Bar */}
        <TrustBar />

        {/* Core Services */}
        <Services onSelectService={handleSelectService} />

        {/* Portfolio & Interactive Case Studies */}
        <Portfolio onSelectCategoryForContact={handleSelectService} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Process Timeline */}
        <Process />

        {/* Pricing Packages */}
        <Pricing onSelectPlan={(plan) => setSelectedService(`${plan} Package`)} />

        {/* About SKY Studio */}
        <About />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact & Lead Capture */}
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
