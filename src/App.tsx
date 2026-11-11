import { OrderProvider, useOrder } from './components/OrderContext'
import OrderModal from './components/OrderModal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import MenuTeaser from './components/MenuTeaser'
import ImageSlideshow from './components/ImageSlideshow'
import CTA from './components/CTA'
import Footer from './components/Footer'

function AppContent() {
  const { isOpen, close } = useOrder()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <About />
        <MenuTeaser />
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
