
import React from 'react';
import { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  onBook: (candidate: Candidate) => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onBook }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <img 
          src={candidate.avatar} 
          alt={candidate.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100 group-hover:border-indigo-500 transition-colors"
        />
        <div className="text-right">
          <div className="flex items-center text-yellow-400 mb-1">
            <span className="text-sm font-bold text-slate-700 mr-1">{candidate.rating}</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          </div>
          <span className="text-lg font-bold text-slate-900">${candidate.hourlyRate}/hr</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-1">{candidate.name}</h3>
      <p className="text-indigo-600 text-sm font-semibold mb-3">{candidate.specialty}</p>
      
      <p className="text-slate-600 text-sm line-clamp-3 mb-4 h-15">
        {candidate.bio}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {candidate.badges.map((badge, idx) => (
          <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold px-2 py-1 rounded">
            {badge}
          </span>
        ))}
      </div>

      <button 
        onClick={() => onBook(candidate)}
        className="w-full py-3 px-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 active:scale-95"
      >
        Book Interview
      </button>
    </div>
  );
};

export default CandidateCard;
