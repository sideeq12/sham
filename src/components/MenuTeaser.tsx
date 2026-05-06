import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { gingerDrink1, gingerDrink2, gingerDrink3, gingerDrink4 } from '../images'

const drinkImages = [gingerDrink1, gingerDrink2, gingerDrink3, gingerDrink4]

const drinks = [
  {
    img: gingerDrink1,
    title: '4oz Mini Bottle',
    price: '$4',
    desc: 'Ginger drink taster with a sharp palate, focused on flavour, spice balance, and quality.',
  },
  {
    img: gingerDrink2,
    title: 'Mini Magic – 12oz',
    price: '$6',
    desc: 'On-the-go boost of ginger goodness; convenient, refreshing, and travel-ready.',
  },
  {
    img: gingerDrink3,
    title: 'Pouch It – 250ml',
    price: '$8',
    desc: 'A small pouch packed with big ginger flavor in every single sip.',
  },
  {
    img: gingerDrink4,
    title: 'More Ginger More Glow – 500ml',
    price: '$10',
    desc: 'On-the-go boost of ginger goodness; convenient, refreshing, and travel-ready.',
  },
  {
    img: gingerDrink1,
    title: 'Bigger Sip, Better Kick – 1.3 Gal',
    price: '$25',
    desc: 'Full ginger power; bold ginger blast in a large pouch with no holding back.',
  },
]

const benefits = [
  'Packed with flavor',
  'Boosts immunity',
  'Supports digestion',
  '100% natural goodness',
]

export default function MenuTeaser() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextImage = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % drinkImages.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [isPaused, nextImage])

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-30" />
      <div className="absolute top-0 right-0 text-[250px] leading-none opacity-[0.03] pointer-events-none select-none">🌿</div>
      <div className="absolute bottom-0 left-0 text-[200px] leading-none opacity-[0.03] pointer-events-none select-none">🍃</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-green-800/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-brand-green-800/30 border border-brand-green-600/15 text-brand-green-300 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              🫚 B'licious Ginger Rush
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4">
              Refreshing Ginger <em className="italic text-brand-green-300">Drinks</em>
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">
              Bold, spicy, and 100% natural — our ginger rush lineup delivers pure refreshment in every sip.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="relative mb-14 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={heroIndex}
                src={drinkImages[heroIndex]}
                alt="B'licious Ginger Rush Drinks"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="relative w-full h-80 sm:h-[28rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:left-8">
              <span className="inline-block bg-brand-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2 tracking-wider">
                ⚡ GINGER RUSH
              </span>
              <p className="text-white/80 text-sm sm:text-base font-medium max-w-md">
                Handcrafted ginger drinks — from a 4oz taster to a 1.3-gallon party pouch
              </p>
            </div>
            {/* Dot indicators */}
            <div className="absolute bottom-6 right-6 flex gap-1.5">
              {drinkImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === heroIndex
                      ? 'w-5 h-1.5 bg-brand-orange-400'
                      : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Drink image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {drinks.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/[0.03] border border-white/[0.05] hover:border-brand-orange-400/25 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer hover:bg-white/[0.06] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none text-5xl select-none">
                  🫚
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ring-2 ring-brand-green-700/30 group-hover:ring-brand-orange-400/40">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-1.5">{item.title}</h3>
                <span className="inline-block font-serif font-extrabold text-2xl text-brand-orange-400 mb-2.5">{item.price}</span>
                <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Benefits bar */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-white/55 text-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green-400" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="organic-divider organic-divider-dark" />
    </section>
  )
}
