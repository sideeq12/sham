import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiClock, FiMapPin, FiStar } from 'react-icons/fi'
import { heroGif } from '../images'
import { useOrder } from './OrderContext'

const badges = [
  { icon: <FiStar size={16} />, text: '4.9 Rating (2k+ Reviews)' },
  { icon: <FiClock size={16} />, text: 'Open Daily 11AM – 10PM' },
  { icon: <FiMapPin size={16} />, text: 'Balch Springs, TX' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.94])
  const { open } = useOrder()

  const goTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Background GIF */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img src={heroGif} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand-dark/90 to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating leaf decorations */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-24 right-10 md:right-20 z-0 text-6xl md:text-7xl opacity-10 pointer-events-none"
      >
        🌿
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 left-8 md:left-16 z-0 text-5xl md:text-6xl opacity-8 pointer-events-none"
      >
        🥬
      </motion.div>

      {/* Content — centered */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-20 pb-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 bg-brand-green-800/30 border border-brand-green-600/20 text-brand-green-300 px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green-400 animate-pulse-soft" />
            Fresh & Organic Since 1998
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 text-balance"
        >
          Fresh.{' '}
          <em className="italic text-brand-green-300 relative inline-block">
            Organic.
            <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 160 14" fill="none">
              <path
                d="M8 10 Q40 2 80 10 Q120 18 152 10"
                stroke="rgba(52,211,153,0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="200"
                strokeDashoffset="200"
              >
                <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1s" begin="1.5s" fill="freeze" />
              </path>
            </svg>
          </em>{' '}
          <span className="text-brand-orange-400">B'licious.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          The shawarma that talks back. Fresh organic shawarma, crisp salads, and handcrafted wraps that nourish your body and delight your soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <button
            onClick={() => goTo('#menu')}
            className="group bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange-500/30 hover:-translate-y-1 active:scale-95"
          >
            <span className="flex items-center gap-2 justify-center">
              Explore Our Menu
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
          <button
            onClick={open}
            className="group bg-transparent border-2 border-white/30 hover:border-brand-green-400 text-white hover:text-brand-green-300 font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            Order Delivery
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-5 sm:gap-8"
        >
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-white/55 text-sm">
              <span className="text-brand-green-400">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 text-xs uppercase tracking-[0.3em]"
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <HiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
