export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="text-center px-6 py-24 bg-gradient-to-b from-zinc-900 to-black">
        <h1 className="text-6xl font-bold mb-6">Allin1 AI</h1>

        <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-10">
          One AI platform for chat, coding, resume generation,
          business ideas, content creation, and productivity.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Start Free
          </a>

          <a
            href="#features"
            className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
          >
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Everything in One AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-4">Free</h3>

            <p className="text-zinc-400 mb-8">
              Perfect for students and beginners.
            </p>

            <div className="text-5xl font-bold mb-8">₹0</div>
          </div>

          <div className="bg-white text-black rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-4">Pro</h3>

            <p className="text-zinc-700 mb-8">
              Best for creators and businesses.
            </p>

            <div className="text-5xl font-bold mb-8">₹99/mo</div>

            <img
              src="/qr.jpeg"
              alt="QR Payment"
              className="w-64 mx-auto mb-6 rounded-2xl border border-zinc-300"
            />

            <a
              href="upi://pay?pa=8149211153@ibl&pn=Ashish%20Shingare&am=99&cu=INR"
              className="block text-center bg-black text-white py-4 rounded-2xl font-semibold hover:opacity-90"
            >
              Pay Now
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © 2026 Allin1 AI — Built by Ashish Shingare
      </footer>
    </div>
  );
}

const features = [
  {
    icon: '🤖',
    title: 'AI Chat',
    description: 'Ask questions and get intelligent answers instantly.',
  },
  {
    icon: '💻',
    title: 'Coding Assistant',
    description: 'Generate code and debug faster.',
  },
  {
    icon: '📄',
    title: 'Resume Builder',
    description: 'Create ATS-friendly resumes.',
  },
];
