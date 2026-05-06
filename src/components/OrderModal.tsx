import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiMinus, HiPlus, HiShoppingCart } from 'react-icons/hi'
import { FiSend } from 'react-icons/fi'
import { products, addons, PHONE_RAW, ADDRESS } from '../data/products'
import type { Product } from '../data/products'

interface OrderItem {
  product: Product
  quantity: number
}

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [cart, setCart] = useState<Map<string, OrderItem>>(new Map())
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set())
  const [note, setNote] = useState('')
  const [address, setAddress] = useState('')
  const [step, setStep] = useState<'browse' | 'review'>('browse')

  const total = Array.from(cart.values()).reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const itemCount = Array.from(cart.values()).reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const next = new Map(prev)
      const existing = next.get(product.id)
      if (existing) {
        next.set(product.id, { ...existing, quantity: existing.quantity + 1 })
      } else {
        next.set(product.id, { product, quantity: 1 })
      }
      return next
    })
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => {
      const next = new Map(prev)
      const existing = next.get(productId)
      if (existing && existing.quantity > 1) {
        next.set(productId, { ...existing, quantity: existing.quantity - 1 })
      } else {
        next.delete(productId)
      }
      return next
    })
  }, [])

  const toggleAddon = useCallback((id: string) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const buildWhatsAppMessage = () => {
    const cartItems = Array.from(cart.values())
    const divider = '─'.repeat(30)

    let msg = `*B'LICIOUS — NEW ORDER*\n`
    msg += `${divider}\n\n`

    msg += `ITEMS:\n`
    cartItems.forEach((item) => {
      msg += `  ${item.product.name} × ${item.quantity}  —  $${(item.product.price * item.quantity).toFixed(2)}\n`
    })

    if (selectedAddons.size > 0) {
      msg += `\nADD-ONS:\n`
      addons.forEach((a) => {
        if (selectedAddons.has(a.id)) {
          msg += `  ${a.label}\n`
        }
      })
    }

    if (note.trim()) {
      msg += `\nNOTE: ${note.trim()}\n`
    }

    msg += `\n${divider}\n`
    msg += `*TOTAL: $${total.toFixed(2)}*\n\n`
    msg += `DELIVERY TO: ${address.trim() || ADDRESS}\n`
    msg += `Please confirm my order. Thank you!`

    return encodeURIComponent(msg)
  }

  const handlePlaceOrder = () => {
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/${PHONE_RAW}?text=${msg}`, '_blank')
  }

  const cartArray = Array.from(cart.values())

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-white w-full sm:max-w-lg sm:rounded-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-green-600 to-brand-green-800 flex items-center justify-center text-lg">
                  🌿
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-dark leading-none">
                    B'licious
                  </h3>
                  <p className="text-xs text-gray-400">
                    {step === 'browse' ? 'Build your order' : 'Review & send'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <HiX size={18} className="text-gray-500" />
              </button>
            </div>

            {/* Body */}
            {step === 'browse' ? (
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
                {/* Shawarma */}
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-green-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span>🫔</span> B'licious Bites
                  </h4>
                  <div className="space-y-2.5">
                    {products
                      .filter((p) => p.category === 'shawarma')
                      .map((product) => {
                        const inCart = cart.get(product.id)
                        return (
                          <div
                            key={product.id}
                            className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 ${
                              inCart
                                ? 'border-brand-green-300 bg-brand-green-50/50'
                                : 'border-gray-100 bg-white hover:border-brand-green-200'
                            }`}
                          >
                            <img
                              src={product.img}
                              alt={product.name}
                              className="w-14 h-14 rounded-xl object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-sm text-brand-dark">
                                {product.name}
                              </h5>
                              <p className="text-xs text-gray-400 truncate">
                                {product.desc}
                              </p>
                              <span className="font-serif font-bold text-sm text-brand-green-700">
                                ${product.price}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {inCart && inCart.quantity > 0 && (
                                <>
                                  <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                  >
                                    <HiMinus size={14} />
                                  </button>
                                  <span className="font-bold text-sm w-5 text-center">
                                    {inCart.quantity}
                                  </span>
                                </>
                              )}
                              <button
                                onClick={() => addToCart(product)}
                                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                  inCart && inCart.quantity > 0
                                    ? 'bg-brand-green-600 text-white hover:bg-brand-green-700'
                                    : 'bg-brand-orange-500 text-white hover:bg-brand-orange-600'
                                }`}
                              >
                                <HiPlus size={14} />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-green-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span>🧂</span> Add-ons
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {addons.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => toggleAddon(a.id)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedAddons.has(a.id)
                            ? 'bg-brand-green-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <span>{a.emoji}</span>
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drinks */}
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-green-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span>🫚</span> Ginger Rush Drinks
                  </h4>
                  <div className="space-y-2.5">
                    {products
                      .filter((p) => p.category === 'drink')
                      .map((product) => {
                        const inCart = cart.get(product.id)
                        return (
                          <div
                            key={product.id}
                            className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 ${
                              inCart
                                ? 'border-brand-green-300 bg-brand-green-50/50'
                                : 'border-gray-100 bg-white hover:border-brand-orange-200'
                            }`}
                          >
                            <img
                              src={product.img}
                              alt={product.name}
                              className="w-14 h-14 rounded-xl object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-sm text-brand-dark">
                                {product.name}
                              </h5>
                              <p className="text-xs text-gray-400 truncate">
                                {product.desc}
                              </p>
                              <span className="font-serif font-bold text-sm text-brand-orange-600">
                                ${product.price}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {inCart && inCart.quantity > 0 && (
                                <>
                                  <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                  >
                                    <HiMinus size={14} />
                                  </button>
                                  <span className="font-bold text-sm w-5 text-center">
                                    {inCart.quantity}
                                  </span>
                                </>
                              )}
                              <button
                                onClick={() => addToCart(product)}
                                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                  inCart && inCart.quantity > 0
                                    ? 'bg-brand-green-600 text-white hover:bg-brand-green-700'
                                    : 'bg-brand-orange-500 text-white hover:bg-brand-orange-600'
                                }`}
                              >
                                <HiPlus size={14} />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="font-serif font-bold text-sm text-brand-green-700 uppercase tracking-wide mb-2 block">
                    📝 Special Instructions
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Any allergies or special requests..."
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-brand-green-300 focus:ring-2 focus:ring-brand-green-100 outline-none text-sm resize-none h-20 transition-all"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="font-serif font-bold text-sm text-brand-green-700 uppercase tracking-wide mb-2 block">
                    📍 Delivery Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your delivery address..."
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-brand-green-300 focus:ring-2 focus:ring-brand-green-100 outline-none text-sm transition-all"
                  />
                </div>
              </div>
            ) : (
              /* Review step */
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
                <h4 className="font-serif font-bold text-sm text-brand-green-700 uppercase tracking-wide">
                  📋 Order Summary
                </h4>
                {cartArray.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between py-2 border-b border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.product.emoji}</span>
                      <span className="text-sm font-medium text-brand-dark">
                        {item.product.name} × {item.quantity}
                      </span>
                    </div>
                    <span className="font-bold text-sm text-brand-dark">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                {selectedAddons.size > 0 && (
                  <div className="py-2 border-b border-gray-100">
                    <div className="text-xs text-gray-400 mb-1">Add-ons:</div>
                    {addons
                      .filter((a) => selectedAddons.has(a.id))
                      .map((a) => (
                        <div key={a.id} className="flex items-center gap-2 text-sm text-brand-dark">
                          <span>{a.emoji}</span>
                          <span>{a.label}</span>
                        </div>
                      ))}
                  </div>
                )}
                {note && (
                  <div className="py-2 border-b border-gray-100">
                    <div className="text-xs text-gray-400">Note:</div>
                    <p className="text-sm text-brand-dark">{note}</p>
                  </div>
                )}
                {address.trim() && (
                  <div className="py-2 border-b border-gray-100">
                    <div className="text-xs text-gray-400">Delivery to:</div>
                    <p className="text-sm font-medium text-brand-dark">{address.trim()}</p>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2">
                  <span className="font-serif font-bold text-lg text-brand-dark">Total</span>
                  <span className="font-serif font-extrabold text-2xl text-brand-green-700">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => setStep('browse')}
                  className="text-sm text-brand-green-600 font-medium hover:underline"
                >
                  ← Back to menu
                </button>
              </div>
            )}

            {/* Footer */}
            <div className="px-5 py-4 border-t border-gray-100 shrink-0 space-y-3">
              {step === 'browse' ? (
                <button
                  onClick={() => setStep('review')}
                  disabled={cartArray.length === 0}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-base transition-all duration-300 ${
                    cartArray.length === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-brand-green-700 text-white hover:bg-brand-green-800 active:scale-[0.98] shadow-lg shadow-brand-green-700/20'
                  }`}
                >
                  <HiShoppingCart size={20} />
                  Review Order {cartArray.length > 0 && `• ${itemCount} item${itemCount > 1 ? 's' : ''} • $${total.toFixed(2)}`}
                </button>
              ) : (
                <div className="space-y-2.5">
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-base bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#25D366]/30"
                  >
                    <FiSend size={20} />
                    Send Order via WhatsApp
                  </button>
                  <button
                    onClick={() => setStep('browse')}
                    className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ← Back to menu
                  </button>
                </div>
              )}
              <p className="text-center text-[0.65rem] text-gray-300">
                📍 {ADDRESS} • You will be redirected to WhatsApp to complete your order
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
