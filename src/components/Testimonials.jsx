const testimonials = [
  {
    quote: "Coreva Logistics Brokerage saved us when our usual carrier fell through on a time-sensitive shipment. They had a qualified truck at our dock in 4 hours. That kind of responsiveness is rare in this industry.",
    name: "Michael Torres",
    title: "Supply Chain Manager",
    company: "Pacific Ridge Manufacturing",
    initials: "MT",
    color: "bg-blue-600",
  },
  {
    quote: "We've been working with them for 8 months across our West Coast distribution lanes. Rates are competitive, communication is excellent, and they've never let us miss a delivery window.",
    name: "Sarah Chen",
    title: "Director of Logistics",
    company: "Evergreen Consumer Goods",
    initials: "SC",
    color: "bg-indigo-600",
  },
  {
    quote: "As an importer, drayage from the ports is critical. Coreva handles our container moves out of Long Beach consistently. They understand the port environment and never leave us guessing.",
    name: "Roberto Vasquez",
    title: "Import Operations Manager",
    company: "Coastal Import Solutions",
    initials: "RV",
    color: "bg-primary",
  },
  {
    quote: "I've used three different brokers over the past two years. Coreva is the only one that proactively calls me with updates instead of waiting for me to chase them down. That alone sets them apart.",
    name: "Jennifer Park",
    title: "Logistics Coordinator",
    company: "West Side Retail Group",
    initials: "JP",
    color: "bg-slate-700",
  },
  {
    quote: "Our e-commerce fulfillment operation moves hundreds of loads a month between warehouses. Coreva keeps up with our volume, provides good rates, and their team always picks up the phone.",
    name: "David Kim",
    title: "VP of Operations",
    company: "NextDay Fulfillment Co.",
    initials: "DK",
    color: "bg-blue-800",
  },
  {
    quote: "The team at Coreva actually understands automotive freight. JIT requirements, sequenced deliveries, tight windows — they get it and they deliver. We've had zero line shutdowns since switching.",
    name: "Amanda Rhodes",
    title: "Transportation Analyst",
    company: "Southwest Auto Components",
    initials: "AR",
    color: "bg-sky-600",
  },
]

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4">What Shippers Say</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Trusted by Logistics Teams Across the Country
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what our shipper partners have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 card-shadow border border-slate-100 flex flex-col"
            >
              <Stars />
              <blockquote className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
