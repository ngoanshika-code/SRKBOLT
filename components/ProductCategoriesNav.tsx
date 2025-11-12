"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Wrench, Settings, FileText, Map } from "lucide-react"

export default function ProductCategoriesNav() {
  return (
    <nav className="bg-[#A02222] text-white sticky top-0 z-40 shadow-lg">
      <div className="w-full px-3 lg:px-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 py-2 text-[9px] md:text-[11px] lg:text-xs font-semibold tracking-[0.05em]">
          <Link href="/products" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors font-semibold uppercase tracking-[0.12em]">
            <span>ALL PRODUCTS</span>
            <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
          </Link>
          <Link href="/bolts" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Image
              src="/icons8-bolt-64.png"
              alt="Bolts Icon"
              width={12}
              height={12}
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
            />
            <span>BOLTS</span>
          </Link>
          <Link href="/nuts" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Image
              src="/icons8-nut-64%20(1).png"
              alt="Nuts Icon"
              width={12}
              height={12}
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
            />
            <span>NUTS</span>
          </Link>
          <Link href="/washers" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Image
              src="/gasket.png"
              alt="Washers Icon"
              width={12}
              height={12}
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
            />
            <span>WASHERS</span>
          </Link>
          <Link href="/screws" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Image
              src="/screw%20(2).png"
              alt="Screws Icon"
              width={12}
              height={12}
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
            />
            <span>SCREWS</span>
          </Link>
          <Link href="/hook-eye" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Image
              src="/hookandeye.png"
              alt="Hook & Eye Icon"
              width={12}
              height={12}
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
            />
            <span>HOOK & EYE PRODUCTS</span>
          </Link>
          <Link href="/rivets" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Image
              src="/rivet.png"
              alt="Rivets Icon"
              width={12}
              height={12}
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
            />
            <span>RIVETS, PIN & INSERTS</span>
          </Link>
          <Link href="/attachments" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Settings className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            <span>HEAVY LOAD ATTACHMENTS</span>
          </Link>
          <Link href="/other" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Settings className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            <span>OTHER PRODUCTS</span>
          </Link>
          <Link href="/contact" className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
            <Map className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            <span>CONTACT US</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
