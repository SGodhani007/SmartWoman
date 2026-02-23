import React from "react";

export default function Checkout() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* BILLING DETAILS */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

          <div className="space-y-4">
            <input className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none" placeholder="First Name *" />
            <input className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Company Name" />
            <input className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Street Address *" />
            <input className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Apartment, floor, etc. (optional)" />
            <input className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Town/City *" />
            <input className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Phone Number *" />
            <input className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Email Address *" />

            <label className="flex items-center gap-2 text-sm mt-2">
              <input type="checkbox" className="accent-red-500" defaultChecked />
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-sm p-8 h-fit">
          <h2 className="text-xl font-semibold mb-6">Your Order</h2>

          {/* ITEMS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.imgur.com/1GrakTl.jpg"
                  alt="LCD Monitor"
                  className="w-14 h-14 rounded-md object-cover"
                />
                <span className="text-sm font-medium">LCD Monitor</span>
              </div>
              <span className="font-medium">$650</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.imgur.com/b9zDbyb.jpg"
                  alt="Gamepad"
                  className="w-14 h-14 rounded-md object-cover"
                />
                <span className="text-sm font-medium">H1 Gamepad</span>
              </div>
              <span className="font-medium">$1100</span>
            </div>
          </div>

          {/* TOTALS */}
          <div className="border-t mt-6 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between font-semibold text-base border-t pt-3 mt-3">
              <span>Total</span>
              <span>$1750</span>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="mt-6 space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" className="accent-red-500" />
              Bank
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" className="accent-red-500" defaultChecked />
              Cash on delivery
            </label>
          </div>

          {/* COUPON */}
          <div className="flex gap-2 mt-6">
            <input
              placeholder="Coupon Code"
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-400 outline-none"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 rounded-lg transition">
              Apply
            </button>
          </div>

          {/* PLACE ORDER */}
          <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium text-base transition">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}