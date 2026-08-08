import treeTrimming  from '../assets/images/tree-trimming.webp'
import treeRemoval   from '../assets/images/tree-removal.webp'
import stumpGrinding from '../assets/images/stump-grinding.webp'
import emergency     from '../assets/images/emergency-tree.webp'
import treeHealth    from '../assets/images/tree-health.webp'
import landscaping   from '../assets/images/landscaping.webp'

const services = [
  {
    img: treeTrimming,
    alt: 'Tree trimming and pruning',
    title: 'Tree Trimming & Pruning',
    description: 'Keep your trees healthy and beautiful with precision trimming. We remove dead branches and shape your trees for optimal growth.',
    features: ['Crown thinning', 'Deadwood removal', 'Vista pruning'],
  },
  {
    img: treeRemoval,
    alt: 'Tree removal service',
    title: 'Tree Removal',
    description: 'Safe and efficient removal of hazardous, dead, or unwanted trees. We handle every job with care to protect your property.',
    features: ['Hazard trees', 'Dead tree removal', 'Lot clearing'],
  },
  {
    img: stumpGrinding,
    alt: 'Stump grinding service',
    title: 'Stump Grinding',
    description: 'Eliminate unsightly stumps with our professional grinding service. Reclaim your yard and prevent pest infestations.',
    features: ['Full stump removal', 'Root flare grinding', 'Site cleanup'],
  },
  {
    img: emergency,
    alt: 'Emergency tree service',
    title: 'Emergency Tree Service',
    description: 'Storm damage? Fallen tree? Our emergency crew is available 24/7 to protect your home and property from further damage.',
    features: ['24/7 availability', 'Storm damage', 'Rapid response'],
  },
  {
    img: treeHealth,
    alt: 'Tree health and fertilization',
    title: 'Tree Health & Fertilization',
    description: 'Diagnose and treat tree diseases, pest infestations, and nutrient deficiencies to keep your trees thriving.',
    features: ['Disease treatment', 'Pest control', 'Deep root feeding'],
  },
  {
    img: landscaping,
    alt: 'Land clearing and landscaping',
    title: 'Land Clearing',
    description: 'Preparing land for construction or landscaping? We provide complete land clearing for residential and commercial sites.',
    features: ['Brush clearing', 'Debris hauling', 'Grading prep'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our Tree Services
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive tree care solutions delivered by certified arborists with
            the equipment and expertise to handle any job.
          </p>
        </div>

        {/* Grid — all cards same height via flex column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm
                         hover:shadow-xl border border-gray-100 hover:border-green-200
                         transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Fixed-height image container — same for every card */}
              <div className="relative w-full overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={service.img}
                  alt={service.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              {/* Content — grows to fill remaining card height */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-5 text-sm flex-1">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-green-700 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">Not sure what service you need?</h3>
          <p className="text-green-100 mb-6 text-lg">
            Our certified arborists will assess your trees and recommend the best course of action — for free.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
