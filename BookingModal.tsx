
import React, { useState, useEffect } from 'react';
import { Candidate } from '../types';
import { generateInterviewQuestions } from '../services/geminiService';

interface BookingModalProps {
  candidate: Candidate;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ candidate, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [aiQuestions, setAiQuestions] = useState<string>('');
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const fetchAiAdvice = async () => {
      setLoading(true);
      const questions = await generateInterviewQuestions(candidate);
      setAiQuestions(questions);
      setLoading(false);
    };
    fetchAiAdvice();
  }, [candidate]);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  if (booked) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Interview Scheduled!</h2>
          <p className="text-slate-600 mb-8">We've sent a calendar invite to both you and {candidate.name}. Get ready for success!</p>
          <button 
            onClick={onClose}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative my-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex items-center gap-4 mb-8">
          <img src={candidate.avatar} className="w-16 h-16 rounded-full object-cover" alt="" />
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Book {candidate.name}</h2>
            <p className="text-slate-500">{candidate.specialty} • ${candidate.hourlyRate}/hr</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
              <input required type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Broker Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Date</label>
              <input required type="date" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Time</label>
              <input required type="time" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Confirm Interview
            </button>
          </form>

          <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 h-fit">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 text-indigo-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
              </span>
              <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-wider">Interview Tips (AI Generated)</h3>
            </div>
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-indigo-200 rounded w-3/4"></div>
                <div className="h-4 bg-indigo-200 rounded w-full"></div>
                <div className="h-4 bg-indigo-200 rounded w-5/6"></div>
              </div>
            ) : (
              <p className="text-indigo-800 text-sm italic leading-relaxed whitespace-pre-line">
                {aiQuestions}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
