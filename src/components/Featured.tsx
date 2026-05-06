import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import { shawarmaClose, beefWrap, bowlTop, combo1 } from '../images'

const items = [
  {
    title: 'Chicken Shawarma',
    desc: 'Sautéed grilled chicken with sausage, fresh salad & our signature special sauce.',
    price: '$13',
    badge: 'Bestseller',
    img: shawarmaClose,
    rating: 4.9,
    reviews: 1243,
  },
  {
    title: 'Beef Shawarma',
    desc: 'Sautéed beef with special sauce, slow-marinated for deep, rich flavor in every single bite.',
    price: '$15',
    badge: 'Premium',
    img: beefWrap,
    rating: 4.8,
    reviews: 987,
  },
  {
    title: 'Mixed Combo',
    desc: 'The best of both worlds — chicken & beef together with all the fixings. Pure satisfaction.',
    price: '$18',
    badge: 'Combo Deal',
    img: bowlTop,
    rating: 4.9,
    reviews: 756,
  },
]

const addons = [
  { icon: '🌶️', label: 'Extra Spicy' },
  { icon: '🧀', label: 'Extra Cheese' },
  { icon: '🧅', label: 'Extra Onions' },
]

export default function Featured() {
  return (
    <section id="menu" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="#065f46" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-0 w-48 h-48 opacity-[0.04] pointer-events-none text-[120px] leading-none select-none">
        🌿
      </div>

      <div className="max-w-4xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              🌱 B'licious Bites
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-dark mb-4">
              Our Signature <em className="italic text-brand-green-700">Shawarma</em>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Crafted with the freshest organic ingredients, bold spices, and flame-grilled to perfection.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-brand-green-900/5 transition-all duration-500 cursor-pointer border border-brand-green-100/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-brand-green-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    🍃 {item.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-brand-dark mb-2 group-hover:text-brand-green-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-serif font-extrabold text-3xl text-brand-green-700">{item.price}</span>
                      <span className="text-gray-400 text-sm ml-1">/ each</span>
                    </div>
                    <div className="flex items-center gap-1 text-brand-orange-400">
                      <FiStar size={16} className="fill-current" />
                      <span className="font-semibold text-sm">{item.rating}</span>
                      <span className="text-gray-400 text-xs">({item.reviews})</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Combo promo */}
        <ScrollReveal delay={0.35}>
          <div className="mb-12 relative rounded-3xl overflow-hidden shadow-xl group">
            <img
              src={combo1}
              alt="Shawarma & Ginger Drink Combo"
              loading="lazy"
              className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-brand-dark/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8">
              <div>
                <span className="inline-block bg-brand-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wider">
                  🔥 COMBO DEAL
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
                  Shawarma + Ginger Drink
                </h3>
                <p className="text-white/70 text-sm sm:text-base max-w-sm">
                  Pair any shawarma with a refreshing ginger drink for the ultimate B'licious experience.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Add-ons */}
        <ScrollReveal delay={0.4}>
          <div className="bg-white rounded-3xl border border-brand-green-100/50 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif font-bold text-lg text-brand-dark mb-4 text-center">Customize Your Wrap</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {addons.map((a, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-brand-cream border border-brand-green-100/40 hover:border-brand-orange-300 rounded-full px-5 py-3 cursor-pointer transition-all duration-300 hover:shadow-md"
                >
                  <span className="text-xl">{a.icon}</span>
                  <span className="font-semibold text-sm text-brand-dark">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
