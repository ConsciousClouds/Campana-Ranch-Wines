'use client'

export default function Philosophy() {
  const values = [
    {
      title: 'Terroir-Driven',
      description: 'Every bottle reflects the unique character of our Sonoma Valley vineyards, where volcanic soils and coastal influences create wines of exceptional complexity.'
    },
    {
      title: 'Sustainable Practices',
      description: 'We farm organically, use renewable energy, and maintain biodiversity throughout our estate to ensure our land thrives for future generations.'
    },
    {
      title: 'Minimal Intervention',
      description: 'We believe great wines are made in the vineyard. Our cellar practices emphasize gentle handling and natural fermentation to preserve the integrity of the fruit.'
    },
    {
      title: 'Family Heritage',
      description: 'Three generations of passion and expertise guide every decision, from pruning to bottling, ensuring consistency and excellence in every vintage.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-[1px] bg-gray-300" />
            <p className="font-poppins text-xs tracking-[0.3em] text-gray-500 uppercase">Philosophy</p>
            <div className="w-20 h-[1px] bg-gray-300" />
          </div>

          <h2 className="font-cinzel font-light text-4xl md:text-5xl text-gray-900 mb-6">
            Our Approach
          </h2>

          <p className="font-poppins font-light text-gray-600 max-w-3xl mx-auto">
            We believe that exceptional wine is born from a harmonious relationship between
            tradition and innovation, always with profound respect for the land.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-4">
                <div className="w-8 h-[1px] bg-wine-600 mt-3 group-hover:w-12 transition-all duration-500" />
                <div className="flex-1">
                  <h3 className="font-cinzel text-2xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Winemaking Process */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="font-cinzel font-light text-3xl text-gray-900 mb-4">
              The Winemaking Process
            </h3>
            <p className="font-poppins text-sm text-gray-600 max-w-2xl mx-auto">
              From vine to bottle, every step is carefully orchestrated to capture
              the essence of our terroir.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-wine-600 rounded-full">
                <span className="font-bodoni text-2xl text-wine-600">1</span>
              </div>
              <h4 className="font-poppins text-xs tracking-wider text-gray-800 uppercase">Harvest</h4>
              <p className="font-poppins text-xs text-gray-600">
                Hand-picked at optimal ripeness in the cool morning hours
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-wine-600 rounded-full">
                <span className="font-bodoni text-2xl text-wine-600">2</span>
              </div>
              <h4 className="font-poppins text-xs tracking-wider text-gray-800 uppercase">Fermentation</h4>
              <p className="font-poppins text-xs text-gray-600">
                Native yeasts and temperature-controlled tanks preserve fruit character
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-wine-600 rounded-full">
                <span className="font-bodoni text-2xl text-wine-600">3</span>
              </div>
              <h4 className="font-poppins text-xs tracking-wider text-gray-800 uppercase">Aging</h4>
              <p className="font-poppins text-xs text-gray-600">
                French oak barrels add complexity while maintaining balance
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-wine-600 rounded-full">
                <span className="font-bodoni text-2xl text-wine-600">4</span>
              </div>
              <h4 className="font-poppins text-xs tracking-wider text-gray-800 uppercase">Bottling</h4>
              <p className="font-poppins text-xs text-gray-600">
                Estate-bottled with minimal filtration to preserve character
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}