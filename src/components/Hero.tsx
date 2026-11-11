import { FiMapPin } from 'react-icons/fi'
import { useOrder } from './OrderContext'
import { ADDRESS } from '../data/products'

export default function Hero() {
  const { open } = useOrder()

  return (
    <section id="home" className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-brand-dark">
      <img
        src="/shawarma.jpeg"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto w-full max-w-3xl px-5 pb-16 pt-28 text-center">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green-300">
          <FiMapPin aria-hidden="true" /> {ADDRESS}
        </p>
        <h1 className="mb-5 font-serif text-4xl font-black leading-tight text-white sm:text-6xl">
          Shawarma &amp; Ginger Drinks
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-lg text-white/90">
          Chicken shawarma, beef shawarma, and ginger drinks from B'licious in Balch Springs, Texas.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={open}
            className="rounded-full bg-brand-orange-700 px-8 py-3.5 font-bold text-white hover:bg-brand-orange-800"
          >
            Order via WhatsApp
          </button>
          <a href="#menu" className="rounded-full border border-white/70 px-8 py-3.5 font-bold text-white hover:bg-white/15">
            View menu
          </a>
          {import.meta.env.VITE_UBER_EATS_URL && (
            <a href={import.meta.env.VITE_UBER_EATS_URL} className="rounded-full border border-white/70 px-8 py-3.5 font-bold text-white hover:bg-white/15">
              Order on Uber Eats
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
