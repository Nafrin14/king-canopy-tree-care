import aboutImg from '../assets/images/hero.webp'

const values = [
  { icon: '🛡️', title: 'Fully Insured',       desc: 'Complete liability and workers comp coverage protects you on every job.'     },
  { icon: '🎓', title: 'Certified Arborists',  desc: 'Our team holds ISA certifications and ongoing training in tree science.'     },
  { icon: '♻️', title: 'Eco-Friendly',         desc: 'We chip and recycle all debris — minimizing waste on every project.'         },
  { icon: '💰', title: 'Fair Pricing',         desc: 'Transparent, upfront quotes with no hidden fees or surprise charges.'        },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: real photo ── */}
          <div className="relative">
            {/* main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-lg mx-auto">
              <img
                src={aboutImg}
                alt="King Canopy arborist at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />

              {/* since badge — bottom-left inside image */}
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                <p className="text-white/80 text-xs font-medium">Caring for trees</p>
                <p className="text-white font-extrabold text-xl leading-tight">since 2009</p>
              </div>
            </div>

            {/* floating review badge — bottom-right outside image */}
            <div className="absolute -bottom-6 -right-2 lg:right-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="bg-yellow-50 w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">⭐</div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900 leading-none">4.9/5</p>
                <p className="text-gray-500 text-xs mt-0.5">500+ Google Reviews</p>
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div>
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Local Experts Who
              <span className="text-green-700"> Care for Your Trees</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              King Canopy Tree Care has been serving homeowners and businesses since
              2009. Founded by a certified arborist with a passion for the outdoors,
              we've grown into a trusted team of professionals who treat every tree —
              and every client — with respect.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We believe healthy trees make for healthier communities. That's why we
              combine scientific knowledge with hands-on experience to deliver results
              that are safe, sustainable, and beautiful.
            </p>

            {/* Values grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-2xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{v.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Work With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
