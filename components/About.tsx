import { CheckCircle, Award, Users, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Image placeholder */}
          <div className="relative">
            <div className="bg-primary-100 rounded-2xl h-96 lg:h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-200 rounded-full -mb-32 -mr-16"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary-200 rounded-full -mt-16 -ml-8"></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Award className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Certificación</h4>
                  <p className="text-gray-600 text-sm">ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Más de 25 años cuidando de <span className="text-primary-600">tu salud</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              En Clínica Salud Integral nos dedicamos a proporcionar atención médica 
              de excelencia con un enfoque humano y personalizado. Nuestro equipo de 
              profesionales está comprometido con tu bienestar.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Equipo médico altamente calificado',
                'Tecnología médica de última generación',
                'Atención personalizada 24/7',
                'Amplia cobertura de seguros médicos'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary-500" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Users className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">50+</h4>
                    <p className="text-sm text-gray-600">Especialistas</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-secondary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">25+</h4>
                    <p className="text-sm text-gray-600">Años de Experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}