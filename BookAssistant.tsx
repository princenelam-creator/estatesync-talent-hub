
import React, { useState } from 'react';
import { CANDIDATES } from '../constants';
import { Specialty, Candidate } from '../types';
import CandidateCard from '../components/CandidateCard';
import BookingModal from '../components/BookingModal';

interface BookAssistantProps {
  isPremium: boolean;
  onUpgradeClick: () => void;
}

const BookAssistant: React.FC<BookAssistantProps> = ({ isPremium, onUpgradeClick }) => {
  const [filter, setFilter] = useState<Specialty | 'All'>('All');
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const rawFiltered = filter === 'All' 
    ? CANDIDATES 
    : CANDIDATES.filter(c => c.specialty === filter);

  // Limit display to 3 if not premium
  const filteredCandidates = isPremium ? rawFiltered : rawFiltered.slice(0, 3);
  const remainingCount = Math.max(0, rawFiltered.length - filteredCandidates.length);

  const specialties = ['All', ...Object.values(Specialty)];

  const handleBookClick = (candidate: Candidate) => {
    if (!isPremium) {
      onUpgradeClick();
    } else {
      setSelectedCandidate(candidate);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Elite Real Estate Talent</h1>
          <p className="text-slate-600 max-w-xl">
            Choose from our pre-vetted specialists. Every professional has at least 3 years of experience working with top-producing brokers.
          </p>
        </div>
        
        <div className="w-full md:w-auto overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s as any)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  filter === s 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-400'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!isPremium && (
        <div className="mb-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">🔓</div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Premium Browsing Enabled? No.</h3>
              <p className="text-slate-600">You're seeing a limited selection. Upgrade for $10 to unlock all talent and book interviews.</p>
            </div>
          </div>
          <button 
            onClick={onUpgradeClick}
            className="px-8 py-3 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-200 whitespace-nowrap"
          >
            Unlock All {CANDIDATES.length} Specialists
          </button>
        </div>
      )}

      {filteredCandidates.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-slate-900">No candidates found</h3>
          <p className="text-slate-500">Try changing your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandidates.map(candidate => (
            <div key={candidate.id} className="relative">
              <CandidateCard 
                candidate={candidate} 
                onBook={() => handleBookClick(candidate)}
              />
              {!isPremium && (
                <div className="absolute top-4 right-4 bg-slate-900/10 backdrop-blur-sm p-2 rounded-lg text-slate-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
                </div>
              )}
            </div>
          ))}

          {remainingCount > 0 && !isPremium && (
            <div 
              onClick={onUpgradeClick}
              className="bg-slate-100/50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-slate-100 transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">+{remainingCount} more profiles</h3>
              <p className="text-slate-500 text-center text-sm mb-6">Upgrade to Premium to view more specialists matching this criteria.</p>
              <button className="text-indigo-600 font-bold hover:text-indigo-700">Unlock Now →</button>
            </div>
          )}
        </div>
      )}

      {selectedCandidate && (
        <BookingModal 
          candidate={selectedCandidate} 
          onClose={() => setSelectedCandidate(null)} 
        />
      )}
    </div>
  );
};

export default BookAssistant;
