'use client'

import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    experience: 'signature',
    guests: '2',
    specialRequests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
  }

  return (
    <section id="book-tasting" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-[1px] bg-white/30" />
            <p className="font-poppins text-xs tracking-[0.3em] text-white/70 uppercase">Reserve</p>
            <div className="w-20 h-[1px] bg-white/30" />
          </div>

          <h2 className="font-cinzel font-light text-4xl text-white mb-6">
            Book Your Experience
          </h2>

          <p className="font-poppins font-light text-white/70 max-w-2xl mx-auto">
            Reserve your tasting experience online or call us at{' '}
            <a href="tel:7075550123" className="text-white hover:text-white/80 transition-colors">
              (707) 555-0123
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
                Experience
              </label>
              <select
                id="experience"
                required
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white focus:border-white/60 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="signature" className="bg-gray-900">Signature Tasting</option>
                <option value="reserve" className="bg-gray-900">Reserve Experience</option>
                <option value="vineyard" className="bg-gray-900">Vineyard & Cellar Tour</option>
                <option value="private" className="bg-gray-900">Private Event</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white focus:border-white/60 focus:outline-none transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
                Preferred Time
              </label>
              <select
                id="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white focus:border-white/60 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-900">Select a time</option>
                <option value="11:00" className="bg-gray-900">11:00 AM</option>
                <option value="11:30" className="bg-gray-900">11:30 AM</option>
                <option value="12:00" className="bg-gray-900">12:00 PM</option>
                <option value="12:30" className="bg-gray-900">12:30 PM</option>
                <option value="1:00" className="bg-gray-900">1:00 PM</option>
                <option value="1:30" className="bg-gray-900">1:30 PM</option>
                <option value="2:00" className="bg-gray-900">2:00 PM</option>
                <option value="2:30" className="bg-gray-900">2:30 PM</option>
                <option value="3:00" className="bg-gray-900">3:00 PM</option>
                <option value="3:30" className="bg-gray-900">3:30 PM</option>
                <option value="4:00" className="bg-gray-900">4:00 PM</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
                Number of Guests
              </label>
              <select
                id="guests"
                required
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white focus:border-white/60 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="1" className="bg-gray-900">1 Guest</option>
                <option value="2" className="bg-gray-900">2 Guests</option>
                <option value="3" className="bg-gray-900">3 Guests</option>
                <option value="4" className="bg-gray-900">4 Guests</option>
                <option value="5" className="bg-gray-900">5 Guests</option>
                <option value="6" className="bg-gray-900">6 Guests</option>
                <option value="7" className="bg-gray-900">7 Guests</option>
                <option value="8" className="bg-gray-900">8 Guests</option>
                <option value="9+" className="bg-gray-900">9+ Guests (Contact Us)</option>
              </select>
            </div>

            {/* Placeholder div for grid alignment */}
            <div></div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <label htmlFor="requests" className="block font-poppins text-xs tracking-wider text-white/70 uppercase mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              id="requests"
              rows={3}
              value={formData.specialRequests}
              onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors resize-none"
              placeholder="Dietary restrictions, celebrations, accessibility needs..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-gray-900 px-12 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-white/90 transition-all duration-300"
            >
              Submit Reservation
            </button>
          </div>
        </form>

        {/* Cancellation Policy */}
        <div className="text-center mt-8">
          <p className="font-poppins text-xs text-white/50">
            Cancellations must be made at least 24 hours in advance.
            For groups of 6 or more, 48 hours notice is required.
          </p>
        </div>
      </div>
    </section>
  )
}