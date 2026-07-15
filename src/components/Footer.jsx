import CorevaLogo from './Logo'

const serviceLinks = [
  'Full Truckload (FTL)',
  'Less Than Truckload (LTL)',
  'Intermodal',
  'Drayage',
  'Power Only',
  'Dedicated Freight',
  'Drop Trailer Programs',
  'Expedited Shipping',
]

const industryLinks = [
  'Manufacturing',
  'Retail',
  'Food & Beverage',
  'Consumer Goods',
  'Import / Export',
  'E-Commerce',
]

const companyLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Coreva', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'Contact Us', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-1">
            <CorevaLogo variant="light" className="h-10 w-auto mb-5" />
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A licensed and bonded freight brokerage connecting shippers with trusted carriers
              across North America. Competitive rates. Real-time communication. Reliable execution.
            </p>
            <div className="space-y-2">
              <a href="tel:8402101449" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (840) 210-1449
              </a>
              <a href="mailto:brokerage@corevalogistics.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                brokerage@corevalogistics.com
              </a>
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Los Angeles, CA
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((s) => (
                <li key={s}>
                  <a href="#industries" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Credentials</div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Licensed Freight Broker</div>
                <div>Fully Bonded</div>
                <div>FMCSA Registered</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Coreva Logistics Brokerage. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Shipper Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
