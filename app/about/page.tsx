"use client"

import Layout from "@/components/Layout"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: "https://mikehardware.com/wp-content/uploads/2023/09/bolt-1-y.jpg",
      title: "About SRK Bolt",
      subtitle: "Leading Fastener Solutions Since 1998"
    },
    {
      id: 2,
      image: "https://t4.ftcdn.net/jpg/11/42/47/91/240_F_1142479131_EJ3VEcNTYlomctW2qr8j1dYM05DeIXal.jpg",
      title: "Quality Manufacturing",
      subtitle: "Precision Engineering Excellence"
    },
    {
      id: 3,
      image: "https://t4.ftcdn.net/jpg/15/51/86/31/240_F_1551863150_c4Ew22S4nIyVMRMuBSbNWsyo236KB5Ro.jpg",
      title: "Global Reach",
      subtitle: "Serving Industries Worldwide"
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
                alt="SRK Bolt About"
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

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Company Overview */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About SRK Bolt</h1>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              SRK Bolt is a leading manufacturer and supplier of high-quality fasteners, 
              serving industries across India and internationally since 1998. With over 
              25 years of expertise, we have established ourselves as a trusted partner 
              in the fastener industry.
            </p>
          </div>

          {/* Company Image and Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SRK Bolt Manufacturing Facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Established in 1998, SRK Bolt started as a small trading business dealing in 
                basic fasteners. What began as a modest venture has evolved into a comprehensive 
                fastener solutions provider, serving diverse industries across India and beyond.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been marked by continuous growth, innovation, and an unwavering 
                commitment to quality. Today, we operate state-of-the-art manufacturing facilities 
                and maintain extensive inventory to meet the ever-growing demands of our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From construction giants to automotive manufacturers, from power plants to 
                aerospace companies, SRK Bolt has been the preferred choice for fastener 
                solutions across multiple sectors.
              </p>
                  </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide superior quality fasteners and engineering solutions that meet 
                the highest industry standards while ensuring customer satisfaction and 
                competitive pricing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred fastener supplier in India, 
                recognized for our quality, reliability, and customer service excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality Excellence, Customer Satisfaction, Innovation, Reliability, 
                and Integrity form the core of our business philosophy.
              </p>
          </div>
        </div>

          {/* Manufacturing Excellence */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Manufacturing Excellence</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our manufacturing facilities are equipped with state-of-the-art machinery 
                and operated by skilled technicians who bring decades of experience to 
                every product we create.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We follow strict quality control procedures and adhere to international 
                standards including DIN, ASTM, and ISO certifications. Every fastener 
                undergoes rigorous testing to ensure it meets our high standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">5000+</div>
                  <div className="text-gray-600 text-sm">SKUs in Stock</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">50k</div>
                  <div className="text-gray-600 text-sm">Sq.ft Warehouse</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SRK Bolt Manufacturing Process"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Why Choose SRK Bolt */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Why Choose SRK Bolt?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">25+ Years Experience</h3>
                <p className="text-gray-600 text-sm">Decades of expertise in fastener manufacturing and supply</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">Rigorous quality control and testing procedures</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Wide Product Range</h3>
                <p className="text-gray-600 text-sm">Comprehensive selection of fasteners for all applications</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Support</h3>
                <p className="text-gray-600 text-sm">Dedicated support team for all your fastener needs</p>
              </div>
            </div>
          </div>

          {/* Global Presence */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SRK Bolt Global Operations"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Global Presence</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                SRK Bolt has established a strong presence not only in India but also 
                in international markets. Our products are trusted by companies across 
                Asia, Europe, and the Middle East.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We maintain strategic partnerships with leading manufacturers worldwide 
                to ensure we can provide the best products and services to our global 
                clientele.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Countries Served</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Call to Action - Full Width */}
      <section className="bg-red-600 text-white py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Quality Fasteners?</h2>
          <p className="text-red-100 mb-6 text-lg max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who trust SRK Bolt for their fastener needs. 
            Contact us now for competitive pricing and reliable supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 border border-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold flex items-center justify-center">
              Get Quote →
            </button>
            <button className="bg-red-600 text-white border border-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}