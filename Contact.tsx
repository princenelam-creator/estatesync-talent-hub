
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600">
            Have questions about our vetting process or custom enterprise solutions? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-500 mb-4">Our support team responds within 2 hours.</p>
            <a href="mailto:support@estatesync.com" className="text-indigo-600 font-bold hover:underline">support@estatesync.com</a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-500 mb-4">Available Mon-Fri, 9am - 6pm EST.</p>
            <a href="tel:+1800ESTATE0" className="text-indigo-600 font-bold hover:underline">+1 (800) ESTATE-0</a>
          </div>
        </div>

        <form className="bg-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Send us a message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold opacity-80">Full Name</label>
              <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-white/30" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold opacity-80">Agency Name</label>
              <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-white/30" placeholder="Prime Realty" />
            </div>
          </div>
          <div className="space-y-2 mb-8">
            <label className="text-sm font-semibold opacity-80">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-white/30" placeholder="How can we help your business grow?"></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
