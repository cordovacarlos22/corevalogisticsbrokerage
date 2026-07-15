const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-surface-low">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="navy-gradient rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Available 24/7
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Ready to Move Your Freight?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Get competitive rates from our vetted carrier network. Our team responds within 2 hours — often much faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#quote"
                className="bg-white text-primary font-bold px-10 py-5 rounded-xl shadow-lg hover:bg-blue-50 transition-colors text-sm uppercase tracking-widest min-w-[220px] text-center"
              >
                Request a Quote
              </a>
              <a
                href="tel:8402101449"
                className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold px-10 py-5 rounded-xl transition-all text-sm uppercase tracking-widest min-w-[220px] text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Our Team
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">2hr</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Quote Response</div>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">48</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">States Covered</div>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">24/7</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Dispatch Support</div>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">98%</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">On-Time Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
