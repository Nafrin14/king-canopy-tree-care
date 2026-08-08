import { useState } from 'react'
import PrivacyModal from './PrivacyModal'
import TermsModal from './TermsModal'

const footerLinks = {
  Navigation: [
    { label: 'Home',         href: '#home'         },
    { label: 'About',        href: '#about'        },
    { label: 'Services',     href: '#services'     },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact',      href: '#contact'      },
  ],
  Services: [
    { label: 'Tree Trimming',  href: '#services' },
    { label: 'Tree Removal',   href: '#services' },
    { label: 'Stump Grinding', href: '#services' },
    { label: 'Emergency',      href: '#services' },
    { label: 'Land Clearing',  href: '#services' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms,   setShowTerms]   = useState(false)

  return (
    <>
      <footer className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#home" className="inline-block mb-4">
                <p className="font-extrabold text-xl tracking-wide text-white">KING CANOPY</p>
                <p className="text-green-400 text-xs tracking-widest uppercase font-medium">Tree Care</p>
              </a>
              <p className="text-green-200/70 leading-relaxed max-w-sm mb-6">
                Professional tree care services delivered by certified arborists. Serving
                residential and commercial clients since 2009.
              </p>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook',  icon: '📘' },
                  { label: 'Instagram', icon: '📷' },
                  { label: 'X/Twitter', icon: '🐦' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center text-lg transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-xs uppercase tracking-widest text-green-400 mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-green-200/70 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-green-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-green-300/50 text-sm">
            <p>© {year} King Canopy Tree Care. All rights reserved.</p>
            <div className="flex gap-6">
              <button
                onClick={() => setShowPrivacy(true)}
                className="hover:text-green-300 transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowTerms(true)}
                className="hover:text-green-300 transition-colors underline-offset-2 hover:underline"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms   && <TermsModal  onClose={() => setShowTerms(false)}   />}
    </>
  )
}
