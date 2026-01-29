
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  isPremium: boolean;
  onUpgradeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, isPremium, onUpgradeClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setPage('home')}
          >
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              EstateSync
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setPage('home')}
              className={`${currentPage === 'home' ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => setPage('book')}
              className={`${currentPage === 'book' ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}
            >
              Find Talent
            </button>
            <button 
              onClick={() => setPage('contact')}
              className={`${currentPage === 'contact' ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}
            >
              Contact Us
            </button>

            {isPremium ? (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
                <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Premium Member</span>
                <svg className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </div>
            ) : (
              <button 
                onClick={onUpgradeClick}
                className="px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                Go Premium ($10)
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
             {!isPremium && (
                <button onClick={onUpgradeClick} className="text-amber-600">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                </button>
             )}
             <button onClick={() => setPage('book')} className="p-2 text-slate-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
               </svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
