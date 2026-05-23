export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Chrome Extension
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Find Memory-Leaking<br />Browser Tabs Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop your browser from grinding to a halt. Our Chrome extension monitors every tab&apos;s RAM usage in real time and alerts you the moment a tab starts leaking memory.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Access — $9/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔍', title: 'Real-Time Monitoring', desc: 'Tracks every open tab via chrome.processes API with zero lag.' },
          { icon: '🚨', title: 'Smart Alerts', desc: 'Get notified only when a tab crosses your custom memory threshold.' },
          { icon: '📊', title: 'Usage Dashboard', desc: 'Visual analytics showing memory trends over time per tab.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-wide text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited tab monitoring',
              'Custom memory thresholds',
              'Desktop & badge alerts',
              'Web analytics dashboard',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which browsers are supported?',
              a: 'Currently Chrome and Chromium-based browsers (Edge, Brave). The extension uses the chrome.processes API which is Chrome-specific.'
            },
            {
              q: 'How does it detect memory leaks?',
              a: 'The background service worker polls chrome.processes every 30 seconds. If a tab\'s memory grows continuously beyond your threshold, an alert fires.'
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes, cancel anytime from your Lemon Squeezy customer portal. You keep access until the end of the billing period.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Tab Memory Leak Detector. All rights reserved.
      </footer>
    </main>
  )
}
