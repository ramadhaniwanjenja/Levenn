import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Arusha, Tanzania', 'East Africa'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['levenntech@gmail.com', 'brendasanga4213@gmail.com'],
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+255 693608730', 'Mon-Fri 8AM-6PM EAT'],
      color: 'text-purple-600'
    }
  ]

  const inquiryTypes = [
    {
      icon: Users,
      title: 'Partnership Opportunities',
      description: 'Collaborate with us to expand our impact across Africa'
    },
    {
      icon: Clock,
      title: 'Product Information',
      description: 'Learn more about our energy, agriculture, and education solutions'
    },
    {
      icon: CheckCircle,
      title: 'Support & Services',
      description: 'Get help with existing products or technical support'
    }
  ]

  return (
    <section id="contact" className="space-y-0">
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="max-w-md w-full mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center space-y-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Let's work together to transform communities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto`}>
                  <info.icon className={info.color} size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Inquiry Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Send us a Message</h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="support">Technical Support</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Inquiry Types */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">How Can We Help?</h3>
                <p className="text-gray-600">
                  We're here to assist with various types of inquiries and partnerships.
                </p>
              </div>

              <div className="space-y-6">
                {inquiryTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="text-primary-600" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-gray-900">{type.title}</h4>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="text-primary-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">Response Time</h4>
                </div>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Visit Our Office</h3>
            <p className="text-gray-600">Located in the heart of Arusha, Tanzania</p>
          </div>
          
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto" />
              <p className="text-gray-500">Interactive map coming soon</p>
              <p className="text-sm text-gray-400">Arusha, Tanzania</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contact
