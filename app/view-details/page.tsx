"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Layout from "@/components/Layout"
import { 
  ChevronLeft, 
  ChevronRight,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Zap,
  Check
} from "lucide-react"

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Sample fastener product data inspired by Husaini Brothers
  const product = {
    id: 1,
    name: "DIN 933 / 931 Hexagon Bolt",
    category: "BOLTS",
    price: 2499,
    originalPrice: 3499,
    inStock: true,
    stockCount: 45,
    rating: 4.8,
    reviews: 127,
    images: [
      "https://www.husainibrothers.com/cdn/images/200/5921504842_1635755736.jpg",
      "https://www.husainibrothers.com/cdn/images/200/5921504842_1635755736.jpg",
      "https://www.husainibrothers.com/cdn/images/200/5921504842_1635755736.jpg",
    ],
    description: "Premium quality DIN 933/931 Hexagon Bolts suitable for industrial and construction applications.",
    specifications: {
      standard: "DIN 933 / 931",
      material: "Steel / Stainless Steel",
      grades: ["Grade 4.6", "Grade 8.8", "Grade 10.9"],
      sizes: ["M6 to M42"],
      coating: ["Zinc Plated", "Hot Dip Galvanized", "Black"],
      tensileStrength: "High Strength",
    },
    features: [
      "Precision engineered for perfect fit",
      "Meets international standards",
      "Available in multiple grades",
      "Corrosion resistant options",
      "Bulk quantities available",
      "Fast delivery",
    ],
    uses: [
      "Construction & Structural Steel",
      "Industrial Manufacturing",
      "Oil & Petrochemical",
      "Automotive Industry",
      "Infrastructure Projects",
    ],
    badges: ["ISO Certified", "Made to Last", "Premium Quality"],
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Layout>
      <div className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-red-600">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-red-600">Products</a>
            <span>/</span>
            <a href="/bolts" className="hover:text-red-600">{product.category}</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    className="h-96 w-96 object-contain"
                  />
                </div>

                {/* Navigation Buttons */}
                {product.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.badges.map((badge, i) => (
                    <span key={i} className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square rounded-lg border-2 overflow-hidden transition-all ${
                        selectedImage === idx 
                          ? "border-red-600 shadow-lg" 
                          : "border-gray-200 hover:border-red-600"
                      }`}
                    >
                      <img src={image} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Information */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    In Stock: {product.stockCount}
                  </span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Zap key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-800">{product.rating}</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600 font-medium">Standard:</span>
                    <span className="text-gray-900">{product.specifications.standard}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600 font-medium">Material:</span>
                    <span className="text-gray-900">{product.specifications.material}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600 font-medium">Sizes:</span>
                    <span className="text-gray-900">{product.specifications.sizes[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Grades:</span>
                    <span className="text-gray-900">{product.specifications.grades.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Actions */}
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">−</button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-l border-r border-gray-300 py-2"
                    />
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg flex items-center justify-center gap-2" onClick={() => window.location.href = '/rfq'}>
                  <ShoppingCart className="w-5 h-5" />
                  Add to RFQ
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">Free Shipping</p>
                  <p className="text-xs text-gray-600">Over ₹2,499</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">Secure Payment</p>
                  <p className="text-xs text-gray-600">SSL Encrypted</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">30-Day Returns</p>
                  <p className="text-xs text-gray-600">No Questions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="uses">Uses & Applications</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Material Specifications:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Available in steel or stainless steel options</li>
                    <li>• Multiple coating options: Zinc Plated, Hot Dip Galvanized, Black</li>
                    <li>• High tensile strength for demanding applications</li>
                    <li>• Meets international quality standards</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="uses" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Ideal For</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.uses.map((use, i) => (
                    <div key={i} className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                      <Award className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-800">{use}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Shipping & Returns</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-bold mb-2">Shipping:</h4>
                    <p>Free shipping on orders over ₹2,499. Standard delivery takes 5-7 business days.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Returns:</h4>
                    <p>30-day return policy with no questions asked. Products must be in original condition.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Warranty:</h4>
                    <p>All products come with manufacturer's warranty. Contact us for warranty details.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  )
}
