import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import {
  heroBg,
  heroDish,
  shawarmaClose,
  beefWrap,
  bowlTop,
  kitchenShot,
  actionShot,
  macroShot,
  closeUp,
  combo2,
  combo3,
  combo4,
} from '../images'

const slides = [
  { src: heroDish, alt: 'Premium restaurant-style hero shot' },
  { src: shawarmaClose, alt: 'Creamy chicken shawarma close-up' },
  { src: beefWrap, alt: 'Street-style beef wrap' },
  { src: bowlTop, alt: 'Top-down fresh bowl shot' },
  { src: combo2, alt: 'Shawarma and ginger drink combo' },
  { src: combo3, alt: 'Fresh shawarma wrap with drink' },
  { src: combo4, alt: 'Blicious meal combo spread' },
  { src: kitchenShot, alt: 'Moody kitchen atmosphere' },
  { src: actionShot, alt: 'Action shot of preparation' },
  { src: macroShot, alt: 'Extreme macro of ingredients' },
  { src: closeUp, alt: 'Hyper-realistic close-up' },
  { src: heroBg, alt: 'Bright commercial style shot' },
]

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-10 right-0 text-[180px] leading-none opacity-[0.04] pointer-events-none select-none">🌿</div>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              🍃 Gallery
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-brand-dark mb-4">
              Our Kitchen <em className="italic text-brand-green-700">in Motion</em>
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              A glimpse behind the scenes — fresh ingredients, fire-roasted perfection, and the art of B'licious.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-brand-dark group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].alt}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/25 flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/25 flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <FiChevronRight size={22} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-xs font-medium">
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-400 ${
                  i === current
                    ? 'w-6 h-1.5 bg-brand-orange-400'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
