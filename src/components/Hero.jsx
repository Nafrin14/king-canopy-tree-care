import { useEffect, useState, useRef } from 'react'
import heroImg      from '../assets/images/hero.webp'
import imgTrimming  from '../assets/images/tree-trimming.webp'
import imgRemoval   from '../assets/images/tree-removal.webp'
import imgStump     from '../assets/images/stump-grinding.webp'
import imgEmergency from '../assets/images/emergency-tree.webp'
import imgHealth    from '../assets/images/tree-health.webp'
import imgClearing  from '../assets/images/landscaping.webp'
import QuoteModal   from './QuoteModal'

/* ─────────────────────────────────────────────────────────────────────
   Cards — always in fan position from the start.
   scrollSpeed: how fast each card drifts when user scrolls inside hero
   (positive = drifts down, negative = drifts up — creates depth effect)
───────────────────────────────────────────────────────────────────── */
const SERVICE_CARDS = [
  { img: imgEmergency, label: 'Emergency', sub: '24/7',          rotate: -34, tx: -450, ty: 90,  w: 80,  h: 96,  scrollSpeed: 0.18, isFar: true  },
  { img: imgTrimming,  label: 'Trimming',  sub: 'Crown & shape', rotate: -22, tx: -300, ty: 30,  w: 90,  h: 112, scrollSpeed: 0.12, isFar: false },
  { img: imgRemoval,   label: 'Removal',   sub: 'Safe & clean',  rotate: -10, tx: -160, ty: -20, w: 90,  h: 112, scrollSpeed: 0.07, isFar: false },
  { img: imgStump,     label: 'Stump',     sub: 'Below grade',   rotate: 10,  tx: 160,  ty: -20, w: 90,  h: 112, scrollSpeed: 0.07, isFar: false },
  { img: imgHealth,    label: 'Health',    sub: 'Deep root',     rotate: 22,  tx: 300,  ty: 30,  w: 90,  h: 112, scrollSpeed: 0.12, isFar: false },
  { img: imgClearing,  label: 'Clearing',  sub: 'Land & lot',    rotate: 34,  tx: 450,  ty: 90,  w: 80,  h: 96,  scrollSpeed: 0.18, isFar: true  },
]

