import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import { useOrder } from './OrderContext'
import { PHONE, PHONE_RAW, EMAIL, ADDRESS } from '../data/products'
import { combo5 } from '../images'

export default function CTA() {
  const { open } = useOrder()
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-soft to-brand-green-950" />
      <div className="absolute inset-0 bg-texture" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-green-700/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-orange-600/8 blur-3xl" />

      {/* Leaf accents */}
      <div className="absolute top-20 left-10 text-[200px] leading-none opacity-[0.03] pointer-events-none select-none">🌿</div>
      <div className="absolute bottom-10 right-10 text-[150px] leading-none opacity-[0.03] pointer-events-none select-none">🍃</div>

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-10 relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 group max-w-xl mx-auto"
            >
              <img
                src={combo5}
                alt="B'licious Shawarma & Ginger Drink"
                loading="lazy"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="inline-block bg-brand-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                  🫔 + 🫚 Perfect Pair
                </span>
              </div>
            </motion.div>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex items-center gap-2 bg-brand-green-800/30 border border-brand-green-500/20 text-brand-green-300 font-bold text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green-400 animate-pulse-soft" />
              Fresh Batch Ready — Order Now
            </motion.span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Ready for a{' '}
              <em className="italic text-brand-green-300">Fresh</em> Bite?
            </h2>
            <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              Dine in, pickup, or get it delivered. Your organic shawarma is waiting — fresh off the spit.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <FiPhone size={26} />,
              title: 'Call or Text',
              desc: 'Speak directly with us',
              detail: PHONE,
              href: `tel:${PHONE_RAW}`,
            },
            {
              icon: <FiMail size={26} />,
              title: 'Email Us',
              desc: 'For catering & inquiries',
              detail: EMAIL,
              href: `mailto:${EMAIL}`,
            },
            {
              icon: <FiMapPin size={26} />,
              title: 'Visit Us',
              desc: 'Dine-in experience',
              detail: ADDRESS,
              href: null,
            },
          ].map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              {card.href ? (
                <motion.a
                  href={card.href}
                  whileHover={{ y: -5 }}
                  className="group bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] hover:border-brand-green-500/25 rounded-2xl p-8 text-center transition-all duration-300 block"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-green-800/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-green-700/25 group-hover:scale-110 transition-all duration-300">
                    <span className="text-brand-green-400">{card.icon}</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-xl mb-2">{card.title}</h3>
                  <p className="text-white/40 text-sm mb-3">{card.desc}</p>
                  <span className="text-brand-green-300 font-semibold text-base">{card.detail}</span>
                </motion.a>
              ) : (
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] hover:border-brand-green-500/25 rounded-2xl p-8 text-center transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-green-800/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-green-700/25 group-hover:scale-110 transition-all duration-300">
                    <span className="text-brand-green-400">{card.icon}</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-xl mb-2">{card.title}</h3>
                  <p className="text-white/40 text-sm mb-3">{card.desc}</p>
                  <span className="text-brand-green-300 font-semibold text-base">{card.detail}</span>
                </motion.div>
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <motion.button
              onClick={open}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-brand-orange-500/20 hover:shadow-brand-orange-500/30"
            >
              Order via WhatsApp
              <FiArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <p className="text-white/25 text-sm mt-5">
              Click to browse the menu & send your order directly to WhatsApp
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
