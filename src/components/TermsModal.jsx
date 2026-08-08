import { useEffect } from 'react'

export default function TermsModal({ onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">

        {/* sticky header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 id="terms-title" className="text-xl font-extrabold text-gray-900">
              Terms &amp; Conditions
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Effective: January 19, 2025 &nbsp;|&nbsp; Last Updated: July 9, 2026
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close terms and conditions"
            className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* scrollable body */}
        <div className="overflow-y-auto px-6 py-5 text-sm text-gray-600 leading-relaxed space-y-5 flex-1">

          <p>
            Welcome to <strong className="text-gray-900">King Canopy Tree Care</strong>. By accessing
            this website or using our services, you agree to be bound by these Terms and Conditions.
            If you do not agree with any part of these terms, please do not use our website or services.
          </p>

          <Section title="1. Business Identity">
            These Terms and Conditions govern your use of the services provided by{' '}
            <strong className="text-gray-900">King Canopy Tree Care</strong>. Contact:{' '}
            <a href="tel:+17166717373" className="text-green-700 hover:underline">716-671-7373</a>
            {' '}|{' '}
            <a href="#" className="text-green-700 hover:underline">
              
            </a>.
          </Section>

          <Section title="2. Age Requirement (18+)">
            By using this website or enrolling in our services, including SMS messaging, you confirm
            that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.
          </Section>

          <Section title="3. Terminology">
            "Client," "You," and "Your" refers to the user of this website. "The Company," "We,"
            "Our," and "Us" refers to King Canopy Tree Care.
          </Section>

          <Section title="4. SMS Messaging Terms of Service">
            <SubSection title="4a. Program Description & Message Types">
              <p>
                By providing your phone number and checking the SMS consent checkbox on our contact
                forms, you agree to receive recurring automated text messages from King Canopy Tree
                Care. Messages may include:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Free estimate confirmations and scheduling notifications</li>
                <li>Appointment reminders and project status updates</li>
                <li>Customer support and service follow-up communications</li>
                <li>Promotional offers and seasonal announcements related to our tree care services</li>
              </ul>
            </SubSection>

            <SubSection title="4b. Message Frequency">
              Message frequency varies based on your service activity and interactions with us. You
              may receive up to 4–8 messages per month. Frequency may increase during active service periods.
            </SubSection>

            <SubSection title="4c. Message & Data Rates">
              Message and data rates may apply for any messages sent to you from us and to us from
              you. Charges are determined by your mobile carrier and your individual service plan.
              King Canopy Tree Care is not responsible for any carrier charges.
            </SubSection>

            <SubSection title="4d. How to Opt Out (STOP)">
              You can opt out of receiving SMS messages at any time by replying{' '}
              <strong>STOP</strong> to any message we send. After opting out, you will receive a
              one-time confirmation message and will no longer receive SMS messages from us unless
              you re-enroll.
            </SubSection>

            <SubSection title="4e. How to Get Help (HELP)">
              <p>For help with our SMS program, reply <strong>HELP</strong> to any message or contact us directly at:</p>
              <ul className="mt-2 space-y-1">
                <li>Phone: <a href="tel:+17166717373" className="text-green-700 hover:underline">716-671-7373</a></li>
                
              </ul>
            </SubSection>

            <SubSection title="4f. Carrier Liability Disclaimer">
              Mobile carriers are not liable for delayed or undelivered messages. King Canopy Tree
              Care cannot guarantee delivery of SMS messages. Delivery of information through SMS
              may be subject to your mobile carrier's capability and coverage area.
            </SubSection>

            <SubSection title="4g. Supported Carriers">
              Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T,
              Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
            </SubSection>
          </Section>

          <Section title="5. Cookies">
            We use cookies in accordance with our Privacy Policy to improve user experience and
            website functionality.
          </Section>

          <Section title="6. Intellectual Property & License">
            Unless otherwise stated, King Canopy Tree Care owns the intellectual property rights
            for all content on this website. You may not copy, reproduce, republish, sell, or
            redistribute any material without prior written permission.
          </Section>

          <Section title="7. Comments & User Content">
            King Canopy Tree Care reserves the right to monitor and remove any comments or
            user-generated content on our platforms that are inappropriate, offensive, or violate
            these terms.
          </Section>

          <Section title="8. Content Liability">
            We are not responsible for content that appears on external websites linking to us.
            You agree to defend and protect King Canopy Tree Care against any claims arising from
            your website or digital properties.
          </Section>

          <Section title="9. Disclaimer">
            To the maximum extent permitted by applicable law, King Canopy Tree Care excludes all
            warranties, representations, and conditions relating to our website and services. We
            are not liable for any loss or damage (including, without limitation, damage for loss
            of business, profits, or revenue) arising from the use of our website or services.
          </Section>

          <Section title="10. Changes to These Terms">
            We reserve the right to update these Terms and Conditions at any time. Changes will be
            posted on this page with a revised "Last Updated" date. Continued use of our website or
            services constitutes acceptance of the updated terms.
          </Section>

          <Section title="11. Contact Information">
            <p>For questions about these Terms and Conditions, please contact us:</p>
            <ul className="mt-2 space-y-1">
              <li><strong>Company:</strong> King Canopy Tree Care</li>
              <li><strong>Phone:</strong> <a href="tel:+17166717373" className="text-green-700 hover:underline">716-671-7373</a></li>
              
            </ul>
          </Section>

        </div>

        {/* sticky footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mt-3">
      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
      <div>{children}</div>
    </div>
  )
}
