import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  )
}
