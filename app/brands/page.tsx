"use client"

import Layout from "@/components/Layout"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Award, Globe, Shield } from "lucide-react"

export default function BrandsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: "https://t3.ftcdn.net/jpg/02/33/71/82/240_F_233718247_GoQZJTzziQ1Qp2S30kv8hac3pVzMs74y.jpg",
      title: "Our Brands",
      subtitle: "Trusted Partners in Quality Fasteners"
    },
    {
      id: 2,
      image: "https://t3.ftcdn.net/jpg/07/06/47/84/240_F_706478455_hSFXNArvKUkM3fWMmr91O71fvyqJTzmb.jpg",
      title: "International Partners",
      subtitle: "Global Brands, Local Excellence"
    },
    {
      id: 3,
      image: "https://t4.ftcdn.net/jpg/01/33/57/65/240_F_133576515_DFrRHRoAa5PknMkijB832EOEjUJ1pX4s.jpg",
      title: "Quality Assurance",
      subtitle: "Certified Excellence Across All Brands"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Layout>
      {/* Hero Section - Image Slider */}
      <section className="relative h-96 overflow-hidden">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full shrink-0 h-full relative">
              <img
                src={slide.image}
                alt="SRK Bolt Brands"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Title overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brands Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Brands</h1>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              SRK Bolt partners with leading international brands to provide the highest 
              quality fasteners and engineering solutions to our customers. Our strategic 
              partnerships ensure access to cutting-edge technology and global best practices.
            </p>
          </div>
          
          {/* Modern Brand Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Cooper & Turner */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/05/29/02/97/240_F_529029779_8wafyBb91UfdvEqiDcSZwfwc0U9vN993.jpg"
                  alt="Cooper & Turner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Cooper & Turner</h3>
                  <p className="text-gray-200">UK Excellence</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">UK Brand</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Cooper & Turner</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Premium quality bolts and fasteners from UK-based manufacturer, 
                  known for their precision engineering and reliability in demanding applications.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>United Kingdom</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-1" />
                    <span>Premium Quality</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            </div>

            {/* Friedberg */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/04/73/64/76/240_F_473647693_nXQEwNVeUTTAVFSasg5rci7iYtpOTiJr.jpg"
                  alt="Friedberg"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Friedberg</h3>
                  <p className="text-gray-200">German Precision</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">German Brand</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Friedberg</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  German precision fasteners and engineering components, 
                  trusted for their quality and technical excellence worldwide.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>Germany</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>Certified Quality</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            </div>

            {/* Applied Bolting */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/02/33/71/82/240_F_233718247_GoQZJTzziQ1Qp2S30kv8hac3pVzMs74y.jpg"
                  alt="Applied Bolting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Applied Bolting</h3>
                  <p className="text-gray-200">Specialized Solutions</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Specialized</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Applied Bolting</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Specialized bolting solutions and tensioning systems 
                  for critical applications in construction and industry.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>International</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-1" />
                    <span>Specialized</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            </div>

            {/* Unbrako */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/05/63/45/42/240_F_563454220_FynShMBjneQXf1CAr5ZuWV9W9PHp6CrU.jpg"
                  alt="Unbrako"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Unbrako</h3>
                  <p className="text-gray-200">High-Strength</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">High-Strength</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Unbrako</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  High-strength socket head cap screws and precision fasteners 
                  for demanding applications in automotive and aerospace industries.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>Global</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>Aerospace Grade</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            </div>

            {/* Sundram Fastener */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/11/76/17/28/240_F_1176172880_IzGMvsCPxZToFlMagCegpgmWIakuUaFY.jpg"
                  alt="Sundram Fastener"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Sundram Fastener</h3>
                  <p className="text-gray-200">Indian Excellence</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Indian Brand</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sundram Fastener</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Indian manufacturer of quality fasteners and automotive components, 
                  serving both domestic and international markets with excellence.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-1" />
                    <span>Automotive</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            </div>

            {/* SRK Bolt */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/01/33/57/65/240_F_133576505_MROPMEGANhhZgubxWSviz47sN21MVWbh.jpg"
                  alt="SRK Bolt"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">SRK Bolt</h3>
                  <p className="text-gray-200">Our Brand</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">In-House Brand</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">SRK Bolt</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our own brand of quality fasteners, manufactured to international 
                  standards and customized for specific customer requirements.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>Custom Solutions</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Brand Benefits */}
          <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Why Choose Our Brands?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">All brands meet international quality standards</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Timely Delivery</h3>
                <p className="text-gray-600 text-sm">Fast and reliable supply chain management</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Support</h3>
                <p className="text-gray-600 text-sm">Expert guidance for product selection</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600 text-sm">Best value for money solutions</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-red-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Premium Brands?</h2>
            <p className="text-red-100 mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of trusted brands and find the perfect 
              fastener solutions for your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-red-600 border border-red-600 px-10 py-4 rounded-lg hover:bg-red-50 transition-colors font-semibold text-lg flex items-center justify-center">
                Browse Brands →
              </button>
              <button className="bg-red-600 text-white border border-white px-10 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
