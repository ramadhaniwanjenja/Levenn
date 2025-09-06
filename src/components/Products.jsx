import React from 'react'
import { Zap, GraduationCap, Sprout, Shield, ArrowRight, CheckCircle } from 'lucide-react'

// Import solution images
import levpawaImage from '../images/solution/LevPawa product.png'
import levagriImage from '../images/solution/levagri.png'
import levsecuImage from '../images/solution/levsecu.png'

const Products = () => {
  const products = [
    {
      id: 'levpawa',
      icon: Zap,
      title: 'Levpawa',
      subtitle: 'Clean Energy Solutions',
      description: 'Solar-powered systems that replace generators, kerosene lamps, and unreliable grid power with affordable, accessible clean energy.',
      image: levpawaImage,
      features: [
        'AC 240V backup energy solutions',
        'Suitable for households, businesses, and schools',
        'Reliable and maintenance-friendly design',
        'Affordable pricing for local communities'
      ],
      goals: [
        'Reach 10,000 households by 2028',
        'Expand across Tanzania and East Africa',
        'Replace traditional energy sources'
      ],
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'levstem',
      icon: GraduationCap,
      title: 'LevSTEM',
      subtitle: 'STEM Education & Training',
      description: 'Comprehensive STEM training programs in robotics, IoT, and coding to prepare youth for future technology careers.',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Hands-on robotics workshops',
        'IoT development training',
        'Coding bootcamps and mentorship',
        'Startup incubation programs'
      ],
      goals: [
        'Train 10,000 students by 2030',
        'Establish STEM hubs across East Africa',
        'Mentor 100+ youth-led startups'
      ],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'smart-agriculture',
      icon: Sprout,
      title: 'Smart Agriculture',
      subtitle: 'IoT Farming Solutions',
      description: 'IoT-based smart irrigation and crop monitoring systems designed to support smallholder farmers with affordable technology.',
      image: levagriImage,
      features: [
        'Automated irrigation systems',
        'Crop health monitoring sensors',
        'Weather prediction integration',
        'Market access platforms'
      ],
      goals: [
        'Support 5,000+ farmers by 2030',
        'Increase crop yields by 30%',
        'Provide market access tools'
      ],
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'ai-security',
      icon: Shield,
      title: 'AI Security Systems',
      subtitle: 'Smart Surveillance Solutions',
      description: 'AI-driven surveillance and monitoring devices designed specifically for African communities with low-cost, easy installation.',
      image: levsecuImage,
      features: [
        'AI-powered threat detection',
        'Mobile app integration',
        'Solar-powered options',
        'Community alert systems'
      ],
      goals: [
        'Enhance urban and rural safety',
        'Partner with local governments',
        'Affordable security for all communities'
      ],
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="products" className="space-y-0">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions addressing energy, education, 
              agriculture, and security challenges across East Africa.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <product.icon size={32} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-white/90 text-lg">{product.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Key Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Goals */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Impact Goals</h4>
                    <ul className="space-y-3">
                      {product.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 inline-flex items-center justify-center group transform hover:scale-105">
                    Learn More
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Community?</h3>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of communities across East Africa already benefiting from our innovative solutions.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Products
