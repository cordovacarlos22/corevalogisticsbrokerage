import { useState } from 'react'

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We provide freight brokerage services across all 48 contiguous states. We have particularly strong capacity on Western US lanes including California, Arizona, Nevada, Oregon, Washington, and connecting routes to the Midwest, Southeast, and Northeast.',
  },
  {
    q: 'How quickly can I receive a quote?',
    a: 'For standard FTL and LTL lanes, we typically respond within 2 business hours. For expedited or specialty freight, we often have rates within 30–60 minutes. For time-critical needs, call us directly at (840) 210-1449 for an immediate response.',
  },
  {
    q: 'Do you provide shipment tracking?',
    a: 'Yes. We provide real-time tracking updates throughout your shipment\'s journey. Our team monitors every load and proactively communicates pickup confirmations, in-transit updates, and delivery confirmations — you never have to chase us down.',
  },
  {
    q: 'What equipment types are available?',
    a: 'We have access to a wide range of equipment: dry vans (48ft & 53ft), flatbeds, step decks, reefers and temperature-controlled trailers, power only, intermodal containers, and expedited options including sprinter vans and straight trucks.',
  },
  {
    q: 'Can you handle recurring freight?',
    a: 'Absolutely. Many of our shipper partners use us for dedicated lane coverage on weekly or monthly recurring freight. We can build a program around your volume, lanes, and pickup/delivery windows to ensure consistent capacity.',
  },
  {
    q: 'How do you vet your carriers?',
    a: 'Every carrier in our network must have active FMCSA authority, adequate cargo and liability insurance, a satisfactory safety rating, and positive performance history. We do not use carriers with conditional or unsatisfactory safety ratings.',
  },
  {
    q: 'What is your process if something goes wrong?',
    a: 'We handle exceptions proactively — not reactively. If there\'s a breakdown, delay, or issue, you hear from us first. We maintain backup carrier relationships specifically for contingency situations and will work around the clock to find a solution.',
  },
  {
    q: 'Do you handle port drayage?',
    a: 'Yes. We specialize in drayage from LA/Long Beach ports and other major US port facilities. Whether you need a container moved to a local warehouse or to an inland rail ramp, our team handles the documentation and logistics end to end.',
  },
]

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-semibold text-navy text-sm group-hover:text-primary transition-colors">{q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? 'blue-gradient text-white rotate-45' : 'bg-slate-100 text-slate-500'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="pb-5 pr-12">
          <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4">Common Questions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Everything you need to know about working with Coreva Logistics Brokerage.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 card-shadow px-8 py-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="blue-gradient text-white font-semibold px-7 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity blue-glow"
            >
              Request a Quote
            </a>
            <a
              href="tel:8402101449"
              className="border border-slate-200 text-slate-700 font-semibold px-7 py-3 rounded-xl text-sm hover:border-primary hover:text-primary transition-all"
            >
              Call (840) 210-1449
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
