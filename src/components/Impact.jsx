import React from 'react'
import { Users, Zap, GraduationCap, Sprout } from 'lucide-react'

const Impact = () => {
  const impactStats = [
    {
      icon: Users,
      number: '10K+',
      label: 'Households Target',
      description: 'Communities across Tanzania to benefit from clean energy',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      number: '5MW',
      label: 'Clean Energy Goal',
      description: 'Solar power capacity to be deployed by 2028',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: GraduationCap,
      number: '10K+',
      label: 'Students Training',
      description: 'Youth to be trained in STEM and technology skills',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Sprout,
      number: '5K+',
      label: 'Farmers Supported',
      description: 'Smallholder farmers with smart agriculture solutions',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-purple-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact Across <span className="text-yellow-400">East Africa</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming communities through innovative technology solutions that create lasting change
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center group hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-yellow-400 mb-3">
                {stat.label}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Be Part of the Change
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join us in creating a sustainable future for communities across East Africa
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-400/20 rounded-full animate-float animation-delay-4000"></div>
    </section>
  )
}

export default Impact
