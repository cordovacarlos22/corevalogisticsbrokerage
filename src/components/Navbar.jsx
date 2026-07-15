import { useState, useEffect } from 'react'
import CorevaLogo from './Logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" aria-label="Coreva Logistics Brokerage home">
            <CorevaLogo variant="dark" className="h-10 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:8402101449"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (840) 210-1449
            </a>
            <a
              href="#quote"
              className="hidden md:inline-flex blue-gradient text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity blue-glow"
            >
              Get a Quote
            </a>
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-slate-600 hover:text-primary transition-colors border-b border-slate-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:8402101449"
              className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600 border border-slate-200 px-5 py-3 rounded-lg"
            >
              (840) 210-1449
            </a>
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center blue-gradient text-white px-5 py-3 rounded-lg font-semibold text-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
