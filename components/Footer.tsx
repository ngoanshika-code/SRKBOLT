import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/image-removebg-preview (15).png" 
                alt="SRK Bolt Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leading manufacturer and supplier of high-quality fasteners serving industries 
              across India and internationally since 1998. Your trusted partner for all 
              fastener solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/bolts" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Bolts
                </Link>
              </li>
              <li>
                <Link href="/nuts" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Nuts
                </Link>
              </li>
              <li>
                <Link href="/washers" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Washers
                </Link>
              </li>
              <li>
                <Link href="/screws" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Screws
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hook-eye" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Hook & Eye Products
                </Link>
              </li>
              <li>
                <Link href="/rivets" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Rivets, Pin & Inserts
                </Link>
              </li>
              <li>
                <Link href="/attachments" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Heavy Load Attachments
                </Link>
              </li>
              <li>
                <Link href="/other" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Other Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Major Projects
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Our Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">
                    SRK Bolt Industries<br />
                    Industrial Area, Phase 1<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">+91-9876543210</p>
                  <p className="text-gray-600 text-sm">+91-9876543211</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">sales@srkbolt.com</p>
                  <p className="text-gray-600 text-sm">info@srkbolt.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2024 SRK Bolt Industries. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-red-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-red-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
