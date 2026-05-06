import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useOrder } from './OrderContext'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { open } = useOrder()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const goTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-dark/95 backdrop-blur-xl shadow-2xl shadow-black/15 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); goTo('#home') }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green-600 to-brand-green-800 flex items-center justify-center text-lg shadow-lg shadow-brand-green-700/30 group-hover:scale-110 transition-transform duration-300">
              🌿
            </div>
            <span className="font-serif font-extrabold text-xl text-white tracking-tight">
              B<span className="text-brand-green-300">'</span>licious
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); goTo(link.href) }}
                  className="relative text-white/85 hover:text-brand-green-300 transition-colors duration-300 text-sm font-medium tracking-wide uppercase py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={open}
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange-500/30 hover:-translate-y-0.5 active:scale-95"
              >
                Order Now
              </button>
            </li>
          </ul>

          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); goTo(link.href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-white text-2xl font-serif font-semibold hover:text-brand-green-300 transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              onClick={open}
              className="mt-4 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-3.5 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Order Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
