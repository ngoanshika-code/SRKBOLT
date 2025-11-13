"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type BannerSlide = {
  _id?: string
  id?: number
  title: string
  subtitle?: string
  highlight?: string
  image: string
  order?: number
}

const FALLBACK_SLIDES: BannerSlide[] = [
  {
    id: 1,
    title: "Join Our Team",
    subtitle: "Build Your Career with SRK Bolt",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
]

export default function CareersBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState<BannerSlide[]>(FALLBACK_SLIDES)
  const [loadingSlides, setLoadingSlides] = useState(false)

  useEffect(() => {
    let isMounted = true
    const loadSlides = async () => {
      try {
        setLoadingSlides(true)
        const response = await fetch("/api/banners?page=careers")

        if (!response.ok) {
          throw new Error("Failed to fetch banners")
        }

        const data = await response.json()
        if (!isMounted) return

        if (Array.isArray(data) && data.length > 0) {
          const sanitizedSlides: BannerSlide[] = data
            .filter((item: BannerSlide) => item && typeof item.image === "string")
            .map((item: BannerSlide, index: number) => ({
              ...item,
              title: item.title?.trim() || `Slide ${index + 1}`,
              subtitle: item.subtitle?.trim() || "",
              highlight: item.highlight?.trim() || "",
            }))
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

          setSlides(sanitizedSlides)
        } else {
          setSlides(FALLBACK_SLIDES)
        }
      } catch (error) {
        console.error("Error loading banners:", error)
        if (isMounted) {
          setSlides(FALLBACK_SLIDES)
        }
      } finally {
        if (isMounted) {
          setLoadingSlides(false)
        }
      }
    }
    loadSlides()
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (slides.length === 0) {
      setCurrentSlide(0)
      return
    }
    setCurrentSlide((prev) => (prev >= slides.length ? 0 : prev))
  }, [slides.length])

  useEffect(() => {
    if (slides.length === 0) return
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    if (slides.length === 0) return
    setCurrentSlide((prev: number) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    if (slides.length === 0) return
    setCurrentSlide((prev: number) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-96 overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide._id ?? slide.id ?? index} className="w-full shrink-0 h-full relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
              <div>
                {slide.highlight && (
                  <span className="inline-flex items-center justify-center bg-white/15 px-4 py-1.5 rounded-full uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4">
                    {slide.highlight}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="text-white/80 text-lg max-w-2xl">
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={loadingSlides || slides.length <= 1}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        disabled={loadingSlides || slides.length <= 1}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  )
}

