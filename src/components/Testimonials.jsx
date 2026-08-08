const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Homeowner',
    review: 'King Canopy removed a massive oak that was threatening our roof. The crew was professional, fast, and cleaned up every last branch. Highly recommend!',
    stars: 5,
  },
  {
    name: 'James T.',
    location: 'Property Manager',
    review: 'We use King Canopy for all our commercial properties. Their team is reliable, fairly priced, and always goes above and beyond. 5 stars every time.',
    stars: 5,
  },
  {
    name: 'Linda R.',
    location: 'Homeowner',
    review: 'After the storm, they showed up within hours. Incredibly responsive emergency service. Our property was cleared and safe by the next morning.',
    stars: 5,
  },
  {
    name: 'David K.',
    location: 'Business Owner',
    review: 'Had three large trees pruned and shaped. The arborist explained everything before starting. Beautiful results and very fair pricing.',
    stars: 5,
  },
  {
    name: 'Maria L.',
    location: 'Homeowner',
    review: 'The stump grinding service was quick and thorough. They ground it completely below grade and cleaned up all the debris. Fantastic job!',
    stars: 5,
  },
  {
    name: 'Tom W.',
    location: 'HOA Manager',
    review: 'King Canopy maintains trees across our entire community. Always on time, always professional. We wouldn\'t use anyone else.',
    stars: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Reviews</span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Hundreds of satisfied homeowners and businesses trust King Canopy for all their tree care needs.
          </p>

          {/* Overall rating badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-6 py-3 shadow-sm">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-extrabold text-gray-900 text-lg">4.9</span>
            <span className="text-gray-400 text-sm">from 500+ Google Reviews</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                         hover:shadow-md hover:border-green-100 transition-all duration-300"
            >
              <StarRating count={t.stars} />
              <p className="mt-4 text-gray-600 leading-relaxed flex-1">"{t.review}"</p>
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-gray-50">
                {/* Avatar initial */}
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-700 font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white
                       font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Join Our Happy Clients
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
