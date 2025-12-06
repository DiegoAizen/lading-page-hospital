import { Stethoscope, Microscope, Brain, Heart, Baby, Syringe, Eye, Tooth } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Medicina General',
    description: 'Consulta médica general, diagnóstico y tratamiento de enfermedades comunes.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Heart,
    title: 'Cardiología',
    description: 'Evaluación y tratamiento de enfermedades del corazón y sistema cardiovascular.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Brain,
    title: 'Neurología',
    description: 'Diagnóstico y tratamiento de trastornos del sistema nervioso.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Baby,
    title: 'Pediatría',
    description: 'Cuidado integral de la salud infantil desde el nacimiento hasta la adolescencia.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Microscope,
    title: 'Laboratorio Clínico',
    description: 'Análisis clínicos y pruebas diagnósticas con tecnología avanzada.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Syringe,
    title: 'Vacunación',
    description: 'Programa completo de vacunación para todas las edades.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Eye,
    title: 'Oftalmología',
    description: 'Exámenes de la vista, diagnóstico y tratamiento de enfermedades oculares.',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: Tooth,
    title: 'Odontología',
    description: 'Cuidado dental integral, limpiezas, tratamientos y ortodoncia.',
    color: 'bg-teal-100 text-teal-600'
  }
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-primary-600">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos con profesionales especializados 
            y equipamiento de última tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Ver Todos los Servicios
          </button>
        </div>
      </div>
    </section>
  )
}