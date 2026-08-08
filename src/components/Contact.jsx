import { useEffect } from 'react'

export default function Contact() {
  /* load the kdlead embed script once */
  useEffect(() => {
    const scriptId = 'kdlead-form-embed'
    if (document.getElementById(scriptId)) return

    const script = document.createElement('script')
    script.id    = scriptId
    script.src   = 'https://link.kdlead.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours
            with a no-obligation estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── Contact info ── */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>

            {[
              {
                icon: '📞',
                label: 'Phone',
                value: '716-671-7373',
                href: 'tel:+17166717373',
              },
              {
                icon: '📍',
                label: 'Address',
                value: '9950 County Rd\nClarence, Buffalo',
                href: 'https://maps.google.com/?q=9950+County+Rd+Clarence+NY',
              },
              {
                icon: '🕐',
                label: 'Hours',
                value: 'Mon–Sat: 7am–6pm\nEmergency: 24/7',
                href: null,
              },
            ].map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100"
              >
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-800 font-medium hover:text-green-700 transition-colors whitespace-pre-line"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-medium whitespace-pre-line">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Emergency callout */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="font-bold text-red-700 flex items-center gap-2">
                <span>🚨</span> Emergency? Call Now
              </p>
              <a
                href="tel:+17166717373"
                className="text-red-600 font-bold text-xl hover:text-red-700 transition-colors"
              >
                716-671-7373
              </a>
              <p className="text-red-500 text-sm mt-1">Available 24 hours, 7 days a week</p>
            </div>
          </div>

          {/* ── Embedded form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: 877 }}>
              <iframe
                src="https://link.kdlead.com/widget/form/C8AWanRg6JqcHLIlJ16j"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: 8 }}
                id="inline-C8AWanRg6JqcHLIlJ16j"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="877"
                data-layout-iframe-id="inline-C8AWanRg6JqcHLIlJ16j"
                data-form-id="C8AWanRg6JqcHLIlJ16j"
                title="Contact Form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
