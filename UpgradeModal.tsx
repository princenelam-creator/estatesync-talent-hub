
import React, { useState } from 'react';

interface UpgradeModalProps {
  onClose: () => void;
  onUpgrade: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ onClose, onUpgrade }) => {
  const [step, setStep] = useState<'info' | 'payment'>('info');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mock processing delay
    setTimeout(() => {
      setIsProcessing(false);
      onUpgrade();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-[40px] p-8 max-w-md w-full shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {step === 'info' ? (
          <div className="text-center pt-4">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              👑
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Go Premium</h2>
            <p className="text-slate-600 mb-8">
              Unlock the full potential of EstateSync. Unlimited browsing and unlimited interview bookings for a one-time fee of $10.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-6 text-left space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Unlimited Profiles (500+)
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Unlimited Direct Interviews
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Verified Real Estate Pros
              </div>
            </div>

            <button 
              onClick={() => setStep('payment')}
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
            >
              Unlock Now for $10
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Secure Checkout</h2>
            <form onSubmit={handlePayment} className="space-y-4">
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl mb-6">
                <div className="flex justify-between items-center text-indigo-900 font-bold">
                  <span>Premium Access</span>
                  <span>$10.00</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Card Number</label>
                <div className="relative">
                  <input required type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-8 h-5 bg-slate-200 rounded"></div>
                    <div className="w-8 h-5 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Expiry</label>
                  <input required type="text" placeholder="MM / YY" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">CVC</label>
                  <input required type="text" placeholder="xxx" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 transition-all ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : 'Pay $10.00'}
              </button>
              
              <button 
                type="button"
                onClick={() => setStep('info')}
                className="w-full py-2 text-slate-400 text-sm font-semibold hover:text-slate-600"
              >
                Go Back
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpgradeModal;
