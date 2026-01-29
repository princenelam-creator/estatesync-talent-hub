
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookAssistant from './pages/BookAssistant';
import Contact from './pages/Contact';
import UpgradeModal from './components/UpgradeModal';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState<boolean>(false);

  // Basic scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleUpgrade = () => {
    setIsPremium(true);
    setShowUpgradeModal(false);
  };

  const renderPage = () => {
    switch(page) {
      case 'home':
        return <Home onGetStarted={() => setPage('book')} isPremium={isPremium} onUpgradeClick={() => setShowUpgradeModal(true)} />;
      case 'book':
        return <BookAssistant isPremium={isPremium} onUpgradeClick={() => setShowUpgradeModal(true)} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onGetStarted={() => setPage('book')} isPremium={isPremium} onUpgradeClick={() => setShowUpgradeModal(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={page} 
        setPage={setPage} 
        isPremium={isPremium} 
        onUpgradeClick={() => setShowUpgradeModal(true)} 
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {showUpgradeModal && (
        <UpgradeModal 
          onClose={() => setShowUpgradeModal(false)} 
          onUpgrade={handleUpgrade} 
        />
      )}

      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center text-white mb-6">
                <div className="bg-indigo-600 p-1.5 rounded-lg mr-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <span className="text-xl font-bold">EstateSync</span>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering real estate leaders with elite remote operations teams. Scale faster, stress less.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => setPage('book')} className="hover:text-white transition-colors">Find Talent</button></li>
                <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety & Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => setPage('home')} className="hover:text-white transition-colors">About Us</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><button onClick={() => setPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Get hiring tips and market insights.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none" />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all">Join</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2024 EstateSync Talent Hub. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
