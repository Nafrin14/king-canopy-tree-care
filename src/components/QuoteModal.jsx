import { useState } from 'react'
import { CloseIcon, PhoneIcon, CheckIcon, ShieldIcon } from './Icons'

const PHONE     = '716-671-7373'
const PHONE_TEL = 'tel:+17166717373'

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'trimming',
    treeSize: 'medium',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
        {/* Top header */}
        <div className="bg-gradient-to-r from-emerald-800 to-green-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close quote modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 border border-emerald-400/30 mb-2">
            <ShieldIcon className="w-3.5 h-3.5" />
            100% Free & No Obligation
          </div>
          <h3 className="text-2xl font-bold">Request an Instant Quote</h3>
          <p className="text-emerald-100/90 text-sm mt-1">
            Get an expert arborist estimate within 24 hours.
          </p>
        </div>

        {/* Modal body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner">
                <CheckIcon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-xs mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our lead arborist will review your details and call you at <span className="font-semibold text-slate-800">{formData.phone}</span> shortly.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-emerald-700/20"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael Scott"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all bg-white"
                  >
                    <option value="trimming">Tree Trimming & Pruning</option>
                    <option value="removal">Tree Removal</option>
                    <option value="stump">Stump Grinding</option>
                    <option value="emergency">Emergency Storm Service</option>
                    <option value="health">Tree Health Care</option>
                    <option value="clearing">Lot & Land Clearing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tree Height Estimate
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'small', label: 'Small (< 15ft)' },
                    { id: 'medium', label: 'Medium (15-30ft)' },
                    { id: 'large', label: 'Large (30ft+)' },
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, treeSize: size.id })}
                      className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all ${
                        formData.treeSize === size.id
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold shadow-sm'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Details / Address (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your trees, location, or emergency details..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 text-base"
              >
                <span>Submit Quote Request</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <PhoneIcon className="w-3.5 h-3.5 text-emerald-600" />
                  Need emergency help? Call <a href={PHONE_TEL} className="font-semibold text-emerald-700 hover:underline">{PHONE}</a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function ArrowRightIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}
