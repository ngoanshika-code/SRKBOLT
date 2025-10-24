import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-red-600 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <span className="font-semibold">Celebrating 25+ Years Of Excellence</span>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-200 transition-colors">About Us</Link>
          <Link href="/projects" className="hover:text-gray-200 transition-colors">Projects</Link>
          <Link href="/brands" className="hover:text-gray-200 transition-colors">Our Brands</Link>
          <Link href="/industries" className="hover:text-gray-200 transition-colors">Industries</Link>
          <Link href="/careers" className="hover:text-gray-200 transition-colors">Careers</Link>
        </div>
      </div>
    </div>
  )
}
