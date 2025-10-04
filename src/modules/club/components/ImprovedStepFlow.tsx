'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import ShipmentSelector from './shipment/ShipmentSelector'
import ShipmentCustomizer from './shipment/ShipmentCustomizer'
import OrderSummary from './shipment/OrderSummary'
import { shipmentService } from '../services/shipmentService'
import { Shipment, ShipmentPreferences } from '../types/shipment'

interface Step {
  id: number
  title: string
  completed: boolean
}

export default function ImprovedStepFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [editingStep, setEditingStep] = useState<number | null>(null)
  const [selectedBottles, setSelectedBottles] = useState<number | null>(null)
  const [shipment, setShipment] = useState<Shipment | null>(null)
  const [preferences, setPreferences] = useState<ShipmentPreferences>({})
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, title: 'Choose Size', completed: false },
    { id: 2, title: 'Your Wines', completed: false },
    { id: 3, title: 'Preferences', completed: false },
    { id: 4, title: 'Review', completed: false }
  ])

  const step1Ref = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)
  const step4Ref = useRef<HTMLDivElement>(null)

  const bottleOptions = [
    {
      bottles: 3,
      label: 'Starter',
      price: 180,
      description: 'Perfect for exploring our wines',
      perBottle: 60
    },
    {
      bottles: 6,
      label: 'Enthusiast',
      price: 360,
      popular: true,
      description: 'Our most popular choice',
      perBottle: 60
    },
    {
      bottles: 12,
      label: 'Collector',
      price: 720,
      description: 'Best value for wine lovers',
      perBottle: 60
    }
  ]

  useEffect(() => {
    if (selectedBottles) {
      const initialShipment = shipmentService.getCurrentShipment(selectedBottles)
      setShipment(initialShipment)
    }
  }, [selectedBottles])

  const scrollToStep = (stepNumber: number) => {
    const refs = [step1Ref, step2Ref, step3Ref, step4Ref]
    const targetRef = refs[stepNumber - 1]

    if (targetRef?.current) {
      const yOffset = -140 // Account for both sticky header (80px) and submenu (60px)
      const y = targetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleBottleSelection = (bottles: number) => {
    setSelectedBottles(bottles)
    setSteps(prev => prev.map(s =>
      s.id === 1 ? { ...s, completed: true } : s
    ))
    setEditingStep(null)
    setCurrentStep(2)
    setTimeout(() => scrollToStep(2), 100)
  }

  const handleWinesCompleted = () => {
    setSteps(prev => prev.map(s =>
      s.id === 2 ? { ...s, completed: true } : s
    ))
    setEditingStep(null)
    setCurrentStep(3)
    setTimeout(() => scrollToStep(3), 100)
  }

  const handlePreferencesCompleted = () => {
    if (shipment && preferences) {
      const updatedShipment = shipmentService.applyPreferences(shipment, preferences)
      setShipment(updatedShipment)
    }
    setSteps(prev => prev.map(s =>
      s.id === 3 ? { ...s, completed: true } : s
    ))
    setEditingStep(null)
    setCurrentStep(4)
    setTimeout(() => scrollToStep(4), 100)
  }

  const handleBackToStep = (stepNumber: number) => {
    setCurrentStep(stepNumber)
    scrollToStep(stepNumber)
  }

  const handleEditStep = (stepNumber: number) => {
    // Show confirmation if later steps would be reset
    const hasLaterCompletedSteps = steps.some(s => s.id > stepNumber && s.completed)
    if (hasLaterCompletedSteps) {
      const confirmEdit = window.confirm(
        'Editing this step will reset all steps after it. Continue?'
      )
      if (!confirmEdit) return
    }

    // Reset all steps after the one being edited
    setSteps(prev => prev.map(s =>
      s.id > stepNumber ? { ...s, completed: false } : s
    ))

    // Reset data for steps that are being cleared
    if (stepNumber === 1) {
      // Editing bottle selection resets everything
      setSelectedBottles(null)
      setShipment(null)
      setPreferences({})
    } else if (stepNumber === 2) {
      // Editing wines resets preferences
      setPreferences({})
    }

    setEditingStep(stepNumber)
    setCurrentStep(stepNumber)
    scrollToStep(stepNumber)
  }

  const handleSwapWine = (wineId: string) => {
    // In production, open wine selection modal
    console.log('Swap wine:', wineId)
  }

  const handleCheckout = () => {
    console.log('Proceed to checkout')
  }

  return (
    <>
      {/* Compact Sticky Progress Bar - Sticks below header */}
      <div className="sticky top-[80px] z-30 bg-wine-600 text-white shadow-lg">
        <div className="max-w-[1400px] mx-auto px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Step Indicators */}
            <div className="flex items-center gap-6">
              <p className="font-cinzel text-sm hidden lg:inline">Wine Club</p>
              <div className="flex items-center gap-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => step.completed && handleBackToStep(step.id)}
                    disabled={!step.completed && step.id !== currentStep}
                    className={`
                      flex items-center gap-2 px-3 py-1 rounded-full text-xs font-poppins transition-all
                      ${step.id === currentStep
                        ? 'bg-white text-wine-600'
                        : step.completed
                        ? 'bg-wine-700 text-white cursor-pointer hover:bg-wine-500'
                        : 'bg-wine-700/50 text-wine-300 cursor-default'
                      }
                    `}
                  >
                    <span className={`
                      w-5 h-5 rounded-full flex items-center justify-center text-[10px]
                      ${step.id === currentStep
                        ? 'bg-wine-600 text-white'
                        : step.completed
                        ? 'bg-wine-300 text-wine-700'
                        : 'bg-wine-800 text-wine-400'
                      }
                    `}>
                      {step.completed ? '✓' : step.id}
                    </span>
                    <span className="hidden sm:inline">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Price & Join CTA */}
            <div className="flex items-center gap-6">
              {selectedBottles && (
                <div className="text-right hidden md:block">
                  <p className="font-poppins text-[10px] opacity-80">Selected:</p>
                  <p className="font-bodoni text-lg">
                    ${bottleOptions.find(o => o.bottles === selectedBottles)?.price}/qtr
                  </p>
                </div>
              )}
              <a
                href="#join-now"
                className="bg-white text-wine-600 px-4 py-2 font-poppins text-xs tracking-wider uppercase hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToStep(1)
                }}
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Step 1: Choose Size */}
          <div ref={step1Ref} className="mb-24">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4">
                <h2 className="font-cinzel text-3xl text-gray-900">
                  Choose Your Wine Club Size
                </h2>
                {steps[0].completed && currentStep !== 1 && (
                  <button
                    onClick={() => handleEditStep(1)}
                    className="text-wine-600 font-poppins text-sm hover:text-wine-700 flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </button>
                )}
              </div>
              <p className="font-poppins text-base text-gray-600 mt-2">
                How many bottles would you like in each quarterly shipment?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {bottleOptions.map((option) => (
                <button
                  key={option.bottles}
                  onClick={() => handleBottleSelection(option.bottles)}
                  disabled={selectedBottles !== null && currentStep !== 1}
                  className={`
                    relative bg-white p-8 transition-all duration-300 group
                    ${selectedBottles === null
                      ? 'hover:scale-105 hover:shadow-2xl cursor-pointer'
                      : selectedBottles === option.bottles
                      ? 'border-3 border-wine-600 shadow-2xl'
                      : 'opacity-50'
                    }
                  `}
                >
                  {option.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wine-600 text-white px-4 py-1 text-xs font-poppins uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <div className="text-center">
                    <p className="font-bodoni text-5xl text-gray-900 mb-2">
                      {option.bottles}
                    </p>
                    <h3 className="font-cinzel text-xl text-gray-900 mb-1">
                      {option.label}
                    </h3>
                    <p className="font-poppins text-xs text-gray-600 mb-4">
                      {option.description}
                    </p>

                    <div className="border-t pt-4">
                      <p className="font-bodoni text-3xl text-wine-600">
                        ${option.price}
                      </p>
                      <p className="font-poppins text-xs text-gray-500 mt-1">
                        per quarter
                      </p>
                    </div>

                    {selectedBottles === option.bottles && (
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-2 text-wine-600 font-poppins text-sm">
                          <span>✓</span> Selected
                        </span>
                      </div>
                    )}

                    {selectedBottles === null && (
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-wine-600 font-poppins text-sm">
                          Select →
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Your Wines */}
          {selectedBottles && (
            <div ref={step2Ref} className={`mb-24 transition-all duration-500 ${currentStep < 2 ? 'opacity-30 pointer-events-none' : ''}`}>
              <div className="bg-white p-12 rounded-lg">
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-4">
                    <h2 className="font-cinzel text-3xl text-gray-900">
                      Your Wine Selection
                    </h2>
                    {steps[1].completed && currentStep !== 2 && (
                      <button
                        onClick={() => handleEditStep(2)}
                        className="text-wine-600 font-poppins text-sm hover:text-wine-700 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                    )}
                  </div>
                  <p className="font-poppins text-base text-gray-600 mt-2">
                    Spring 2024 Collection - {selectedBottles} Bottles
                  </p>
                </div>

                {shipment && (
                  <div className="max-w-4xl mx-auto">
                    <ShipmentSelector
                      wines={shipment.wines}
                      onSwapWine={handleSwapWine}
                      editable={currentStep === 2}
                    />

                    {currentStep === 2 && (
                      <div className="flex justify-between mt-8">
                        <button
                          onClick={() => handleBackToStep(1)}
                          className="text-gray-600 font-poppins text-sm hover:text-gray-900"
                        >
                          ← Back
                        </button>
                        <button
                          onClick={handleWinesCompleted}
                          className="bg-wine-600 text-white px-8 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
                        >
                          Continue to Preferences
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Preferences */}
          {currentStep >= 2 && shipment && (
            <div ref={step3Ref} className={`mb-24 transition-all duration-500 ${currentStep < 3 ? 'opacity-30 pointer-events-none' : ''}`}>
              <div className="bg-white p-12 rounded-lg">
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-4">
                    <h2 className="font-cinzel text-3xl text-gray-900">
                      Set Your Preferences
                    </h2>
                    {steps[2].completed && currentStep !== 3 && (
                      <button
                        onClick={() => handleEditStep(3)}
                        className="text-wine-600 font-poppins text-sm hover:text-wine-700 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                    )}
                  </div>
                  <p className="font-poppins text-base text-gray-600 mt-2">
                    Customize future shipments to your taste
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="space-y-4">
                    <h3 className="font-cinzel text-lg text-gray-900 mb-4">
                      Wine Preferences (Optional)
                    </h3>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={preferences.redOnly}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          redOnly: e.target.checked,
                          whiteOnly: false
                        })}
                        className="w-5 h-5 text-wine-600"
                      />
                      <span className="font-poppins text-sm text-gray-700">Red wines only</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={preferences.whiteOnly}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          whiteOnly: e.target.checked,
                          redOnly: false
                        })}
                        className="w-5 h-5 text-wine-600"
                      />
                      <span className="font-poppins text-sm text-gray-700">White wines only</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={preferences.noChardonnay}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          noChardonnay: e.target.checked
                        })}
                        className="w-5 h-5 text-wine-600"
                      />
                      <span className="font-poppins text-sm text-gray-700">No Chardonnay</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={preferences.noMerlot}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          noMerlot: e.target.checked
                        })}
                        className="w-5 h-5 text-wine-600"
                      />
                      <span className="font-poppins text-sm text-gray-700">No Merlot</span>
                    </label>

                    <div className="mt-6">
                      <label className="block font-poppins text-sm text-gray-700 mb-2">
                        Max price per bottle
                      </label>
                      <select
                        value={preferences.maxPricePerBottle || ''}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          maxPricePerBottle: e.target.value ? Number(e.target.value) : undefined
                        })}
                        className="w-full border border-gray-300 px-4 py-2 font-poppins text-sm"
                      >
                        <option value="">No limit</option>
                        <option value="50">Under $50</option>
                        <option value="75">Under $75</option>
                        <option value="100">Under $100</option>
                      </select>
                    </div>
                  </div>

                  {currentStep === 3 && (
                    <div className="flex justify-between mt-8">
                      <button
                        onClick={() => handleBackToStep(2)}
                        className="text-gray-600 font-poppins text-sm hover:text-gray-900"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={handlePreferencesCompleted}
                        className="bg-wine-600 text-white px-8 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
                      >
                        Continue to Review
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Checkout */}
          {currentStep >= 3 && shipment && (
            <div ref={step4Ref} className={`mb-24 transition-all duration-500 ${currentStep < 4 ? 'opacity-30 pointer-events-none' : ''}`}>
              <div className="bg-white p-12 rounded-lg">
                <div className="text-center mb-10">
                  <h2 className="font-cinzel text-3xl text-gray-900 mb-2">
                    Review & Join
                  </h2>
                  <p className="font-poppins text-base text-gray-600">
                    Complete your wine club membership
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <OrderSummary
                    shipment={shipment}
                    onCheckout={handleCheckout}
                    isNewMember={true}
                  />

                  {currentStep === 4 && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={() => handleBackToStep(3)}
                        className="text-gray-600 font-poppins text-sm hover:text-gray-900"
                      >
                        ← Back to Preferences
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}