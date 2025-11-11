"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/contexts/CartContext"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import LogoSRK from "@/public/logoSRK.jpeg"

export default function Navbar() {
  const pathname = usePathname()
  const { state } = useCart()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-40 h-20 transition-all duration-300 -ml-10">
              <Image
                src={LogoSRK}
                alt="SRK Bolt Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className={`transition-colors duration-300 relative group ${
              pathname === "/" ? "text-[#A02222]" : "text-[#2E1F44] hover:text-[#A02222]"
            }`}>
              <span className="relative flex items-center gap-2">
                <span>Home</span>
                <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#A02222] transition-all duration-300 ${
                  pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            </Link>
            <Link href="/collections" className={`transition-colors duration-300 relative group ${
              pathname === "/collections" ? "text-[#A02222]" : "text-[#2E1F44] hover:text-[#A02222]"
            }`}>
              <span className="relative flex items-center gap-2">
                <span>Collections</span>
                <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#A02222] transition-all duration-300 ${
                  pathname === "/collections" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            </Link>
            <Link href="/shop" className={`transition-colors duration-300 relative group ${
              pathname === "/shop" ? "text-[#A02222]" : "text-[#2E1F44] hover:text-[#A02222]"
            }`}>
              <span className="relative flex items-center gap-2">
                <span>Shop</span>
                <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#A02222] transition-all duration-300 ${
                  pathname === "/shop" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            </Link>
            <Link href="/about" className={`transition-colors duration-300 relative group ${
              pathname === "/about" ? "text-[#A02222]" : "text-[#2E1F44] hover:text-[#A02222]"
            }`}>
              <span className="relative flex items-center gap-2">
                <span>About</span>
                <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#A02222] transition-all duration-300 ${
                  pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            </Link>
            <Link href="/contact" className={`transition-colors duration-300 relative group ${
              pathname === "/contact" ? "text-[#A02222]" : "text-[#2E1F44] hover:text-[#A02222]"
            }`}>
              <span className="relative flex items-center gap-2">
                <span>Contact</span>
                <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#A02222] transition-all duration-300 ${
                  pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            </Link>
          </div>

          {/* Cart and CTA Buttons */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <Button variant="outline" className="border-[#A02222]/30 text-[#2E1F44] hover:bg-[#A02222]/10 relative transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Shop Now Button */}
            <Link href="/collections">
              <Button className="bg-[#A02222] hover:bg-[#2E1F44] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all duration-300">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
