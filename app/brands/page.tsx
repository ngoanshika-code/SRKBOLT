"use client"

import Layout from "@/components/Layout"
import Image from "next/image"
import { useMemo } from "react"
import { BadgeCheck, Factory, Globe2, Leaf, ShieldCheck, Sparkles } from "lucide-react"

type Brand = {
  name: string
  logo: string
  description: string
  regions: string[]
  specialties: string[]
  highlights: string[]
}

const CORE_BRANDS: Brand[] = [
  {
    name: "SRK Bolt Industries",
    logo: "/logoSRK.jpeg",
    description:
      "Our flagship brand delivering premium fasteners, customized engineering components, and turnkey fastening solutions for complex industrial applications.",
    regions: ["India", "Middle East", "Africa", "Europe"],
    specialties: ["High-tensile bolts", "Custom machining", "OEM partnerships", "Bulk industrial supply"],
    highlights: [
      "25+ years of fastener manufacturing heritage",
      "In-house engineering and quality assurance labs",
      "Capability to produce metric, imperial, and specialty grades",
    ],
  },
  {
    name: "Savron Fasteners",
    logo: "/savron-logo.png",
    description:
      "Savron offers corrosion-resistant fastening hardware designed for marine, petrochemical, and outdoor installations where durability is essential.",
    regions: ["GCC", "India", "South East Asia"],
    specialties: ["Stainless steel components", "Hot-dip galvanized assemblies", "Marine-grade fasteners"],
    highlights: [
      "Extended lifecycle tested in salt-spray environments",
      "Compliant with ASTM, DIN, ISO, and EN standards",
      "Fast-track production for urgent shutdown requirements",
    ],
  },
]

const PARTNER_BRANDS: Brand[] = [
  {
    name: "TorqueMaster™",
    logo: "/placeholder-logo.svg",
    description:
      "TorqueMaster delivers precision torque solutions including tension control bolts, structural bolts, and heavy-duty assemblies for infrastructure projects.",
    regions: ["Global"],
    specialties: ["Structural fasteners", "Torque control systems", "Bridge and rail projects"],
    highlights: [
      "Certified for high-load structural connections",
      "Integrated inspection documentation and traceability",
      "Preferred supplier for EPC contractors",
    ],
  },
  {
    name: "EvoGrip™",
    logo: "/placeholder-logo.png",
    description:
      "Innovative anchoring, rivet, and attachment products engineered to perform in dynamic load environments across automotive, aerospace, and energy segments.",
    regions: ["EMEA", "APAC"],
    specialties: ["Blind rivets", "Locking mechanisms", "Vibration resistant solutions"],
    highlights: [
      "Lightweight, high-strength alloys for mobility applications",
      "Vibration and impact tested for extreme environments",
      "Rapid prototyping support for R&D teams",
    ],
  },
]

export default function BrandsPage() {
  const allBrands = useMemo(() => [...CORE_BRANDS, ...PARTNER_BRANDS], [])

  return (
    <Layout>
      <section className="relative h-96 bg-linear-to-br from-[#2E1F44] via-[#24163A] to-[#1C1233] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full uppercase tracking-[0.3em] text-sm font-semibold">
            <BadgeCheck className="w-4 h-4" />
            Trusted Brands
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Strategic Brands & Partners Delivering Consistent Quality
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            We collaborate with globally respected manufacturers to ensure every fastening solution aligns with stringent
            performance, safety, and compliance benchmarks.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F7F7FA]">
        <div className="container mx-auto px-4 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2E1F44]">Our Brand Ecosystem</h2>
            <p className="text-[rgba(46,31,68,0.8)]">
              From in-house labels to strategic alliances, each brand is curated to cover critical industry demands—whether
              it is construction, oil & gas, heavy machinery, marine, or renewables.
            </p>
          </div>

          <div className="grid gap-12">
            {allBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-2xl shadow-[0_12px_30px_rgba(46,31,68,0.08)] overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 bg-[#F1EFFA] flex items-center justify-center p-8">
                  <div className="relative w-48 h-48">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="(max-width: 768px) 200px, 240px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-10 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E1F44]">{brand.name}</h3>
                    <p className="mt-3 text-[#2E1F44]/80 leading-relaxed">{brand.description}</p>
                  </div>

                  <div className="grid gap-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#2E1F44]/70">
                      <div className="inline-flex items-center gap-2 bg-[#FCE9E9] text-[#A02222] px-3 py-1 rounded-full uppercase tracking-wide">
                        <Globe2 className="w-4 h-4" />
                        {brand.regions.join(" • ")}
                      </div>
                      {brand.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center gap-1 bg-white border border-[#E4E1F0] px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          <Sparkles className="w-3 h-3 text-[#A02222]" />
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {brand.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 bg-[#F7F7FA] rounded-xl p-4 border border-[#E4E1F0]"
                        >
                          <ShieldCheck className="w-5 h-5 text-[#A02222] shrink-0 mt-0.5" />
                          <p className="text-sm text-[#2E1F44]/80 leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Certified Manufacturing",
                description:
                  "Every partnered facility adheres to ISO, ASTM, and EN quality standards with routine audits to ensure compliance.",
                icon: Factory,
              },
              {
                title: "Sustainable Sourcing",
                description:
                  "Adoption of eco-friendly coatings, recyclable packaging, and responsible sourcing initiatives across the supply chain.",
                icon: Leaf,
              },
              {
                title: "Global Logistics Support",
                description:
                  "Dedicated export desks to coordinate multi-country shipments, documentation, and customs compliance.",
                icon: Globe2,
              },
              {
                title: "Engineering Collaboration",
                description:
                  "Joint R&D programs with OEMs to iterate new fastening technologies and tailor-made assemblies.",
                icon: Sparkles,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-[#F7F7FA] rounded-2xl p-6 shadow-[0_8px_20px_rgba(46,31,68,0.08)] border border-[#E4E1F0]"
              >
                <div className="w-12 h-12 rounded-full bg-[#A02222]/12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#A02222]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E1F44] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#2E1F44]/75 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#A02222] text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Become a Preferred Partner</h2>
          <p className="text-white/85 max-w-3xl mx-auto">
            If you are a manufacturer or technology provider seeking long-term distribution and project collaboration, connect
            with the SRK Bolt alliances team to explore strategic opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#A02222] px-8 py-3 rounded-lg font-semibold border border-white hover:bg-[#2E1F44] hover:text-white transition-colors"
            >
              Talk to Our Team
            </a>
            <a
              href="mailto:sales@srkbolt.com"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#A02222] transition-colors"
            >
              Propose a Partnership
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

