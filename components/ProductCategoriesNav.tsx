"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Settings, Map } from "lucide-react"

export default function ProductCategoriesNav() {
  return (
    <nav className="bg-[#A02222] text-white sticky top-0 z-40 shadow-lg">
      <div className="w-full px-2 sm:px-3 lg:px-5 xl:px-6">
        <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 py-1.5 text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm font-semibold tracking-[0.04em]">
          <Link
            href="/products"
            className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors font-semibold uppercase tracking-[0.1em]"
          >
            <span>ALL PRODUCTS</span>
            <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
          </Link>
          <CategoryLink href="/bolts" iconSrc="/icons8-bolt-64.png" label="BOLTS" />
          <CategoryLink href="/nuts" iconSrc="/icons8-nut-64%20(1).png" label="NUTS" />
          <CategoryLink href="/washers" iconSrc="/gasket.png" label="WASHERS" />
          <CategoryLink href="/screws" iconSrc="/screw%20(2).png" label="SCREWS" />
          <CategoryLink href="/hook-eye" iconSrc="/hookandeye.png" label="HOOK & EYE" />
          <CategoryLink href="/rivets" iconSrc="/rivet.png" label="RIVETS & INSERTS" />
          <IconLink href="/attachments" icon={<Settings className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />} label="HEAVY LOAD" />
          <IconLink href="/other" icon={<Settings className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />} label="OTHER PRODUCTS" />
          <IconLink href="/contact" icon={<Map className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />} label="CONTACT US" />
        </div>
      </div>
    </nav>
  )
}

function CategoryLink({ href, iconSrc, label }: { href: string; iconSrc: string; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
      <Image src={iconSrc} alt={`${label} Icon`} width={16} height={16} className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain" />
      <span>{label}</span>
    </Link>
  )
}

function IconLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-1 whitespace-nowrap hover:text-[#FFD5D5] transition-colors">
      {icon}
      <span>{label}</span>
    </Link>
  )
}
