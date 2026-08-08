import { useState, useEffect } from 'react'
import logoImg from '../assets/images/logo.webp'

const navLinks = [
  { label: 'Home',         href: '#home',         id: 'home'         },
  { label: 'About',        href: '#about',        id: 'about'        },
  { label: 'Services',     href: '#services',     id: 'services'     },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Contact',      href: '#contact',      id: 'contact'      },
]

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeId,   setActiveId]   = useState('home')

  /* ── detect scroll → switch navbar style ── */
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── scroll-position based active section tracking ── */
  useEffect(() => {
    function onScroll() {
      const navbarHeight = 80
      const scrollY = window.scrollY + navbarHeight + 10

      // Walk sections bottom-up — first one whose top <= scrollY wins
      const ids = navLinks.map((l) => l.id)
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollY) {
          current = id
        }
      }

      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── style helpers ── */
  const isScrolled = scrolled

  const headerBg = isScrolled
    ? 'bg-white shadow-md'
    : 'bg-transparent'

  const logoTextColor    = isScrolled ? 'text-green-900'    : 'text-white'
  const logoSubColor     = isScrolled ? 'text-green-600'    : 'text-[#c8e6a0]'
  const navPillBg        = isScrolled ? 'bg-gray-100 border-gray-200'   : 'bg-white/10 border-white/15'
  const linkBase         = isScrolled ? 'text-gray-600 hover:text-green-700' : 'text-white/80 hover:text-white'
  const linkActiveBg     = isScrolled ? 'bg-green-700 !text-white'      : 'bg-white/20 !text-white'
  const phoneColor       = isScrolled ? 'text-gray-500 hover:text-green-700' : 'text-white/70 hover:text-white'
  const ctaBg            = isScrolled ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-white text-[#1e3a1e] hover:bg-[#c8e6a0]'
  const hamburgerColor   = isScrolled ? 'bg-gray-100 border-gray-200 text-gray-700'  : 'bg-white/10 border-white/15 text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      style={{ transitionProperty: 'background-color, box-shadow' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`flex items-center justify-between ${isScrolled ? 'h-16' : 'h-20 mt-1'} transition-all duration-300`}>

          {/* ── Logo ── */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            {/* Circle logo */}
            <div className={`w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 transition-colors duration-300
              ${isScrolled ? 'ring-green-200' : 'ring-white/30'}`}>
              <img
                src={logoImg}
                alt="King Canopy Tree Care logo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Brand text */}
            <div className="leading-tight">
              <p className={`font-bold text-sm tracking-wide transition-colors duration-300 ${logoTextColor}`}>
                King Canopy
              </p>
              <p className={`text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 ${logoSubColor}`}>
                Tree Care
              </p>
            </div>
          </a>

          {/* ── Desktop nav pill ── */}
          <nav className={`hidden md:flex items-center gap-0.5 backdrop-blur-md border rounded-full px-2 py-1.5 transition-all duration-300 ${navPillBg}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200
                  ${linkBase}
                  ${activeId === link.id ? linkActiveBg : ''}
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Right CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+17166717373"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${phoneColor}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              716-671-7373
            </a>
            <a
              href="#contact"
              className={`font-bold text-sm px-5 py-2 rounded-full shadow transition-all duration-300 ${ctaBg}`}
            >
              Get in touch
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className={`md:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${hamburgerColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className={`mx-4 mt-2 border rounded-2xl p-4 flex flex-col gap-1 backdrop-blur-lg transition-all duration-300
          ${isScrolled ? 'bg-white border-gray-100 shadow-lg' : 'bg-[#1e3a1e]/95 border-white/10'}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium py-2.5 px-4 rounded-xl transition-all
                ${isScrolled
                  ? `text-gray-600 hover:text-green-700 hover:bg-green-50 ${activeId === link.id ? 'bg-green-700 !text-white' : ''}`
                  : `text-white/80 hover:text-white hover:bg-white/10 ${activeId === link.id ? 'bg-white/20 !text-white' : ''}`
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-2.5 rounded-full text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
