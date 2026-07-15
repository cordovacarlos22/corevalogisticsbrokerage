import { useState } from 'react'
import { supabase } from '../lib/supabase'

const initialForm = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  pickup_location: '',
  delivery_location: '',
  equipment_type: '',
  freight_description: '',
  weight: '',
  commodity: '',
  comments: '',
}

const QuoteForm = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const { error } = await supabase.from('brokerage_quote_requests').insert([{ ...form }])
    if (error) {
      console.error(error)
      setStatus('error')
      return
    }
    setStatus('success')
    setForm(initialForm)
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-3">Quote Request Received</h3>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Our logistics team will reach out within 2 business hours with competitive rates for your lane.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="blue-gradient text-white font-semibold px-8 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
        >
          Submit Another Quote
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Company Name *</label>
          <input
            name="company_name"
            value={form.company_name}
            onChange={handle}
            required
            placeholder="Acme Corporation"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Contact Name *</label>
          <input
            name="contact_name"
            value={form.contact_name}
            onChange={handle}
            required
            placeholder="John Smith"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Email Address *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            required
            placeholder="john@company.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handle}
            placeholder="(555) 000-0000"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Pickup Location *</label>
          <input
            name="pickup_location"
            value={form.pickup_location}
            onChange={handle}
            required
            placeholder="City, State or ZIP"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Delivery Location *</label>
          <input
            name="delivery_location"
            value={form.delivery_location}
            onChange={handle}
            required
            placeholder="City, State or ZIP"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Equipment Needed *</label>
          <select
            name="equipment_type"
            value={form.equipment_type}
            onChange={handle}
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all bg-white"
          >
            <option value="">Select equipment type</option>
            <option>Dry Van (53ft)</option>
            <option>Flatbed</option>
            <option>Reefer / Temperature Controlled</option>
            <option>Step Deck</option>
            <option>Power Only</option>
            <option>Intermodal Container</option>
            <option>Expedited / Sprinter Van</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Estimated Weight</label>
          <input
            name="weight"
            value={form.weight}
            onChange={handle}
            placeholder="e.g. 20,000 lbs"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Commodity</label>
          <input
            name="commodity"
            value={form.commodity}
            onChange={handle}
            placeholder="e.g. Auto Parts, Electronics"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Freight Description</label>
          <input
            name="freight_description"
            value={form.freight_description}
            onChange={handle}
            placeholder="Palletized, crated, loose pieces..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Additional Comments</label>
        <textarea
          name="comments"
          value={form.comments}
          onChange={handle}
          rows={4}
          placeholder="Special handling requirements, recurring freight, preferred pickup dates..."
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-50 transition-all resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
          Something went wrong. Please call us directly at (840) 210-1449.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full blue-gradient text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest blue-glow hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit Quote Request
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        We respond within 2 business hours. Need it faster? Call{' '}
        <a href="tel:8402101449" className="text-primary font-medium">(840) 210-1449</a>
      </p>
    </form>
  )
}

const QuoteSection = () => {
  return (
    <section id="quote" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4">Get Started</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Request a Freight Quote
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Tell us about your shipment and we&apos;ll get back to you with competitive rates within 2 hours.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 card-shadow p-8 md:p-12">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
