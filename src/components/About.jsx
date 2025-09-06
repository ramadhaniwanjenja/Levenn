import React from 'react'
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We prioritize community needs and ensure our solutions are accessible and impactful for local populations.'
    },
    {
      icon: Globe,
      title: 'Sustainable Innovation',
      description: 'Our technologies are designed for long-term sustainability and environmental responsibility.'
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      description: 'We believe in partnerships and collaborative approaches to solve complex challenges.'
    },
    {
      icon: Award,
      title: 'Excellence in Delivery',
      description: 'We maintain the highest standards in all our products and services.'
    }
  ]


  return (
    <section id="about" className="space-y-0">
      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="gradient-text">Levenn</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a technology company dedicated to empowering communities across 
              Tanzania, East Africa, and Africa with innovative solutions in energy, 
              security, agriculture, and STEM education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Target className="text-primary-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Empowering communities across Tanzania, East Africa, and Africa at large with 
                innovative technologies in energy, security, and agriculture, while building 
                capacity in STEM education for sustainable development.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">We achieve this by:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Delivering affordable, accessible, and reliable clean energy solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developing IoT and robotics-based products for local challenges</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Providing STEM training, mentorship, and incubation programs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Eye className="text-primary-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  By 2030, Levenn will be the leading provider of reliable, smart, and 
                  accessible technological solutions in energy, security, and agriculture, 
                  transforming lives and driving Africa's transition to sustainable development.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Expansion Goals</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Establish Levenn platforms in East Africa by 2027</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expand to at least 10 African countries by 2030</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build partnerships with universities, governments, and NGOs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Values
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our impact in communities across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center space-y-6 group transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </section>
  )
}

export default About