function ServiceCard({ card, scrollY, fanVisible }) {
  const { img, label, sub, rotate, tx, ty, w, h, scrollSpeed, isFar } = card

  // Cards drift upward as user scrolls — parallax depth
  const parallaxY = -scrollY * scrollSpeed

  return (
    <div
      className={`absolute ${isFar ? 'hidden lg:block' : ''}`}
      style={{
        transition: fanVisible
          ? `transform 0.9s cubic-bezier(0.34,1.42,0.64,1), opacity 0.6s ease`
          : 'none',
        transform: fanVisible
          ? `translate(${tx}px, ${ty + parallaxY}px) rotate(${rotate}deg)`
          : `translate(0px, 40px) rotate(0deg)`,
        opacity: fanVisible ? 1 : 0,
        zIndex: 10,
        willChange: 'transform',
      }}
    >
      <div
        className="relative overflow-hidden shadow-2xl cursor-pointer select-none
                   hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
        style={{
          width: w,
          height: h,
          borderRadius: 18,
          border: '2px solid rgba(255,255,255,0.6)',
        }}
      >
        <img src={img} alt={label} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 38%, rgba(0,0,0,0.78) 100%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
          <p className="text-white font-bold leading-tight" style={{ fontSize: w > 85 ? 10 : 9 }}>{label}</p>
          <p className="text-white/60 leading-tight"        style={{ fontSize: w > 85 ? 9  : 8 }}>{sub}</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [fanVisible, setFanVisible] = useState(false)   // triggers fan-out CSS transition on mount
  const [scrollY,    setScrollY]    = useState(0)       // scroll px within hero for parallax
  const [mousePos,   setMousePos]   = useState({ x: 0, y: 0 })
  const [quoteOpen,  setQuoteOpen]  = useState(false)
  const sectionRef = useRef(null)

  /* fan out shortly after mount */
  useEffect(() => {
    const t = setTimeout(() => setFanVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  /* track scroll within hero section for parallax */
  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current
      if (!el) return
      const { top } = el.getBoundingClientRect()
      // scrollY = how many px the user has scrolled past the top of hero
      const scrolled = Math.max(0, -top)
      setScrollY(scrolled)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* mouse parallax for center card */
  useEffect(() => {
    function onMove(e) {
      if (!sectionRef.current) return
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - left) / width  - 0.5) * 18,
        y: ((e.clientY - top)  / height - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1c2f12 0%, #2a4018 45%, #1a3010 100%)' }}
    >
      {/* grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />

      {/* radial glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '70vw', height: '70vw', maxWidth: 700, maxHeight: 700,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -52%)',
          background: 'radial-gradient(circle, rgba(80,140,40,0.35) 0%, transparent 68%)',
          filter: 'blur(2px)',
        }}
      />

      {/* ground mound */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{
          height: '28%',
          background: 'radial-gradient(ellipse 80% 100% at 50% 100%, #1a3a0a 10%, transparent 70%)',
        }}
      />

      <div className="h-20 flex-shrink-0" />

      {/* ── stage ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8">

        {/* fan area */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: '100%', maxWidth: 900, height: 340 }}
        >
          {/* 6 service cards — fan + scroll parallax */}
          {SERVICE_CARDS.map((card) => (
            <ServiceCard
              key={card.label}
              card={card}
              scrollY={scrollY}
              fanVisible={fanVisible}
            />
          ))}

          {/* ── center hero card — parallax with mouse + slow scroll ── */}
          <div
            className="relative z-20 flex-shrink-0"
            style={{
              transition: fanVisible
                ? 'opacity 0.9s ease, transform 0.9s ease'
                : 'none',
              opacity: fanVisible ? 1 : 0,
              transform: `translate(${mousePos.x * -0.3}px, ${(mousePos.y * -0.3) + (-scrollY * 0.04)}px) scale(${fanVisible ? 1 : 0.88})`,
            }}
          >
            {/* glow ring */}
            <div
              className="absolute -inset-6 rounded-[40px]"
              style={{ background: 'radial-gradient(circle, rgba(100,180,50,0.25) 0%, transparent 70%)' }}
            />

            <div
              className="relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
              style={{ width: 190, height: 260, border: '1.5px solid rgba(120,200,60,0.3)' }}
            >
              <img
                src={heroImg}
                alt="King Canopy tree care"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(1.08)`,
                  transition: 'transform 0.1s ease-out',
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,30,5,0.88) 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
                <p className="text-white font-bold text-sm tracking-wide">King Canopy</p>
              </div>
            </div>

            {/* free quote badge */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2
                         bg-white rounded-2xl shadow-xl px-4 py-2 z-30"
              style={{ whiteSpace: 'nowrap' }}
            >
              <div className="w-7 h-7 bg-[#2d5a1a] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#1a3a0a] font-bold text-sm">Free Quote</span>
            </div>
          </div>
        </div>

        {/* headline */}
        <div
          className="mt-14 text-center px-4 max-w-3xl"
          style={{
            transition: 'opacity 1s ease 0.35s, transform 1s ease 0.35s',
            opacity:   fanVisible ? 1 : 0,
            transform: fanVisible
              ? `translateY(${-scrollY * 0.06}px)`
              : 'translateY(28px)',
          }}
        >
          <h1
            className="font-extrabold leading-[1.05] text-white"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}
          >
            Choose your tree service
          </h1>
          <p className="mt-4 text-[#a8c88a] text-lg max-w-xl mx-auto leading-relaxed">
            Professional arborists for trimming, removal, stump grinding &amp; emergency care.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setQuoteOpen(true)}
              className="bg-[#c8e6a0] hover:bg-[#b8d88e] text-[#1a3a0a] font-bold px-8 py-3.5 rounded-full
                         text-base shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Get a Free Quote
            </button>
            <a
              href="#about"
              className="border border-white/25 hover:border-white/50 text-white font-semibold px-8 py-3.5
                         rounded-full text-base hover:bg-white/10 transition-all"
            >
              Learn About Us
            </a>
          </div>
        </div>

        {/* stats */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 px-4"
          style={{
            transition: 'opacity 1s ease 0.5s',
            opacity: fanVisible ? 1 : 0,
          }}
        >
          {[
            { number: '15+',  label: 'Yrs experience' },
            { number: '2k+',  label: 'Trees serviced'  },
            { number: '500+', label: 'Happy clients'   },
            { number: '24/7', label: 'Emergency'       },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/12"
              style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}
            >
              <span className="text-[#c8e6a0] font-extrabold text-base">{stat.number}</span>
              <span className="text-white/50 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <div className="flex flex-col items-center pb-6 text-white/25 animate-bounce z-10">
        <span className="text-[10px] tracking-widest uppercase mb-1">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  )
}
