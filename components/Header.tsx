import { Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-primary-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">Av. Principal 123, Ciudad</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span className="text-sm">Lun-Vie: 8:00 - 20:00 | Sáb: 9:00 - 14:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-700">Clínica Salud Integral</h1>
              <p className="text-sm text-gray-600">Cuidando tu bienestar</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="#servicios" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contacto
            </Link>
            <button className="btn-primary">
              Pedir Cita
            </button>
          </nav>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}