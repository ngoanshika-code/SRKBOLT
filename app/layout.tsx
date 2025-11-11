import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/contexts/CartContext"
import { ToastProvider } from "@/contexts/ToastContext"
import { Toaster } from "@/components/ui/simple-toaster"
import "./globals.css"
import { RFQProvider } from "@/contexts/RFQContext"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "SRK Bolt Industries | Premium Fasteners & Engineering Solutions",
  description:
    "SRK Bolt supplies high-performance industrial fasteners, custom bolt solutions, and engineering support across infrastructure, oil & gas, automotive, and manufacturing sectors.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <CartProvider>
          <ToastProvider>
            <RFQProvider>
              <Suspense fallback={null}>{children}</Suspense>
              <Toaster />
            </RFQProvider>
          </ToastProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
