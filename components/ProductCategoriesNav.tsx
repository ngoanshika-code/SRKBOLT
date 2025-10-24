"use client"

import Link from "next/link"
import { ChevronRight, Wrench, Settings, FileText, Map } from "lucide-react"

export default function ProductCategoriesNav() {
  return (
    <nav className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start overflow-x-auto space-x-6 py-3 whitespace-nowrap scrollbar-hide">
          <Link href="/products" className="flex items-center space-x-1 hover:text-gray-100 transition-colors font-semibold">
            <span>ALL PRODUCTS</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link href="/bolts" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Wrench className="w-4 h-4" />
            <span>BOLTS</span>
          </Link>
          <Link href="/nuts" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
            <span>NUTS</span>
          </Link>
          <Link href="/washers" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
            <span>WASHERS</span>
          </Link>
          <Link href="/screws" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Wrench className="w-4 h-4" />
            <span>SCREWS</span>
          </Link>
          <Link href="/hook-eye" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
            <span>HOOK & EYE PRODUCTS</span>
          </Link>
          <Link href="/rivets" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
            <span>RIVETS, PIN & INSERTS</span>
          </Link>
          <Link href="/attachments" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
            <span>HEAVY LOAD ATTACHMENTS</span>
          </Link>
          <Link href="/other" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
            <span>OTHER PRODUCTS</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <FileText className="w-4 h-4" />
            <span>CONTACT US</span>
          </Link>
          <Link href="/" className="flex items-center space-x-1 hover:text-gray-100 transition-colors">
            <Map className="w-4 h-4" />
            <span>MAP</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  )
}
