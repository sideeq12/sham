import { createContext, useContext, useState, type ReactNode } from 'react'

interface OrderContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const OrderContext = createContext<OrderContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
})

export function OrderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <OrderContext.Provider value={{ isOpen, open, close }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext)
}
