"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export interface RFQProduct {
  id: string
  name: string
  image: string
  quantity: number
}

interface RFQContextType {
  rfqCount: number
  rfqProducts: RFQProduct[]
  addToRFQ: (productName: string, image?: string) => void
  removeFromRFQ: (productId: string) => void
  clearRFQ: () => void
  updateQuantity: (productId: string, quantity: number) => void
}

const RFQContext = createContext<RFQContextType | undefined>(undefined)

export function RFQProvider({ children }: { children: ReactNode }) {
  const [rfqProducts, setRfqProducts] = useState<RFQProduct[]>([])

  const addToRFQ = (productName: string, image: string = "https://www.husainibrothers.com/cdn/images/200/5921504842_1635755736.jpg") => {
    setRfqProducts(prev => {
      const existingProduct = prev.find(p => p.name === productName)
      if (existingProduct) {
        return prev.map(p =>
          p.name === productName ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, {
        id: Date.now().toString(),
        name: productName,
        image,
        quantity: 1
      }]
    })
  }

  const removeFromRFQ = (productId: string) => {
    setRfqProducts(prev => prev.filter(p => p.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromRFQ(productId)
      return
    }
    setRfqProducts(prev =>
      prev.map(p => p.id === productId ? { ...p, quantity } : p)
    )
  }

  const clearRFQ = () => {
    setRfqProducts([])
  }

  return (
    <RFQContext.Provider value={{ rfqCount: rfqProducts.length, rfqProducts, addToRFQ, removeFromRFQ, updateQuantity, clearRFQ }}>
      {children}
    </RFQContext.Provider>
  )
}

export function useRFQ() {
  const context = useContext(RFQContext)
  if (!context) {
    throw new Error("useRFQ must be used within RFQProvider")
  }
  return context
}
