import Layout from "@/components/Layout"
import { getCollection } from "@/lib/mongodb"
import { Briefcase, Users, TrendingUp, BookOpen, ArrowRight, CheckCircle } from "lucide-react"

export const dynamic = "force-dynamic"

type Opening = {
  id: string
  title: string
  employmentType: string
  location: string
  experience: string
  description: string
  icon?: string
  gradient?: string
}

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Career advancement and skill development programs",
  },
  {
    icon: Users,
    title: "Competitive Benefits",
    description: "Attractive salary packages and comprehensive benefits",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative and supportive work culture",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Training programs and industry certifications",
  },
]

const processSteps = [
  { number: 1, title: "Apply Online", description: "Submit your application through our online portal" },
  { number: 2, title: "Initial Screening", description: "HR team reviews your application and qualifications" },
  { number: 3, title: "Interview Process", description: "Technical and HR interviews with our team" },
  { number: 4, title: "Job Offer", description: "Successful candidates receive job offers" },
]

const iconMap: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  "check-circle": CheckCircle,
  "trending-up": TrendingUp,
  users: Users,
  "book-open": BookOpen,
}

const DEFAULT_GRADIENT = "from-red-500 to-red-600"

async function fetchOpenings(): Promise<Opening[]> {
  try {
    const collection = await getCollection("openings")
    const documents = await collection.find({}).sort({ createdAt: -1 }).toArray()

    return documents.map((doc: any, index: number) => ({
      id: doc._id?.toString() ?? `opening-${index}`,
      title: doc.title ?? "Untitled Role",
      employmentType: doc.employmentType ?? "Full-time",
      location: doc.location ?? "Not specified",
      experience: doc.experience ?? "Not specified",
      description: doc.description ?? "",
      icon: doc.icon ?? "briefcase",
      gradient: doc.gradient ?? DEFAULT_GRADIENT,
    }))
  } catch (error) {
    console.error("Error loading openings:", error)
    return []
  }
}

export default async function CareersPage() {
  const jobOpenings = await fetchOpenings()

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-gray-900 via-red-900 to-gray-900 text-white py-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Shape Your Future at SRK Bolt
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Join India&apos;s leading fastener solutions provider and grow your career with us. We&apos;re looking for talented
              individuals to join our dynamic team.
            </p>
            <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Explore Opportunities
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Current Openings */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
                <div className="w-20 h-1 bg-linear-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                <p className="text-gray-600 text-lg mt-4">Find the perfect role for your career</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {jobOpenings.length === 0 ? (
                  <div className="md:col-span-2 text-center py-12 border border-dashed border-gray-200 rounded-2xl">
                    <h3 className="text-xl font-semibold text-gray-700">No openings available right now</h3>
                    <p className="mt-2 text-gray-500">
                      We&apos;re not actively hiring for new roles. Check back soon or drop us your CV at{' '}
                      <a href="mailto:careers@srkbolt.com" className="text-[#A02222] font-semibold">
                        careers@srkbolt.com
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  jobOpenings.map((job) => {
                    const IconComponent = iconMap[job.icon ?? "briefcase"] || Briefcase
                    const gradient = job.gradient ?? DEFAULT_GRADIENT

                    return (
                      <div
                        key={job.id}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 transform hover:-translate-y-2"
                      >
                        <div className={`h-1 bg-linear-to-r ${gradient}`}></div>
                        <div className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-linear-to-br ${gradient} text-white`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                              {job.employmentType}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <p className="text-gray-600 mb-6 line-clamp-2">{job.description}</p>

                          <div className="flex gap-4 mb-6">
                            <div className="flex-1">
                              <p className="text-sm text-gray-500 font-semibold">LOCATION</p>
                              <p className="text-gray-900 font-semibold">{job.location}</p>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-500 font-semibold">EXPERIENCE</p>
                              <p className="text-gray-900 font-semibold">{job.experience}</p>
                            </div>
                          </div>

                          <button className="w-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-linear-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
                <div className="w-20 h-1 bg-linear-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon
                  return (
                    <div
                      key={idx}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:border-red-200 transform hover:-translate-y-1"
                    >
                      <div className="w-16 h-16 bg-linear-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
                <div className="w-20 h-1 bg-linear-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    {idx < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-linear-to-r from-red-500 to-red-200"></div>
                    )}

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 bg-linear-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                      <p className="text-gray-600 text-sm text-center">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Team?</h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Send us your resume and cover letter, or contact our HR department. We look forward to hearing from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@srkbolt.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 font-bold transition-all transform hover:scale-105"
                >
                  Email us
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+971588713064"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 font-bold transition-all transform hover:scale-105"
                >
                  +971 58 871 3064
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
