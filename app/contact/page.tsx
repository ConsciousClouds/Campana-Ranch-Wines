'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section - Minimal and elegant */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/vineyard-hero.png"
            alt="Campana Ranch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-[1px] bg-white/30" />
            <p className="font-poppins text-xs tracking-[0.3em] text-white/70 uppercase">Connect</p>
            <div className="w-20 h-[1px] bg-white/30" />
          </div>

          <h1 className="font-cinzel font-light text-5xl md:text-7xl mb-6 tracking-wide">
            Contact
          </h1>

          <p className="font-poppins font-light text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto tracking-wide">
            We would love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="font-cinzel font-light text-3xl text-gray-900 mb-8">Visit Our Estate</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg className="w-5 h-5 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                        123 Vineyard Lane<br />
                        Sonoma Valley, CA 95476
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg className="w-5 h-5 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins text-sm text-gray-600">
                        (707) 555-0123
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg className="w-5 h-5 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins text-sm text-gray-600">
                        info@campanaranchwines.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-cinzel font-light text-2xl text-gray-900 mb-6">Tasting Room Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-poppins text-sm text-gray-600">Thursday - Monday</span>
                    <span className="font-poppins text-sm text-gray-800">11:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins text-sm text-gray-600">Tuesday - Wednesday</span>
                    <span className="font-poppins text-sm text-gray-800">By Appointment</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-cinzel font-light text-2xl text-gray-900 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-wine-600 hover:text-wine-600 text-gray-600 transition-all">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-wine-600 hover:text-wine-600 text-gray-600 transition-all">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/60 p-10">
              <h2 className="font-cinzel font-light text-3xl text-gray-900 mb-8">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-poppins text-xs tracking-wider text-gray-600 uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-wine-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-poppins text-xs tracking-wider text-gray-600 uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-wine-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-poppins text-xs tracking-wider text-gray-600 uppercase mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-wine-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-poppins text-xs tracking-wider text-gray-600 uppercase mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-wine-600 focus:outline-none transition-colors bg-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="tasting">Tasting Reservation</option>
                      <option value="events">Private Events</option>
                      <option value="club">Wine Club</option>
                      <option value="order">Order Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-poppins text-xs tracking-wider text-gray-600 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-wine-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 font-poppins text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-poppins text-sm text-gray-600 mb-4">Interactive map would go here</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-400 px-6 py-2 font-poppins text-xs tracking-wider uppercase text-gray-700 hover:bg-gray-100 transition-colors"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}