import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import { PHONE, EMAIL, ADDRESS } from '../data/products'

const footerLinks = {
  menu: ['Chicken Shawarma', 'Beef Shawarma', 'Mixed Combo', 'Ginger Rush Drinks', 'Catering'],
  company: ['Our Story', 'Catering', 'Careers', 'Sustainability', 'Press Kit'],
  contact: [ADDRESS, PHONE, EMAIL],
}

const socials = [
  { icon: <FiInstagram size={18} />, label: 'Instagram' },
  { icon: <FiFacebook size={18} />, label: 'Facebook' },
  { icon: <FiTwitter size={18} />, label: 'Twitter' },
  { icon: <SiTiktok size={18} />, label: 'TikTok' },
]

export default function Footer() {
  const goTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); goTo('#home') }}
              className="flex items-center gap-2.5 mb-4"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green-600 to-brand-green-800 flex items-center justify-center text-lg shadow-lg shadow-brand-green-700/30">
                🌿
              </div>
              <span className="font-serif font-extrabold text-xl text-white">
                B<span className="text-brand-green-400">'</span>licious
              </span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-6">
              Organic, fresh, and delicious Middle Eastern cuisine crafted with love since 1998. Proudly serving {ADDRESS}.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-brand-green-700 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((item, i) => (
                <li key={i}>
                  <a href="#menu" onClick={(e) => { e.preventDefault(); goTo('#menu') }} className="text-white/35 hover:text-brand-green-400 text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item, i) => (
                <li key={i}>
                  <a
                    href={item === 'Our Story' ? '#about' : '#'}
                    onClick={(e) => { if (item === 'Our Story') { e.preventDefault(); goTo('#about') } }}
                    className="text-white/35 hover:text-brand-green-400 text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, i) => (
                <li key={i}>
                  <span className="text-white/35 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/20">
          <p>&copy; {new Date().getFullYear()} B'licious. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/40 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
