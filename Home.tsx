
import React from 'react';

interface HomeProps {
  onGetStarted: () => void;
  isPremium: boolean;
  onUpgradeClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted, isPremium, onUpgradeClick }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              Empowering Real Estate Brokers
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Scale Your Agency with <br/>
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Elite Virtual Talent</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Skip the messy hiring process. Book world-class appointment setters, assistants, and lead generators in seconds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={onGetStarted}
                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95"
              >
                Browse Assistants
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-indigo-600 transition-all active:scale-95">
                How It Works
              </button>
            </div>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Pricing / Premium Section */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-[40px] p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-6">Go Premium for <br/><span className="text-amber-400">Unlimited Growth</span></h2>
                <p className="text-indigo-100 text-lg mb-8">
                  Get full access to our database of 500+ pre-vetted specialists and schedule unlimited interviews for a small flat fee.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Unlimited candidate browsing',
                    'Unlimited interview scheduling',
                    'Priority support line',
                    'AI-powered interview prep'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span className="text-indigo-50 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
                <div className="text-center mb-6">
                  <span className="text-slate-500 uppercase text-xs font-bold tracking-widest">Premium Plan</span>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <span className="text-4xl font-extrabold">$10</span>
                    <span className="text-slate-400">/one-time</span>
                  </div>
                </div>
                {isPremium ? (
                  <div className="w-full py-4 text-center bg-green-50 text-green-700 rounded-2xl font-bold">
                    Currently Subscribed!
                  </div>
                ) : (
                  <button 
                    onClick={onUpgradeClick}
                    className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
                  >
                    Upgrade Now
                  </button>
                )}
                <p className="text-center text-slate-400 text-xs mt-4">Safe & secure checkout. Instant access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex p-3 bg-indigo-600 rounded-2xl mb-6 shadow-lg shadow-indigo-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                To revolutionize the real estate industry by bridging the gap between busy brokers and high-performing remote specialists. We believe that every broker deserves a support system that works as hard as they do.
              </p>
              
              <div className="space-y-4">
                {[
                  'Verified Talent only',
                  'Real Estate focused skills',
                  'Instant Interview scheduling',
                  'Competitive hourly rates'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img src="https://picsum.photos/id/1/800/800" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Vision" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-indigo-50 leading-relaxed">
                    To be the #1 global destination for real estate operations support, enabling brokers to reclaim their time and focus on what they do best: closing deals.
                  </p>
                </div>
              </div>
              {/* Decorative shadow */}
              <div className="absolute -bottom-6 -right-6 -left-6 h-12 bg-indigo-900/10 blur-2xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
