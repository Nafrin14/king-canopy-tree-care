const galleryItems = [
  { emoji: '🌳', label: 'Oak Tree Removal', tag: 'Removal' },
  { emoji: '✂️', label: 'Crown Pruning', tag: 'Pruning' },
  { emoji: '🌲', label: 'Pine Trimming', tag: 'Trimming' },
  { emoji: '🌱', label: 'Stump Grinding', tag: 'Stump' },
  { emoji: '⚡', label: 'Storm Cleanup', tag: 'Emergency' },
  { emoji: '🏡', label: 'Residential Clearing', tag: 'Clearing' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Take a look at some of the jobs we've completed for satisfied clients across the area.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-green-800 to-green-600 rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-7xl transition-transform duration-300 group-hover:scale-110">
                {item.emoji}
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-5">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {item.tag}
                  </span>
                  <p className="text-white font-semibold text-lg">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-center text-3xl font-extrabold text-gray-900 mb-10">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah M.',
                location: 'Homeowner',
                review:
                  'King Canopy removed a massive oak that was threatening our roof. The crew was professional, fast, and cleaned up every last branch. Highly recommend!',
                stars: 5,
              },
              {
                name: 'James T.',
                location: 'Property Manager',
                review:
                  'We use King Canopy for all our commercial properties. Their team is reliable, fairly priced, and always goes above and beyond. 5 stars every time.',
                stars: 5,
              },
              {
                name: 'Linda R.',
                location: 'Homeowner',
                review:
                  'After the storm, they showed up within hours. Incredibly responsive emergency service. Our property was cleared and safe by the next morning.',
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">"{t.review}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
