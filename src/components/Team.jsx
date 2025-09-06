import React from 'react'

// Import team images
import andreaProfile from '../images/team/Andrea profile.jpg'
import brendaProfile from '../images/team/Brenda Profile.jpeg'
import shafiiProfile from '../images/team/Shafii profile.jpeg'
import silviaProfile from '../images/team/Silvia profile.jpeg'
import sharonProfile from '../images/team/Sharon profile.jpeg'

const Team = () => {
  const teamMembers = [
    {
      name: 'Eliamani Kiavi',
      role: 'CEO',
      image: shafiiProfile,
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      name: 'Shafii Ramadhani',
      role: 'CTO',
      image: shafiiProfile,
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Silvia Ruwocha',
      role: 'Communications',
      image: silviaProfile,
      gradient: 'from-green-400 to-green-600'
    },
    {
      name: 'Andrea Memba',
      role: 'Marketing',
      image: andreaProfile,
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Brenda Sanga',
      role: 'Operations',
      image: brendaProfile,
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Sharon Mushi',
      role: 'Customer Success',
      image: sharonProfile,
      gradient: 'from-teal-400 to-teal-600'
    }
  ]

  return (
    <section id="team" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="text-center space-y-6">
                {/* Profile Image with Gradient Border */}
                <div className="relative mx-auto">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full p-1 animate-pulse group-hover:animate-none transition-all duration-300`}>
                    <div className="bg-white rounded-full p-1">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-32 h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="w-36 h-36"></div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg">
                    {member.role}
                  </p>
                </div>

                {/* Social Links Placeholder */}
                <div className="flex justify-center space-x-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors cursor-pointer">
                    <span className="text-primary-600 text-sm">in</span>
                  </div>
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors cursor-pointer">
                    <span className="text-primary-600 text-sm">@</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              United by Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
              Our diverse leadership team brings together expertise in technology, business, 
              and community development to drive Levenn's vision of transforming lives 
              across Africa through innovative solutions.
            </p>
            
            {/* Values Tags */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              {[
                { label: 'Innovation', color: 'primary' },
                { label: 'Community Impact', color: 'green' },
                { label: 'Sustainability', color: 'purple' },
                { label: 'Excellence', color: 'orange' }
              ].map((value, index) => (
                <span 
                  key={index}
                  className={`bg-${value.color}-100 text-${value.color}-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-${value.color}-200 transition-colors duration-300 cursor-pointer`}
                >
                  {value.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Join Our Mission</h4>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision 
              of transforming communities through technology.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-300 transform hover:scale-105"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
