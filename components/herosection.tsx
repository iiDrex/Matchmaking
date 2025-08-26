"use client"

import { useState, useEffect } from "react"
import { Play, Users, Trophy, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationController } from "../controllers/navigationController"

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleEnterClick = () => {
    if (isClient) {
      const destination = NavigationController.handleEnterClick()
      console.log(`Navegando a: ${destination}`)
      alert(`Próximamente: ${destination}`)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          MATCH
          <span className="text-green-400">MAKING</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">Jugá donde quieras, con quien quieras.</p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Conectate con jugadores de tu ciudad, únete a partidos, organiza torneos y vive la pasión del fútbol como
          nunca antes.
        </p>

        <Button
          onClick={handleEnterClick}
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <Play className="w-6 h-6 mr-3" />
          ENTRAR
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div className="text-center">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
            <p className="text-gray-400">Jugadores Activos</p>
          </div>
          <div className="text-center">
            <Trophy className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-400">Torneos Organizados</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">25+</h3>
            <p className="text-gray-400">Ciudades Disponibles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
