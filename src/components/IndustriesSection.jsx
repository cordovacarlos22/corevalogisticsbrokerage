const industries = [
  {
    name: 'Manufacturing',
    desc: 'Raw materials in, finished goods out. We support production schedules with reliable inbound and outbound freight.',
    emoji: '🏭',
  },
  {
    name: 'Retail',
    desc: 'On-time replenishment for stores and distribution centers. We keep shelves stocked and supply chains moving.',
    emoji: '🛍️',
  },
  {
    name: 'Food & Beverage',
    desc: 'Temperature-sensitive and time-critical freight handled with care. From ambient to refrigerated shipments.',
    emoji: '🍃',
  },
  {
    name: 'Consumer Goods',
    desc: 'High-volume, high-frequency freight programs for consumer product brands and their distribution networks.',
    emoji: '📦',
  },
  {
    name: 'Import / Export',
    desc: 'Drayage from major ports and cross-border coordination. We connect your international supply chain domestically.',
    emoji: '🚢',
  },
  {
    name: 'Automotive',
    desc: 'Parts and components on tight production schedules. We understand just-in-time delivery requirements.',
    emoji: '🚗',
  },
  {
    name: 'Construction',
    desc: 'Heavy equipment, building materials, and project-based freight. Flatbed and specialized capacity available.',
    emoji: '🏗️',
  },
  {
    name: 'E-Commerce',
    desc: 'High-velocity fulfillment freight. We move inventory between warehouses, 3PLs, and distribution hubs fast.',
    emoji: '💻',
  },
]

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Industries We Support
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From manufacturing floors to e-commerce warehouses, we have the expertise and capacity to keep your freight moving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-2xl p-7 card-shadow border border-slate-100 hover:border-blue-100 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{industry.emoji}</div>
              <h3 className="font-bold text-navy text-base mb-2">{industry.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
