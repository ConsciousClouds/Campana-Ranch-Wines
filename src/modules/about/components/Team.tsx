'use client'

import Image from 'next/image'

const teamMembers = [
  {
    name: 'Marco Campana',
    role: 'Winemaker & Owner',
    bio: 'Third-generation winemaker carrying forward the family legacy with innovation and respect for tradition.',
    image: '/vineyard-hero.png'
  },
  {
    name: 'Sofia Campana',
    role: 'Vineyard Manager',
    bio: 'Oversees our sustainable farming practices and ensures every vine reaches its full potential.',
    image: '/vineyard-hero.png'
  },
  {
    name: 'James Chen',
    role: 'Cellar Master',
    bio: 'Brings 20 years of experience in premium wine production and barrel management.',
    image: '/vineyard-hero.png'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Hospitality Director',
    bio: 'Creates memorable experiences for our guests and oversees our wine club program.',
    image: '/vineyard-hero.png'
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-[1px] bg-gray-300" />
            <p className="font-poppins text-xs tracking-[0.3em] text-gray-500 uppercase">The Team</p>
            <div className="w-20 h-[1px] bg-gray-300" />
          </div>

          <h2 className="font-cinzel font-light text-4xl md:text-5xl text-gray-900 mb-6">
            Our People
          </h2>

          <p className="font-poppins font-light text-gray-600 max-w-3xl mx-auto">
            Behind every bottle is a dedicated team passionate about
            creating wines that honor our heritage and delight our guests.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-xl text-gray-900">
                  {member.name}
                </h3>
                <p className="font-poppins text-xs tracking-wider text-wine-600 uppercase">
                  {member.role}
                </p>
                <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}