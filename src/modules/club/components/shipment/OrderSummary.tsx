'use client'

import Link from 'next/link'
import { Shipment } from '../../types/shipment'

interface OrderSummaryProps {
  shipment: Shipment
  onCheckout: () => void
  isNewMember?: boolean
}

export default function OrderSummary({
  shipment,
  onCheckout,
  isNewMember = true
}: OrderSummaryProps) {
  const formattedSeason = `${shipment.season} ${shipment.year}`

  return (
    <div className="bg-cream p-8">
      <h4 className="font-cinzel text-lg text-gray-900 mb-6">
        Order Summary
      </h4>

      <div className="space-y-3 mb-8">
        <div className="flex justify-between font-poppins text-sm">
          <span className="text-gray-600">Shipment</span>
          <span className="text-gray-900">{formattedSeason}</span>
        </div>

        <div className="flex justify-between font-poppins text-sm">
          <span className="text-gray-600">{shipment.totalBottles} bottles</span>
          <span className="text-gray-900">${shipment.subtotal.toFixed(2)}</span>
        </div>

        {shipment.discount > 0 && (
          <div className="flex justify-between font-poppins text-sm">
            <span className="text-gray-600">Member discount (20%)</span>
            <span className="text-wine-600">-${shipment.discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between font-poppins text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-gray-900">
            {shipment.shipping === 0 ? 'FREE' : `$${shipment.shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between items-baseline">
            <span className="font-poppins text-sm text-gray-900">
              {isNewMember ? 'Quarterly Total' : 'Total'}
            </span>
            <span className="font-bodoni text-3xl text-gray-900">
              ${shipment.total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {isNewMember ? (
        <Link
          href={`/club/join?bottles=${shipment.totalBottles}&shipment=${shipment.id}`}
          className="block w-full text-center bg-wine-600 text-white px-8 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors mb-4"
        >
          Join Now
        </Link>
      ) : (
        <button
          onClick={onCheckout}
          className="w-full text-center bg-wine-600 text-white px-8 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors mb-4"
        >
          Confirm Shipment
        </button>
      )}

      <div className="space-y-2 text-center">
        <p className="font-poppins text-xs text-gray-500">
          {isNewMember ? 'Billed quarterly • Cancel anytime' : 'Charged to your card on file'}
        </p>

        {isNewMember && (
          <p className="font-poppins text-xs text-gray-500">
            ${(shipment.total * 4).toFixed(2)} annual value
          </p>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h5 className="font-cinzel text-sm text-gray-900 mb-3">
          Member Benefits
        </h5>
        <ul className="space-y-2 font-poppins text-xs text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-wine-600">✓</span>
            <span>20% discount on all wines</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-wine-600">✓</span>
            <span>Free shipping on club orders</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-wine-600">✓</span>
            <span>Complimentary tastings</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-wine-600">✓</span>
            <span>Exclusive events & first access</span>
          </li>
        </ul>
      </div>
    </div>
  )
}