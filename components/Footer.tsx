import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-700 font-bold text-xl">C</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Clínica Salud Integral</h2>
                <p className="text-sm text-gray-400">Cuidando tu bienestar</p>
              </div>
            </div>
            <p className="text-gray-400">
              Ofrecemos atención médica integral con profesionales calificados y tecnología de última generación.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500" />
                <span>info@clinicasaludintegral.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-500" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Horario de Atención</h4>
              <p className="text-gray-400 text-sm">Lun-Vie: 8:00 - 20:00</p>
              <p className="text-gray-400 text-sm">Sábado: 9:00 - 14:00</p>
              <p className="text-gray-400 text-sm">Domingo: Urgencias 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clínica Salud Integral. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}