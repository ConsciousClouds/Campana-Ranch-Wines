'use client'

export default function VisitInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Essential Information */}
          <div>
            <h3 className="font-cinzel font-light text-3xl text-gray-900 mb-8">
              Essential Information
            </h3>

            <div className="space-y-8">
              {/* Hours */}
              <div>
                <h4 className="font-poppins text-xs tracking-wider text-gray-600 uppercase mb-4">
                  Tasting Room Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-poppins text-sm text-gray-600">Thursday - Monday</span>
                    <span className="font-poppins text-sm text-gray-800">11:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins text-sm text-gray-600">Tuesday - Wednesday</span>
                    <span className="font-poppins text-sm text-gray-800">By Appointment Only</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="font-poppins text-xs text-gray-500">
                      Last tasting begins one hour before closing
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h4 className="font-poppins text-xs tracking-wider text-gray-600 uppercase mb-4">
                  Location
                </h4>
                <p className="font-poppins text-sm text-gray-700 leading-relaxed">
                  123 Vineyard Lane<br />
                  Sonoma, CA 95476<br />
                  <a href="tel:7075550123" className="text-wine-600 hover:text-wine-700 transition-colors">
                    (707) 555-0123
                  </a>
                </p>
                <div className="mt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-wine-600 hover:text-wine-700 font-poppins text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Policies */}
              <div>
                <h4 className="font-poppins text-xs tracking-wider text-gray-600 uppercase mb-4">
                  Policies
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-poppins text-sm text-gray-700">• Reservations recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-poppins text-sm text-gray-700">• 21+ only, valid ID required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-poppins text-sm text-gray-700">• Well-behaved children welcome with advance notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-poppins text-sm text-gray-700">• Service animals only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-poppins text-sm text-gray-700">• Outside food permitted on patio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Plan Your Visit */}
          <div>
            <h3 className="font-cinzel font-light text-3xl text-gray-900 mb-8">
              Plan Your Visit
            </h3>

            <div className="space-y-8">
              {/* What to Expect */}
              <div>
                <h4 className="font-poppins text-xs tracking-wider text-gray-600 uppercase mb-4">
                  What to Expect
                </h4>
                <p className="font-poppins text-sm text-gray-700 leading-relaxed">
                  Your visit begins with a warm welcome from our knowledgeable staff.
                  Enjoy seated tastings in our elegant tasting room or on the scenic
                  patio overlooking the vineyards. Our team will guide you through
                  each wine, sharing the story of our estate and winemaking philosophy.
                </p>
              </div>

              {/* Nearby Attractions */}
              <div>
                <h4 className="font-poppins text-xs tracking-wider text-gray-600 uppercase mb-4">
                  Nearby Attractions
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-wine-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-poppins text-sm text-gray-700 font-medium">Sonoma Plaza</span>
                      <span className="font-poppins text-xs text-gray-500 ml-2">(10 min)</span>
                      <p className="font-poppins text-xs text-gray-600 mt-1">
                        Historic town square with shops and restaurants
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-wine-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-poppins text-sm text-gray-700 font-medium">Jack London State Park</span>
                      <span className="font-poppins text-xs text-gray-500 ml-2">(15 min)</span>
                      <p className="font-poppins text-xs text-gray-600 mt-1">
                        Hiking trails and historic sites
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-wine-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-poppins text-sm text-gray-700 font-medium">The Girl & The Fig</span>
                      <span className="font-poppins text-xs text-gray-500 ml-2">(12 min)</span>
                      <p className="font-poppins text-xs text-gray-600 mt-1">
                        Acclaimed French-inspired restaurant
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Transportation */}
              <div>
                <h4 className="font-poppins text-xs tracking-wider text-gray-600 uppercase mb-4">
                  Transportation Options
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-wine-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <p className="font-poppins text-sm text-gray-700">
                        <strong>From San Francisco:</strong> 1 hour via US-101 N
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-wine-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <p className="font-poppins text-sm text-gray-700">
                        <strong>From Napa:</strong> 30 minutes via CA-12 W
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-wine-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <p className="font-poppins text-sm text-gray-700">
                        <strong>Wine Tours:</strong> Ask about our preferred tour partners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}