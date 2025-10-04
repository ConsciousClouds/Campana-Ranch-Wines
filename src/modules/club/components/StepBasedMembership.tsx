'use client'

import { useState } from 'react'
import Link from 'next/link'
import ShipmentBuilder from './shipment/ShipmentBuilder'
import { shipmentService } from '../services/shipmentService'

interface Step {
  number: number
  title: string
  subtitle?: string
}

const steps: Step[] = [
  { number: 1, title: 'Choose Size', subtitle: 'Select your shipment size' },
  { number: 2, title: 'Customize', subtitle: 'Personalize your selection' },
  { number: 3, title: 'Join', subtitle: 'Complete membership' }
]

export default function StepBasedMembership() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedBottles, setSelectedBottles] = useState<number | null>(null)
  const [isCustomized, setIsCustomized] = useState(false)

  const bottleOptions = [
    {
      bottles: 3,
      label: 'Starter',
      price: 180,
      description: 'Perfect for exploring',
      perBottle: 60
    },
    {
      bottles: 6,
      label: 'Enthusiast',
      price: 360,
      popular: true,
      description: 'Most popular choice',
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

  const handleBottleSelection = (bottles: number) => {
    setSelectedBottles(bottles)
    setCurrentStep(2)
  }

  const handleCustomizationComplete = () => {
    setIsCustomized(true)
    setCurrentStep(3)
  }

  const handleStepClick = (stepNumber: number) => {
    // Only allow going back to completed steps
    if (stepNumber < currentStep) {
      setCurrentStep(stepNumber)
    }
  }

  return (
    <section className="py-24 bg-cream">
      {/* Member Benefits Bar - Always Visible */}
      <div className="bg-wine-600 py-4 mb-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-poppins text-sm">20% Off All Wines</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-poppins text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-poppins text-sm">Exclusive Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-poppins text-sm">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        {/* Step Progress Bar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300">
              <div
                className="h-full bg-wine-600 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => handleStepClick(step.number)}
                className="relative z-10 text-center cursor-pointer"
                disabled={step.number > currentStep}
              >
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    font-bodoni text-lg transition-all duration-300
                    ${step.number === currentStep
                      ? 'bg-wine-600 text-white scale-110 shadow-lg'
                      : step.number < currentStep
                      ? 'bg-wine-600 text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                    }
                  `}
                >
                  {step.number < currentStep ? '✓' : step.number}
                </div>
                <div className="mt-2">
                  <p className={`
                    font-cinzel text-sm
                    ${step.number <= currentStep ? 'text-gray-900' : 'text-gray-400'}
                  `}>
                    {step.title}
                  </p>
                  {step.subtitle && (
                    <p className={`
                      font-poppins text-xs mt-1
                      ${step.number <= currentStep ? 'text-gray-600' : 'text-gray-400'}
                    `}>
                      {step.subtitle}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Choose Membership Size */}
        {currentStep >= 1 && (
          <div className={`transition-all duration-500 ${currentStep === 1 ? '' : 'opacity-50'}`}>
            <div className="text-center mb-10">
              <h2 className="font-cinzel text-3xl text-gray-900 mb-2">
                Choose Your Membership
              </h2>
              <p className="font-poppins text-base text-gray-600">
                Select how many bottles you'd like in each quarterly shipment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {bottleOptions.map((option) => (
                <button
                  key={option.bottles}
                  onClick={() => handleBottleSelection(option.bottles)}
                  disabled={currentStep !== 1}
                  className={`
                    relative bg-white p-8 transition-all duration-300
                    ${currentStep === 1 ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' : 'cursor-default'}
                    ${selectedBottles === option.bottles
                      ? 'border-3 border-wine-600 shadow-2xl scale-105'
                      : 'border border-gray-200'
                    }
                  `}
                >
                  {option.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wine-600 text-white px-4 py-1 text-xs font-poppins uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <div className="text-center">
                    <p className="font-bodoni text-6xl text-gray-900 mb-2">
                      {option.bottles}
                    </p>
                    <h3 className="font-cinzel text-2xl text-gray-900 mb-1">
                      {option.label}
                    </h3>
                    <p className="font-poppins text-xs text-gray-600 mb-6">
                      {option.description}
                    </p>

                    <div className="border-t pt-6">
                      <p className="font-poppins text-sm text-gray-600 mb-2">
                        Per shipment
                      </p>
                      <p className="font-bodoni text-4xl text-wine-600">
                        ${option.price}
                      </p>
                      <p className="font-poppins text-xs text-gray-500 mt-2">
                        ${option.perBottle} per bottle • Quarterly billing
                      </p>
                    </div>

                    {selectedBottles === option.bottles && currentStep > 1 && (
                      <div className="mt-6">
                        <span className="inline-flex items-center gap-2 text-wine-600 font-poppins text-sm">
                          <span>✓</span> Selected
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Customize Your Wines */}
        {currentStep >= 2 && selectedBottles && (
          <div className={`
            transition-all duration-500
            ${currentStep === 1 ? 'hidden' : ''}
            ${currentStep === 2 ? '' : 'opacity-50'}
          `}>
            <div className="bg-white p-12 mb-16">
              <div className="text-center mb-10">
                <h2 className="font-cinzel text-3xl text-gray-900 mb-2">
                  Customize Your First Shipment
                </h2>
                <p className="font-poppins text-base text-gray-600">
                  Preview and personalize your {selectedBottles}-bottle selection
                </p>
              </div>

              <ShipmentBuilder
                bottleCount={selectedBottles}
                isNewMember={true}
              />

              {currentStep === 2 && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleCustomizationComplete}
                    className="bg-wine-600 text-white px-12 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
                  >
                    Continue to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Review & Join */}
        {currentStep === 3 && selectedBottles && (
          <div className="bg-white p-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-cinzel text-3xl text-gray-900 mb-2">
                  Complete Your Membership
                </h2>
                <p className="font-poppins text-base text-gray-600">
                  You're one step away from joining the Campana Ranch family
                </p>
              </div>

              {/* Summary */}
              <div className="bg-cream p-8 mb-8">
                <h3 className="font-cinzel text-xl text-gray-900 mb-6">
                  Membership Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between font-poppins text-sm">
                    <span className="text-gray-600">Membership Type</span>
                    <span className="text-gray-900">
                      {bottleOptions.find(o => o.bottles === selectedBottles)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between font-poppins text-sm">
                    <span className="text-gray-600">Bottles per shipment</span>
                    <span className="text-gray-900">{selectedBottles}</span>
                  </div>
                  <div className="flex justify-between font-poppins text-sm">
                    <span className="text-gray-600">Shipment frequency</span>
                    <span className="text-gray-900">Quarterly (4x per year)</span>
                  </div>
                  <div className="flex justify-between font-poppins text-sm">
                    <span className="text-gray-600">Next shipment</span>
                    <span className="text-gray-900">Spring 2024</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-poppins text-base text-gray-900">
                        Total per shipment
                      </span>
                      <span className="font-bodoni text-3xl text-gray-900">
                        ${bottleOptions.find(o => o.bottles === selectedBottles)?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href={`/club/join?bottles=${selectedBottles}`}
                className="block w-full text-center bg-wine-600 text-white px-12 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors mb-6"
              >
                Complete Membership
              </Link>

              <p className="font-poppins text-xs text-gray-500 text-center">
                By joining, you agree to receive quarterly shipments. Cancel anytime after your first shipment.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}