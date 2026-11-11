import { ADDRESS } from '../data/products'
import { kitchenShot } from '../images'

export default function About() {
  return (
    <section id="about" className="bg-brand-cream px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
        <img src={kitchenShot} alt="" loading="lazy" className="h-64 w-full rounded-3xl object-cover sm:h-80" />
        <div>
          <h2 className="mb-4 font-serif text-4xl font-bold text-brand-dark">About B'licious</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            B'licious serves {ADDRESS} with chicken and beef shawarma, mixed combos, and ginger drinks.
            Request pickup or delivery through WhatsApp and we’ll confirm the details with you.
          </p>
        </div>
      </div>
    </section>
  )
}
