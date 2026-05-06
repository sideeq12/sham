import { FiStar } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    text: 'The Green Goddess wrap changed my lunch game forever. So fresh, so flavorful — you can taste the quality of the organic ingredients in every single bite.',
    name: 'Sarah M.',
    role: 'Wellness Blogger',
    initials: 'S',
  },
  {
    text: 'Finally, a place that takes organic seriously without sacrificing flavor. The beef shawarma with citrus slaw is out of this world. I come twice a week!',
    name: 'Ahmed K.',
    role: 'Regular Customer',
    initials: 'A',
  },
  {
    text: 'Ordered the Harvest Power Bowl for a team lunch and everyone was blown away. Generous portions, beautiful presentation, and you feel great after eating it.',
    name: 'Lisa R.',
    role: 'HR Manager',
    initials: 'L',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-10 right-10 text-[180px] leading-none opacity-[0.04] pointer-events-none select-none">🌿</div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              💚 Testimonials
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-brand-dark mb-4">
              Loved by the Community
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              Thousands of happy, healthy customers cannot be wrong.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative bg-white rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-green-900/5 transition-all duration-300 group border border-brand-green-50">
                <div className="absolute top-4 right-6 text-7xl font-serif text-brand-green-200/40 leading-none select-none">
                  &ldquo;
                </div>
                <div className="flex gap-0.5 mb-5 text-brand-green-500">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FiStar key={j} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 relative z-10 italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-brand-green-50">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-green-600 to-brand-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <strong className="block text-sm text-brand-dark">{t.name}</strong>
                    <span className="text-xs text-gray-400">{t.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span><strong className="text-brand-dark">4.9</strong> Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥗</span>
              <span><strong className="text-brand-dark">2,000+</strong> Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span><strong className="text-brand-dark">Best Organic Eatery 2025</strong> — Green Food Awards</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
