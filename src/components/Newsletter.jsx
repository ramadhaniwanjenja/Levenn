import React, { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }, 1000)
  }

  return (
    <section className="bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {isSubscribed ? (
              <div className="p-8 lg:p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You for Subscribing!
                </h2>
                <p className="text-gray-600">
                  You'll receive updates about our latest innovations and community impact.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Mail className="text-primary-600" size={24} />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Stay Updated
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Join our community and get the latest updates on our innovative solutions, 
                      success stories from the field, and opportunities to get involved in 
                      transforming communities across East Africa.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Monthly innovation updates</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Community impact stories</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Early access to new programs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-primary-500 p-8 lg:p-12 flex items-center">
                  <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div>
                      <label htmlFor="newsletter-email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="newsletter-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300 focus:outline-none"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
                    </button>
                    
                    <p className="text-primary-100 text-xs text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter