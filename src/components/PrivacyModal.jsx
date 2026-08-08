import { useEffect } from 'react'

export default function PrivacyModal({ onClose }) {
  /* close on Escape key */
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    /* prevent body scroll while modal open */
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      {/* modal card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">

        {/* sticky header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 id="privacy-title" className="text-xl font-extrabold text-gray-900">
              Privacy Policy
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Effective: January 19, 2025 &nbsp;|&nbsp; Last Updated: July 9, 2026
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close privacy policy"
            className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* scrollable content */}
        <div className="overflow-y-auto px-6 py-5 text-sm text-gray-600 leading-relaxed space-y-5 flex-1">

          <p>
            <strong className="text-gray-900">King Canopy Tree Care</strong> ("we," "our," or "us") is
            committed to protecting your privacy and personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your data in compliance with applicable U.S.
            data protection laws, including the California Consumer Privacy Act (CCPA) and the General
            Data Protection Regulation (GDPR) where applicable.
          </p>

          <Section title="1. Information We Collect">
            <p>We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Full name</li>
              <li>Mailing or service address</li>
              <li>Email address</li>
              <li>Mobile phone number</li>
              <li>Service request details and project descriptions</li>
              <li>Communication history and preferences</li>
            </ul>
          </Section>

          <Section title="2. SMS / Text Message Communications">
            <SubSection title="2a. How We Collect Your Mobile Number">
              We collect your mobile phone number when you voluntarily provide it through our website
              contact forms, phone calls, or other direct communication channels. By providing your
              mobile number and checking the SMS consent checkbox on our forms, you expressly consent
              to receive SMS (text message) communications from King Canopy Tree Care.
            </SubSection>
            <SubSection title="2b. Types of Messages We Send">
              <p>By opting in, you may receive recurring automated text messages from King Canopy Tree Care, including:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Free estimate confirmations and appointment reminders</li>
                <li>Project status updates and scheduling notifications</li>
                <li>Customer support and follow-up communications</li>
                <li>Promotional offers and seasonal service announcements related to our tree care services</li>
              </ul>
            </SubSection>
            <SubSection title="2c. Message Frequency">
              Message frequency varies based on your interactions with us, ongoing service needs, and
              active promotions. You may receive up to 4–8 messages per month depending on your service activity.
            </SubSection>
            <SubSection title="2d. Message & Data Rates">
              Message and data rates may apply. Charges are determined by your mobile carrier and your
              individual service plan. King Canopy Tree Care is not responsible for any charges incurred
              from your mobile carrier.
            </SubSection>
            <SubSection title="2e. How to Opt Out (STOP)">
              You may cancel SMS messages at any time by replying <strong>STOP</strong> to any text
              message you receive from us. After opting out, you will receive one final confirmation
              message and will no longer receive SMS communications from King Canopy Tree Care unless
              you re-enroll.
            </SubSection>
            <SubSection title="2f. How to Get Help (HELP)">
              <p>For help with our SMS program, reply <strong>HELP</strong> to any message, or contact us directly at:</p>
              <ul className="mt-2 space-y-1">
                <li>Phone: <a href="tel:+17166717373" className="text-green-700 hover:underline">716-671-7373</a></li>
                
              </ul>
            </SubSection>
          </Section>

          <Section title="3. Mobile Information & SMS Consent — No Third-Party Sharing">
            No mobile information (including your mobile phone number and SMS opt-in consent data)
            will be shared with third parties or affiliates for marketing or promotional purposes.
            All other categories of personal data exclude text messaging originator opt-in data and
            consent; this information will not be shared with any third parties under any circumstances.
          </Section>

          <Section title="4. How We Use Your Information">
            <p>We use the personal information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide and manage tree care services</li>
              <li>Respond to inquiries and service requests</li>
              <li>Schedule appointments and send reminders</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and service quality</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </Section>

          <Section title="5. Cookies and Tracking Technologies">
            We use cookies and similar technologies to improve website functionality, analyze traffic,
            and enhance user experience. Cookies do not store sensitive personal information. By
            continuing to use this website, you consent to our use of cookies in accordance with this policy.
          </Section>

          <Section title="6. Data Security">
            We implement reasonable administrative, technical, and physical security measures to protect
            your personal data against unauthorized access, disclosure, alteration, or destruction.
            However, no method of electronic transmission or storage is 100% secure.
          </Section>

          <Section title="7. Data Retention">
            We retain your personal information only for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, or as required by applicable law. When your data is no
            longer needed, we securely delete or anonymize it.
          </Section>

          <Section title="8. Your Privacy Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (including your mobile number and SMS consent record)</li>
              <li><strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time</li>
              <li><strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from marketing lists</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{' '}
              <a href="#" className="text-green-700 hover:underline"></a>
              {' '}or call{' '}
              <a href="tel:+17166717373" className="text-green-700 hover:underline">716-671-7373</a>.
            </p>
          </Section>

          <Section title="9. Changes to This Privacy Policy">
            We may update this Privacy Policy from time to time. We will post the updated policy on
            this page with a revised "Last Updated" date. Continued use of our website or services
            after any changes constitutes your acceptance of the updated policy.
          </Section>

          <Section title="10. Contact Information">
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
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

/* small helpers */
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
