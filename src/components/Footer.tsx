import { PHONE, PHONE_RAW, EMAIL, ADDRESS } from '../data/products'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark px-5 py-10 text-sm text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:justify-between">
        <div>
          <a href="#home" className="font-serif text-xl font-extrabold text-white">B'licious</a>
          <p className="mt-2">{ADDRESS}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="#menu" className="hover:text-white">Menu</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex flex-col gap-2">
          <a href={`tel:+${PHONE_RAW}`} className="hover:text-white">{PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
        </div>
      </div>
    </footer>
  )
}
