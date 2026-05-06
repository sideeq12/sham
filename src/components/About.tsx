import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { kitchenShot } from '../images'

const features = [
  { icon: '🌿', title: '100% Organic Produce', desc: 'Locally sourced, pesticide-free greens and vegetables delivered fresh daily.' },
  { icon: '🥩', title: 'Ethical Halal Meats', desc: 'Free-range, grass-fed, hormone-free. Never frozen. Always traceable.' },
  { icon: '🔥', title: 'Fire-Roasted 12 Hours', desc: 'Slow-cooked on a traditional vertical spit for unmatched depth and tenderness.' },
  { icon: '💚', title: 'Made with Love', desc: 'Family recipes since 1998. Every order crafted like it is for our own table.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-brand-cream relative overflow-hidden">
      {/* Green leaf accents */}
      <div className="absolute top-20 right-0 text-[200px] leading-none opacity-[0.04] pointer-events-none select-none">🌿</div>
      <div className="absolute bottom-0 left-10 text-[160px] leading-none opacity-[0.04] pointer-events-none select-none">🥬</div>
      <div className="absolute top-1/3 left-0 text-[100px] leading-none opacity-[0.03] pointer-events-none select-none">🍃</div>

      {/* Dots pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={kitchenShot}
                  alt="Fresh organic ingredients in our kitchen"
                  loading="lazy"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/25 via-transparent to-transparent" />
              </div>

              {/* Since badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-brand-green-700 to-brand-green-900 text-white flex flex-col items-center justify-center shadow-2xl shadow-brand-green-900/30"
              >
                <span className="font-serif font-black text-3xl sm:text-4xl leading-none">1998</span>
                <span className="text-[0.6rem] sm:text-xs tracking-[0.15em] uppercase opacity-90">Since</span>
              </motion.div>

              {/* Leaf sprig sticker */}
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="absolute -top-8 -left-8 text-7xl select-none pointer-events-none"
              >
                🌿
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
                🌱 Our Story
              </span>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl text-brand-dark mb-6">
                Rooted in Nature,<br />Fueled by Passion
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                B'licious was born in 1998 from a simple belief: food should be fresh, organic, and bursting with flavor.
                What started as a small family stand in Beirut has blossomed into a movement — redefining Middle Eastern
                street food with the power of green, clean ingredients.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Every wrap, bowl, and salad on our menu is built around vibrant organic produce, ethically sourced
                halal proteins, and a secret 14-spice blend passed down through two generations. Good for you.
                Good for the planet. Absolutely B'licious.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group flex items-start gap-3.5 bg-white/80 backdrop-blur-sm p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-brand-green-900/5 transition-all duration-300 border border-brand-green-100/30"
                  >
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{f.icon}</span>
                    <div>
                      <h4 className="font-semibold text-sm text-brand-dark mb-0.5">{f.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
