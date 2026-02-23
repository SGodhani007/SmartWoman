import React, { useState } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialCart = [
    {
        id: 1,
        name: "Red Printed T-Shirt",
        price: 50,
        image: "https://i.imgur.com/1GrakTl.jpg",
        qty: 1,
    },
    {
        id: 2,
        name: "HRX Sports Shoes",
        price: 75,
        image: "https://i.imgur.com/b9zDbyb.jpg",
        qty: 1,
    },
    {
        id: 3,
        name: "HRX Gray Trackpants",
        price: 75,
        image: "https://i.imgur.com/6RMhx.gif",
        qty: 1,
    },
];

export default function CartPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState(initialCart);

    const incQty = (id) => {
        setCart(cart.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
    };

    const decQty = (id) => {
        setCart(cart.map(i => i.id === id ? { ...i, qty: i.qty > 1 ? i.qty - 1 : 1 } : i));
    };

    const removeItem = (id) => {
        setCart(cart.filter(i => i.id !== id));
    };

    const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* CART ITEMS */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-semibold mb-6">My Shopping Bag ({cart.length})</h2>

                    {cart.map(item => (
                        <div key={item.id} className="flex items-center gap-5 py-5 border-b">

                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-lg"
                            />

                            {/* INFO */}
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-500">Price: ${item.price}</p>

                                {/* QTY STEPPER */}
                                <div className="flex items-center gap-3 mt-3">
                                    <button
                                        onClick={() => decQty(item.id)}
                                        className="w-8 h-8 rounded border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Minus size={16} />
                                    </button>

                                    <span className="w-8 text-center font-medium">{item.qty}</span>

                                    <button
                                        onClick={() => incQty(item.id)}
                                        className="w-8 h-8 rounded border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* SUBTOTAL */}
                            <div className="text-right">
                                <p className="font-semibold text-gray-900">
                                    ${(item.price * item.qty).toFixed(2)}
                                </p>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 text-sm flex items-center gap-1 mt-2 hover:underline"
                                >
                                    <Trash2 size={14} /> Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SUMMARY */}
                <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-6">
                    <h3 className="text-xl font-semibold mb-4">Summary</h3>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>

                        <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>


                    <button
                        onClick={() => navigate("/checkout")}
                        className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition"
                    >
                        Proceed to Checkout
                    </button>

                </div>
            </div>
        </div>
    );
}
