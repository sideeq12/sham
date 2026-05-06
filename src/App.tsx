import { Helmet } from 'react-helmet-async'
import { OrderProvider, useOrder } from './components/OrderContext'
import OrderModal from './components/OrderModal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import MenuTeaser from './components/MenuTeaser'
import ImageSlideshow from './components/ImageSlideshow'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { ADDRESS, PHONE, EMAIL } from './data/products'

function AppContent() {
  const { isOpen, close } = useOrder()

  return (
    <>
      <Helmet>
        <title>B'licious — Organic Shawarma & Fresh Salads | Order Online</title>
        <meta name="description" content="B'licious serves organic, fresh, and delicious Middle Eastern shawarma, wraps, bowls & salads. Order via WhatsApp for pickup or delivery in Balch Springs, TX." />
        <meta name="keywords" content="B'licious, organic shawarma, fresh salads, Middle Eastern food, halal, healthy wraps, green food, Balch Springs, Texas" />
        <link rel="canonical" href="https://blicious.com" />
        <meta property="og:title" content="B'licious — Organic Shawarma & Fresh Salads" />
        <meta property="og:description" content="Where fresh organic ingredients meet bold Middle Eastern flavors. Order now via WhatsApp!" />
        <meta property="og:url" content="https://blicious.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B'licious — Organic Shawarma & Fresh Salads" />
        <meta name="twitter:description" content="Organic, fresh, and absolutely B'licious. Order now via WhatsApp!" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: "B'licious",
            description: 'Organic, fresh, and delicious shawarma, wraps & salads crafted with love since 1998.',
            servesCuisine: ['Middle Eastern', 'Mediterranean', 'Organic', 'Healthy'],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Balch Springs',
              addressRegion: 'TX',
            },
            telephone: `+1-${PHONE.replace(/[^\d]/g, '').slice(1)}`,
            email: EMAIL,
            priceRange: '$$',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '11:00',
              closes: '22:00',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '2143',
            },
            menu: 'https://blicious.com/#menu',
            acceptsReservations: true,
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Featured />
        <About />
        <MenuTeaser />
        <Testimonials />
        <ImageSlideshow />
        <CTA />
      </main>
      <Footer />

      <OrderModal isOpen={isOpen} onClose={close} />
    </>
  )
}

export default function App() {
  return (
    <OrderProvider>
      <AppContent />
    </OrderProvider>
  )
}
