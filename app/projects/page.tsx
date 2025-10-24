"use client"

import Layout from "@/components/Layout"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin, Calendar, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: "https://t3.ftcdn.net/jpg/05/63/45/42/240_F_563454220_FynShMBjneQXf1CAr5ZuWV9W9PHp6CrU.jpg",
      title: "Major Projects",
      subtitle: "Engineering Excellence Across Industries"
    },
    {
      id: 2,
      image: "https://t3.ftcdn.net/jpg/11/76/17/28/240_F_1176172880_IzGMvsCPxZToFlMagCegpgmWIakuUaFY.jpg",
      title: "Infrastructure Solutions",
      subtitle: "Building Tomorrow's Infrastructure Today"
    },
    {
      id: 3,
      image: "https://t4.ftcdn.net/jpg/01/33/57/65/240_F_133576505_MROPMEGANhhZgubxWSviz47sN21MVWbh.jpg",
      title: "Industrial Projects",
      subtitle: "Powering Industries with Quality Fasteners"
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
                alt="SRK Bolt Projects"
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

      {/* Projects Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Major Projects</h1>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              SRK Bolt has been proud to supply fasteners for numerous major infrastructure 
              and industrial projects across India and internationally. Our expertise spans 
              across multiple sectors, delivering quality solutions for complex engineering challenges.
            </p>
          </div>
          
          {/* Modern Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mumbai Metro Project */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/05/29/02/97/240_F_529029779_8wafyBb91UfdvEqiDcSZwfwc0U9vN993.jpg"
                  alt="Mumbai Metro Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Mumbai Metro</h3>
                  <p className="text-gray-200">Phase 2 & 3</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Infrastructure</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Mumbai Metro Rail Project</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Supplied high-tensile bolts and fasteners for the construction of Mumbai Metro 
                  Phase 2 and 3, ensuring structural integrity and safety in one of India's 
                  busiest transportation networks.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Mumbai, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2020-2023</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>

            {/* Chennai Port Project */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/04/73/64/76/240_F_473647693_nXQEwNVeUTTAVFSasg5rci7iYtpOTiJr.jpg"
                  alt="Chennai Port Expansion"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Chennai Port</h3>
                  <p className="text-gray-200">Expansion Project</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Marine</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Chennai Port Expansion</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Provided marine-grade fasteners and specialized bolts for the port expansion 
                  project, including container terminals and cargo handling facilities with 
                  corrosion-resistant solutions.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Chennai, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2019-2022</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>

            {/* Solar Power Plant Project */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/02/33/71/82/240_F_233718247_GoQZJTzziQ1Qp2S30kv8hac3pVzMs74y.jpg"
                  alt="Solar Power Plant"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Solar Power</h3>
                  <p className="text-gray-200">500MW Plant</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Renewable</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Rajasthan Solar Power Plant</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Supplied corrosion-resistant fasteners for the construction of a 500MW solar 
                  power plant, ensuring long-term durability in harsh desert conditions and 
                  extreme weather exposure.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Rajasthan, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2021-2023</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>

            {/* Automotive Manufacturing Project */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/05/63/45/42/240_F_563454220_FynShMBjneQXf1CAr5ZuWV9W9PHp6CrU.jpg"
                  alt="Automotive Manufacturing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Automotive</h3>
                  <p className="text-gray-200">Manufacturing Plant</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Automotive</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Automotive Manufacturing Plant</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Provided precision fasteners for a major automotive manufacturer's new plant, 
                  including specialized bolts for engine assembly and chassis construction with 
                  strict quality standards.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Pune, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2020-2022</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>

            {/* Oil Refinery Project */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/11/76/17/28/240_F_1176172880_IzGMvsCPxZToFlMagCegpgmWIakuUaFY.jpg"
                  alt="Oil Refinery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Oil Refinery</h3>
                  <p className="text-gray-200">Equipment Upgrade</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Petrochemical</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Petroleum Refinery Upgrade</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Supplied high-temperature resistant fasteners for refinery equipment upgrade, 
                  ensuring safety and reliability in critical petrochemical operations under 
                  extreme conditions.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Gujarat, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2018-2021</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>

            {/* Bridge Construction Project */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/01/33/57/65/240_F_133576505_MROPMEGANhhZgubxWSviz47sN21MVWbh.jpg"
                  alt="Bridge Construction"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Bridge</h3>
                  <p className="text-gray-200">Cable-Stayed</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Infrastructure</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Cable-Stayed Bridge Project</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Provided structural bolts and specialized fasteners for a major cable-stayed 
                  bridge construction, ensuring structural integrity and load-bearing capacity 
                  for heavy traffic.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Kerala, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2019-2022</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Project Statistics */}
          <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Project Statistics</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-red-600 mb-3">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-red-600 mb-3">25+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-red-600 mb-3">50+</div>
                <div className="text-gray-600 font-medium">Cities Served</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-red-600 mb-3">100%</div>
                <div className="text-gray-600 font-medium">Quality Assurance</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-red-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
            <p className="text-red-100 mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
              Join our portfolio of successful projects. Let SRK Bolt provide the quality 
              fasteners and engineering solutions your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-red-600 border border-red-600 px-10 py-4 rounded-lg hover:bg-red-50 transition-colors font-semibold text-lg flex items-center justify-center">
                Get Project Quote →
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
