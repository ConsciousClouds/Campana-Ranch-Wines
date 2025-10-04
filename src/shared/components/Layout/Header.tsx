'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@config/constants'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const isWineDetailPage = pathname?.startsWith('/wines/')

  // Reset scroll state when route changes
  useEffect(() => {
    setIsScrolled(false)
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Check background brightness at header position
      const headerHeight = 100
      const samplePoints = 5
      let darkPixels = 0

      // Simple check: if we're past the hero section, assume light background
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsDarkBackground(false)
      } else {
        // In hero section, assume dark background
        setIsDarkBackground(true)
      }
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navigation = [
    { name: 'Wines', href: ROUTES.WINES },
    { name: 'Club', href: ROUTES.CLUB },
    { name: 'Visit', href: ROUTES.VISIT },
    { name: 'Events', href: ROUTES.EVENTS },
    { name: 'Story', href: ROUTES.ABOUT },
    { name: 'Contact', href: ROUTES.CONTACT },
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled || isWineDetailPage
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
        : isDarkBackground
          ? 'bg-gradient-to-b from-black/30 via-black/10 to-transparent'
          : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-32'
        }`}>
          {/* Logo with Elegant Animation - Adaptive based on background */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group relative">
              <div className="relative transform transition-all duration-500 group-hover:scale-105">
                {/* Light logo for dark backgrounds */}
                <Image
                  src="/campana-logo-light.png"
                  alt="Campana Ranch Wines"
                  width={280}
                  height={130}
                  className={`transition-all duration-500 ${
                    isScrolled ? 'h-10 w-auto' : 'h-24 w-auto'
                  } filter drop-shadow-sm group-hover:drop-shadow-md ${
                    isDarkBackground && !isScrolled && !isWineDetailPage ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  priority
                />
                {/* Regular logo for light backgrounds */}
                <Image
                  src="/campana-logo.png"
                  alt="Campana Ranch Wines"
                  width={280}
                  height={130}
                  className={`transition-all duration-500 ${
                    isScrolled ? 'h-10 w-auto' : 'h-24 w-auto'
                  } filter drop-shadow-sm group-hover:drop-shadow-md ${
                    isDarkBackground && !isScrolled && !isWineDetailPage ? 'opacity-0 absolute' : 'opacity-100'
                  }`}
                  priority
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-gold-400/20 to-gold-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:gap-2 xl:gap-4 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-3 xl:px-5 py-6 flex items-center"
                style={{
                  animation: pathname === item.href ? 'navPulse 0.5s ease-out' : '',
                }}
              >
                {/* Main Text - Smaller and cleaner */}
                <span className={`font-cinzel font-medium text-[13px] xl:text-[14px] tracking-[0.15em] transition-all duration-300 ${
                  pathname === item.href
                    ? isDarkBackground && !isScrolled && !isWineDetailPage
                      ? 'text-gold-400'
                      : 'text-wine-600'
                    : isDarkBackground && !isScrolled && !isWineDetailPage
                      ? 'text-white group-hover:text-white/80'
                      : 'text-gray-800 group-hover:text-wine-600'
                }`}>
                  {item.name.toUpperCase()}
                </span>
                {/* Minimal underline - shows on active page */}
                <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-[1px] transition-all duration-300 ${
                  pathname === item.href
                    ? 'w-3/4'
                    : 'w-0 group-hover:w-3/4'
                } ${
                  isDarkBackground && !isScrolled && !isWineDetailPage
                    ? 'bg-white/50'
                    : 'bg-wine-600'
                }`}></span>
              </Link>
            ))}

          </div>

          {/* Account and Cart - Aligned Right */}
          <div className="hidden lg:flex lg:items-center lg:gap-2 ml-auto">
            {/* Account with elegant hover */}
            <Link
              href={ROUTES.ACCOUNT}
              className={`relative p-3 transition-all duration-500 group ${
                isDarkBackground && !isScrolled && !isWineDetailPage
                  ? 'text-[#fdfbf8] hover:text-gold-400'
                  : 'text-gray-700 hover:text-wine-600'
              }`}
              aria-label="Account"
            >
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </Link>

            {/* Cart with luxury badge */}
            <Link
              href={ROUTES.CART}
              className={`relative p-3 transition-all duration-500 group ${
                isDarkBackground && !isScrolled && !isWineDetailPage
                  ? 'text-[#fdfbf8] hover:text-gold-400'
                  : 'text-gray-700 hover:text-wine-600'
              }`}
              aria-label="Cart"
            >
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-gradient-to-br from-wine-500 to-wine-700 text-[11px] text-white flex items-center justify-center font-cinzel font-medium shadow-lg">
                0
              </span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-gray-700 hover:text-wine-700 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-center">
                <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-2'
                }`}></span>
                <span className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Elegant Slide */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-4 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-cinzel font-semibold text-lg text-gray-800 group-hover:text-wine-600 transition-colors duration-300">
                  {item.name.toUpperCase()}
                </span>
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 px-4">
              <div className="flex items-center justify-between mb-4">
                <Link
                  href={ROUTES.ACCOUNT}
                  className="flex items-center text-gray-700 hover:text-wine-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Account
                </Link>
                <Link
                  href={ROUTES.CART}
                  className="flex items-center text-gray-700 hover:text-wine-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Cart (0)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}