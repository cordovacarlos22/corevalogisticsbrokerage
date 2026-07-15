const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-80 -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-100 to-transparent opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Licensed & Bonded Freight Broker
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100">
              Reliable Freight Brokerage Solutions{' '}
              <span className="text-primary">Across North America</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200">
              We connect shippers with trusted carriers through competitive pricing, real-time communication,
              and reliable freight management — so your supply chain never misses a beat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="#quote"
                className="blue-gradient text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest shadow-lg blue-glow hover:opacity-90 transition-opacity text-center"
              >
                Get a Quote
              </a>
              <a
                href="tel:8402101449"
                className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl text-sm hover:border-primary hover:text-primary transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Speak With a Logistics Expert
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 animate-fade-in-up delay-300">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-navy">500+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Loads Moved</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-navy">48-State</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Coverage</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-navy">24/7</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Dispatch Support</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 blue-gradient rounded-3xl opacity-5" />

              <div className="relative p-8">
                <div className="bg-white rounded-2xl card-shadow p-6 mb-4 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 blue-gradient rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-navy">Shipment #2847</div>
                        <div className="text-xs text-slate-500">Los Angeles → Chicago</div>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">In Transit</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="blue-gradient h-2 rounded-full" style={{ width: '65%' }} />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-slate-500">Los Angeles, CA</span>
                    <span className="text-xs text-slate-500">Chicago, IL</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-xl card-shadow p-5 border border-slate-100">
                    <div className="text-2xl font-extrabold text-navy mb-1">98%</div>
                    <div className="text-xs text-slate-500 font-medium">On-Time Delivery</div>
                    <div className="mt-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-green-400'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl card-shadow p-5 border border-slate-100">
                    <div className="text-2xl font-extrabold text-navy mb-1">2hr</div>
                    <div className="text-xs text-slate-500 font-medium">Avg Quote Time</div>
                    <div className="mt-3 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs text-green-600 font-medium">Fast Response</span>
                    </div>
                  </div>
                </div>

                <div className="bg-navy rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold">Real-Time Tracking</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Current Location</div>
                      <div className="text-sm font-bold">Albuquerque, NM</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 mb-1">ETA</div>
                      <div className="text-sm font-bold text-blue-300">Tomorrow 2PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
