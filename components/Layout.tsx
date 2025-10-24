import TopBar from "@/components/TopBar"
import MainHeader from "@/components/MainHeader"
import ProductCategoriesNav from "@/components/ProductCategoriesNav"
import Footer from "@/components/Footer"

interface LayoutProps {
  children: React.ReactNode
  showProductNav?: boolean
}

export default function Layout({ children, showProductNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <MainHeader />
      {showProductNav && <ProductCategoriesNav />}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
